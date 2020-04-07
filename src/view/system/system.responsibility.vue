<!--消防安全岗位职责-->
<template>
    <div>
        dasa
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column fixed prop="date" label="安全管理制度名称"></el-table-column>
            <el-table-column fixed prop="date" label="制度编号"></el-table-column>
            <el-table-column fixed prop="date" label="关联角色"></el-table-column>
            <el-table-column fixed prop="date" label="内容">
                <el-button @click="see(scope.row)" type="text" size="small">查看</el-button>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click='del(scope.row)' type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData: []
            }
        },
        created () {
        },
        methods: {
            see(item){},
            edit(item){},
            del(item){},
        }
    }
</script>
<style scoped>

</style>