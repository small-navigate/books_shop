<template>
  <background>
    <div class="register">
      <div class="register_box">
        <!-- register 开始 -->
        <div class="avatar_box">
          <img src="../assets/login.png" alt />
        </div>
        <!-- register 结束 -->
        <!--  登录表单 开始 -->
        <el-form
          label-width="0px"
          :rules="registerRules"
          class="register_form"
          :model="registerFrom"
          ref="registerFormRef"
        >
          <el-form-item prop="username">
            <el-input
              prefix-icon="el-icon-user"
              v-model="registerFrom.username"
              placeholder="请输入您的账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="registerFrom.password"
              placeholder="请输入您的密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="registerFrom.checkPass"
              placeholder="请再次输入密码"
            ></el-input>
          </el-form-item>
          <!--  按钮 -->
          <el-form-item class="register_btn">
            <el-button type="primary" @click="register">注册</el-button>
            <el-button type="info" @click="resetregisterForm">重置</el-button>
            <el-button type="info" @click="toRegister">已有账号</el-button>
          </el-form-item>
        </el-form>
        <!-- 登录表单 结束 -->
      </div>
    </div>
  </background>
</template>
<script>
import background from '../components/Backgroud'
export default {
  components: { background },
  data() {
    return {
      registerFrom: {
        username: '',
        password: '',
        checkPass: ''
      },
      registerRules: {
        username: [
          { required: true, validator: this.checkEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: this.validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: this.validatePass2, trigger: 'blur' }
        ]
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
    // 密码验证规则
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerFrom.checkPass !== '') {
          this.$refs.registerFormRef.validateField('checkPass')
        }
        callback()
      }
    },
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerFrom.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    // 点击没有账号触发的事件
    toRegister() {
      this.$router.push('/login')
    },
    // 重置表单
    resetregisterForm() {
      this.$refs.registerFormRef.resetFields()
    },
    // 表单数据预校验
    register() {
      this.$refs.registerFormRef.validate(async valid => {
        console.log(valid)
        if (!valid) return
        const { data: res } = await this.$http.post(
          '/register',
          this.registerFrom
        )
        if (res.meta.status !== 200) {
          this.$message.error(res.meta.msg)
          this.resetregisterForm()
          return
        }
        this.$message({
          message: res.meta.msg,
          type: 'success'
        })
        this.toRegister()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  height: 100%;
}
.register {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .register_box {
    width: 500px;
    height: 350px;
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
    .register_form {
      position: absolute;
      width: 85%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      .register_btn {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
