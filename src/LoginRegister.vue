<template>
  <div id="LoginRegister">
    <div class="lrBox container">
      <!-- logo区域 -->
      <div class="row">
        <transition>
          <img src="./images/LOGO.jpg" class="img-circle logo">
        </transition>
      </div>
      <!-- 标题区域 -->
      <div class="title">
        <p>
          <!-- <span>登录</span>·<span>注册</span> -->
          <router-link to="/login" tag="span">登录</router-link>·
          <router-link to="/register" tag="span">注册</router-link>
        </p>
      </div>
      <!-- 登录注册组件区 -->
      <div class="content">
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
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
    padding: 0 10px;
    .row {
      text-align: center;
      .logo {
        width: 80px;
        height: 80px;
        margin-top: 10px;
      }
      .logo:hover {
        cursor: pointer;
        animation: around 0.8s ease infinite;
      }
      @keyframes around {
        0%{
          transform: scale(1);
        }
        30%{
          transform: scale(1.2);
        }
        60%{
          transform: scale(1.1);
        }
        30%{
          transform: scale(1);
        }
      }
    }
    .title {
      text-align: center;
      //消除换行后的空格
      font-size: 0;
      margin-top: 10px;
      p {
        font-size: 25px;
        font-weight: bold;
        font-family: "楷体";
        span {
          margin: 0 15px;
          letter-spacing: 10px;
        }
        span:hover {
          cursor: pointer;
          color: red;
        }
      }
    }
    .content {
      width: 100%;
    }
  }
}

// 动画
.v-enter{
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
  transform: rotateY(180deg);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

