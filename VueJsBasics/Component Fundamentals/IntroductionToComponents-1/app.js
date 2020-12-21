// Vue.component('clickCounter',{
//   data: function(){
//     return {count: 0};
//   },
//   template: '<button v-on:click="count++">you clicked me on {{count}} times.</button>'
// })

// new Vue({
//   el:'#app'
// })

Vue.component('click-counter', {
  template: '<button @click="count++">{{count}}</button>',
  data () {
    return {
      count: 0
    }
  }
})

new Vue({
  el: '#app'
})