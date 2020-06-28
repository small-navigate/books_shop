<template>
  <background>
    <header-home></header-home>
    <search>
      <div class="nav">
        <div class="content">
          <div class="nav_item" v-for="item in cataory" :key="item.id">
            <span @click="toClassification(item.id)">{{item.cataory}}</span>
          </div>
        </div>
      </div>
      <imgList :bookList="booklist"></imgList>
    </search>
  </background>
</template>
<script>
import background from '../components/Backgroud'
import headerHome from '../components/Header'
import search from '../components/Search'
import imgList from '../components/ImgList'
export default {
  components: {
    background,
    headerHome,
    search,
    imgList
  },
  data() {
    return {
      booklist: [],
      routerQuery: '',
      count: 0,
      cataory: [],
      scroll: '',
      body: '',
      isShow: false
    }
  },
  mounted() {
    this.routerQuery = this.$route.query.classId
    for (let i = 0; i < 5; i++) {
      this.getList()
    }

    this.getCataoryList()
    window.addEventListener('scroll', this.menu)
  },
  methods: {
    // 跳转页面
    toClassification(id) {
      // 跳转分类页面
      this.$router.push({
        path: './classification',
        query: {
          classId: id
        }
      })
      this.routerQuery = this.$route.query.classId
      this.count = 0
      this.booklist = []
      for (let i = 0; i < 5; i++) {
        this.getList()
      }
    },
    async getList() {
      this.isShow = true
      this.count++
      const { data: res } = await this.$http.get(
        `/classification/${this.routerQuery}/${this.count}`
      )
      if ((res.meta, status == 201)) {
      } else {
        this.booklist = [...this.booklist, ...res.message.data]
        this.isShow = false
      }
    },
    async getCataoryList() {
      const { data: res } = await this.$http.get('/classification/cataory')
      this.cataory = res.message.data
    },
    menu() {
      this.scroll = document.documentElement.scrollTop
      if (this.scroll + 937 > 259 + this.count * 3 * 301 - 301) {
        this.getList()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  .nav {
    width: 100%;
    height: 30px;
    .content {
      width: 80%;
      display: flex;
      margin: 0 auto;
      div {
        box-sizing: border-box;
      }
      :nth-child(1) {
        border-left: 1px dashed #ccc;
      }
      .nav_item {
        border-right: 1px dashed #ccc;
        width: 12.5%;
        line-height: 30px;
        font-size: 16px;
        text-align: center;
        span {
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        span:hover {
          color: 216, 30, 6;
        }
      }
    }
  }
}
</style>