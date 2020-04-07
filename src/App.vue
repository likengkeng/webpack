<template>
     <div class='flex'>
        <Menu></Menu>
        <div class='my_content'>
            <Header></Header>
            <div class='my_section'>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import Menu from '@/view/common/Menu.vue';
    import Header from '@/view/common/Header.vue';
    export default {
        components: {
            Menu,
            Header,
        },
    }
</script>
<style scoped lang="less">
    .flex{
        display: flex;
        width: 100%;
        overflow: hidden;
        .my_content{
            min-height: 100vh;
            background: #ccc;
            width: 100%;
            .my_section{
                padding: 20px;
                box-sizing: border-box;
                min-height: calc(100vh - 50px);
            }
        }
    }
</style>