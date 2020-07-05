<template>
  <div class="el_main">
    <div class="search">
      <el-row>
        <el-col class="search_logo" :span="5">
          <div class="login">
            <img src="../assets/login.png" alt />
          </div>
        </el-col>
        <el-col class="search_input" :span="13">
          <div class="input">
            <input
              v-model="searchBook"
              type="text"
              placeholder="🔍输入您想要的书籍"
              @input="changeName"
              @blur="inputBlur"
            />
            <input type="submit" value="搜索" />
          </div>
        </el-col>
        <el-col class="search_code" :span="6">
          <div class="code">
            <img src="../assets/code.png" alt />
          </div>
        </el-col>
      </el-row>
      <div class="info_search" v-show="isShow">
        <div class="text" v-for="item in list" :key="item.id" @click="toDetailList(item.id)">
          <span>{{item.bookname}}</span>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="bgImg">
      <img src="http://img60.ddimg.cn/upload_img/00822/cxtc/1200x65-1592551412.jpg" />
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchBook: '',
      isShow: false,
      timer: null,
      list: []
    }
  },
  methods: {
    changeName() {
      this.isShow = true
      if (this.searchBook.length == 0) {
        this.list = []
        this.isShow = false
      }
      clearInterval(this.timer)
      this.timer = setTimeout(async () => {
        const { data: res } = await this.$http.get('/search', {
          params: { query: this.searchBook }
        })
        this.list = res.message.data
        console.log(this.list)
      }, 500)
    },
    inputBlur() {
      setTimeout(() => {
        this.isShow = false
      }, 500)
    },
    toDetailList(id) {
      console.log(id)
      this.$router.push({
        path: '/books',
        query: {
          bookId: id
        }
      })
      this.$emit('getIdSeach', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.el_main {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  .bgImg {
    width: 100%;
    height: 70px;
    padding-bottom: 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search {
    width: 100%;
    height: 150px;
    background-color: #fff;
    position: relative;
    .info_search {
      width: 500px;
      height: 300px;
      background-color: #f5f5f5;
      opacity: 0.9;
      position: absolute;
      top: 100px;
      left: 324px;
      z-index: 10;
      overflow: hidden;
      .text {
        font-size: 16px;
        padding-left: 15px;
        height: 30px;
        cursor: pointer;
        span {
          line-height: 30px;
        }
      }
      .text:hover {
        background-color: #3b3b3b;
        color: #fff;
      }
    }
    .search_logo {
      height: 150px;

      .login {
        margin: 0 auto;
        width: 120px;
        height: 120px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .search_input {
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      .input {
        width: 500px;
        height: 50px;
        position: absolute;

        input {
          position: relative;
          display: inline-block;
          font-size: 18px;
          box-sizing: border-box;
        }

        input[type='text'] {
          background-color: #fff;
          width: 400px;
          height: 50px;
          outline: none;
          padding: 0 25px;
          border-radius: 25px 0 0 25px;
          border: 2px solid #d81e06;
        }

        input[type='submit'] {
          position: relative;
          top: 2px;
          border-radius: 0 25px 25px 0;
          width: 100px;
          height: 50px;
          border: none;
          outline: none;
          cursor: pointer;
          background-color: #d81e06;
          color: #fff;
        }
      }
    }

    .search_code {
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      .code {
        width: 80px;
        height: 80px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>