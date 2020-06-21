<template>
  <background>
    <!-- 回到顶部 -->
    <el-backtop :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #d81e06;
      }"
      >up</div>
    </el-backtop>
    <el-container>
      <!-- 头部开始 -->
      <el-header>
        <div class="home_header">
          <el-row>
            <el-col :span="12">
              <div class="home_left">
                <div class="left_login" @click="toLgoin">亲，请登录</div>
                <div @click="toRegister">免费注册</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="home_right">
                <div class="right_cart" @click="toCart">
                  <div class="imgs">
                    <img src="../assets/gouwuche.png" />
                  </div>
                  <div class="text">购物车</div>
                </div>
                <div @click="toCenter">个人中心</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <!-- 头部结束 -->

      <!-- 内容区域开始 -->
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
        <div class="swiper">
          <el-row>
            <el-col :span="6">
              <ul class="navList">
                <li
                  v-for="(item,index) in getSwiperList.cataory"
                  :key="item.id"
                  @mouseover="mouseOver(index)"
                  @mouseleave="mouseLeave"
                >
                  <span class="span_text">{{item.cataory}}</span>

                  <span class="span_">></span>
                </li>
              </ul>
            </el-col>
            <el-col :span="18">
              <el-carousel :interval="5000" arrow="always" height="340px" indicator-position="none">
                <el-carousel-item v-for="item in getSwiperList.swiperURL" :key="item.id">
                  <div class="carousel_img">
                    <el-image :src="item.swiper" fit="contain" style="width: 900px; height: 320px"></el-image>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </el-col>
          </el-row>
          <div class="box" v-show="isShow" @mouseover="over" @mouseleave="leave">
            <div class="books_box" v-for="item in cataoryListArr.cataoryList" :key="item.id">
              <div class="books_box_center">
                <div class="books_img">
                  <img :src="item.bookimg" />
                </div>
                <div class="books_text">
                  <a href="#">{{item.bookname}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 猜你喜欢 -->
        <div class="el_conter">
          <div class="conter_title">
            <div class="conter_text">猜你喜欢,分类详情</div>
          </div>
          <div class="conter_main">
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
          </div>
          <div class="conter_toTag">
            <span @click="toTag">更多分类...</span>
          </div>
        </div>
        <el-divider></el-divider>
        <!-- 分类推荐 -->
        <div class="el_conter">
          <div class="conter_title">
            <div class="conter_text">猜你喜欢</div>
          </div>
          <div class="conter_main">
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
            <div class="img">1</div>
          </div>
        </div>
      </div>
      <!-- 内容区域结束 -->

      <!-- 尾部 -->
      <div class="el_footer">
        <div class="footer_conter">
          <div class="footer_sort footer_pay">
            <span class="f_title">支付方式</span>
            <ul>
              <li>货到付款</li>
              <li>网上支付</li>
              <li>礼品卡支付</li>
              <li>银行转帐</li>
            </ul>
          </div>
          <div class="footer_sort footer_characteristic">
            <span class="f_title">订单服务</span>
            <ul>
              <li>配送服务查询</li>
              <li>订单状态说明</li>
              <li>自助取消订单</li>
              <li>自助修改订单</li>
            </ul>
          </div>
          <div class="footer_sort footer_distribution">
            <span class="f_title">配送方式</span>
            <ul>
              <li>当日递</li>
              <li>次日达</li>
              <li>订单自提</li>
              <li>验货与签收</li>
            </ul>
          </div>
          <div class="footer_sort footer_help">
            <span class="f_title">退换货</span>
            <ul>
              <li>退换货服务查询</li>
              <li>自助申请退换货</li>
              <li>退换货进度查询</li>
              <li>退款方式和时间</li>
            </ul>
          </div>
        </div>
      </div>
    </el-container>
  </background>
</template>

<script>
import background from '../components/Backgroud'
export default {
  components: { background },
  data() {
    return {
      getSwiperList: {},
      // 控制显示隐藏
      isShow: false,
      isListShow: false,
      cataoryListArr: [],
      isTimer: ''
    }
  },
  mounted() {
    console.log(this.isShow)
    this.getSwiper()
  },
  methods: {
    // 点击登录
    toLgoin() {
      this.$router.push('/login')
    },
    toRegister() {
      this.$router.push('/register')
    },
    toCart() {
      this.$router.push('./cart')
    },
    toCenter() {
      this.$router.push('./center')
    },
    toTag() {
      this.$router.push('./tag')
    },
    // 获取swiper数据
    async getSwiper() {
      const { data: res } = await this.$http.get('/home/swiper')
      this.getSwiperList = res.message
      this.cataoryListArr = this.getSwiperList.cataory[0]
      console.log(this.getSwiperList)
    },
    // 鼠标移入移出事件
    mouseOver(index) {
      clearInterval(this.isTimer)
      this.cataoryListArr = this.getSwiperList.cataory[index]
      console.log(this.cataoryListArr)
      if (this.cataoryListArr.id == index + 1) {
        this.isShow = true
      }
    },
    mouseLeave() {
      clearInterval(this.isTimer)

      this.isTimer = setInterval(() => {
        if (!this.isListShow) {
          this.isShow = false
        }
      }, 1000)
    },
    over() {
      this.isListShow = true
      console.log(this.isListShow)
    },
    leave() {
      this.isListShow = false
      console.log(this.isListShow)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  width: 100%;

  .el-header {
    width: 100%;
    background-color: #f5f5f5;
    .home_header {
      width: 1200px;
      margin: 0 auto;
      height: 60px;
      background-color: #f5f5f5;
      .el-row {
        margin: 0 30px;
        .home_left {
          display: flex;
          .left_login {
            color: #f22e00;
          }
          div {
            width: 100px;
            height: 60px;
            line-height: 60px;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
          }
          div:hover {
            background-color: #fff;
          }
        }
        .home_right {
          display: flex;
          flex-direction: row-reverse;
          .right_cart {
            display: flex;
            .imgs {
              box-sizing: border-box;
              width: 22px;
              height: 22px;
              margin-top: 4px;
              margin-left: 10px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .text {
              box-sizing: border-box;
              width: 78px;
              text-align: left;
              padding-left: 4px;
            }
          }
          div {
            width: 100px;
            height: 60px;
            line-height: 60px;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
          }
          div:hover {
            background-color: #fff;
          }
        }
      }
    }
  }
  .el_main {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
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
            position: relative;
            top: -1px;
            width: 400px;
            height: 50px;
            outline: none;
            padding: 0 25px;
            border-radius: 25px 0 0 25px;
            border: 2px solid #d81e06;
          }
          input[type='submit'] {
            position: relative;
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
    .swiper {
      margin-bottom: 20px;
      position: relative;
      .box {
        width: 920px;
        height: 320px;
        background-color: #fff;
        position: absolute;
        top: 20px;
        left: 280px;
        z-index: 10;
        display: flex;
        flex-wrap: wrap;
        div {
          box-sizing: border-box;
        }
        .books_box {
          width: 25%;
          height: 160px;
          .books_box_center {
            width: 230px;
            height: 160px;
            padding: 10px 65px;
            .books_img {
              width: 80px;
              height: calc(148 * 80 / 100px);
              img {
                width: 100%;
                height: 100%;
              }
            }
            .books_text {
              width: 80px;
              height: calc(160- 148 * 80 / 100px);
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              a {
                color: #7575a1;
                font-size: 12px;
                font-weight: 400;
                line-height: calc(160- 148 * 80 / 100) px;
                text-decoration: none;
              }
            }
          }
        }
      }
      .el-row {
        height: 380px;
        .navList {
          background-image: linear-gradient(
            to top right,
            rgba(224, 73, 13, 0.4),
            rgba(4, 149, 245, 0.5)
          );
          margin: 20px;
          padding: 0;
          list-style: none;
          font-size: 18px;
          font-weight: 600;
          li {
            height: 40px;
            line-height: 40px;

            .span_text {
              display: inline-block;
              text-align: center;
              width: 220px;
            }
            .span_ {
              display: inline-block;
              width: 40px;
            }
          }
          li:hover {
            background-color: #d81e06;
          }
        }
        .el-carousel {
          margin-top: 20px;
          .carousel_img {
            cursor: pointer;
          }
        }
      }
    }
    .el_conter {
      width: 100%;
      .conter_title {
        width: 100%;
        height: 40px;
        background-image: linear-gradient(
          to top right,
          rgba(224, 73, 13, 0.4),
          rgba(4, 149, 245, 0.5)
        );
        .conter_text {
          width: 90%;
          height: 40px;
          margin: 0 auto;
          font-size: 20px;
          line-height: 40px;
          font-weight: 600;
          color: #d81e06;
        }
      }
      .conter_main {
        width: 100%;

        display: flex;
        flex-wrap: wrap;
        div {
          box-sizing: border-box;
        }
        .img {
          width: 20%;
          height: 200px;
          border: 1px solid red;
        }
      }
      .conter_toTag {
        width: 100%;
        height: 30px;
        text-align: right;
        span {
          padding: 30px;
          line-height: 30px;
          font-size: 16px;
          color: #6c968d;
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
  .el_footer {
    background-color: #f5f5f5;
    height: 150px;
    width: 100%;
    box-sizing: border-box;
    .footer_conter {
      height: 120px;
      padding-top: 30px;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      background-color: #f5f5f5;

      .footer_sort {
        flex: 1;
        text-align: center;
        .hr {
          width: 100%;
          height: 1px;
          border: 1px solid #fff;
        }
        .f_title {
          font-size: 16px;
          font-weight: 600;
        }
        ul {
          margin: 0;
          padding: 10px 0 0 0;
          li {
            height: 20px;
            list-style: none;
            line-height: 20px;
            font-size: 14px;
            color: #ccc;
          }
        }
      }
    }
  }
}
.content-area {
  height: calc(100vh - 100px);
  overflow: auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>