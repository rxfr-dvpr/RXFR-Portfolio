<template>
  <section class="about__section" id="about">
    <div class="container">
        <div class="row">
            <h2 class="about-title all-title" v-html="obj.title"></h2>
            <p class="about-txt" v-html="obj.txt"></p>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'About Section',
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

.about__section {
    width: 100%;
    
    .row {
        flex-direction: column;
        row-gap: 40px;
    }

    .about-title, .about-txt {
        max-width: 800px;
        width: 100%;
    }

    .about-txt {
        line-height: 130%;
        color: var(--main-gray);
        margin-left: auto;
        text-align: end;
    }

    &-title {
        text-align: center;
    }
}

</style>