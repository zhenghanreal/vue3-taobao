<template>
    <div class="header">
        <div class="box">
            <Category></Category>
            <Main></Main>
        </div>
    </div>
</template>

<script setup>
import Category from './category.vue'
import Main from './Main.vue'

</script>

<style lang="scss" scoped>
.header {
    background-color: #e9e6e7;
    height: 423px;

    .box {
        border-radius: 25px 25px 0px 0px;
        background-color: white;
        margin: 0 auto;
        width: 1190px;
        height: 100%;
        display: flex;
    }
}
</style>