<template>
  <nav class="navigationWrapper">
    <div class="navigation container">
      <RouterLink to="/">
        <img src="/icons/finsweetLogo.svg" alt="" />
      </RouterLink>
      <ul class="navigation__List">
        <li>
          <RouterLink to="/"> Home </RouterLink>
        </li>
        <li>
          <RouterLink to="/blog"> Blog </RouterLink>
        </li>
        <li>
          <RouterLink to="/about"> About Us </RouterLink>
        </li>
        <li>
          <a href=""> Contact Us </a>
        </li>
        <li>
          <button class="navigation__ListSubscribeButton"> Subscribe </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped lang="scss">
.navigationWrapper {
  background-color: #232536;
  padding: r(25);
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img:first-of-type {
    max-width: r(140);
    width: 100%;
  }
}

.navigation__List {
  color: white;
  display: flex;
  align-items: center;
  gap: r(24);
  li {
    a {
      font-size: r(16);
      line-height: r(28);
      font-weight: 400;
    }
  }
}

.navigation__ListSubscribeButton {
  font-family: 'Sen';
  background-color: white;
  max-width: r(179);
  width: 100%;
  padding: r(16) r(48);
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
