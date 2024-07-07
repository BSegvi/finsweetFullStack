<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

</script>

<template v-if="isLoaded">
  <Navigation />
  <router-view />
  <Footer />
</template>

<style scoped>
 
</style>
