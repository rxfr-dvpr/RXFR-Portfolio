<template>
  <router-view/>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  // data() {
  //   return {
  //     token: '5859063379:AAHWesMBjC3Hq9eeqkZrxGIQKUY1_wy6YG0',
  //     chatId: 1360394917,
  //     obj: ''
  //   }
  // },
  // async beforeMount() {
  //   const apiKey = 'd9e53816d07345139c58d0ea733e3870';

  //   await $.getJSON('https://api.bigdatacloud.net/data/ip-geolocation?key=' + apiKey, (data) => {
  //     this.obj = JSON.stringify(data.location)
  //   });

  //   axios
  //   .post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${this.obj}`)
  //   .then((res) => {
  //     ''
  //   })
  //   .catch((err) => {
  //     ''
  //   })
  // }
}

</script>

<style lang="scss" scoped>

</style>