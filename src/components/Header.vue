<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <img :src="obj.img" alt="" class="header-img">

            <p class="header-txt" v-html="obj.txt"></p>
        </div>
    </div>
  </header>
</template>

<script>

export default {
    name: 'Header',
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

.header {
    width: 100%;
    padding: 80px 0;

    .row {
        column-gap: 50px;
        row-gap: 35px;
        align-items: center;
        justify-content: center;
    }

    &-img {
        max-width: 350px;
        width: 100%;
        display: block;
    }

    &-txt {
        max-width: 450px;
        font-size: 35px;
        row-gap: 5px;
        font-weight: 600;
        transition: .4s;
    }
}

</style>