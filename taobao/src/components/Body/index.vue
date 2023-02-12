<template>
    <div class="body">
        <div class="box">
            <div ref="commodity" class="commodity" v-for="(item, index) in data">
                <img src="../../assets/imgs/miku.jpg" alt="">
                <div class="box-right">
                    <div class="text">
                        <p>{{ item.text }}</p>
                    </div>
                    <div class="price">
                        <p>{{ item.price }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Help></Help>
    </div>
</template>

<script setup>
import Help from './Help.vue';
import axios from 'axios';
let commodity = ref(null)
let data = reactive([]);
let index = 0;
let lock = false;
onMounted(() => {
    loadIndex();
})
function loadIndex() {
    if (lock) {
        return;
    }
    lock = true;
    axios({
        url: './data.json'
    }).then((res) => {
        for (let i = 0; i < 9; i++) {
            if (index * 10 + i < 60) {
                data.push(res.data[index * 10 + i]);
            }
        }
        index++;
        lock = false;
    });
}
window.addEventListener('scroll', () => {
    //页面被卷去的高度
    let scrolltop = document.documentElement.scrollTop
    //页面的高度
    let scrollheight = document.documentElement.scrollHeight
    //浏览器可视区高度
    let windowHeight = window.innerHeight
    console.log('1', scrollheight, scrolltop, windowHeight)
    console.log('2', scrollheight - (scrolltop + windowHeight))
    if (scrollheight - (scrolltop + windowHeight) <= 200) {

        loadIndex()

    }
})
</script>

<style lang="scss" scoped>
.body {
    background-color: #e9e6e7;
    padding-bottom: 20px;


    .box {
        background-color: white;
        margin: 0 auto;
        width: 1190px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        .commodity {
            background-color: #f7f9fa;
            transition-property: border;
            transition-duration: 0.5s;
            border: 1px solid #f7f9fa;
            box-sizing: border-box;
            border-radius: 25px;
            width: 372px;
            height: 175px;
            padding: 11px;
            margin-bottom: 18px;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {
                border: 1px solid #ff5000;
                transition-property: border;
                transition-duration: 0.5s;
            }

            img {
                width: 150px;
                height: 150px;
            }

            .box-right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .text {
                    margin: 10px;
                    font-family: 'Times New Roman', Times, serif;
                    line-height: 20px;
                    font-size: 16px;
                    color: #333;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;

                    &:hover {
                        color: #ff5000;
                    }
                }

                .price {
                    margin: 10px;
                    font-size: 22px;
                    color: #ff5000;
                }
            }
        }
    }
}
</style>