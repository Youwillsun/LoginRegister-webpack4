<template>
  <div class="RegisterBox">
    <!-- 这里的四个表单，不同的地方就是最外层div的"has-XX",以及下面span的class属性不同，可以根据这个特点，动态改变表单的样式 -->
    <!-- 把最外层div的"has-XX"，通过属性绑定的方式，利用classA或ClassB...来代替，这样保证可以动态替换，下面span里的class属性同理 -->
    <!-- 注册账号 -->
    <div class="form-group has-feedback" :class="ClassA">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-user"></i>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="请输入您的学号"
          v-model="account"
          @focus="style('A')"
          @blur="judge('A')"
        >
      </div>
      <span class="form-control-feedback" :class="ClassAicon"></span>
    </div>
    <!-- 注册密码 -->
    <div class="form-group has-feedback" :class="ClassB">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-lock"></i>
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="请输入10~16位密码"
          v-model="password"
          @focus="style('B')"
          @blur="judge('B')"
        >
      </div>
      <span class="form-control-feedback" :class="ClassBicon" aria-hidden="true"></span>
    </div>
    <!-- 再次输入密码 -->
    <div class="form-group has-feedback" :class="ClassC">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-lock"></i>
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="请再次输入密码"
          v-model="passwordAgain"
          @focus="style('C')"
          @blur="judge('C')"
        >
      </div>
      <span class="form-control-feedback" :class="ClassCicon" aria-hidden="true"></span>
    </div>
    <!-- 输入手机号 -->
    <div class="form-group has-feedback" :class="ClassD">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-phone"></i>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="请输入您的手机号"
          v-model="phone"
          @focus="style('D')"
          @blur="judge('D')"
        >
      </div>
      <span class="form-control-feedback" :class="ClassDicon" aria-hidden="true"></span>
    </div>
    <!-- 注册按钮 -->
    <button class="registerBtn btn-primary center-block" id="registerBtn" @click="register">注册</button>
    <!-- 注册提示区 -->
    <div class="ruleBox text-center">
      <p>
        点击 “注册” 即表示您同意并愿意遵守本团队制定的
        <a href="javascript:void(0)">用户协议</a>和
        <a href="javascript:void(0)">隐私政策。</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 四个文本框的样式，和相应的图标
      ClassA: "",
      ClassAicon: "",
      ClassB: "",
      ClassBicon: "",
      ClassC: "",
      ClassCicon: "",
      ClassD: "",
      ClassDicon: "",
      // 双向绑定的文本框信息
      account: "",
      password: "",
      passwordAgain: "",
      phone: "",
      // 注册的判断
      flag:0
    };
  },
  methods: {
    style(str) {
      // 这个方法用来判断当前点击的是哪个文本框，并把有焦点的文本框改变颜色
      switch (str) {
        case "A":
          this.ClassA = "has-warning";
          this.ClassAicon = "glyphicon glyphicon-warning-sign";
          break;
        case "B":
          this.ClassB = "has-warning";
          this.ClassBicon = "glyphicon glyphicon-warning-sign";
          break;
        case "C":
          this.ClassC = "has-warning";
          this.ClassCicon = "glyphicon glyphicon-warning-sign";
          break;
        case "D":
          this.ClassD = "has-warning";
          this.ClassDicon = "glyphicon glyphicon-warning-sign";
          break;
      }
    },
    judge(str) {
      // 这个方法，牵涉到对文本框的校验以及对文本框外观的更改
      //1.正则表达式，用户输入的数据是否合法
      //正则表达式————验证账号格式
      var isUserAccount = /^\d{9}$/;
      //正则表达式————密码是否为10~16位
      var isUserPassword = /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{10,16}/;
      //正则表达式————判断手机号格式
      var isUserPhoneNumber = /^1(3|4|5|7|8)\d{9}$/;

      switch (str) {
        case "A":
          // 如果账号为空，则清除样式
          if (this.account == "") {
            this.ClassA = "";
            this.ClassAicon = "";
          } else {
            // 如果不为空且格式正确，显示成功的样式
            if (isUserAccount.test(this.account)) {
              var Account = localStorage.getItem("Account");
              // 如果格式正确，判断本地存储中是否有此账号
              if (this.account == Account) {
                this.ClassA = "has-warning";
                this.ClassAicon = "glyphicon glyphicon-warning-sign";
                alert("账号已被注册");
                return;
              }
              this.ClassA = "has-success";
              this.ClassAicon = "glyphicon glyphicon-ok";
              // 判断值+1
              this.flag += 1;
            } else {
              // 否则就显示错误的样式
              this.ClassA = "has-error";
              this.ClassAicon = "glyphicon glyphicon-remove";
            }
          }
          break;
        case "B":
        // 如果密码为空
          if (this.password == "") {
            this.ClassB = "";
            this.ClassBicon = "";
          } else {
            //如果密码格式正确
            if (isUserPassword.test(this.password)) {
              this.ClassB = "has-success";
              this.ClassBicon = "glyphicon glyphicon-ok";
              // 判断值+1
              this.flag += 1;
            }else{
              this.ClassB = "has-warning";
              this.ClassBicon = "glyphicon glyphicon-warning-sign";
              alert('密码格式有误');
            }
          }
          break;
        case "C":
        // 如果密码为空
          if (this.passwordAgain == "") {
            this.ClassC = "";
            this.ClassCicon = "";
          } else {
            // 如果密码和第一次密码输入相同，则成功
            if(this.passwordAgain === this.password){
              this.ClassC = "has-success";
              this.ClassCicon = "glyphicon glyphicon-ok";
              // 判断值+1
              this.flag += 1;
            }else{
              this.ClassC = "has-error";
              this.ClassCicon = "glyphicon glyphicon-remove";
              alert('两次密码不一致');
            }
          }
          break;
        case "D":
          // 如果手机号为空
          if (this.phone == "") {
            this.ClassD = "";
            this.ClassDicon = "";
          } else {
            // 如果不为空且格式正确，显示成功的样式
            if (isUserPhoneNumber.test(this.phone)) {
              var Phone = localStorage.getItem("Phone");
              // 如果格式正确，判断本地存储中是否有此账号
              if (this.phone == Phone) {
                this.ClassD = "has-warning";
                this.ClassDicon = "glyphicon glyphicon-warning-sign";
                alert("账号已被注册");
                return;
              }
              this.ClassD = "has-success";
              this.ClassDicon = "glyphicon glyphicon-ok";
              // 判断值+1
              this.flag += 1;
            } else {
              // 否则就显示错误的样式
              this.ClassD = "has-error";
              this.ClassDicon = "glyphicon glyphicon-remove";
            }
          }
          break;
      }
    },
    register(){
      if(this.account=="" || this.password=="" || this.passwordAgain=="" || this.phone==""){
        alert('注册文本为空，请检查！');
      }else{
        if(this.flag != 4){
          alert('注册文本有误，请检查！');
        }else{
          // 把成功的信息录入本地存储
          localStorage.setItem('Account', this.account);
          localStorage.setItem('Password', this.password);
          localStorage.setItem('Phone', this.phone);
          alert('注册成功！');
          // 注册成功后自动进入登录页面组件
          window.location.href="http://localhost:3000/#/login";
        }
      }
    }
  }
};
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
  .ruleBox {
    font-size: 0;
    p {
      font-size: 10px;
      a {
        font-size: 10px;
      }
    }
  }
}
</style>