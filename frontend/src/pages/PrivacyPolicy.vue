<template>
  <section class="privacyPolicy">
    <div class="privacyPolicy__Header">
      <h1>Privacy Policy</h1>
      <span>Last Updated  on 27th January 2022</span>
    </div>
    <div class="privacyPolicy__Content">
      <h2>
        Lorem ipsum dolor sit amet
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
      </p>
    </div>
  </section>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
.privacyPolicy__Header {
  text-align: center;
  background-color: rgba(244, 240, 248, 1);
  padding: r(80) 0;
  h1 {
    max-width: r(500);
    width: 100%;
    margin: 0 auto;
  }
  span {
    max-width: r(500);
    width: 100%;
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
  }
}

.privacyPolicy__Content {
  max-width: r(768);
  width: 100%;
  margin: r(128) auto;
  h2 {
    font-family: 'Sen';
    font-size: r(48);
    line-height: r(64);
    letter-spacing: r(-2);
    font-weight: 700;
    margin-bottom: r(32);
  }

  p {
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    color: rgba(76, 76, 76, 1);
  }
}

</style>