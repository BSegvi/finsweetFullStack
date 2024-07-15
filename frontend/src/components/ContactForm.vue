<template>
  <form class="contactForm">
    <input type="text" id="fname" name="firstname" placeholder="Full name" />

    <input type="text" id="mail" name="firstname" placeholder="Your Email" />

    <input
      type="text"
      id="query"
      name="firstname"
      placeholder="Query Related"
    />

    <textarea
      type="textarea"
      id="message"
      rows="8"
      cols="50"
      name="firstname"
      placeholder="Message"
    />
    <input
      type="submit"
      class="contactForm__SubmitButton"
      value="Send Message"
    />
  </form>
</template>

<script setup></script>

<style lang="scss" scoped>
.contactForm {
  display: flex;
  flex-direction: column;
  max-width: r(768);
  width: 100%;
  margin: 0 auto r(128);
  gap: r(16);
  font-size: r(16);
  line-height: r(28);
  font-weight: 400;
  input {
    font-family: "Inter";
    padding: r(24) 0 r(24) r(24);
    border: 1px solid rgba(109, 110, 118, 0.5);
    border-radius: 2px;
    color: rgba(35, 37, 54, 1);
    outline: none;
  }

  textarea {
    font-family: "Inter";
    padding: r(24) 0 r(24) r(24);
    border: 1px solid rgba(109, 110, 118, 0.5);
    border-radius: 2px;
    outline: none;
  }

  .contactForm__SubmitButton {
    max-width: r(768);
    width: 100%;
    padding: r(16) 0;
    border: none;
    border-radius: 0;
    margin-top: r(16);
    background-color: rgba(255, 208, 80, 1);
    font-family: "Sen";
    font-size: r(24);
    line-height: r(32);
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: rgba(237, 193, 74, 1);
    }
  }
}
</style>
