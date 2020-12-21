<template>
    <!-- Dynamic routing -->
  <nav id="navigationBar">
    <p class="logo">
      Travel APP
    </p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li class="links" v-for="destination in destinations" :key="destination.name">
        <router-link :to="{ name: 'DestinationDetail', params: { slug: destination.slug } }" >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";

export default {
  data(){
    return{
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
#navigationBar {
  display: flex;
}
#navigationBar a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}
#navigationBar a.activeClassForNavigationContent {
  color: #42b983;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>