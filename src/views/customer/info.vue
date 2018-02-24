<template>
    <section>
    
        <div class="animated fadeIn">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5 data-i18n="info.f1">基本信息</h5>
                </div>

                <div class="ibox-content">
                    <form action="" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f0">广告主类型</label>
                            <div class="col-sm-6 radio">
                                <label>
                                    <input type="radio" v-model="form.typecd" name="optionsRadios" value="1">
                                    <span data-i18n="info.f2">个人</span>
                                </label>

                                <label>
                                    <input type="radio" v-model="form.typecd" name="optionsRadios" value="2">
                                    <span data-i18n="info.f3">企业</span>
                                </label>
                            </div>
                        </div>
                    </form>
                        <form method="get" id="form1" class="form-horizontal" v-show="form.typecd==1">
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f4">登录邮箱</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f5">昵称</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.nickname">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f6">姓名</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f7">证件号码</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.person_id">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f8">性别</label>
                            <div class="col-sm-6">
                                <el-select v-model="form.sex" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f29">日限额</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.daily_limit">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f9">上传头像</label>
                            <div class="col-sm-6">
                                <el-upload class="avatar-uploader" :action="upload_action" :data="upload_data" :show-file-list="false" :on-success="handleAvatarSuccess" >
                                    <img v-if="form.avarter" :src="form.avarter" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </div>
                        </div>
                    </form>
                    <form method="get" id="form2" class="form-horizontal" v-show="form.typecd==2">
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f4">登录email</label>
                            <div class="col-sm-6">
                                <span style="display: block;margin-top: 6px;">{{form.email}}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f5">昵称</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.nickname">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f30">企业名称</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.company">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f31">企业证件号码</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.company_id">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f32">营业年限</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.duration">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f33">企业规模</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.scale">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f29">日限额</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.daily_limit">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f9">上传头像</label>
                            <div class="col-sm-6">
                                <el-upload class="avatar-uploader" :action="upload_action" :data="upload_data" :show-file-list="false" :on-success="handleAvatarSuccess" >
                                    <img v-if="form.avarter" :src="form.avarter" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5 data-i18n="info.f14" >业务信息</h5>

                </div>
                <div class="ibox-content">
                    <form method="get" id="form3" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f15">主要行业信息</label>
                            <div class="col-sm-6">
                                <!--<input required="" type="text" class="form-control" v-model="form.orgindustry">-->
                                <select v-model="form.orgindustry" placeholder="请选择" class="form-control">
                                    <option
                                            v-for="item in idsCategory"

                                            :value="item['0']">
                                        {{item['1']}}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f16">主营业务</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.business">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f17">网站</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.web">
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5 data-i18n="info.f18">联系信息</h5>

                </div>
                <div class="ibox-content">
                    <form method="get" id="form4" class="form-horizontal">

                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f19">街道地址</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.address">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f20">城市</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.city">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f21">州/省/区域</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.district">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f22">邮编</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.zip">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f23">国家/地区</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.acd">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f24">联系电话</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.phone">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" data-i18n="info.f25">传真</label>
                            <div class="col-sm-6">
                                <input required="" type="text" class="form-control" v-model="form.fax">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-sm-2"></label>
                            <div class="col-sm-6">
                                <button class="btn btn-primary" @click="onSubmit" data-i18n="info.f26">保存</button>
                                <button class="btn btn-primary" @click="changePwd" data-i18n="info.f27">changePwd</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
        <!--修改password界面-->
        <el-dialog size="tiny" v-model="dialogVisible" :close-on-click-modal="false">
            <el-form :model="pwdForm" :rules="pwdRules" ref="pwdForm">
                <el-form-item prop="oldpwd">
                    <label data-i18n="pass.j2"></label>
                    <el-input type="password" v-model="pwdForm.oldpwd" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="pwd">
                    <label data-i18n="pass.j3"></label>
                    <el-input type="password" v-model="pwdForm.pwd" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="pwd_check">
                    <label data-i18n="pass.j4"></label>
                    <el-input type="password" v-model="pwdForm.pwd_check" auto-complete="off"></el-input>
                </el-form-item>
    
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="closePwd" data-i18n="pass.j5"></el-button>
                <el-button type="primary" @click.native="pwdSubmit" :loading="pwdLoading" data-i18n="pass.j6">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
