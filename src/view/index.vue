<template>
    <div class='flex'>
        <div class='index_nav'>
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" v-for='item in routerList' :key='item.path'>
                <el-menu-item :index="item.path" v-if='item.meta.header && !item.children.length'>
                    <span slot="title">111{{item.meta.name}}</span>
                </el-menu-item>
                <el-submenu index="1" v-if='item.meta.header && !!item.children.length'>
                    <template slot="title">
                        <span slot="title">{{item.meta.name}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for='el in item.children' :key='el.path' :index='el.path'>{{el.meta.name || '大数据库'}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div class='my_content'>
            <div class='my_header'>

            </div>
            <div class='my_section'>
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isCollapse: false,
                routerList: [],
            }
        },
        created(){
            console.log(this.$router.options.routes[0].children)
            this.routerList = this.$router.options.routes[0].children
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
<style scoped>
    .flex{
        display: flex;
        width: 100vw;
        overflow: hidden;
    }
    .index_nav{
        width: 200px;
        flex-shrink: 0;
        flex-grow: 0;
        min-height: 100vh;
    }
    .nav_header{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        padding: 10px;
    }
    .my_content{
        min-height: 100vh;
        background: #ccc;
        width: 100%;
    }
    .my_header{
        height: 50px;
        background: chocolate;
    }
    .my_section{
        padding: 20px;
    }
</style>