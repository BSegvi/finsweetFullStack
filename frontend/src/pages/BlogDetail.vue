<template>
  <section class="blogDetail container" v-if="isLoaded">
    <div class="blogDetail__Header">
      <div class="blogDetail__HeaderAuthorDate">
        <img src="/images/finsweetTestimonialsAuthor.png" alt="">
        <div>
          <h3>
            {{ data.first_name }} {{ data.last_name }}
          </h3>
          <time>
            Posted on {{ new Date(data.published_date).toLocaleDateString('hr-HR') }}
          </time>
        </div>
      </div>
      <h1 v-text="data.title"/>
    </div>
    <JoinUs />
  </section>
</template>

<script setup>
import JoinUs from '@/components/JoinUs.vue';
import { ofetch } from 'ofetch';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const data = ref(null)
const isLoaded = ref(false)

onMounted(async () => {
  try {
    data.value = await ofetch(`http://localhost:3000${route.fullPath}`)
    isLoaded.value = true;
    console.log(data.value)
  } catch(e) {
    console.dir(e);
  }
})
  
</script>

<style scoped lang="scss">

.blogDetail {
  margin-top: r(128);
}
  .blogDetail__Header {
    max-width: r(768);
    width: 100%;
    margin: 0 auto;

    h1 {
      font-family: 'Sen';
      font-size: r(48);
      line-height: r(64);
      letter-spacing: r(-2);
      font-weight: 700;
      margin: r(24) 0 r(34);
    }
  }

  .blogDetail__HeaderAuthorDate {
    display: flex;
    align-items: center;
    gap: r(16);
    img {
      max-width: r(48);
      min-width: r(48);
      min-height: r(48);
      max-height: r(48);
    }

    > div {
      h3 {
        font-family: 'Sen';
        font-size: r(28);
        line-height: r(40);
        letter-spacing: r(-1);
        font-weight: 700;
        color: rgba(89, 46, 169, 1);
        margin-bottom: r(-4 );
      }

      time {
        font-size: r(16);
        line-height: r(28);
        font-weight: 400;
      color: rgba(109, 110, 118, 1);
      }
    }
  }
</style>