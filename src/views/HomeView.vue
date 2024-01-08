<template>
  <Nav :navList="navList" :webLinks="webLinks"/>

  <Header :obj="headerObj"/>

  <main class="main">
    <About :obj="aboutObj"/>
    
    <h1>{{ syncTitle }}</h1>
  </main>
</template>

<script>
import { collection, onSnapshot } from 'firebase/firestore';
import db from '@/assets/js/firebase.js';
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      syncTitle: '',
      navList: [],
      webLinks: [],
      headerObj: {},
      aboutObj: {}
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

    onSnapshot(collection(db, 'Header'), snapshot => {
      snapshot.docs.map(doc => this.headerObj = {img: doc.data().headerImg, txt: doc.data().txt})
    })

    onSnapshot(collection(db, 'About'), snapshot => {
      snapshot.docs.map(doc => this.aboutObj = {title: doc.data().title, txt: doc.data().txt})
    })
  },
  components: {
    Nav,
    Header,
    About
  }
}
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  height: 50dvh;
  display: grid;
  place-items: center;
}

</style>