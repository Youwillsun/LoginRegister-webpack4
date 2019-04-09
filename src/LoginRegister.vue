<template>
  <div id="LoginRegister">
    <div class="lrBox container">
      <div class="row">
        <img src="./images/LOGO.jpg" class="img-circle logo">
      </div>
      <div class="title">
        <p>
          <span>登录</span>·<span>注册</span>
        </p>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#LoginRegister {
  width: 100%;
  height: 100%;
  .lrBox {
    width: 255px;
    height: 400px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background-color: #f4f4f4;
    border-radius: 20px;
    .logo {
      width: 80px;
      height: 80px;
    }
    .title {
      text-align: center;
      p {
        font-size: 25px;
        letter-spacing: 5px;
        font-weight: bold;
        font-family: "楷体";
        span {
          margin: 0 15px;
        }
      }
    }
    .content{
      width: 100%;
      margin-top: -5px;
    }
  }
}
</style>

