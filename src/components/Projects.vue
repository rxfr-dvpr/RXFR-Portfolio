<template>
  <section class="projects__section" id="projects">
    <div class="container">
        <div class="row">
            <div class="projects__descr">
                <h2 class="projects__descr-title all-title">{{ obj.title }}</h2>

                <p class="projects__descr-txt all-subtitle">{{ obj.txt }}</p>
            </div>

            <div class="projects__list">
                <div class="projects__list-item" v-for="(item, idx) in obj.list" :key="idx">
                    <img :src="item.img" alt="" class="item-img">

                    <div class="item-descr">
                        <p class="item-descr-title">{{ item.title }}</p>
                        <p class="item-descr-txt">{{ item.txt }}</p>

                        <div class="item-descr-links">
                            <a :href="item.link" target="_blank" class="item-link preview-link">live preview</a>
                            <a :href="item.codeLink" target="_blank" class="item-link code-link">view code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Projects',
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

.projects__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 70px;
    }

    .projects__descr {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 10px;
    }
    
    .projects__list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 45px;
        row-gap: 65px;
        justify-content: center;

        &-item {
            max-width: 370px;
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            row-gap: 10px;
            background: #363636;
            box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
            overflow: hidden;
            font-family: var(--scnd-font);

            .item-img {
                width: 100%;
            }

            .item-descr {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                padding: 5px 25px 25px;
                row-gap: 15px;

                &-title {
                    font-size: 18px;
                    text-transform: capitalize;
                    font-family: var(--scnd-font);
                    font-weight: 600;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
    
                &-txt {
                    color: var(--main-gray);
                    font-size: 15px;
                    font-family: var(--scnd-font);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 6;
                    -webkit-box-orient: vertical;
                }
    
                &-links {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
    
                    .item-link {
                        font-size: 15px;
                        text-transform: capitalize;
                        text-decoration: underline;
                        transition: .3s;
                        font-weight: 500;
    
                        &:hover {
                            color: var(--main-green);
                        }
                    }
                }
            }
        }
    }
}

</style>