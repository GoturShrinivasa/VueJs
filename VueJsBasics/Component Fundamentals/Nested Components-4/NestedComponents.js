Vue.component('role-picker',{
  template:"#rolePickerTemplate",
  data(){
    return {
      roles: ['solution Architect','Software Dev', 'Software Tetser', 'DevOps']
    }
  }
  })

Vue.component('roles',{
  template:'#roleTemplateId',
  props:{
    name:{
      type: String
    }
  }
})


new Vue({
  el: '#app'
})
