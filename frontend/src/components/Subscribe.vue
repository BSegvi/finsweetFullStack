<template>
  <form class="subscribe">
    <input type="text" placeholder="First name" v-model="firstName"/>

    <input type="text" placeholder="Last name" v-model="lastName"/>

    <input type="text" placeholder="Your Email" v-model="email"/>

    <VueDatePicker v-model="date" :enable-time-picker="false" />

    <button class="subscribe__SubmitButton" @click.prevent="handleSubscribe">
    Subscribe
    </button>
  </form>
</template>

<script setup>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  import { ofetch } from 'ofetch';
  import { ref } from 'vue';

  const date = ref()
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const userData = ref({})

  async function handleSubscribe() {
    userData.value = {
      "email_address": email.value,
      "status": "subscribed",
      "merge_fields": {
        "FNAME": firstName.value,
        "LNAME": lastName.value,
        "BIRTHDAY": new Date(date.value).toLocaleDateString('en-US'),
      }
    }
    try {
      const response = await ofetch('http://localhost:3000/mailchimp/add-member', {
        method: 'POST',
        body: {
          userData: userData.value
        }
      })


    } catch(e) {
      console.dir(e)
    }
  }

</script>

<style lang="scss">
  .subscribe {
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
      padding: r(24) 0 r(24) r(34);
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
  }

  .subscribe__SubmitButton {
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
</style>