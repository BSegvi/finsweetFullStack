<template>
  <div class="authors container">
    <h1>List of Authors</h1>
    <div class="authors__List">
      <div v-for="author in data" class="author__ListItem">
        <div>
          <RouterLink :to="`author/${author.id}`">
            <img src="/icons/finsweetAuthor.svg" alt="">
            <h4>{{ author.first_name }} {{ author.last_name }}</h4>
            <span >{{ author.role }} @Company</span>
          </RouterLink>

          <div class="authors__ListSocial">
            <a href="//www.facebook.com" target="_blank" v-if="author.facebook">
              <img src="/icons/finsweetFacebook.svg" alt="" >
            </a>
            <a href="//www.x.com" target="_blank" v-if="author.twitter">
              <img src="/icons/finsweetTwitter.svg" alt="" >
            </a>
            <a href="//www.instagram.com" target="_blank" v-if="author.instagram">
              <img src="/icons/finsweetInstagram.svg" alt="" >
            </a>
            <a href="//www.linkedin.com" target="_blank" v-if="author.linkedin">
              <img src="/icons/finsweetLinkedin.svg" alt="" >
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.authors {
  margin-bottom: r(96);
  h1 {
    margin-bottom: r(48);
    text-align: center;
    font-family: 'Sen';
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
    font-weight: 700;
  }
}

.authors__List {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: r(32);
  justify-content: space-around;
  @media (max-width: '1200px') {
    grid-template-columns: repeat(3, 1fr);
  }
}

.author__ListItem {
  max-width: r(296);
  width: 100%;
  background-color: rgba(244, 244, 244, 1);
  text-align: center;
  padding: r(40) 0;
  &:hover {
    background-color: rgba(251, 246, 234, 1);
    cursor: pointer;
  }
  > img {
    max-width: r(128);
    width: 100%;
    margin-bottom: r(20);
  }

  h4 {
    font-family: 'Sen';
    font-size: r(28);
    line-height: r(40);
    letter-spacing: r(-1);
    font-weight: 700;
  }

  span {
    font-family: 'Inter';
    font-size: r(14);
    line-height: r(20);
    font-weight: 400;
    color: rgba(109, 110, 118, 1);
  }
}

.authors__ListSocial {
  margin-top: r(20);
  display: flex;
  justify-content: center;
  gap: r(16);
  img {
    will-change: transform;
    transition: all .2s;
  }

  img:hover {
    transform: scale(1.3);
  }
}
</style>

<script setup>
const props = defineProps({
  data: {}
})
</script>