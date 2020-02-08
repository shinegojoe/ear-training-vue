
// import css from './css/index.css'
// import sass from './sass/index.sass'

// const style = require('./css/index.css');
import img from '../images/6.png'
import img2 from '../images/05.jpg'
import img3 from '../images/4.jpg'

// import mp3 from '../sounds/A4.mp3'


import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import {store} from './store/store.js'


const router = new VueRouter({
    routes
  })

Vue.use(VueRouter)

  
console.log("routers", routes)
console.log("route", router)
console.log('store', store)

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})

class Test{
    constructor(){
        console.log('yayay')

    }
    qq(){
        console.log("Xxx")
        const root = document.getElementById("root")
        const xx = document.createElement('div')
        console.log("xx", xx)
        xx.textContent = "zz"
        root.appendChild(xx)

        // const path = '../src/sounds/A4.mp3'
        const path = '../dist/A4.mp3'
        const audio = new Audio(path)
        console.log(audio)
        audio.play()


    
    }
}

const t = new Test()
// t.qq()

