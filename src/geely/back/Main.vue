<template>
  <div id="BackMain">
    <el-container>
      <el-aside width="200px">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    import Header from '../../components/BackHeader'
    import Aside from '../../components/BackAside'

    export default {
        name: 'BackMain',
        components: {
            Header,
            Aside
        },
    }
</script>

<style>

</style>
