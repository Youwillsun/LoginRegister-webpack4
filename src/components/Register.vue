<template>
  <div class="RegisterBox">
    <!-- 这里的四个表单，不同的地方就是最外层div的"has-XX",以及下面span的class属性不同，可以根据这个特点，动态改变表单的样式 -->
    <!-- 注册账号 -->
    <div class="form-group has-warning has-feedback">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-user"></i>
        </span>
        <input
          type="text"
          class="form-control"
          id="inputGroupSuccess1"
          aria-describedby="inputGroupSuccess1Status"
          placeholder="请输入您的学号"
        >
      </div>
      <span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>
    </div>
    <!-- 注册密码 -->
    <div class="form-group has-warning has-feedback">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-lock"></i>
        </span>
        <input
          type="password"
          class="form-control"
          id="inputGroupSuccess1"
          aria-describedby="inputGroupSuccess1Status"
          placeholder="请输入10~16位密码"
        >
      </div>
      <span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>
    </div>
    <!-- 再次输入密码 -->
    <div class="form-group has-warning has-feedback">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-lock"></i>
        </span>
        <input
          type="password"
          class="form-control"
          id="inputGroupSuccess1"
          aria-describedby="inputGroupSuccess1Status"
          placeholder="请再次输入密码"
        >
      </div>
      <span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>
    </div>
    <!-- 输入手机号 -->
    <div class="form-group has-warning has-feedback">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-phone"></i>
        </span>
        <input
          type="text"
          class="form-control"
          id="inputGroupSuccess1"
          aria-describedby="inputGroupSuccess1Status"
          placeholder="请输入您的手机号"
        >
      </div>
      <span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>
    </div>
    <!-- 注册按钮 -->
    <button class="registerBtn btn-primary center-block" id="registerBtn">注册</button>
    <!-- 注册提示区 -->
    <div class="ruleBox text-center">
      <p>点击 “注册” 即表示您同意并愿意遵守本团队制定的<a href="javascript:void(0)">用户协议</a>和<a href="javascript:void(0)">隐私政策。</a></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.RegisterBox {
  background-color: #fff;
  padding: 5px 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 2px 5px 5px #cacaca;
  height: 235px;
  .form-group {
    margin-bottom: 5px;
  }
  .registerBtn {
    cursor: pointer;
    font-size: 18px;
    font-family: 微软雅黑;
    background-color: rgb(0, 204, 0);
    width: 150px;
    height: 35px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0, 204, 0);
    border-image: initial;
    border-radius: 20px;
    outline: none;
  }
  .ruleBox{
    font-size: 0;
    p{
      font-size: 10px;
      a{
        font-size: 10px;
      }
    }
  }
}
</style>