<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Navigation >
    <button class="navigation__ListSubscribeButton"> 
      <a href="#joinUs"> Subscribe </a>
    </button>
  </Navigation>
  <router-view />
  <Footer />
</template>

<style scoped lang="scss">
 .navigation__ListSubscribeButton {
  font-family: 'Sen';
  background-color: white;
  max-width: r(179);
  width: 100%;
  padding: r(16) r(48);
  border: none;
  outline: none;
  color: #232536;
  font-weight: 700;
  font-size: r(18);
  line-height: r(24);
  cursor: pointer;
  opacity: .8;
  &:hover {
    opacity: 1;
  }
}
</style>
