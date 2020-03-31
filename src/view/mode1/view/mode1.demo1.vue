<template>
    <div>
        <p>这是mode1.demo1页面</p>
        <img :src="img" alt="">
        <Button></Button>
    </div>
    
</template>
<script>
    import Button from '@/view/mode1/view/button'
    
    export default {
        components: {
            Button
        },
        data () {
            return {
                img: require('@/assets/app2.png')
            }
        },
        created () {
        }
    }
</script>
<style scoped>

</style>