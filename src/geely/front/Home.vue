<template>
    <div class="home">
        <el-container>
            <el-header style="padding: 0;height: 64px">
                <Header/>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <Aside/>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
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


<style scoped >

</style>