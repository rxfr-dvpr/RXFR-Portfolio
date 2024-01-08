<template>
  <Nav :navList="navList" :webLinks="webLinks"/>

  <main class="main">
    <h1>{{ syncTitle }}</h1>
  </main>
</template>

<script>
import { collection, onSnapshot } from 'firebase/firestore';
import db from '@/assets/js/firebase.js';
import Nav from '@/components/Nav.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      syncTitle: '',
      navList: [],
      webLinks: []
    }
  },
  created() {    
    onSnapshot(collection(db, 'homePage'), snapshot => {
      snapshot.docs.map(doc => this.syncTitle = doc.data().title)
    })

    onSnapshot(collection(db, 'Nav'), snapshot => {
      snapshot.docs.map(doc  => { 
        this.navList = doc.data().navList
        this.webLinks = doc.data().webLinks
      })
    })
  },
  components: {
    Nav
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