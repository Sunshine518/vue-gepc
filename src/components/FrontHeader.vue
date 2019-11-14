<template>
    <div class="container">
        <div class="logo_box">
            <img :src="imgUrl" width="250px">
            <div>吉利电子备件目录(GEPC)</div>
        </div>
        <div class="action">
            <div class="action_common">中文  /  EN</div>
            <i class="iconfont icon-desktop action_common" style="font-size: 20px" @click="goToBack"/>
            <el-dropdown class="action_common" @command="handleCommand">
              <span>
                  <img :src="peopleUrl" style='height:25px;width:25px;borderRadius:50%'>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="changePassWord">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout">注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>

<script>
    import session from '../until/session.js'

    export default {
        name: 'hello',
        data() {
            return {
                imgUrl: require("../assets/image/logo.png"),
                peopleUrl: require("../assets/image/people.jpg")
            }
        },
        methods:{
            goToBack(){
                this.$router.push("/back")
            },
            handleCommand(command) {
                switch (command) {
                    case 'changePassWord':
                       this.$message('click on item ' + command);
                        break;
                    case 'logout':
                        session.logout()
                        this.$router.push('/login')
                        break;
                }
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        background-color: #113362;
        /*background-image: linear-gradient(to right, #fff 0%, #113362 100%);*/
        height: 60px;
        width: 100vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        color: #ffffff;
    }

    .logo_box {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        font-size: 28px;
    }

    .action {
        position: absolute;
        right: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .action_common {
        font-size: 15px;
        margin-right: 45px;
    }
</style>
