<template>
  <div class="workingHours">
    <div class="workingHours__Hours">
      <h3>Working hours</h3>
      <span>Monday To Friday</span>
      <span>9:00 AM to 8:00 PM </span>
      <span>Our Support Team is available 24/7</span>
    </div>
    <div class="workingHours__Contact">
      <h3>Contact Us</h3>
      <span>020 7993 2905</span>
      <span>hello@finsweet.com</span>
    </div>
  </div>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
.workingHours {
  display: flex;
  gap: r(42);
  max-width: r(768);
  width: 100%;
  margin: 0 auto r(32);
  background-color: rgba(89, 46, 169, 1);
  padding: r(48) r(74);

  > div {
    display: flex;
    flex-direction: column;
    max-width: r(294);
    width: 100%;
    h3 {
      font-size: r(14);
      line-height: r(20);
      font-weight: 400;
      color: white;
      opacity: 0.6;
      padding-bottom: r(16);
      border-bottom: 1px solid rgba(255, 255, 255, .1);
    }

    span {
      font-family: 'Sen';
      font-size: r(20);
      line-height: r(32);
      font-weight: 700;
      color: rgba(255, 255, 255, 1);
      &:first-of-type {
        padding-top: r(16);
      }

      &:last-of-type {
        font-family: 'Inter';
        font-size: r(16);
        line-height: r(28);
        font-weight: 400;
        opacity: 0.3;
      }
    }
  }
}
</style>