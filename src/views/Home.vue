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
                <div class="login_false" v-if="!$store.state.NAVSHOW">
                  <div class="left_login" @click="toLgoin">亲，请登录</div>
                  <div @click="toRegister">免费注册</div>
                </div>
                <div class="login_ture" v-else>
                  <div class="portrait">
                    <div class="title_img">
                      <img :src="$store.state.USERINFO.portrait" />
                    </div>
                  </div>
                  <div class="name" @click="toCenter">{{$store.state.USERINFO.name}}</div>
                </div>
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
        <search></search>
        <!-- 轮播开始 -->
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
                    <el-image
                      :src="item.swiper"
                      fit="contain"
                      style="width: 900px; height: 320px"
                      @click="toClass(item.id)"
                    ></el-image>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </el-col>
          </el-row>
          <div class="box" v-show="isShow" @mouseover="over" @mouseleave="leave">
            <div class="books_box" v-for="item in cataoryListArr.cataoryList" :key="item.id">
              <div class="books_box_center">
                <div class="books_img">
                  <img @click="toDetailList(item.id)" v-lazy="item.bookimg" />
                </div>
                <div class="books_text">
                  <span @click="toDetailList(item.id)">{{item.bookname}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 猜你喜欢 -->
        <div class="el_conter">
          <div class="conter_title">
            <div class="conter_text">猜你喜欢</div>
          </div>
          <imgList :bookList="likeList"></imgList>
          <div class="conter_toTag">
            <span @click="toTag">更多分类...</span>
          </div>
        </div>
        <el-divider></el-divider>
        <!-- 分类推荐 -->
        <div class="el_conter" v-for="item in CataoryList" :key="item.id">
          <div class="conter_title">
            <div class="conter_text">
              <span @click="toClass(item.id)">{{item.cataory}}</span>
            </div>
          </div>
          <imgList :bookList="item.list"></imgList>
          <el-divider></el-divider>
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
import imgList from '../components/ImgList'
import search from '../components/Search'
export default {
  components: { background, imgList, search },
  data() {
    return {
      getSwiperList: {},
      // 控制显示隐藏
      isShow: false,
      isListShow: false,
      cataoryListArr: [],
      isTimer: '',
      likeList: [],
      CataoryList: [],
      conterCataoryList: []
    }
  },
  mounted() {
    this.getSwiper()
    this.getContent()
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
      this.$router.push('/cart')
    },
    toCenter() {
      this.$router.push('/center')
    },
    toTag() {
      // 跳转详细分类页面
      this.$router.push('/Details')
    },
    toClass(id) {
      // 跳转分类页面
      this.$router.push({
        path: './classification',
        query: {
          classId: id
        }
      })
    },
    toDetailList(id) {
      this.$router.push({
        path: './books',
        query: {
          bookId: id
        }
      })
    },
    // 获取swiper数据
    async getSwiper() {
      const { data: res } = await this.$http.get('/home/swiper')
      this.getSwiperList = res.message
      this.cataoryListArr = this.getSwiperList.cataory[0]
    },
    // 获取content数据
    async getContent() {
      const { data: res } = await this.$http.get('/home/content')
      this.likeList = res.message.homeLikeList
      this.CataoryList = res.message.homeCataoryList

      this.conterCataoryList
      this.getSwiperList.cataory.forEach(v => {})
    },
    // 鼠标移入移出事件
    mouseOver(index) {
      clearInterval(this.isTimer)
      this.cataoryListArr = this.getSwiperList.cataory[index]
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
    },
    leave() {
      this.isListShow = false
    }
  }
}
</script>
<style lang="scss" src="../assets/css/home.scss" scoped>
</style>