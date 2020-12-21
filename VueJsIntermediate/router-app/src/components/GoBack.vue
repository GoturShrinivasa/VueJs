<template>
<div class="go-back">
<button @click="goBack">Go Back</button>  
</div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
button {
  border: 0;
}
</style>