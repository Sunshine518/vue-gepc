<template>
    <div class="container">
        <div class="box">
            <h2>Login</h2>
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
                <el-form-item
                        label="用户名"
                        prop="username"
                        :rules="[
                      { required: true, message: '请输入用户名'},
                    ]"
                >
                    <el-input v-model.number="numberValidateForm.username" auto-complete="off"
                              style="width: 240px"></el-input>
                </el-form-item>
                <el-form-item
                        label="密码"
                        prop="password"
                        :rules="[
                      { required: true, message: '密码不能为空'},
                    ]"
                >
                    <el-input type="password" v-model.number="numberValidateForm.password" auto-complete="off"
                              style="width: 240px"></el-input>
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
    import https from '../../https.js'
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                numberValidateForm: {
                    username: '',
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
                window.console.log(obj)
                    https.fetchPost('/login:pc',obj ).then((data) => {
                        window.console.log(data)
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