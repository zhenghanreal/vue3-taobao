<template>
    <div class="main">
        <div class="list">
            <ul>
                <li v-for="(item, index) in list" :key="index"><a>{{ item }}</a></li>
            </ul>
        </div>
        <div class="showinfo">
            <div @mouseenter="showbtn" @mouseleave="hiddenbtn" class="slideshow">
                <Slideshow :isShow="isShow"></Slideshow>
            </div>
            <div class="user">
                <User></User>
            </div>
        </div>
    </div>
</template>
<script setup>
import User from './User.vue'
import Slideshow from './Slideshow.vue'
let list = [
    '天猫',
    '聚划算',
    '天猫超市',
    '法司拍卖',
    '飞猪旅行',
    '天天特卖',
    '极有家',
    '淘宝直播',
]
let isShow = ref(false)
function showbtn() {
    isShow.value = !isShow.value
}
function hiddenbtn() {
    isShow.value = !isShow.value
}

</script>
<style lang="scss" scoped>
.main {
    margin: 24px 24px 24px 0px;
    width: 75%;
    height: 368px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .list {
        border-radius: 25px;
        height: 10%;
        background-color: #f7f9fa;

        ul {
            display: flex;
            line-height: 36px;
            display: flex;
            margin: 0 20px;
            justify-content: space-around;
        }

        li {

            &:hover {
                color: #ff5000;
                cursor: pointer;
            }
        }

        li:nth-child(3) {
            color: #33c900;

            &:hover {
                color: #ff5000;
                cursor: pointer;
            }
        }

        li:nth-child(1),
        li:nth-child(2) {
            color: #ff0036;

            &:hover {
                color: #ff5000;
                cursor: pointer;
            }
        }
    }

    .showinfo {
        height: 80%;
        display: flex;

        .slideshow {
            margin-right: 20px;
            border-radius: 25px;
            height: 100%;
            width: 65%;
            position: relative;
            overflow: hidden;
        }

        .user {
            border-radius: 25px;
            height: 100%;
            width: 35%;
        }
    }
}
</style>