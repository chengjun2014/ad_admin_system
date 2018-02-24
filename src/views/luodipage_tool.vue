<template>
	<div class="row">
    <div class="ibox">
        <div class="ibox-content special">
        	<el-row>
        		<el-col :span="4">
                    <h3>落地页列表</h3>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>落地页类型</th>
                            <!--<th width="200" data-i18n="home.i7">支付完成日期</th>
                            <th>落地页url</th>-->
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in pageList">
                            <td>{{item.type}}</td>
                            <!--<td>{{item.pay_complete_time}}</td>
                            <td style=" word-wrap: break-word; word-break: break-all;">{{item.home_url}}</td>-->
                            <td>
                                <a class="text-info" :href="item.home_url">预览</a>&nbsp;
                                <a class="glyphicon glyphicon-edit text-success" href="javascript:;" @click="onEdit(item)"></a>&nbsp;
                                <a class="glyphicon glyphicon-remove text-danger" href="javascript:;" @click="onDel(item)"></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
        		</el-col>
                
                <el-col :span="20">
                    <el-form ref="form" :model="page" label-width="80px">
                        <el-form-item label="类型">
                            <el-input v-model="page.type"></el-input>
                        </el-form-item>
                        <el-form-item label="图片">
                            <el-upload class="avatar-uploader" :action="upload_action" :data="upload_data" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="page.elements.graphUrl" :src="page.elements.graphUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="说明文字">
                            <div id="summernote" v-model="page.elements.discribe"></div>
                        </el-form-item>
                        <el-form-item label="联系方式">
                            <el-input type="textarea" v-model="page.elements.contact"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="onNew">创建</el-button>
                            <el-button type="primary" @click="onSubmit">保存</el-button>
                            <!--<el-button type="primary" @click="">预览</el-button>-->
                        </el-form-item>
                    </el-form>
                </el-col>
        	</el-row>
        </div>
    </div>
	</div>	
</template>

<script>
    import util from "../common/js/util"
    import {getHomepageList,HomepageAdd,HomepageModify,baseurl} from "../api/api"
	export default {
		data(){
			return {
                node: $(".note-editable"),
			    pageList:[],
                page:{
			        custid:util.getCustID(),
			        type:"小清新",
                    elements:{
                        graphUrl:'',
                        discribe:'',
                        contact:''
                    }
                },
                upload_action: baseurl + "/avarter/upload",
                upload_data: {
                    type: 'homepage'
                },
                edit:false
			}
		},

		mounted(){
            util.setLanguage();
            this.getPageList();
            $('#summernote').summernote();
		},
		methods: {
			getPageList() {
                let para = {
                    cust_id:util.getCustID()
                };

                getHomepageList(para).then((res) => {
                    let {code,msg} = res.data;
                    if (code!=200){
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }else{
                        this.pageList = res.data.result
                    }
                });
            },
            onSubmit() {
                this.page.elements.discribe = $('#summernote').summernote('code');
			    if (!this.edit){
			        console.log(this.page)
                    HomepageAdd(this.page).then((res) => {
                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }else{
                            this.getPageList()
                        }
                    });

                }else{
                    HomepageModify(this.page).then((res) => {
                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }else{
                            this.getPageList()
                        }
                    });
                }
			},
            onNew(){
			    this.page.elements.graphUrl = '';
                this.page.elements.discribe = '';
                this.page.elements.contact = '';
                this.edit = false
            },
            onEdit(row){
                this.edit = true;
                this.page = Object.assign(this.page, row);
                $(".note-editable").html(this.page.elements.discribe);
            },
            onDel(row){
                this.$confirm('确认删除该落地页吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                HomepageModify({id:row.id,online_status:1}).then((res) => {
                    let {code,msg} = res.data;
                    if (code!=200){
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }else{
                        this.getPageList()
                    }
                });})
            },
            handleAvatarSuccess(res, file) {
                if (res.code == 200) {
                    this.page.elements.graphUrl = res.url;
                }
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            preview(row){
                window.location.href=row.home_url
            }

		}
	}
</script>

<style>
@import "./css/plugins/summernote/summernote.css";

.special .el-upload__input {
    display: none !important;
}
.special .avatar {
    width: 110px;
    height: 110px;
    display: block;
}
</style>