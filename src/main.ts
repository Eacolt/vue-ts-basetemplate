import Vue from 'vue'
import App from './components/App.vue'
import './main.css'
function preload() {
   
    window.addEventListener('resize', resize)
    var ratio = 1920 / 1080;



    function resize() {
		var screenW:any = document.body.clientWidth;
		
		 var screenH:any = document.body.clientHeight;
		console.log(screenW)

        if (screenW / screenH > ratio) {
            document.documentElement.style.fontSize = (screenH / 1080) * 100 + 'px'
        } else {
            document.documentElement.style.fontSize = (screenW / 1920) * 100 + 'px';
        }


    }
    resize();
 
   

}
window.addEventListener('DOMContentLoaded', preload);



new Vue({
    render:(h)=>h(App)
}).$mount('#root')