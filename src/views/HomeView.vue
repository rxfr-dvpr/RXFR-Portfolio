<template>
  <Nav :navList="navList" :webLinks="webLinks"/>

  <section>
    <Header :obj="headerObj"/>
  </section>

  <main class="main">
    <About :obj="aboutObj"/>

    <Skills :obj="skillsObj"/>

    <Projects :obj="projectsObj"/>
    
    <Contact :obj="contactObj"/>    
  </main>
</template>

<script>
import { collection, onSnapshot } from 'firebase/firestore';
import db from '@/assets/js/firebase.js';
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      syncTitle: '',
      navList: [],
      webLinks: [],
      headerObj: {},
      aboutObj: {},
      skillsObj: {},
      projectsObj: {
        list: []
      },
      contactObj: {}
    }
  },
  async created() {
    await onSnapshot(collection(db, 'homePage'), snapshot => {
      snapshot.docs.map(doc => this.syncTitle = doc.data().title)
    })

    await onSnapshot(collection(db, 'Nav'), snapshot => {
      snapshot.docs.map(doc  => { 
        this.navList = doc.data().navList
        this.webLinks = doc.data().webLinks
      })
    })

    await onSnapshot(collection(db, 'Header'), snapshot => {
      snapshot.docs.map(doc => this.headerObj = {img: doc.data().headerImg, txt: doc.data().txt})
    })

    await onSnapshot(collection(db, 'About'), snapshot => {
      snapshot.docs.map(doc => {
        this.aboutObj = {title: doc.data().title, txt: doc.data().txt, mainTitle: doc.data().mainTitle}
        this.skillsObj.techIcons = doc.data().techIcons
      })
    })

    await onSnapshot(collection(db, 'Skills'), snapshot => {
      snapshot.docs.map(doc => {
        this.skillsObj.title = doc.data().title
        this.skillsObj.txt = doc.data().txt
      })
    })

    await onSnapshot(collection(db, 'Projects'), snapshot => {
      snapshot.docs.map(doc => {
        this.projectsObj.title = doc.data().title
        this.projectsObj.txt = doc.data().txt
        
        doc.data().projectsList.map(item => {
          this.projectsObj.list.push({
            title: item.title,
            img: item.img,
            txt: item.txt,
            codeLink: item.codeLink,
            link: item.previewLink,
            stackList: item.stackList
          })
        })

      })
    })

    await onSnapshot(collection(db, 'Contact'), snapshot => {
      snapshot.docs.map(doc => {
        this.contactObj.title = doc.data().title
        this.contactObj.subtitle = doc.data().subtitle
      })
    })
      
  },
  components: {
    Nav,
    Header,
    About,
    Skills,
    Projects,
    Contact
  }
}
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 170px;
  padding: 40px 0 80px;
}

.sync-title {
  text-align: center;
}

@media (max-width: 992px) {
  .main {
    row-gap: 120px;
  }
}

</style>