<template>
    <Nav></Nav>
    <div class="top">
        <div class="box">
            <div class="logo">
                <i class="iconfont icon-taobaowang"></i>
            </div>
            <div class="center">
                <div class="search">
                    <input type="text"><input>
                    <div class="search-title">
                        <a>宝贝</a><i class="iconfont icon-xiangxia"></i>
                        <div class="title-list">
                            <ul>
                                <li v-for="(item, index) in titlelist" :key="index">{{ item }}</li>
                            </ul>
                        </div>
                    </div>
                    <button @click="test">搜索</button>
                </div>
                <div class="list">
                    <ul>
                        <li v-for="(item, index) in list" :key="index">{{ item.text }}</li>
                    </ul>
                </div>
            </div>
            <div class="qr-code">
                <a>下载淘宝</a>
                <img src="../../assets/imgs/taobao.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Nav from './Nav.vue'
let list = [
    '新款连衣裙',
    '四件套',
    '潮流T恤',
    '时尚女鞋',
    '短裤',
    '半身裙',
    '男士外套',
    '墙纸',
    '行车记录仪',
]
let titlelist = [
    '天猫',
    '店铺'
]
list = list.map((str, index) => {
    return {
        id: index,
        text: str,
    }
});
list = reactive(list)
</script>

<style lang="scss" scoped>
.top {
    height: 120px;
    background-color: #e9e6e7;

    .box {
        height: 120px;
        display: flex;
        justify-content: space-around;
        width: 1190px;
        margin: 0 auto;

        .logo {
            line-height: 120px;

            &:hover {
                cursor: pointer;
            }

            i {
                font-size: 40px;
                color: #ff5502;
            }
        }

        .center {
            width: 70%;
            position: relative;

            .search {
                margin: 0 auto;
                margin-top: 40px;
                border: 2px solid #ff5502;
                background-color: white;
                border-radius: 50px;
                width: 90%;
                height: 42px;
                position: relative;

                input {
                    position: absolute;
                    top: 15%;
                    left: 0px;
                    margin-left: 10%;
                    border: none;
                    border-left: 1px solid #b4b4b4;
                    height: 70%;
                    width: 80%;
                    outline: none
                }

                .search-title {
                    border-radius: 25px 0px 0px 25px;
                    position: relative;
                    top: 0px;
                    left: 0px;
                    background-color: white;
                    height: 100%;
                    line-height: 42px;
                    width: 10%;
                    text-align: center;
                    font-size: 14px;

                    &:hover {
                        cursor: default;
                        border-radius: 25px 0px 0px 0px;

                        .title-list {
                            display: block;
                        }
                    }

                    .title-list {
                        position: absolute;
                        top: 40px;
                        left: 0;
                        width: 75px;
                        height: 80px;
                        background-color: white;
                        text-align: center;
                        display: none;

                        ul {
                            li {
                                line-height: 38px;

                                &:hover {
                                    cursor: pointer;
                                    color: #ff5000;
                                }
                            }
                        }

                    }

                    i {
                        margin: 0 2px;
                        font-size: 2px;

                    }
                }

                button {
                    position: absolute;
                    right: 5px;
                    top: 10%;
                    background-color: #ff5502;
                    border: none;
                    border-radius: 50px;
                    color: white;
                    height: 34px;
                    width: 72px;
                    font-size: 18px;
                    line-height: 34px;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            .list {
                ul {
                    font-size: 12px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    color: #6C6C6C;

                    li {
                        padding: 10px 8px;

                        &:hover {
                            color: #ff5000;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .qr-code {
            margin: auto 0;
            background-color: white;
            height: 90px;
            width: 75px;
            display: flex;
            flex-direction: column;

            &:hover {
                cursor: pointer;
            }

            a {
                margin: 0 auto;
                margin-top: 5px;
                color: #ff5502;
                font-size: 12px;
            }

            img {
                margin: 7px auto;
                width: 60px;
            }
        }
    }
}
</style>