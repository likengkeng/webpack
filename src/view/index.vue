<template>
    <div class='flex'>
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
                    <el-menu-item v-for='el in item.children' :key='el.path' :route='{name: el.name}' :index='el.path'>{{el.meta.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class='my_content'>
            <div class='my_header'>
                <div>{{time}}</div>
                <div class='staff_data'>
                    <img src="" alt="">
                    <div>木鱼</div>
                </div>
            </div>
            <div class='my_section'>
                <div>212112</div>
                <router-view></router-view>
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
                time: null
            }
        },
        created(){
            this.routerList = this.$router.options.routes[0].children
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
    .flex{
        display: flex;
        width: 100%;
        overflow: hidden;
        .index_nav{
            width: 200px;
            flex-shrink: 0;
            flex-grow: 0;
            height: 100vh;
            overflow-y: scroll;
        }
        .my_content{
            min-height: 100vh;
            background: #ccc;
            width: 100%;
            .my_header{
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
            .my_section{
                padding: 20px;
                box-sizing: border-box;
                min-height: calc(100vh - 50px);
            }
        }
    }
</style>