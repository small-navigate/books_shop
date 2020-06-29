<template>
  <background>
    <headerHome></headerHome>
    <search style="backgroundColor: #fcfaf7">
      <div class="book_item">
        <div class="book_img">
          <div class="img">
            <img :src="bookItem.bookimg" />
          </div>
        </div>

        <div class="book_info">
          <div class="info">
            <div class="info_bookname">{{bookItem.bookname}}</div>
            <div class="info_publish">
              <div class="info_author">
                作者:
                <span>{{bookItem.author}}</span>
              </div>
              <div class="info_pubcompany">
                出版社:
                <span>{{bookItem.pubcompany}}</span>
              </div>
            </div>
            <div class="info_volume">
              <div class="info_sales">
                月销:
                <span>{{bookItem.viewcount}}件</span>
              </div>
              <div class="info_score">
                评分:
                <span>{{bookItem.score}}</span>
              </div>
            </div>
            <div class="info_price">
              <div class="info_newPrice">
                现价
                <span>￥{{bookItem.newPrice}}</span>
              </div>
              <div class="info_oldPrice">
                定价
                <span>￥{{bookItem.oldPrice}}</span>
              </div>
            </div>
            <div class="info_oper">
              <div class="info_add">
                <span>购物车</span>
              </div>
              <div class="info_puy">
                <span>立即购买</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="book_recommend">
        <div class="text">相同推荐</div>
        <imgList :bookList="bookList" @func="getId"></imgList>
      </div>
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
      bookId: 0,
      bookItem: [],
      bookList: []
    }
  },
  mounted() {
    this.bookId = this.$route.query.bookId
    console.log('哈哈', this.bookId)
    this.getItem()
    this.path = this.$route.path + '?' + this.$route.query.bookId
  },
  methods: {
    async getItem() {
      const { data: res } = await this.$http.get(`/bookItem/${this.bookId}`)
      console.log(res)
      this.bookItem = res.message.data[0]
      this.bookList = res.message.bookList
      console.log(this.bookItem)
      console.log(this.bookList)
    },
    getId(id) {
      this.bookId = id
      this.getItem()
    }
  }
}
</script>
<style lang="scss" scoped>
.book_item {
  display: flex;
  background-color: #fcfaf7;
  .book_img {
    width: 50%;
    display: flex;
    justify-content: center;
    .img {
      width: 260px;

      img {
        width: 100%;
        box-shadow: 0 0 10px rgba(48, 51, 107, 1);
      }
    }
  }
  .book_info {
    display: flex;
    align-items: center;
    div {
      box-sizing: border-box;
    }
    .info {
      padding: 0 20px;
      box-shadow: 0 0 5px rgba(48, 51, 107, 1);
      .info_bookname {
        font-size: 26px;
        font-weight: 600;
        padding: 15px 0;
      }
      .info_publish {
        display: flex;
        padding-bottom: 8px;

        span {
          padding-left: 5px;
          color: #ff7979;
          cursor: pointer;
        }
        .info_author {
          padding-right: 25px;
        }
      }
      .info_volume {
        padding-bottom: 8px;
        display: flex;
        span {
          padding-left: 15px;
        }
        .info_sales {
          padding-right: 30px;
          span {
            color: #ff7979;
          }
        }
      }
      .info_price {
        display: flex;
        .info_newPrice {
          padding-right: 30px;
          font-weight: 600;
          font-size: 20px;
          color: #e92308;
        }
        .info_oldPrice {
          color: rgb(85, 69, 69);
          font-size: 14px;
          line-height: 26px;
          span {
            text-decoration: line-through;
          }
        }
      }
      .info_oper {
        padding: 20px 0 45px 0;
        display: flex;
        span {
          line-height: 40px;
          font-size: 18px;
          color: #fff;
          font-weight: 600;
        }
        .info_add {
          margin-right: 30px;
        }
        div {
          width: 120px;
          height: 40px;
          box-shadow: 0 0 10px rgba(235, 77, 75, 1);
          background-color: #d81e06;
          border-radius: 5px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
}
.book_recommend {
  width: 100%;
  padding: 10px 0 40px 0;
  .text {
    height: 80px;
    box-sizing: border-box;
    font-size: 24px;
    line-height: 40px;
    padding: 20px 0 20px 40px;
    color: #d81e06;
    font-weight: 600;
  }
}
</style>