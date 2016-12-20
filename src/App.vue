<template>
  <div id="app">
    <pro-menu></pro-menu>
    <div class="nav-left">
      <left-menu></left-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import proMenu from './components/common/header.vue'
import leftMenu from './components/common/left.vue'
export default {
  name: 'app',
  components : {
    proMenu,leftMenu
  }
};
</script>

<style>
  body {
    padding: 0;
    margin: 0
  }

  .nav-left {
	position: relative;
	position: fixed;
	top: 60px;
	left: 180px;
	width: 8%;
	margin-left: -180px;
	bottom: 0;
	overflow-x: hidden;
	transition: all ease 0.2s;
	overflow: hidden;
	height: 600px;
}
.content{
	width: 80%;
	    margin: 30px 0 0 9%;
}
</style>