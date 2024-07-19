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
          <RouterLink to="/contact"> Contact Us </RouterLink>
        </li>
        <li>
          <slot>
            <RouterLink to="/privacy-policy" class="navigation__ListPrivacy"> Privacy policy </RouterLink>
          </slot>
        </li>
      </ul>
    </div>
  </nav>
</template>

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
</style>
