<template>
    <div class="nav">
        <div class="box">
            <div class="box-left">
                <ul>
                    <li>
                        <a>中国大陆</a>
                        <div class="region">
                            <ul>
                                <li v-for="(item, index) in region">{{ item }}</li>
                            </ul>
                        </div>
                    </li>
                    <li><a>username</a></li>
                    <li><a>手机逛淘宝</a></li>
                    <li><a>网页无障碍</a></li>
                </ul>
            </div>
            <div class="box-right">
                <ul>
                    <li><a>我的淘宝</a></li>
                    <li><a>购物车</a></li>
                    <li><a>收藏夹</a></li>
                    <li><a>商品分类</a></li>
                    <li><a>免费开店</a></li>
                    <li><a>千牛卖家中心</a></li>
                    <li><a>联系客服</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
let region = [
    '全球',
    '中国大陆',
    '中国香港',
    '中国台湾',
    '中国澳门',
    '韩国',
    '马来西亚',
    '澳大利亚',
    '新加坡',
    '新西兰',
    '加拿大',
    '日本',
    '越南',
    '泰国',
    '菲律宾',
    '柬埔寨',
]
</script>

<style lang="scss" scoped>
.nav {
    color: #6C6C6C;
    background-color: #f5f5f5;
    height: 35px;
    line-height: 35px;
    font-size: 12px;

    .box {
        display: flex;
        justify-content: space-between;
        width: 1190px;
        margin: 0 auto;

        .box-left,
        .box-right {
            ul {
                display: flex;

                li {
                    padding: 0 10px;

                    &:hover {
                        color: #ff5000;
                        cursor: pointer;
                    }
                }
            }
        }

        .box-left {
            ul {
                li:nth-child(1) {
                    position: relative;

                    .region {
                        background-color: white;
                        width: 250px;
                        height: 300px;
                        position: absolute;
                        top: 35px;
                        left: 0px;
                        display: none;

                        ul {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            overflow: scroll;
                        }
                    }

                    &:hover {
                        color: black;
                        background-color: white;

                        .region {
                            z-index: 999;
                            display: block;

                            ul {
                                li {
                                    color: black;

                                    &:hover {
                                        background-color: rgba($color: #eae8eb, $alpha: 0.5);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>