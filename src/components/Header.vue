<template>
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
</template>
<script>
export default {
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
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>