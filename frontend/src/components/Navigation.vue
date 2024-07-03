<template>
  <nav class="navigationWrapper">
    <div class="navigation container">
      <a href="/">
        <img src="/icons/finsweetLogo.svg" alt="" />
      </a>
      <ul class="navigation__List">
        <li>
          <a href=""> Home </a>
        </li>
        <li>
          <a href=""> Blog </a>
        </li>
        <li>
          <a href=""> About Us </a>
        </li>
        <li>
          <a href=""> Contact Us </a>
        </li>
        <li>
          <button class="navigation__ListSubscribeButton">Subscribe</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style lang="scss">
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
