<template>
  <section class="skills__section" id="skills">
    <div class="container">
      <div class="row">

        <div class="skills__descr">
          <h2 class="skills__descr-title all-title">{{ obj.title }}</h2>
          <p class="skills__descr-txt">{{ obj.txt }}</p>
        </div>

        <div class="tech-icons">
          <img :src="imgUrl" alt="" class="tech-icons-item" v-for="imgUrl in obj.techIcons" :key="imgUrl">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Tech Stack',
  props: {
    obj: {
      type: Object,
      default: {},
      required: true
    }
  }
}

</script>

<style lang="scss" scoped>

.skills__section {
  width: 100%;

  .row {
    flex-direction: column;
    align-items: center;
    row-gap: 60px;
  }

  .skills__descr {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 10px;

    &-title {
      text-transform: capitalize;
    }

    &-txt {
      font-size: 17px;
      color: var(--main-gray);
    }
  }

  .tech-icons {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;
    justify-content: center;

    &-item {
      max-width: 70px;
      width: 100%;
      max-height: 70px;
      height: 100%;
      display: block;
      user-select: none;
      pointer-events: none;
    }
  }
}

</style>