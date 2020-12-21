Vue.component('roles',{
  template:'#roleTemplateId',
  props:{
    name:{
      type: String
    }
  }
})

new Vue({
  el: '#app',
  data: {
    roles: ['solution Architect','Software Dev', 'Software Tetser', 'DevOps']
  }
})
