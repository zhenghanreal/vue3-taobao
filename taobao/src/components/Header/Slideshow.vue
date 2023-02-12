<template>
    <div ref="imgbox" class="box">
        <ul>
            <li v-for="(item, index) in imglist" :key="index">
                <img ref="imgs" :src="item.url" alt="">
            </li>
        </ul>
    </div>
    <button @click="goright" v-show="isShow" class="rightbtn">&gt;</button>
    <button @click="goleft" v-show="isShow" class="leftbtn">&lt;</button>
    <div class="img-index">
        <ul>
            <li ref="imgindex" class="img-active" v-for="index of imglist.length - 1"></li>
        </ul>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

let imglist = [
    { url: require('../../assets/imgs/1.png') },
    { url: require('../../assets/imgs/2.png') },
    { url: require('../../assets/imgs/3.png') },
    { url: require('../../assets/imgs/4.png') },
    { url: require('../../assets/imgs/1.png') },
]

let num = 0
let indexnum = 0
let imgbox = ref(null)
let imgs = ref(null)
let imgindex = ref(null)
onMounted(() => {
    imgindex.value[indexnum].style.background = '#ff5000'
})
function goright() {
    if (num == imgs.value.length - 1) {
        imgbox.value.style.left = 0
        num = 0
    }
    num++
    var timer = setInterval(() => {
        //计数减速度步长
        let speed = Math.floor((num * -imgs.value[0].offsetWidth - imgbox.value.offsetLeft) / 10)
        //定位赋值
        imgbox.value.style.left = imgbox.value.offsetLeft + speed + 'px'
        //判断清除定时器
        if (num * -imgs.value[0].offsetWidth === imgbox.value.offsetLeft) {
            clearInterval(timer)
        }
    }, 20)
    //控制小圆点
    for (let i = 0; i < imgindex.value.length; i++) {
        imgindex.value[i].style.background = 'white'
    }
    indexnum++
    if (indexnum == imgindex.value.length) {
        indexnum = 0
    }
    imgindex.value[indexnum].style.background = '#ff5000'
}
function goleft() {
    if (num == 0) {
        num = imgs.value.length - 1
        imgbox.value.style.left = -num * imgs.value[0].offsetWidth + 'px'
    }
    num--
    var timer = setInterval(() => {
        //计数减速度步长
        let speed = Math.ceil((num * -imgs.value[0].offsetWidth - imgbox.value.offsetLeft) / 10)
        //定位赋值
        imgbox.value.style.left = imgbox.value.offsetLeft + speed + 'px'
        //判断清除定时器
        if (num * -imgs.value[0].offsetWidth === imgbox.value.offsetLeft) {
            clearInterval(timer)
        }
    }, 20)
    //控制小圆点
    for (let i = 0; i < imgindex.value.length; i++) {
        imgindex.value[i].style.background = 'white'
    }
    if (indexnum == 0) {
        indexnum = imgindex.value.length
    }
    indexnum--
    imgindex.value[indexnum].style.background = '#ff5000'
}
defineProps({
    isShow: {
        type: Boolean
    }
})
//自动轮播
setInterval(() => {
    goright()
}, 3000);
</script>
<style lang="scss" scoped>
.box {
    position: absolute;
    left: 0;
    width: 500%;

    ul {
        display: flex;

        li {
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
}

.leftbtn,
.rightbtn {
    border: none;
    background-color: rgba($color: #000000, $alpha: 0.5);
    color: white;
    font-size: 18px;
    top: 50%;
    height: 30px;
}

.leftbtn {
    position: absolute;
    left: 0px;
    border-radius: 0px 25px 25px 0px;

}

.rightbtn {
    position: absolute;
    right: 0px;
    border-radius: 25px 0px 0px 25px;

}

.img-index {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba($color: #ffffff, $alpha: 0.6);
    border-radius: 25px;
    width: 80px;
    height: 13px;

    ul {
        height: 13px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li {
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 100%;
        }
    }
}
</style>