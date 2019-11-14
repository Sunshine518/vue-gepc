<template>
    <div class="container">
        <div class="box">
            <h2>Login</h2>
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
                <el-form-item
                        label="用户名"
                        prop="loginName"
                        :rules="[
                      { required: true, message: '请输入用户名'},
                    ]"
                >
                    <el-input v-model.number="numberValidateForm.loginName" auto-complete="off"
                              style="width: 240px"></el-input>
                </el-form-item>

                <el-form-item
                        label="密码"
                        prop="password"
                        :rules="[
                      { required: true, message: '请输入密码'},
                    ]">
                    <el-input type="password" v-model="numberValidateForm.password" autocomplete="off"  style="width: 240px"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from '../../https.js'
    import ajax from '../../until/ajax.js'

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                numberValidateForm: {
                    loginName: '',
                    password: ''
                }
            }
        },
        created() {

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.login(this.numberValidateForm)
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            login(obj){
              let password =  ajax.AESEncrypt(obj.password, '1111222233334444')
              let params = {...obj,password:password}
                window.console.log(params)
                axios.fetchPost('/login:pc',params ).then(() => {
                        this.$router.push('/')
                    }).catch(err=>{
                           window.console.log(err)
                        }
                    )
            }
        }
    }
</script>


<style scoped lang="scss">
    .container{
        margin:0;
        padding:0;
        font-family:sans-serif;
        background: url('../../assets/image/login_bg.jpg');
        width:100vw;
        height: 100vh;
        background-size:cover;
    }
    .box{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        /*实现块元素百分比下居中*/
        width:450px;
        padding:50px;
        background: rgba(0,0,0,.8);
        box-sizing:border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,.5);
        border-radius:15px;
    }
    .box h2{
        margin:0 0 30px;
        padding:0;
        color: #fff;
        text-align:center;
    }


</style>