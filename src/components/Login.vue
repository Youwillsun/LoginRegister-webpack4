<template>
  <div class="LoginBox">
    <!-- 登录框 -->
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="glyphicon glyphicon-user"></i>
        </div>
        <input type="text" class="form-control" placeholder="请输入账号">
      </div>
    </div>
    <!-- 密码框 -->
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="glyphicon glyphicon-lock"></i>
        </div>
        <input type="password" class="form-control" placeholder="请输入密码">
      </div>
    </div>
    <!-- 友情提示区 -->
    <div class="tips">
      <div class="forgetPwd">
        <p>忘记密码？</p>
      </div>
      <div class="loginProblem">
          <p>登录遇到问题？</p>
      </div>
    </div>
    <!-- 按钮区域 -->
    <button class="loginBtn btn-primary center-block" id="loginBtn">登录</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.LoginBox {
  background-color: #fff;
  padding: 20px 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 2px 5px 5px #cacaca;
  height: 230px;
  .tips {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    p {
      font-size: 13px;
      color: rgb(204, 204, 204);
      font-family: 微软雅黑;
    }
  }
  .loginBtn {
    cursor: pointer;
    font-size: 18px;
    font-family: 微软雅黑;
    background-color: rgb(22, 155, 213);
    width: 150px;
    height: 35px;
    margin-top: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(22, 155, 213);
    border-image: initial;
    border-radius: 20px;
    outline: none;
  }
}
</style>
