<template>
  <background style="height:100%; overflow: hidden;">
    <header>
      <div class="header_content">
        <div class="header_center">个人中心</div>
        <div class="header_home" @click="toHome">回到主页</div>
      </div>
    </header>
    <section class="center">
      <div class="user_info" :style="style">
        <div class="user_img">
          <div class="img">
            <img :src="info.portrait" />
          </div>
          <div class="upload">
            <el-button type="primary" @click="showAvatar">更换头像</el-button>
          </div>
        </div>
        <div class="user_account">
          <div class="form">
            <el-form label-width="80px" :model="userInfo">
              <el-form-item label="账 号:">
                <el-input :placeholder="info.username" disabled></el-input>
              </el-form-item>
              <el-form-item label="昵 称:">
                <el-input v-model="userInfo.name" :placeholder="info.name"></el-input>
              </el-form-item>
              <el-form-item label="性 别:">
                <el-select v-model="userInfo.sex" :placeholder="info.sex">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="年 龄:">
                <el-select v-model="userInfo.age" :placeholder="String(info.age)">
                  <el-option v-for="(item,index) in 99" :key="index" :label="item" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="个性签名:">
                <el-input v-model="userInfo.introduce" :placeholder="info.introduce"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="putInfo">提交修改</el-button>
                <el-button type="primary">修改密码</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="info_ifram" v-show="isShow">
        <div class="uploads">
          <el-upload
            class="avatar-uploader"
            action="/avatar/uploader"
            :data="query"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="btn">
            <el-button type="primary" @click="toCenter">完成修改</el-button>
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
      info: {},
      userInfo: {
        name: '',
        sex: '',
        age: '',
        introduce: ''
      },
      options: [
        {
          value: '选项1',
          label: '男'
        },
        {
          value: '选项2',
          label: '女'
        },
        {
          value: '选项3',
          label: '不详'
        }
      ],
      imageUrl: '',
      query: {},
      isShow: false,
      style: ''
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    toHome() {
      this.$router.push('/home')
    },
    async getInfo() {
      if (this.$store.state.USERINFO) {
        this.info = this.$store.state.USERINFO
      } else {
        const token = window.sessionStorage.getItem('token')
        const { data: res } = await this.$http({
          headers: {
            Authorization: `Bearer ${token}`
          },
          methods: 'get',
          url: `/finduser`
        })
        this.info = res.message[0]
      }
      this.query.id = this.$store.state.USERINFO.id
      console.log(this.info)
    },
    putInfo() {
      if (this.userInfo.name.length == 0) {
        this.userInfo.name = this.$store.state.USERINFO.name
      }
      if (this.userInfo.sex.length == 0) {
        this.userInfo.sex = this.$store.state.USERINFO.sex
      }
      if (this.userInfo.introduce.length == 0) {
        this.userInfo.introduce = this.$store.state.USERINFO.introduce
      }
      if (this.userInfo.age.length == 0) {
        this.userInfo.age = this.$store.state.USERINFO.age
      }
      const info = this.userInfo
      info.id = this.$store.state.USERINFO.id
      info.ajax = this.$http
      this.$store.dispatch('putUser', info)
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.imageUrl = URL.createObjectURL(file.raw)
      this.info.portrait = res.message
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      console.log(isJPG, isLt2M)
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    toCenter() {
      this.isShow = false
      this.style = ''
      console.log(this.$store.state.USERINFO)
    },
    showAvatar() {
      this.isShow = true
      this.style = 'filter: blur(20px);'
    }
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
      cursor: pointer;
      margin: 0;
      margin-left: 900px;
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
      cursor: pointer;
    }
  }
}
section {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  box-sizing: border-box;
  padding-top: 50px;
  position: relative;
  .user_info {
    width: 80%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
    display: flex;
    .user_img {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .img {
        width: 200px;
        height: 200px;
        border: 1px dashed #d9d9d9;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .upload {
        width: 200px;
        height: 40px;
        padding: 20px 0;
        text-align: center;
      }
    }
    .user_account {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;

      .form {
        width: 500px;
        height: 380px;
      }
    }
  }
  .info_ifram {
    width: 1200px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    .avatar-uploader {
      width: 200px;
      height: 200px;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
      }
      .avatar {
        width: 200px;
        height: 200px;
        display: block;
      }
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .btn {
      padding-top: 30px;
      width: 200px;
      height: 50px;
      text-align: center;
    }
  }
}
</style>