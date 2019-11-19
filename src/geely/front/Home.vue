<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Aside/>
            </el-aside>
            <el-container>
                <el-main> <router-view></router-view></el-main>
                <el-footer>Copyright @ 吉利海外 2018</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import Aside from '../../components/FrontAside'
    import Header from '../../components/FrontHeader'

    export default {
        name: 'home',
        components: {
            Header,
            Aside
        },
        data() {
            return {}
        },
        created() {

        }

    }
</script>


<style scoped>

    .el-header, .el-footer {
        background-color: #E9EEF3;
        color: #333;
        font-size: 14px;
        text-align: center;
        line-height: 60px;
        padding: 0;
    }

    .el-aside {
        background-color: #fff;
        color: #333;
        text-align: center;
        height: calc(100vh - 60px);
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }




</style>