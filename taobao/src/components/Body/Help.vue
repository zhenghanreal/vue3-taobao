<template>
    <div class="help">
        <div class="box" v-for="(item, index) in iocnfont" :key="index">
            <div class="title">
                <span :class="`${item.icon} iconfont`"></span>
                <p>{{ item.title }}</p>
            </div>
            <div class="text">
                <p>{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
let iocnfont = [
    { icon: 'icon-dunpai', title: '规则与协议', text: '淘宝规则 退货退款流程 服务中心' },
    { icon: 'icon-bangzhu', title: '新手上路', text: '新手专区 24小时在线帮助 免费开店' },
    { icon: 'icon-daifukuan', title: '付款方式', text: '快捷支付 信用卡 余额宝 蚂蚁花呗' },
    { icon: 'icon-taobaotese', title: '淘宝特色', text: '手机淘宝 旺旺/旺信 大众评审' }
]
</script>

<style lang="scss" scoped>
.help {
    padding-top: 40px;
    margin: 0 auto;
    width: 1190px;
    height: 150px;
    background-color: white;
    display: flex;
    justify-content: space-between;

    .box {
        margin: 0 20px;
        width: 300px;
        display: flex;
        flex-direction: column;

        .title {
            line-height: 50px;
            margin-bottom: 8px;
            display: flex;

            span {
                color: #999;
                margin: 0 5px;
                font-size: 45px;
            }

            p {
                font-size: 16px;
            }
        }

        .text {
            font-size: 12px;

            p {
                overflow-wrap: break-word;
                line-height: 20px;
                color: #999;

            }
        }
    }
}
</style>