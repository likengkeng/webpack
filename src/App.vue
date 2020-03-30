<template>
    <div class='box'>
        <!-- <h1>{{header}}</h1> -->
        <router-view />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                header: '测试消息111'
            }
        }
    }
</script>
<style scoped>
    .box{
        color: red;
        display: flex
    }
</style>