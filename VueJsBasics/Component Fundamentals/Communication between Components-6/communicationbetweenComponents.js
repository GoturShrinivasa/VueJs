let rolescomponent = {
  template:"#roleTemplateId",
  props: {
    name: {
      type: String
    },
    selectedRole: {                           /*using prop set this val and check in computed*/
      type: String
    }
  },
  methods:{
    clickedChildbutton(){
      this.$emit('clickedname',this.name)     /*passsing data to parent template */
    }
  },
  computed: {
    isSelectedRole(){
      return this.name === this.selectedRole
    }
  }
}



let rolepickercomponent  = {
  template: "#rolePickerTemplate",
  components: {
      roles: rolescomponent
  },
  data() {
    return {
      roles: ['solution Architect', 'Software Dev', 'Software Tetser', 'DevOps'],
      selectedRoleFromParent: null
    }
  },
  methods:{
    selectedRoleInParent(name){                     /*set data in the parent method*/
      this.selectedRoleFromParent = name;
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
  
