<template>
  <background>
    <header>
      <div class="header_content">
        <div class="header_home">主页</div>
        <div class="header_center">个人中心</div>
      </div>
    </header>

    <div class="bgImg">
      <img src="http://img60.ddimg.cn/upload_img/00822/cxtc/1200x65-1592551412.jpg" />
    </div>
    <section>
      <div class="book_item">
        <div class="item_checkout">
          <el-checkbox v-model="checked[0]" @change="changeId"></el-checkbox>
        </div>
        <div class="item_info">
          <div class="item_img">
            <div class="img">
              <img src="https://images-cn.ssl-images-amazon.com/images/I/51pWBZBd4-L._SY346_.jpg" />
            </div>
          </div>
          <div class="info">
            <div class="info_item">
              <div class="item_name">
                <span>钱意识</span>
              </div>
              <div class="item_author">
                作者:
                <span>沈诱冰</span>
              </div>
              <div class="item_pubcompany">
                出版社:
                <span>古吴轩出版社</span>
              </div>
              <div class="info_price">￥99.80</div>
            </div>
            <div class="info_num">
              <div class="info_input">
                <el-input-number v-model="num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
              </div>
              <div class="info_del">从购物车删除</div>
            </div>
          </div>
        </div>
      </div>
      <div class="book_item">
        <div class="item_checkout">
          <el-checkbox v-model="checked[1]" @change="changeId"></el-checkbox>
        </div>
        <div class="item_info">
          <div class="item_img">
            <div class="img">
              <img src="https://images-cn.ssl-images-amazon.com/images/I/51pWBZBd4-L._SY346_.jpg" />
            </div>
          </div>
          <div class="info">
            <div class="info_item">
              <div class="item_name">
                <span>钱意识</span>
              </div>
              <div class="item_author">
                作者:
                <span>沈诱冰</span>
              </div>
              <div class="item_pubcompany">
                出版社:
                <span>古吴轩出版社</span>
              </div>
              <div class="info_price">￥99.80</div>
            </div>
            <div class="info_num">
              <div class="info_input">
                <el-input-number v-model="num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
              </div>
              <div class="info_del">从购物车删除</div>
            </div>
          </div>
        </div>
      </div>
      <div class="book_item">
        <div class="item_checkout">
          <el-checkbox v-model="checked[2]" @change="changeId"></el-checkbox>
        </div>
        <div class="item_info">
          <div class="item_img">
            <div class="img">
              <img src="https://images-cn.ssl-images-amazon.com/images/I/51pWBZBd4-L._SY346_.jpg" />
            </div>
          </div>
          <div class="info">
            <div class="info_item">
              <div class="item_name">
                <span>钱意识</span>
              </div>
              <div class="item_author">
                作者:
                <span>沈诱冰</span>
              </div>
              <div class="item_pubcompany">
                出版社:
                <span>古吴轩出版社</span>
              </div>
              <div class="info_price">￥99.80</div>
            </div>
            <div class="info_num">
              <div class="info_input">
                <el-input-number v-model="num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
              </div>
              <div class="info_del">从购物车删除</div>
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
            <div class="total">合计:￥99.80</div>
            <div class="settlement">结 算</div>
          </div>
        </div>
      </div>
    </section>
  </background>
</template>
<script>
import background from '../components/Backgroud'
export default {
  components: {
    background
  },
  data() {
    return {
      checked: [false, false, false],
      num: 1,
      checkedAll: false
    }
  },
  methods: {
    // 复选框点击事件
    changeId(val) {
      if (val === false) {
        this.checkedAll = false
      } else {
        this.checked.some(v => {
          if (v === false) {
            console.log('我找到你了')
            this.checkedAll = false
            return true
          }
          this.checkedAll = true
        })
      }
    },
    // 计数框点击事件
    handleChange(val) {
      console.log('增加', val)
    },
    // 全选框点击事件
    changeAll(val) {
      for (let i = 0; i < this.checked.length; i++) {
        this.checked[i] = val
      }
    },
    // 初始化各种框数据
    initCheck() {}
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
  background-color: #f5f5f5;
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
}
</style>