<template>
    <div class="home">
        <el-card class="box-card">
            <el-form :inline="true" :model="formItem" class="elementStyle" style="text-align: left" ref="formItem">
                <el-form-item label="备件编号" prop="spareNo">
                    <el-input v-model="formItem.spareNo" placeholder="请输入备件编号"></el-input>
                </el-form-item>
                <el-form-item label="零部件物料号" prop="materialCode">
                    <el-input v-model="formItem.materialCode" placeholder="请输入零部件物料号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getList">查询</el-button>
                    <el-button @click="resetForm('formItem')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
            <el-table
                    :data="tableData"
                    max-height="550"
                    border
                    :header-cell-style="{background:'#fafafa'}"
                    style="width: 100%">
                <el-table-column
                        type="index"
                        label="序号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="carName"
                        label="车系"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="groupCode"
                        label="分组号">
                </el-table-column>
                <el-table-column
                        prop="spareNo"
                        label="备件号">
                </el-table-column>
                <el-table-column
                        prop="materialCode"
                        label="物料号">
                </el-table-column>
                <el-table-column
                        prop="groupName"
                        label="名称">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block" style="text-align: right;margin-top: 20px">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="10"
                        layout="prev, pager, next, jumper"
                        :total="pageTotal">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
    import axios from '../../../https.js'

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                formItem: {
                    spareNo: '',
                    materialCode: ''
                },
                tableData: [],
                currentPage: 1,
                pageTotal: 0
            }
        },
        created() {
        },
        methods: {
            getList() {
                const obj = this.formItem
                axios.fetchGet('/onestep/base/epc/epc/SparePartsFrontDesk/queryCarInfoBySpareNoOrMaterialCode', obj).then((res) => {
                    this.tableData = res.data
                    this.pageTotal = res.data.length
                }).catch(err => {
                    }
                )
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.tableData = []
            },
            handleClick(row) {
                console.log(row);
                //跳转新页面
                let routeData = this.$router.resolve({ path: '/carsSparePartsDetails'});
                window.open(routeData.href, '_blank');
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>


<style scoped>
    .box-card {
        width: 100%;
    }
</style>