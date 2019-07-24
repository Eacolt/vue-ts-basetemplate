<template>
  <div id="app">
	  
	 <div class="mypic" :style="bgimg"></div>
	 
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  
  import {Component} from 'vue-property-decorator'
  import './App.css'
 
  @Component
  export default class App extends Vue {
     mystyle = {
 
		 backgroundImage:'url("./img/high_bg.jpg")',
		 backgroundSize:'contain',
		 backgroundRepeat:'no-repeat',
		 color:'white'
	 }
	 bgimg = {
		 backgroundImage:`url("${process.env.baseURL}/img/high_bg.jpg")`,
		 backgroundRepeat:'no-repeat',
		 backgroundSize:'contain'
	 }
  }
</script>
<style lang="less" scoped>
#app{
	position: absolute;
	width:19.2rem;
	height:10.8rem;
	background: black;
	margin: 0 auto;
	left:0;
	right:0;
	transform: translate(0,-50%);
	top:50%;
	background:black;
}
 
</style>

