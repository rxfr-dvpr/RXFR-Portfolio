<template>
  <main class="main">
    <h1>{{ syncTitle }}</h1>
  </main>
</template>

<script>
import { collection, onSnapshot } from 'firebase/firestore';
import db from '@/assets/js/firebase.js';

export default {
  name: 'HomeView',
  data() {
    return {
      syncTitle: ''
    }
  },
  created() {    
    onSnapshot(collection(db, 'homePage'), snapshot => {
      snapshot.docs.map(doc => this.syncTitle = doc.data().title)
    })
  }
}
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  height: 100dvh;
  display: grid;
  place-items: center;
}

</style>