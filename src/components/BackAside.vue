<template>
    <div class="hello">
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-setting"></i>退出</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import axios from '../https.js'
    import session from '../until/session.js'

    export default {
        data() {
            return {}
        },
        created() {
            this.getMenu()
        },
        methods: {
            handleSelect(key) {
                switch (key) {
                    case '1':
                        this.$router.push('/Page1');
                        break;
                    case '2':
                        this.$router.push('/Page2')
                        break;
                    case '3':
                        this.$router.push('/Page3')
                        break;
                    case '4':
                        this.logout()
                        break;
                }
            },
            getMenu(){
                axios.fetchGet('/Menu/platformId/4?companyId=6' ).then((res) => {
                    window.console.log(res)
                }).catch(err=>{
                        window.console.log(err)
                    }
                )
            },
            logout(){
                session.logout()
                this.$router.push('/login')
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
