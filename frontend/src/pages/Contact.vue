<template>
  <section class="contact">
    <div class="contact__Header">
      <h3>Contact Us</h3>
      <h1>Let's Start a Conversation</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
    </div>

    <WorkingHours />
    <ContactForm />
  </section>
</template>

<script setup>
  import WorkingHours from '@/components/WorkingHours.vue';
  import ContactForm from '@/components/ContactForm.vue';
</script>

<style lang="scss" scoped>
.contact__Header {
  text-align: center;
  max-width: r(768);
  width: 100%;
  margin: r(128) auto r(64);
  h3 {
    font-size: r(16);
    line-height: r(20);
    letter-spacing: r(3);
    font-weight: 900;
    color: rgba(35, 37, 54, 1);
    text-transform: uppercase;
  }

  h1 {
    font-family: 'Sen';
    font-size: r(48);
    line-height: r(64);
    font-weight: 700;
    letter-spacing: r(-2);
    margin: r(12) 0 r(24);
  }

  p {
    font-size: r(16);
    line-height: r(28);
    font-weight: 400;
    color: rgba(109, 110, 118, 1);
  }
}

</style>