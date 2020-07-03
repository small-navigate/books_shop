<template>
  <background>
    <header>
      <div class="header_content">
        <div class="header_home" @click="toHome">主页</div>
        <div class="header_center" @click="toCenter">个人中心</div>
      </div>
    </header>

    <div class="bgImg">
      <img src="http://img60.ddimg.cn/upload_img/00822/cxtc/1200x65-1592551412.jpg" />
    </div>
    <section>
      <div class="content" v-for="(item,index) in bookItem" :key="item.id">
        <div class="book_item">
          <div class="item_checkout">
            <el-checkbox v-model="bookItem[index].status" @change="changeId"></el-checkbox>
          </div>
          <div class="item_info">
            <div class="item_img">
              <div class="img">
                <img :src="item.bookimg" />
              </div>
            </div>
            <div class="info">
              <div class="info_item">
                <div class="item_name">
                  <span>{{item.bookname}}</span>
                </div>
                <div class="item_author">
                  作者:
                  <span>{{item.author}}</span>
                </div>
                <div class="item_pubcompany">
                  出版社:
                  <span>{{item.pubcompany}}</span>
                </div>
                <div class="info_price">￥{{item.newPrice}}</div>
              </div>
              <div class="info_num">
                <div class="info_input">
                  <el-input-number
                    v-model="bookItem[index].num"
                    @change="value=>handleChange(value,index)"
                    :min="1"
                    label="描述文字"
                  ></el-input-number>
                </div>
                <div class="info_del" @click="delBook(index)">从购物车删除</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="book_puy">
        <div class="puy">
          <div class="select">
            <div class="puy_select">
              <el-checkbox @change="changeAll" v-model="checkedAll"></el-checkbox>
            </div>
            <div class="puy_text">全选</div>
          </div>
          <div class="right">
            <div class="total">合计:￥{{allPrice}}</div>
            <div class="settlement">结 算</div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="text">
          <span>猜你喜欢</span>
        </div>
        <imgList :bookList="bookList" style="background: #f5f5f5; padding-bottom: 30px"></imgList>
      </div>
    </section>
  </background>