import util from '../../common/js/util'
import {
    getCustomer,
    customerModify, baseurl,getIdsCategoryList
} from '../../api/api';
import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
export default {
    components: { ElButton },
    data() {

        var validatePassOld = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.form.password !== hex_md5(value)) {
                    callback(new Error('原密码输入有误'));
                }
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.pwdForm.pwd_check !== '') {
                    this.$refs.pwdForm.validateField('pwd_check');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.pwdForm.pwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            hasError: false,
            form: {
                cust_id: '',
                name: '',
                password: '',
                location: '',
                im: '',
                nickname: '',
                phone: '',
                email: '',
                confirmed: '',
                confirmed_time: '',
                acd: '',
                orgindustry: '',
                address: '',
                zip: '',
                payedflag: '',
                deleteflag: '',
                levelcd: '',
                typecd: '1',
                create_time: '',
                update_time: '',
                dailylogintime: '',
                custstatus: '',
                reason: '',
                company: '',
                city: '',
                district: '',
                fax: '',
                person_id: '',
                company_id: '',
                business: '',
                web: '',
                sex: '',
                duration: '',
                scale: '',
                avarter: ''

            },
            loading: false,
            dialogVisible: false,
            pwdLoading: false,
            pwdForm: {
                oldpwd: '',
                pwd: '',
                pwd_check: ''
            },
            pwdRules: {
                oldpwd: [{
                    validator: validatePassOld,
                    trigger: 'blur'
                }],
                pwd: [{
                    validator: validatePass,
                    trigger: 'blur'
                }],
                pwd_check: [{
                    validator: validatePass2,
                    trigger: 'blur'
                }]
            },
            upload_action: baseurl + "/avarter/upload",
            upload_data: {
                type: 'avarter'
            },
            options: [{
                value: '女',
                label: '女'
            }, {
                value: '男',
                label: '男'
            }],
            idsCategory:[]
        }
    },
    methods: {
        checkforms() {
            if(this.form.typecd == 1 && $('#form1').validator('validate').has('.has-error').length) {
                this.hasError = true;
                return;
            }
            if(this.form.typecd == 2 && $('#form2').validator('validate').has('.has-error').length) {
                this.hasError = true;
                return;
            }
            if($('#form3, #form4').validator('validate').has('.has-error').length) {
                this.hasError = true;
            }
        },
        onSubmit() {
            this.checkforms();
            if (this.hasError) {
                return;
            }
            this.loading = true;
            console.log("info save!")
            
            customerModify(this.form).then((res) => {
                this.loading = false;

                let { code, msg } = res.data;
                console.log('sss', res.data);
                this.$message({
                    message: msg,
                    type: 'info'
                });
            })
        },
        pwdSubmit() {
            this.$refs.pwdForm.validate((valid) => {
                if (valid) {
                    this.pwdloading = true;

                    let para = {
                        cust_id: util.getCustID(),
                        password: this.pwdForm.pwd
                    };
                    customerModify(para).then((res) => {
                        this.loading = false;

                        let { code, msg } = res.data;
                        if (code !== 200) {
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        } else {
                            this.$message({
                                message: "密码修改成功",
                                type: 'info'
                            });
                            this.$refs['pwdForm'].resetFields();
                            this.dialogVisible = false;
                            this.getCustomer();
                        }

                    });
                }
            });
        },
        getCustomer() {
            let para = {
                cust_id: util.getCustID()
            };

            getCustomer(para).then((res) => {
                this.form = res.data.result;
                console.log(this.form);
            });
        },
        getIdsCategory() {

            getIdsCategoryList().then((res) => {
                this.idsCategory = res.data.result;
                console.log(this.idsCategory);
            });
        },
        changePwd() {

            this.dialogVisible = true
            util.setLanguage();

        },
        closePwd() {

            this.$refs['pwdForm'].resetFields();
            this.dialogVisible = false;

        },
        handleAvatarSuccess(res, file) {

            if (res.code == 200) {
                this.form.avarter = res.url;
            }

        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            //                if (!isJPG) {
            //                    this.$message.error('上传头像图片只能是 JPG 格式!');
            //                }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            //                return isJPG && isLt2M;
            return isLt2M;
        }
    },
    created() {
        util.setLanguage();
        this.getCustomer();
        this.getIdsCategory()

    }
}


</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>