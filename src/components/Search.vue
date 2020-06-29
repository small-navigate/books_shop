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
            <!-- <input type="text" />
            <div class="btn">搜索</div>-->
            <input type="text" placeholder="🔍输入您想要的书籍" />
            <input type="submit" value="搜索" />
          </div>
        </el-col>
        <el-col class="search_code" :span="6">
          <div class="code">
            <img src="../assets/code.png" alt />
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div class="bgImg">
      <img src="http://img60.ddimg.cn/upload_img/00822/cxtc/1200x65-1592551412.jpg" />
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {}
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