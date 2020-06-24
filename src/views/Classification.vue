<template>
  <background>
    <headerHome></headerHome>
    <search>
      <div class="class_main">
        <div class="el_conter">
          <div class="conter_main">
            <div class="img">
              <div class="main_images">
                <div class="main_img">
                  <img src="https://img3.doubanio.com/lpic/s29961252.jpg" />
                </div>
                <div class="main_bookname">
                  <span>哈哈</span>
                </div>
                <div class="main_price">
                  <div class="newPrice">
                    <span>￥100</span>
                  </div>
                  <div class="oldPrice">
                    <span>￥1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-divider></el-divider>
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
      count: 0
    }
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.bg {
  .class_main {
    width: 1200px;
    background-color: #fff;
    .el_conter {
      width: 100%;
      div {
        box-sizing: border-box;
      }
      .conter_main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .img {
          width: 20%;

          .main_images {
            width: 100%;
            height: 100%;
            padding: 15px 0;
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
      }

      .conter_toTag {
        width: 100%;
        height: 30px;
        text-align: right;

        span {
          padding: 30px;
          line-height: 30px;
          font-size: 16px;
          color: #8ac8f2;
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
}
</style>