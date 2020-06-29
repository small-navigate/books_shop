<template>
  <backgroud>
    <div class="login">
      <div class="login_box">
        <!-- login 开始 -->
        <div class="avatar_box">
          <img src="../assets/login.png" alt />
        </div>
        <!-- login 结束 -->
        <!--  登录表单 开始 -->
        <el-form
          label-width="0px"
          :rules="loginRules"
          class="login_form"
          :model="loginFrom"
          ref="loginFormRef"
        >
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" v-model="loginFrom.username" placeholder="请输入您的账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="loginFrom.password"
              show-password
              placeholder="请输入您的密码"
            ></el-input>
          </el-form-item>
          <!--  按钮 -->
          <el-form-item class="login_btn">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
            <el-button type="info" @click="toRegister">没有账号</el-button>
          </el-form-item>
        </el-form>
        <!-- 登录表单 结束 -->
      </div>
    </div>
  </backgroud>
</template>
<script>
import backgroud from '../components/Backgroud'
export default {
  components: { backgroud },
  data() {
    return {
      loginFrom: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, validator: this.checkEmail, trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 邮箱验证规则
    checkEmail(rule, value, callback) {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮箱格式'))
        }
      }, 100)
    },
    // 点击没有账号触发的事件
    toRegister() {
      this.$router.push('/register')
    },
    // 重置表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    // 表单数据预校验
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return

        const { data: res } = await this.$http.post('/login', this.loginFrom)
        console.log(res)
        if (res.meta.status !== 200) {
          this.$message.error(res.meta.msg)
          this.resetLoginForm()
          return
        }
        this.$message({
          message: res.meta.msg,
          type: 'success'
        })
        window.sessionStorage.setItem('token', res.token)
        this.$store.commit('changeNavShow', res.token)
        this.$store.commit('userInfo', res.message[0].user)
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  height: 100%;
}
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    width: 500px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    .avatar_box {
      width: 120px;
      height: 120px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .login_form {
      position: absolute;
      width: 85%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      .login_btn {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
