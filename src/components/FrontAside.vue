<template>
    <div class="hello">
        <el-menu :default-active="activeIndex" @select="handleSelect" style="text-align: left">
            <el-menu-item index="1"><i class="el-icon-setting"></i>配置查询</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-tickets"></i>海外技术通知单</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-service"></i>答疑平台</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-goods"></i>购物车</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-search"></i>备件所属车系</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import axios from '../https.js'
    import session from '../until/session.js'

    export default {
        data() {
            return {
                activeIndex: this.$route.query.key ? this.$route.query.key :'1' ,
            }
        },
        created() {
            this.getUserInfo()
        },
        methods: {
            handleSelect(key) {
                this.activeIndex = key
                switch (key) {
                    case '1':
                        this.$router.push({ path: '/configure', query: { key: 1 }});
                        break;
                    case '2':
                        this.$router.push({ path: '/notice', query: { key: 2 }});
                        break;
                    case '3':
                        this.$router.push({ path: '/answerCenter', query: { key: 3 }});
                        break;
                    case '4':
                        this.$router.push({ path: '/shoppingCart', query: { key: 4 }});
                        break;
                    case '5':
                        this.$router.push({ path: '/carsSpareParts', query: { key: 5}});
                        break;
                }

            },
            getUserInfo(){
                // axios.fetchGet('/userInfo' ).then((res) => {
                    // window.console.log(res)
                // }).catch(err=>{
                //         window.console.log(err)
                //     }
                // )
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
