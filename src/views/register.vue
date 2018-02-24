<template>
	<div class="middle-box text-center loginscreen animated fadeInDown login-container">
        <el-form class="m-t" role="form" :model="ruleForm2" :rules="rules2" ref="ruleForm2">
            <div class="form-group">
                <input type="text" class="form-controlb" v-model="ruleForm2.nickname" placeholder="nickname" required="">
            </div>

            <div class="form-group">
                <input type="email" class="form-controlb" v-model="ruleForm2.email" placeholder="Email" required="">
            </div>
            <div class="form-group">
                <input type="password" class="form-controlb" v-model="ruleForm2.password" placeholder="passward" required="">
            </div>
            <div class="form-group">
                <input type="password" class="form-controlb" v-model="ruleForm2.checkPass" placeholder="passward" required="">
            </div>
            <div class="form-group text-left">
                <label><input type="checkbox" name="" id="" value="" />I have read and agree to the <a href="#">Terms & Conditions</a> </label>
            </div>
            <button @click="addSubmit" class="btn btn-primary block full-width m-b" data-i18n="reg.d1">注册</button>

            <p class="text-muted text-left"><small>
Registered account</small></p>
            <a class="btn btn-sm btn-white btn-block" href="#/Login" data-i18n="reg.d3">登录</a>
        </el-form>
    </div>
</template>

<script>
	import util from '../common/js/util'
	import {register,addUser } from '../api/api'

	export default {
        data() {
	      
		      var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if (this.ruleForm2.checkPass !== '') {
		            this.$refs.ruleForm2.validateField('checkPass');
		          }
		          callback();
		        }
		      };
		      var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.ruleForm2.password) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		      };
		      return {
		        ruleForm2: {
		          email:'',
                  nickname:'',
		          password: '',
		          checkPass: '',
		          addr:''
		        },
		        rules2: {
					email:[
						{ required: true, message: '请输入邮件地址', trigger: 'blur' }
					],
                    nickname:[
						{ required: true, message: '请输入昵称', trigger: 'blur' }
					],
					password: [
						{ validator: validatePass, trigger: 'blur' }
					],
					checkPass: [
						{ validator: validatePass2, trigger: 'blur' }
					]
		        }

		      };
		    },
		methods: {
			//新增
			addSubmit: function () {
				this.$refs.ruleForm2.validate((valid) => {
					if (valid) {
						//NProgress.start();
						let para = Object.assign({}, this.ruleForm2);
						console.log(para)

						register(para).then((res) => {
							this.$alert(res.data.msg);
							this.$router.push({path:'/login'});
						})
						.catch(function (error) {
						    console.log(error);
						});
					}
				});
			}
		},

		mounted(){
            util.setLanguage();
		}
	}
</script>
<style>
	body {
	    background-color: #e3e3e3;
	}
</style>
<style scoped>
	.login-container {
	    -webkit-border-radius: 5px;
	    border-radius: 5px;
	    -moz-border-radius: 5px;
	    background-clip: padding-box;
	    margin: 180px auto;
	    width: 372px;
	    padding: 35px 35px 15px 35px;
	    background: #fff;
	    border: 1px solid #eaeaea;
	    box-shadow: 0 0 25px #cac6c6;
	}
</style>