<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 工作流表格
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column label="ID" width="55" align="center">
                    <template #default="scope">{{ scope.$index + 1 }}</template>
                </el-table-column>
                <el-table-column prop="type" label="type"></el-table-column>
                <el-table-column prop="group" label="group"></el-table-column>
                <el-table-column prop="name" label="name"></el-table-column>
                <el-table-column
                    prop="version"
                    label="version"
                ></el-table-column>

                <el-table-column label="操作" width="180" align="center">
                    <template #default="scope">
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { getAllWorkflows, deleteWorkflow } from "../../api/workflow";

export default {
    name: "basetable",
    setup() {
        const tableData = ref([]);
        // 获取表格数据
        const getData = (query = {}) => {
            getAllWorkflows().then((res) => {
                tableData.value = res;
            });
        };
        getData();

        // 删除操作
        const handleDelete = (index, row) => {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            }).then(() => {
                // const query = {
                //     type: row.type,
                //     group: row.group,
                //     name : row.name,
                //     version: row.version,
                // };
                const query = {
                    type: 1,
                    group: 1,
                    name: 1,
                    version: 1,
                };
                deleteWorkflow(query).then((res) => {
                    getData();
                    ElMessage.success("删除成功");
                });
            });
        };

        return {
            tableData,
            handleDelete,
        };
    },
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
