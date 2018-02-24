<template>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title" data-i18n="login.c1">System Login</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <label class="el-checkbox remember">
            <input type="checkbox" v-model="checked" checked><span data-i18n="login.c3">Remember password</span>
        </label>
        <el-form-item>
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining" data-i18n="login.c2">Login</el-button>
        </el-form-item>
        <div class="text-right">
            <router-link to="/findpwd" style="margin-left: 20px" data-i18n="login.c5">Forget password</router-link>
            <router-link to="/reg" style="margin-left: 20px" data-i18n="login.c4">Registration</router-link>
        </div>
    </el-form>
</template>
<script>
import util from "../common/js/util"
import { requestLogin } from '../api/api';
//import NProgress from 'nprogress'
export default {
    data() {
        return {
            logining: false,

            ruleForm2: {
                account: '',
                checkPass: ''
            },
            rules2: {
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    //{ validator: validaePass }
                ],
                checkPass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    //{ validator: validaePass2 }
                ]
            },
            checked: true
        };
    },
    methods: {
        handleReset2() {
            this.$refs.ruleForm2.reset();
            // this.ruleForm2.checkPass='';
        },
        handleSubmit2(ev) {
            var _this = this;
            this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    //_this.$router.replace('/table');
                    this.logining = true;
                    //NProgress.start();
                    var loginParams = { email: this.ruleForm2.account, password: this.ruleForm2.checkPass };
                    requestLogin(loginParams).then(data => {
                        this.logining = false;
                        //NProgress.done();
                        console.log(data)
                        let { code, msg, user, token } = data;
                        console.log(user)
                        if (code !== 200) {
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        } else {
                            sessionStorage.setItem('user', JSON.stringify(user));
                            sessionStorage.setItem('token', token);
                            this.$router.push({ path: '/main' });
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        mounted() {
            util.setLanguage();
        }
    }
}
</script>
<style lang="scss">
body {
    background-color: #e3e3e3;
}

.login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0px 0px 35px 0px;
    }
}
</style>