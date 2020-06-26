<template>
  <background>
    <header-home></header-home>
    <search>
      <div class="bgImg">
        <img src="http://img60.ddimg.cn/upload_img/00822/cxtc/1200x65-1592551412.jpg" />
      </div>
      <div class="nav_content">
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
        </div>
        <div class="item">
          <span>哈哈哈哈</span>
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
    return {}
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.bgImg {
  width: 100%;
  height: 70px;
  padding-bottom: 15px;
  img {
    width: 100%;
    height: 100%;
  }
}
.nav_content {
  display: flex;
  flex-wrap: wrap;
  div {
    box-sizing: border-box;
  }
  .item {
    text-align: center;
    width: 10%;
    height: 40px;
    padding-top: 3px;
    border-top: 1px solid #ccc;
    span {
      font-size: 16px;
      font-weight: 600;
      line-height: 28px;
      cursor: pointer;
    }
  }
}
</style>