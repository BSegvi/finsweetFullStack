<template>
  <section class="footer">
    <Navigation />
    <div class="footer__Subscribe container">
      <h3>Subscribe to our news letter to get latest updates and news</h3>
      <form>
        <input
          type="text"
          class="fname"
          name="fname"
          value="Enter Your Email"
        /><br />
        <input type="submit" value="Submit" class="readMore__YellowButton" />
      </form>
    </div>
    <div class="footer__Contact container">
      <div class="footer__ContactAddress">
        <span>Finstreet 118 2561 Fintown</span>
        <span>Hello@finsweet.com 020 7993 2905</span>
      </div>
      <div class="footer__ContactSocial">
        <a href="">
          <img src="/icons/finsweetFacebookFooter.svg" alt="" />
        </a>
        <a href="">
          <img src="/icons/finsweetFacebookFooter.svg" alt="" />
        </a>
        <a href="">
          <img src="/icons/finsweetFacebookFooter.svg" alt="" />
        </a>
        <a href="">
          <img src="/icons/finsweetFacebookFooter.svg" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<style scoped lang="scss">
.footer {
  background-color: rgba(35, 37, 54, 1);
}

.footer__Subscribe {
  background-color: #2f3040;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: r(80) r(64);
  h3 {
    font-family: "Sen";
    font-size: r(36);
    line-height: r(48);
    letter-spacing: r(-2);
    font-weight: 700;
    max-width: r(562);
    width: 100%;
  }

  form {
    display: flex;
    gap: r(24);
    align-items: center;
    input.fname {
      background-color: #2f3040;
      border: 1px solid rgba(109, 110, 118, 1);
      color: rgba(109, 110, 118, 1);
      max-width: r(323);
      min-width: r(323);
      max-height: r(56);
      min-height: r(56);
    }
  }
}

.footer__Contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: r(48);
  padding-bottom: r(56);
}

.footer__ContactAddress {
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.7);
  font-size: r(16);
  line-height: r(28);
  font-weight: 400;
}

.footer__ContactSocial {
  a + a {
    margin-left: r(27);
  }

  img {
    min-width: r(16);
    max-width: r(16);
  }
}
</style>
