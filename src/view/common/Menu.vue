<template>
     <div class='index_nav'>
            <el-menu class="el-menu-vertical-demo"
                :unique-opened='true' 
                :router='true' 
                @open="handleOpen" 
                @close="handleClose" 
                :collapse="isCollapse" 
                v-for='item in routerList' :key='item.path'>
                <el-menu-item
                    :index="item.path" 
                    v-if='item.meta.header && !item.children.length'>
                    <span slot="title">{{item.meta.name}}</span>
                </el-menu-item>
                <el-submenu :index="item.path" v-if='item.meta.header && !!item.children.length'>
                    <template slot="title">
                        <span slot="title">{{item.meta.name}}</span>
                    </template>
                    <el-menu-item v-for='el in item.children' :key='el.path' :index='el.path'>{{el.meta.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
</template>
<script>
    export default {
        data() {
            return {
                isCollapse: false,
                routerList: [],
                time: null
            }
        },
        created() {
            this.routerList = this.$router.options.routes
            this.time = this.$utils.nowDate()
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            }, 
               
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }

        }
    }
</script>
<style scoped lang="less">
    .index_nav{
        width: 200px;
        flex-shrink: 0;
        flex-grow: 0;
        height: 100vh;
        overflow-y: scroll;
    }
</style>