<template>
    <div class="tool">
        <div class="box" v-for="(item, index) in list" :key="index">
            <span :class="`${item.icon} iconfont`"></span>
            <p>{{ item.name }}</p>
        </div>
    </div>
</template>

<script setup>
let list = [
    { icon: 'icon-xiaoxi', name: '消息' },
    { icon: 'icon-kefu', name: '官方客服' },
    { icon: 'icon-fankui', name: '反馈' },
    { icon: 'icon-jubao', name: '举报' },
]
</script>

<style lang="scss" scoped>
.tool {
    border-radius: 25px 0px 0px 25px;
    width: 60px;
    height: 350px;
    background-color: white;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        span {
            font-size: 24px;
        }

        p {
            font-size: 12px;
        }
    }
}
</style>