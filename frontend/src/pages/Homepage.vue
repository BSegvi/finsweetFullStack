<template>
  <section class="homepage">
    <div class="homepage__Hero">
      <img src="" alt="">
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ofetch } from "ofetch";

const info = ref(null);

onMounted(async () => {
  try {
    info.value = await ofetch("http://localhost:3000/homepage");
    console.log(info.value)
  } catch (e) {
    console.dir(e);
  }
});
</script>

<style scoped>

</style>
