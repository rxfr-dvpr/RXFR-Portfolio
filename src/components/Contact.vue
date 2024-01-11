<template>
  <section class="contact__section" id="contact">
    <div class="container">
        <div class="row">
            <div class="contact__descr">
                <h2 class="contact__descr-title all-title">{{ obj.title }}</h2>
                <p class="contact__descr-txt all-subtitle">{{ obj.subtitle }}</p>
            </div>

            <form action="POST" @submit.prevent="sendToBot" class="contact__form">
                <div class="form-email all-form">
                    <span class="input-name">email</span>
                    <input type="email" class="form-email-inp all-inp" 
                    placeholder="Please enter your email" required v-model="infoObj.email">
                </div>

                <div class="form-number all-form">
                    <span class="input-name">mobile</span>
                    <input type="number" class="form-number-inp all-inp" 
                    placeholder="Enter mobile" required v-model="infoObj.number">
                </div>

                <div class="form-msg all-form">
                    <span class="input-name">message</span>
                    <textarea class="form-msg-inp all-inp" id="" rows="7" 
                    placeholder="Enter your message" required v-model="infoObj.msg"></textarea>
                </div>

                <button class="submit-btn">submit ></button>
            </form>
        </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
    name: 'Contact',
    props: {
        obj: {
            type: Object,
            required: true,
            default: {
                title: '',
                subtitle: ''
            }
        }
    },
    data() {
        return {
            infoObj: {
                email: '',
                number: '',
                msg: ''
            },
            token: '5859063379:AAHWesMBjC3Hq9eeqkZrxGIQKUY1_wy6YG0',
            chatId: 1360394917
        }
    },
    methods: {
        sendToBot() {
            const fullMsg = `
            EMAIL: ${this.infoObj.email}, NUMBER: ${this.infoObj.number}, MESSAGE: ${this.infoObj.msg}
            `
            try {
                axios
                .post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMsg}`)
                .then((res) => {
                    this.infoObj.email = ''
                    this.infoObj.number = ''
                    this.infoObj.msg = ''
                })
                .catch((err) => {
                    console.error(err)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.contact__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 40px;
    }

    .contact__descr {
        max-width: 570px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 10px;
    }

    .contact__form {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        .all-form {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 5px;

            .input-name {
                font-size: 14px;
                font-weight: 600;
                text-transform: capitalize;
            }

            .all-inp {
                width: 100%;
                border-radius: 4px;
                border: 1px solid #D8D8D8;
                background: #F8F8F8;
                outline: none;
                color: var(--main-black);
                padding: 10px 10px;
                font-size: 13px;
                font-weight: 500;

                &::placeholder {
                    color: var(--main-gray);
                }
            }

            textarea {
                resize: vertical;
            }
        }

        .submit-btn {
            background: var(--main-green);
            padding: 15px 25px;
            border: 0;
            font-size: 14px;
            text-transform: capitalize;
            font-weight: 700;
            border-radius: 4px;
        }
    }
}

</style>