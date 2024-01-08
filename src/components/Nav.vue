<template>
    <nav class="nav">
        <div class="container">
            <div class="row">

                <ul class="nav__list">
                    <li class="nav__list-item" v-for="item in navList" :key="item">
                        <a :href="`#${item.url}`" class="nav__list-link">{{ item.name }}</a>
                    </li>
                </ul>

                <div class="web-links">
                    <a :href="link.url" class="web-links-item" target="_blank"
                    v-for="link in webLinks" :key="link" v-html="link.icon"></a>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Navigation',
    props: {
        navList: {
            type: Array,
            defaut: [],
            required: true
        },
        webLinks: {
            type: Array,
            defaut: [],
            required: true
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 20px 0;
    background: var(--nav-bg);
    margin: 0 auto;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2024;

    .row {
        column-gap: 95px;
        justify-content: center;
    }

    &__list {
        max-width: 700px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        &-link {
            font-size: 17px;
            color: var(--main-gray);
            text-transform: capitalize;
            transition: .4s;
            font-weight: 500;

            &:hover {
                color: var(--main-green);
            }
        }
    }

    .web-links {
        display: flex;
        gap: 25px;
        align-items: center;

        &-item {
            font-size: 22px;
        }
    }
}

</style>