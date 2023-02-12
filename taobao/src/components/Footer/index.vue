<template>
    <div class="footer">
        <div class="box">
            <div class="list">
                <ul>
                    <li v-for="item in list">
                        <span>{{ item }}</span>
                        <i>|</i>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="text">
                <p v-for="item in text">{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
let list = [
    "阿里巴巴",
    "淘宝网",
    "天猫",
    "聚划算",
    "全球速买通",
    "阿里巴巴国际交易市场",
    "1668",
    "阿里妈妈",
    "飞猪",
    "阿里云计算",
    "AliOS",
    "阿里通信",
    "一淘",
    "万网",
    "高德",
    "UC",
    "友盟",
    "阿里安全",
    "大麦网",
    "钉钉",
    "支付宝",
    "阿里健康",
    "阿里影业",
    "网商银行"
]
let text = [
    "关于淘宝营销中心廉正举报联系客服开放平台诚征英才联系我们隐私权政策法律声明知识产权不当竞争举报|© 2003-现在 Taobao.com 版权所有",
    "增值电信业务经营许可证：浙B2-20080224|增值电信业务经营许可证（跨地区）：B2-20150210|浙网文【2022】0403-017号|浙江省网络食品销售第三方平台提供者备案：浙网食A33010001|",
    "互联网药品信息服务资格证书（浙）-经营性-2018-0010|短消息类服务接入代码使用证书：号【2016】00154-A01|信息网络传播视听许可证：1109364号|出版物网络交易平台服务经营备案号：新出发浙备字第002号|",
    "浙公网安备33010002000078号|浙B2-20080224-1|广播电视节目制作经营许可证（浙）字第01012号|市场名称登记证：工商网市字3301004120号|医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00004号|互联网违法和不良信息举报电话：0571-81683755jubao.tb@service.taobao.com|中国扫黄打非网|全国文化和旅游市场网上举报投诉处理系统|全国12315平台|浙江省互联网违法和不良信息举报中心|全网举报|",
]
</script>

<style lang="scss" scoped>
.footer {
    background-color: white;
    height: 250px;
    padding-bottom: 20px;

    .box {
        background-color: white;
        margin: 0 auto;
        width: 1190px;
        height: 100%;

        .list {
            height: 70px;
            font-size: 12px;
            color: #6C6C6C;
            line-height: 35px;

            ul {
                display: flex;
                flex-wrap: wrap;
                align-items: center;

                li {

                    span {
                        cursor: pointer;

                        &:hover {
                            color: #ff5000;

                        }
                    }

                    i {
                        margin: 0 10px;
                    }
                }
            }
        }

        .text {
            font-size: 12px;

            p {
                height: 26px;
                line-height: normal;
            }

            p:nth-child(2),
            p:nth-child(3) {
                color: #6C6C6C;
            }
        }
    }
}
</style>