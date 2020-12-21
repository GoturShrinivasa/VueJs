// Vue.component("github-user-card", {
//   template: "github-user-card-template",
//   props: {
//     username: {
//       type: String,
//       required: true
//     }
//   },
//   data() {
//     return {
//       user: {}
//     }
//   },

//   created(){
//     axios.get(`https://api.github.com/users/${this.username}`).then(response =>{
//         this.user = response.data;
//     })
//   }
// })

Vue.component('github-user-card', {
  template: '#github-user-card-template',
  props: {
    username: {
      type: String,
      
    }
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    axios.get(`https://api.github.com/users/${this.username}`)
      .then(response => {
        this.user = response.data
      })
  }
})

new Vue({
  el: '#app',
  data: {
    usernames: ['hootlex', 'rahaug', 'sdras', 'akryum','GoturShrinivasa']
  }
})