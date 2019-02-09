<template>
  <div class="login-container">
    <div class="avatar">
      <!-- 头像区 -->
      <img src="../assets/logo.png" alt>
    </div>
    <!-- denglu -->
    <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" class="loginForm">
      <el-form-item prop="username">
        <el-input v-model="loginForm.name">
          <i slot="prefix" class="el-input__icon el-icon-date"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type='password'>
          <i slot="prefix" class="el-input__icon el-icon-date"></i>
        </el-input>
      </el-form-item>
       <el-form-item class="btns">
        <el-button type="primary" @click ="login">登陆</el-button>
        <el-button type = "info" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>



<script>
import mix from './Login-mixins.js'
export default {
 mixins:[mix]
}
</script>

<style lang="less" scoped>
@num: 450px;

.login-container {
  width: @num;
  height: 304px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 7px;
    box-shadow: 0 0 10px #eee;
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
}
.btns{
  display: flex;
  justify-content: flex-end;
}
.loginForm{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

}
</style>


