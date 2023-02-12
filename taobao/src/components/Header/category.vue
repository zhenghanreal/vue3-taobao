<template>
    <div class="category">
        <h2>分类</h2>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <span><i :class="`${item.icon + ' iconfont'} `"></i></span>
                <span><a>{{ item.data[0] }}</a></span>/
                <span><a>{{ item.data[1] }}</a></span>/
                <span><a>{{ item.data[2] }}</a></span>
            </li>
        </ul>
    </div>
</template>

<script setup>
let list = [
    { data: ['女装', '内衣', '奢品'], icon: 'icon-nvzhuang' },
    { data: ['女鞋', '男鞋', '箱包'], icon: 'icon-xiezi' },
    { data: ['美妆', '饰品', '洗护'], icon: 'icon-meizhuangleimu' },
    { data: ['男装', '运动', '百货'], icon: 'icon-nanzhuangleimu' },
    { data: ['手机', '数码', '企业礼品'], icon: 'icon-shouji' },
    { data: ['家装', '电器', '车品'], icon: 'icon-weibiaoti2fuzhi13' },
    { data: ['食品', '生鲜', '母婴'], icon: 'icon-yingtao' },
    { data: ['医药', '保健', '进口'], icon: 'icon-yiyaoxiang' }
]
</script>

<style lang="scss" scoped>
.category {
    border-radius: 25px;
    margin: 24px;
    width: 25%;
    height: 368px;
    background-color: #f7f9fa;

    h2 {
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        padding: 16px;
    }

    ul {
        margin-left: 5%;

        li {
            height: 20px;
            line-height: 20px;
            margin-bottom: 18px;
            color: #666;

            &:hover {
                color: #ff5000;
                cursor: pointer;
            }

            i {
                font-size: 18px;
            }

            span {
                margin: 0 10px;
                font-size: 14px;
            }
        }
    }
}
</style>