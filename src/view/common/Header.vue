<template>
    <div class='my_header'>
        <div>{{time}}</div>
        <div class='staff_data'>
            <img src="" alt="">
            <div>木鱼</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                time: null
            }
        },
        created(){
            this.time = this.$utils.nowDate()
        },
    }
</script>
<style scoped lang="less">
   .my_header {
        display: flex;
        justify-content: space-between;
        padding: 0px 20px;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: chocolate;
        .staff_data{
            display: flex;
            align-items: center;
        }
    }
</style>