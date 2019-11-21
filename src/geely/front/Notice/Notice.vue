<template>
<div>
    <el-card class="box-card">
        <el-form :inline="true" :model="formItem" class="elementStyle" style="text-align: left" ref="formItem">
            <el-form-item label="通知书编号" prop="letterCode">
                <el-input v-model.trim="formItem.letterCode"></el-input>
            </el-form-item>

            <el-form-item label="通知书名称" prop="letterName">
                <el-input v-model.trim="formItem.letterName"></el-input>
            </el-form-item>

            <el-form-item label="车系" prop="carseriesCode">
                <el-select v-model="formItem.carseriesCode" clearable  placeholder="请选择">
                    <el-option
                            v-for="item in carseriesList"
                            :key="item.carSeriesCode"
                            :label="item.carSeriesCode"
                            :value="item.carSeriesCode">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="getList()">查询</el-button>
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
        width="80">
            <template slot-scope="scope">
                <span>{{ currentPage ===1 ? scope.$index + 1 : (currentPage-1) * 10 + scope.$index+1}}</span>
            </template>
        </el-table-column>
        </el-table-column>
        </el-table-column>
        <el-table-column
        prop="letterCode"
        label="通知书编号">
        </el-table-column>
        <el-table-column
        prop="letterName"
        label="通知书名称">
        </el-table-column>
        <el-table-column
        prop="carseriesCode"
        label="车系"
        width="160">
            <template slot-scope="scope">
                {{scope.row.carseriesCode.substring(1,scope.row.carseriesCode.length-1)}}
            </template>
        </el-table-column>
        <el-table-column
        prop="createTime"
        label="创建时间"
        width="160">
        <template slot-scope="scope">
        {{moment(scope.row.orderTime).format('YYYY-MM-DD')}}
        </template>
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
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
        data() {
            return {
                loading:false,
                formItem: {
                    letterName: '',
                    letterCode: '',
                    carseriesCode: ''
                },
                tableData:[],
                currentPage: 0,
                pageTotal: 1,
                carseriesList:[]
            }
        },
        created(){
            this.getList()
            this.getCarSeries()
        },
        methods: {
            getList(page) {
                this.loading = true
                const obj =ajax.formatParams(this.formItem)
                let params = {
                    ...obj,
                    page: page ? page-1 :'',
                    size:10
                }
                axios.fetchGet('/onestep/base/epc/letternotice/get_page_rt:search',params).then((res) => {
                    this.tableData = res.data.content
                    this.pageTotal = res.data.totalElements
                    this.currentPage = res.data.number + 1
                    this.loading = false
                }).catch(err => {
                    }
                )
            },
            getCarSeries(){
                axios.fetchGet('/onestep/base/epc/epc/carseriesCatalogs').then((res) => {
                    this.carseriesList = res.data.content
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.getList(this.currentPage)
            },
            handleClick(row) {
                window.console.log(row);
            },
            handleCurrentChange(currentPage) {
                this.getList(currentPage)
            }
        //     ...mapActions([
        //         'addFun',
        //         'reduceFun'
        //     ]),
        //     add() {
        //         let n = 10;
        //         this.addFun(n)
        //     },
        //     reduce() {
        //         this.reduceFun()
        //     }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
