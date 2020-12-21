// Vue.component("roles", {
//   template: "#roleTemplateId",
//   props: {
//     name: {
//       type: String
//     }
//   }
// })
let rolescomponent = {
  template:"#roleTemplateId",
  props: {
    name: {
      type: String
    }
  }
}


// Vue.component("role-picker", {
//   template: "#rolePickerTemplate",
//   components: {
//       roles: rolescomponent
//   },
//   data() {
//     return {
//       roles: ['solution Architect', 'Software Dev', 'Software Tetser', 'DevOps']
//     }
//   }
// })

let rolepickercomponent  = {
  template: "#rolePickerTemplate",
  components: {
      roles: rolescomponent
  },
  data() {
    return {
      roles: ['solution Architect', 'Software Dev', 'Software Tetser', 'DevOps']
    }
  }
}

new Vue(
  {
    el: '#app',
    components :{
      'role-picker': rolepickercomponent 
    }
  }
)
  
