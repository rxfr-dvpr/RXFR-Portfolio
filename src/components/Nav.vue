<template>
    <nav class="nav">
        <div class="container">
            <div class="row">

                <ul class="nav__list">
                    <li class="nav__list-item" v-for="item in navList" :key="item">
                        <a :href="`#${item.url}`" class="nav__list-link">{{ item.name }}</a>
                    </li>
                </ul>

                <div class="web-collapse">
                    <div class="web-links">
                        <a :href="link.url" class="web-links-item" target="_blank"
                        v-for="link in webLinks" :key="link" v-html="link.icon"></a>
                    </div>
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
        row-gap: 15px;
    }

    &__list {
        max-width: 700px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        &-link {
            font-size: calc(12px + 7 * (100vw / 1920));
            color: var(--main-gray);
            text-transform: capitalize;
            transition: .4s;
            font-weight: 500;

            &:hover {
                color: var(--main-green);
            }

            &.active {
                color: var(--main-green);
            }
        }
    }

    .web-collapse {
        max-width: max-content;
        width: 100%;
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

@media (max-width: 992px) {
    .nav__list {
        gap: 10px;
    }

    .web-collapse {
        max-width: 100% !important;
        height: max-content;
        position: fixed;
        bottom: 15px;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;

        .web-links {
            padding: 7px 13px;
            background: var(--nav-bg);
            border-radius: 5px;
        }
    }
}

@media (min-width: 1920px) {
    .nav__list-link {
        font-size: 17px !important; 
    }

    .web-links-item {
        font-size: 22px !important;
    }
}

</style>