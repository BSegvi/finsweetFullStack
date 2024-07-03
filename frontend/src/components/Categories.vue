<template>
  <div class="categories container">
    <h2>Choose a Category</h2>
    <div class="categories__Flex" >
      <div class="categories__FlexItem" v-for="(item, index) in data">
        <img :src="categoryImage[index].image_src" alt="" />
        <h3 v-text="item.title"/>
        <p v-text="item.description"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.categories {
  margin-bottom: r(128);
  h2 {
    text-align: center;
    margin-bottom: r(48);
    font-family: 'Sen';
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
    font-weight: 700;
  }
}

.categories__Flex {
  display: flex;
  gap: r(32);
}

.categories__FlexItem {
  max-width: r(296);
  width: 100%;
  box-shadow: inset 0 0 0 2px rgba(109, 110, 118, .18);
  padding: r(32);
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 208, 80, 1);
    box-shadow: none;
  }
  
  h3 {
    font-family: 'Sen';
    font-size: r(28);
    line-height: r(40);
    letter-spacing: r(-1);
    margin: r(16) 0 r(4);
    max-width: r(232);
    width: 100%;
  }

  p {
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    color: rgba(109, 110, 118, 1);
  }
}
</style>

<script setup>
import { ref } from "vue";
const props = defineProps({
  data: {},
});

const categoryImage = ref([
  {
    image_src: "/icons/finsweetCategoriesBusiness.svg"
  },
  {
    image_src: "/icons/finsweetCategoriesEconomy.svg"  
  },
  {
    image_src: "/icons/finsweetCategoriesEconomy.svg"  
  },
  {
    image_src: "/icons/finsweetCategoriesTechnology.svg"  
  }

]
);
</script>
