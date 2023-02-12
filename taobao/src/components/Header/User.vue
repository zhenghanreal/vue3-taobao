<template>
    <div class="userinfo">
        <span><img src="../../assets/imgs/getAvatar.png" alt="" /></span>
        <span><a>Hi!,username</a></span>
    </div>
    <div class="listone">
        <ul>
            <li v-for="(item, index) in listOne" :key="index">
                <span>{{ item.count }}</span>
                <a>{{ item.name }}</a>
            </li>
        </ul>
    </div>
    <div class="listtwo">
        <ul>
            <li v-for="(item, index) in listTwo" :key="index">
                <span :class="`${item.icon + ' iconfont'}`"></span>
                <a>{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
let listOne = [
    { name: '购物车', count: 0 },
    { name: '待收货', count: 0 },
    { name: '待发货', count: 0 },
    { name: '待付款', count: 0 },
    { name: '待评价', count: 0 },
]
let listTwo = [
    { name: '收藏宝贝', icon: 'icon-shoucang1' },
    { name: '买过的店', icon: 'icon-baobao' },
    { name: '收藏的店', icon: 'icon-dianpu' },
    { name: '我的足迹', icon: 'icon-shijian' },
]
</script>

<style lang="scss" scoped>
.userinfo {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;

    span {
        &:hover {
            color: #ff5000;
            cursor: pointer;
        }
    }
}

.listone {
    height: 25%;

    ul {
        height: 60%;
        display: flex;
        justify-content: space-around;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            span {
                color: #f40;
            }

            a {
                font-size: 12px;
            }
        }
    }
}

.listtwo {
    height: 25%;

    ul {
        height: 60%;
        display: flex;
        justify-content: space-around;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            &:hover {
                color: #ff5000;
                cursor: pointer;
            }

            span {
                font-size: 22px;
            }

            a {
                font-size: 13px;
            }
        }
    }
}
</style>