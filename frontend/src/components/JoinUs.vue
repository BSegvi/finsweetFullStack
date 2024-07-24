<template>
  <section class="join container">
    <h1>Join our team to be a part of our story</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <button class="readMore__YellowButton" @click="loadModal(true)">
      <a>
        Join Now
      </a>
    </button>

    <div class="join__Modal" v-if="isModalOpen" @click="loadModal(null)">
      <div class="join__ModalWrapper" @click.stop>
        <Subscribe />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Subscribe from './Subscribe.vue';

const isModalOpen = ref(false)

function loadModal(value) {
  isModalOpen.value = value
  document.body.classList[isModalOpen.value ? 'add' : 'remove']("isOverflowHidden")
}
</script>

<style scoped lang="scss">
.join {
  max-width: r(414);
  width: 100%;
  text-align: center;
  margin: r(128) auto;
  h1 {
    font-family: 'Sen';
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
    font-weight: 700;
  }
 
  p {
    font-family: 'Inter';
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    color: rgba(109, 110, 118, 1);
    margin: r(16) 0 r(32);
  }
}

.join__Modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
}

.join__ModalWrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  border-radius: r(16);
  background-color: rgb(160, 3, 160);
  max-width: r(715);
  width: 100%;
  padding: r(50) 0;
  .subscribe {
    width: unset;
    max-width: r(515);
    margin: 0 auto;
  }
}
</style>