<template>
  <background>
    <header-home></header-home>
    <search>
      <div class="nav_content">
        <div class="item" v-for="item in tagList" :key="item.id">
          <span @click="tagDetails(item.id)">{{item.tag}}</span>
        </div>
      </div>
    </search>
  </background>
</template>
<script>
import background from '../components/Backgroud'
import headerHome from '../components/Header'
import search from '../components/Search'
export default {
  components: {
    background,
    headerHome,
    search
  },
  data() {
    return {
      tagList: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const { data: res } = await this.$http.get('/details')
      this.tagList = res.message.data
    },
    tagDetails(id) {
      // 跳转分类页面
      this.$router.push({
        path: './tagDetails',
        query: {
          tagId: id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.nav_content {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  div {
    box-sizing: border-box;
  }
  .item {
    text-align: center;
    width: 10%;
    height: 40px;
    padding: 3px 0;
    span {
      font-size: 16px;
      font-weight: 600;
      line-height: 40px;
      cursor: pointer;
    }
    span:hover {
      color: #9b59b6;
    }
  }
}
</style>