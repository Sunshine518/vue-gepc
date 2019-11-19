<template>
    <div class="home">
        <el-card class="box-card">
            <el-form :inline="true" :model="formItem" class="elementStyle" style="text-align: left" ref="formItem" >
                        <el-form-item label="备件编号" prop="spareNo">
                            <el-input v-model="formItem.spareNo" placeholder="请输入备件编号" ></el-input>
                        </el-form-item>

                        <el-form-item label="物料号" prop="materialCode">
                            <el-input v-model="formItem.materialCode" placeholder="请输入物料号"></el-input>
                        </el-form-item>

                        <el-form-item label="起始时间" prop="startTime">
                            <el-date-picker
                                    v-model="formItem.startTime"
                                    clearable
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择起始时间"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item label="截止时间" prop="endTime">
                            <el-date-picker
                                    v-model="formItem.endTime"
                                    clearable
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择截止时间"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="getList">查询</el-button>
                    <el-button @click="resetForm('formItem')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
            <el-table
                    v-loading="loading"
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
                        prop="spareNo"
                        label="备件编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="materialCode"
                        label="物料号">
                </el-table-column>
                <el-table-column
                        prop="spareName"
                        label="备件名称">
                </el-table-column>
                <el-table-column
                        prop="serviceCode"
                        label="服务站代码">
                </el-table-column>
                <el-table-column
                        prop="orderTime"
                        label="订购时间">
                    <template slot-scope="scope">
                        {{moment(scope.row.orderTime).format('YYYY-MM-DD')}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="orderNumber"
                        label="数量">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
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
    import ajax from '../../../until/ajax.js'

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                formItem: {
                    spareNo: '',
                    materialCode: '',
                    startTime: '',
                    endTime: ''
                },
                tableData: [],
                currentPage: 1,
                pageTotal: 0,
                loading: true
            }
        },
        created() {
            this.getList()

        },
        methods: {
            getList() {
                window.console.log(this.formItem)
                const obj = ajax.formatParams(this.formItem)
                axios.fetchGet('/onestep/base/epc/epc/shoppingCar/queryAllShopCarDetailedListForPage', obj).then((res) => {
                    this.tableData = res.data.content
                    this.pageTotal = res.data.totalElements
                    this.loading = false
                }).catch(err => {
                    }
                )
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.getList()
            },
            handleClick(row) {
                window.console.log(row);
            },
            handleCurrentChange(val) {
                window.console.log(`当前页: ${val}`);
            }
        }
    }
</script>


<style scoped>
    .box-card {
        width: 100%;
    }
</style>