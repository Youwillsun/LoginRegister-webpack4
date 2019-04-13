<template>
  <div class="LoginBox">
    <!-- 登录框 -->
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="glyphicon glyphicon-user"></i>
        </div>
        <input type="text" class="form-control" placeholder="请输入账号" v-model="account">
      </div>
    </div>
    <!-- 密码框 -->
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="glyphicon glyphicon-lock"></i>
        </div>
        <input type="password" class="form-control" placeholder="请输入密码" v-model="password">
      </div>
    </div>
    <!-- 友情提示区 -->
    <div class="tips">
      <div class="forgetPwd" @click="tips">
        <p>忘记密码？</p>
      </div>
      <div class="loginProblem" @click="tips">
        <p>登录遇到问题？</p>
      </div>
    </div>
    <!-- 按钮区域 -->
    <button class="loginBtn btn-primary center-block" id="loginBtn" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    login() {
      //登录逻辑判断
      // 判断账号和密码输入框是否为空
      if (this.account == "" || this.password == "") {
        alert("请输入账号和密码！");
      } else {
        // 判断账号和密码的输入格式是否正确
        //正则表达式————验证账号格式
        var isUserAccount = /^\d{9}$/;
        //正则表达式————密码是否为10~16位
        var isUserPassword = /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{10,16}/;
        if (
          !isUserAccount.test(this.account) ||
          !isUserPassword.test(this.password)
        ) {
          alert("账号和密码输入有误！");
        } else {
          // 判断本地存储中是否已经存在这样的账号
          var Account = localStorage.getItem("Account");
          if (this.account != Account) {
            alert("此账号未注册！");
          } else {
            // 如果本地账号和输入的账号一致
            alert("登录成功");
            // 清空文本框
            this.account = "";
            this.password = "";
          }
        }
      }
    },
    tips() {
      // 点击出现账号和密码提示
      // 从本地存储中获取账号和密码
      var Account = localStorage.getItem("Account");
      var Password = localStorage.getItem("Password");
      // 如果账号和密码为空
      if (Account == null || Password == null) {
        alert("您还没有注册过账号");
      } else {
        // 提示账号和密码
        alert("您的账号是：" + Account + " " + "您的密码是：" + Password);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.LoginBox {
  background-color: #fff;
  padding: 20px 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 2px 5px 5px #cacaca;
  height: 235px;
  .tips {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    p {
      cursor: pointer;
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
    margin-top: 22px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(22, 155, 213);
    border-image: initial;
    border-radius: 20px;
    outline: none;
  }
}
</style>
