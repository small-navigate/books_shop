<template>
  <div class="conter_main">
    <div class="img" v-for="item in bookList" :key="item.id">
      <div class="main_images">
        <div class="main_img" @click="toDetailList(item.id)">
          <img v-lazy="item.bookimg" />
        </div>
        <div class="main_bookname">
          <span>{{item.bookname}}</span>
        </div>
        <div class="main_price">
          <div class="newPrice">
            <span>￥{{item.newPrice}}</span>
          </div>
          <div class="oldPrice">
            <span>￥{{item.oldPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bookList: Array
  },
  methods: {
    toDetailList(id) {
      this.$router.push({
        path: './books',
        query: {
          bookId: id
        }
      })
      this.$emit('func', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.conter_main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  div {
    box-sizing: border-box;
  }
  .img {
    width: 20%;

    .main_images {
      width: 100%;
      height: 100%;
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .main_img {
        width: 160px;
        height: 226px;

        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
          box-shadow: 4px -2px 2px rgba(189, 195, 199, 1);
        }
      }

      .main_bookname {
        width: 160px;
        height: 30px;
        padding: 0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 30px;
        font-size: 14px;
        color: #678f87;
        text-align: center;

        span {
          cursor: pointer;
          color: #678f87;
          font-weight: 600;
        }
      }

      .main_price {
        display: flex;
        width: 160px;
        height: 30px;
        line-height: 30px;

        .newPrice {
          flex: 1;

          span {
            color: #cc3502;
            font-size: 16px;
            font-weight: 600;
          }
        }

        .oldPrice {
          flex: 1;

          span {
            color: #aaaaaa;
            font-size: 14px;
            text-decoration: line-through;
          }
        }
      }
    }
  }
  .conter_text {
    width: 100%;
    height: 30px;
    text-align: center;
    span {
      font-style: 16px;
      font-weight: 600;
      color: #aaaaaa;
    }
  }
  .el-pagination {
    width: 800px;
    margin: 0 auto;
  }
}
</style>