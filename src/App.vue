<template>
  <div id="app">
    <!-- 设置路由出口 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 26.67vw;
  }
  body{
    background-color: #f8f8f8;
  }
  img,span,i{
    display: block;
  }
  i{
    font-style: normal;
  }
  ul{
    list-style: none;
  }

</style>
