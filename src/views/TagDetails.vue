<template>
  <background>
    <header-home></header-home>
    <search>
      <imgList :bookList="bookList"></imgList>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="params.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        style="width: 680px; margin: 0 auto;padding-bottom:50px"
      ></el-pagination>
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
      params: {
        tagId: 0,
        currentPage: 1,
        pageSize: 10
      },
      total: 300,
      bookList: []
    }
  },
  mounted() {
    this.params.tagId = this.$route.query.tagId
    this.getList()
  },
  methods: {
    async getList() {
      const { data: res } = await this.$http.get(`/detailsTag`, {
        params: this.params
      })
      this.total = res.message.total
      this.bookList = res.message.data
      console.log(this.bookList)
    },
    handleSizeChange(newSize) {
      console.log('每页显示数据', newSize)
      this.params.pageSize = newSize
      this.getList()
    },
    handleCurrentChange(newPage) {
      console.log('页码改变', newPage)
      this.params.currentPage = newPage
      this.getList()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>