</template>
<script>
import background from '../components/Backgroud'
import imgList from '../components/ImgList'
export default {
  components: {
    background,
    imgList
  },
  data() {
    return {
      checkedAll: false,
      bookItem: [],
      info: [],
      allPrice: 0,
      bookList: []
    }
  },
  created() {
    this.initCheck()
    this.getList()
  },
  methods: {
    // 复选框点击事件
    changeId(checked) {
      if (checked === false) {
        this.checkedAll = false
      } else {
        this.bookItem.some(v => {
          if (v.status === false) {
            this.checkedAll = false
            return true
          }
          this.checkedAll = true
        })
      }
      this.allPrice = 0
      this.bookItem.forEach(v => {
        if (v.status) {
          this.allPrice += v.num * v.newPrice
        }
      })
    },
    // 计数框点击事件
    async handleChange(value, index) {
      this.allPrice = 0
      this.bookItem.forEach(v => {
        if (v.status) {
          this.allPrice += v.num * v.newPrice
        }
      })
      const id = this.$store.state.USERINFO.info[index].id
      this.$store.dispatch('putCart', {
        value,
        id,
        ajax: this.$http,
        index
      })
    },
    // 全选框点击事件
    changeAll(val) {
      for (let i = 0; i < this.bookItem.length; i++) {
        this.bookItem[i].status = val
      }
      if (val === false) {
        this.allPrice = 0
      } else {
        this.allPrice = 0
        this.bookItem.forEach(v => {
          this.allPrice += v.newPrice * v.num
        })
      }
    },
    // 初始化各种框数据
    async initCheck() {
      if (this.$store.state.USERINFO) {
        console.log('1', new Date())
        console.log(this.$store.state.USERINFO)
        this.info = this.$store.state.USERINFO.info
        console.log(this.info)
      } else {
        const token = window.sessionStorage.getItem('token')
        console.log(token)
        const { data: res } = await this.$http({
          headers: {
            Authorization: `Bearer ${token}`
          },
          methods: 'get',
          url: `/finduser`
        })
        this.info = res.message[0].info
        console.log(this.info)
      }
      this.info.forEach(async v => {
        const { data: res } = await this.$http.get(`/getbook/${v.bookid}`)
        res.message.data[0].num = v.num
        res.message.data[0].status = v.status
        this.bookItem = [...this.bookItem, res.message.data[0]]
      })
    },
    // 获得推荐数据
    async getList() {
      const { data: res } = await this.$http.get('/getrandom')
      this.bookList = res.message.data
    },
    // 点击删除
    delBook(index) {
      const id = this.info[index].id
      this.info.splice(index, 1)
      this.bookItem.splice(index, 1)
      this.$store.dispatch('delCart', { index, id, ajax: this.$http })
    },
    // 跳转页面
    toHome() {
      this.$router.push('/home')
    },
    toCenter() {
      this.$router.push('/center')
    }
  },
  watch: {
    allPrice() {
      console.log('改变了')
      if (this.allPrice == 0) return
      if (parseInt(this.allPrice) === this.allPrice) {
        this.allPrice = this.allPrice + '.00'
      } else {
        let numS = String(parseInt(this.allPrice * 1000))
        if (numS[numS.length - 1] >= 5) {
          let strStart = numS.substring(0, numS.length - 2)
          let strEnd = numS.substring(numS.length - 2)
          let numStr = parseInt(strEnd[0]) + 1
          let numSt = strStart + strEnd.replace(strEnd.charAt(0), numStr)
          this.allPrice = numSt.substring(0, numSt.length - 1) / 100
        } else {
          if (numS[numS.length - 2] != 0) {
            this.allPrice = numS.substring(0, numS.length - 1) / 100
          } else {
            if (numS[numS.length - 3] != 0) {
              this.allPrice = numS / 1000 + '0'
            } else {
              this.allPrice = numS.substring(0, numS.length - 3) + '.00'
            }
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  .header_content {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
    .header_home {
      width: 120px;
      height: 60px;
      margin: 0 20px;
      line-height: 60px;
      color: #d81e06;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      cursor: pointer;
    }
    .header_home:hover {
      background-color: #fff;
    }
    .header_center {
      width: 120px;
      height: 60px;
      line-height: 60px;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      cursor: pointer;
    }
    .header_center:hover {
      background-color: #fff;
    }
  }
}
.bgImg {
  width: 1200px;
  margin: 0 auto;
  height: 70px;
  background-color: #f5f5f5;
  padding: 15px 0;
  img {
    width: 100%;
    height: 100%;
  }
}
section {
  width: 1200px;
  margin: 0 auto;
  background-color: #f5f5f5;
  .book_item {
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    border-bottom: 1px solid rgb(20, 20, 20);
    .item_checkout {
      height: 100%;
      width: 80px;
      display: flex;
      align-items: center;
      .el-checkbox {
        padding-left: 40px;
      }
    }
    .item_info {
      padding-left: 20px;
      height: 200px;
      display: flex;
      .item_img {
        .img {
          width: 150px;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .info {
        padding-left: 60px;
        .info_item {
          div {
            box-sizing: border-box;
          }
          .item_name {
            padding-left: 10px;
            padding-bottom: 5px;
            span {
              font-size: 26px;
              font-weight: 600;
            }
          }
          .item_author {
            padding-left: 20px;
            padding-bottom: 5px;
            span {
              color: #d81e06;
              font-size: 16px;
              cursor: pointer;
            }
          }
          .item_pubcompany {
            padding-left: 20px;
            padding-bottom: 5px;
            span {
              color: #d81e06;
              font-size: 16px;
              cursor: pointer;
            }
          }
          .info_price {
            padding-top: 20px;
            padding-left: 20px;
            color: #d81e06;
            font-size: 20px;
          }
        }
        .info_num {
          display: flex;
          flex-direction: row-reverse;
          width: 800px;
          .info_input {
            box-shadow: 0 0 10px rgb(197, 179, 177);
          }
          .info_del {
            box-sizing: border-box;
            border: 1px solid #d81e06;
            border-radius: 5px;
            width: 160px;
            height: 40px;
            background-color: #d81e06;
            text-align: center;
            line-height: 40px;
            font-size: 18px;
            color: #fff;
            margin-right: 40px;
            box-shadow: 0 0 10px rgba(192, 57, 43, 1);
            cursor: pointer;
          }
        }
      }
    }
  }

  .book_puy {
    padding-top: 20px;
    margin: 0 20px 20px 20px;

    .puy {
      width: 100%;
      box-sizing: border-box;
      padding: 20px 0;
      height: 90px;
      display: flex;
      .select {
        padding-left: 40px;
        display: flex;
        div {
          height: 50px;
          display: flex;
          align-items: center;
        }
        .puy_select {
          padding-right: 20px;
        }
        .puy_text {
          color: rgb(20, 20, 20);
          font-size: 18px;
          font-weight: 600;
        }
      }
      .right {
        padding-left: 600px;
        display: flex;
        div {
          width: 150px;
          height: 100%;
          text-align: center;
          box-sizing: border-box;
          background-color: #d81e06;
          border: 1px solid #d81e06;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(192, 57, 43, 1);
          cursor: pointer;
          line-height: 50px;
          color: #fff;
          font-size: 20px;
          font-weight: 600;
        }
        .settlement {
          margin-left: 40px;
        }
      }
    }
  }
  .footer {
    width: 100%;
    background-image: linear-gradient(
      to top right,
      rgba(224, 73, 13, 0.4),
      rgba(4, 149, 245, 0.5)
    );
    .text {
      width: 90%;
      margin: 0 auto;
      height: 50px;

      span {
        line-height: 50px;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
</style>