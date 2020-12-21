Vue.component('click-counter',{
  template: '#templateWrapperId',
  data(){
    return{
      count: 0 
    }
  }
})

new Vue({
  el: '#app'
})