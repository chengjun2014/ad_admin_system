<template>
	<section>
		<div class="row">
			<div class="col-md-2">
				<div class="ibox row">
					<div class="ibox-title">
						<h3 data-i18n="creative.h1">创意列表</h3>
					</div>
					<div class="ibox-content" style="padding: 20px 15px 1px;">
						<ul class="list-group clear-list">
							<li class="list-group-item" @click="showAd(item)" v-for="(item, index) in adList" :class="{'fist-item': index==0}">
								<span class="label label-primary">{{index + 1}}</span> {{item.name}}
								<button type="button" class="btn btn-danger btn-xs" aria-label="Close" @click.stop.prevent="delAd(item)" style="position:absolute;right:0px;"><span class="glyphicon glyphicon-remove" ></span></button>
							</li>
							<li v-if="adList.length" role="separator" class="divider"></li>
							<li class="list-group-item" @click="refresh"><i class="fa text-navy fa-cubes"></i> <span data-i18n="creative.h2">制作新创意广告</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-10">
				<div class="ibox">
					<div class="ibox-title">
						<!-- Nav tabs -->
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation" class="active"><a href="#weibo" aria-controls="weibo" role="tab" data-toggle="tab" modelCard="1" data-i18n="creative.h3">广告创意</a></li>
							<!-- <li role="presentation"><a href="#toutiao" aria-controls="profile" role="tab" data-toggle="tab" modelCard="3">头条</a></li> -->
						</ul>
					</div>
					<div class="ibox-content ui-tab" style="padding: 0 36px; border: none;">
						<!-- Tab panes -->
						<div class="tab-content">
							<div role="tabpanel" class="tab-pane active" id="weibo">
								<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" :class="{'active': modelCard == 1}"><a href="#weibo1" aria-controls="weibo1" role="tab" data-toggle="tab" modelCard="1" data-i18n="creative.h4">普通博文</a></li>
									<li role="presentation" :class="{'active': modelCard == 2}"><a href="#weibo2" aria-controls="weibo2" role="tab" data-toggle="tab" modelCard="2" data-i18n="creative.h5">九宫格</a></li>
									<li role="presentation" :class="{'active': modelCard == 3}"><a href="#weibo3" aria-controls="weibo3" role="tab" data-toggle="tab" modelCard="3" data-i18n="creative.h15">video</a></li>
									<li role="presentation" :class="{'active': modelCard == 4}"><a href="#weibo4" aria-controls="weibo4" role="tab" data-toggle="tab" modelCard="4" data-i18n="creative.h14">video</a></li>
								</ul>
								<div class="tab-content">
									<div role="tabpanel" class="tab-pane" :class="{'active': modelCard == 1}" id="weibo1">
										<form method="get" id="myForm1" class="form-horizontal" ref="myForm1">
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h6">广告标题</label>
												<div class="col-md-10">
													<input type="text" required="required" class="form-control" v-model="addForm.name">
												</div>
											</div>
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h7">正文</label>
												<div class="col-md-10">
													<textarea required="required" class="form-control" rows="3" v-model="addForm.elements.mblog_text" @input="formatterStr" data-id="addForm"></textarea>
												</div>
											</div>
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h8">图片</label>
												<div class="col-md-10">
													<div class="row tool-wrap">
													<template v-for="(item, index) in items">
													<el-upload class="avatar-uploader"
															   :action="addForm.upload_action"
															   :data="addForm.upload_data"
															   :show-file-list="false"
															   :on-success="handleAvatarSuccess"
															   :index="index"
															   :before-upload="beforeAvatarUpload" >
														<img v-if="item.imageUrl" :src="item.imageUrl" class="avatar">
														<i v-else class="el-icon-plus avatar-uploader-icon" @click="insertTo"></i>
													</el-upload>
													</template>

													<div class="avatar-uploader btn-wrap">
														<div class="el-upload el-btn_wrap">
															<button class="btn btn-primary" @click.stop.prevent="addImage" data-i18n="creative.h9">add image</button><br>
															<button class="btn btn-danger" @click.stop.prevent="deleteImage" data-i18n="creative.h10">delete image</button>
														</div>
													</div>
													</div>
												</div>
											</div>

											<div class="form-group">
												<div class="col-md-10 col-md-offset-2">
													<button class="btn btn-danger" @click.stop.prevent='taskCancel' data-i18n="smart_ad.cancel">取消</button>
													<button class="btn btn-primary" @click.stop.prevent='save' data-i18n="zizhi.g2">保存</button>
												</div>
											</div>
										</form>
									</div>
									<div role="tabpanel" class="tab-pane" :class="{'active': modelCard == 2}" id="weibo2">
										<form method="get" id="myForm2" class="form-horizontal" ref="myForm2">
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h11">广告标题</label>
												<div class="col-md-10">
													<input type="text" required="required" class="form-control" v-model="form2.name">
												</div>
											</div>
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h12">九宫格正文</label>
												<div class="col-md-10">
													<textarea required="required" class="form-control" rows="3" v-model="form2.elements.mblog_text" @input="formatterStr" data-id="form2"></textarea>
												</div>
											</div>
											<!--<div class="form-group">-->
												<!--<label for="" class="col-md-2 control-label" >Uid</label>-->
												<!--<div class="col-md-10">-->
													<!--<input required="required" class="form-control"  v-model="form2.elements.Uid"  data-id="form2"></input>-->
												<!--</div>-->
											<!--</div>-->
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h13">九宫格图片</label>
												<div class="col-md-10">
													<div class="row tool-wrap">
													<template v-for="(item, index) in form2.elements.grid">
													<el-upload class="avatar-uploader"
															   :action="addForm.upload_action"
															   :data="addForm.upload_data"
															   :show-file-list="false"
															   :on-success="handleAvatarSuccessGrid"
															   :index="index"
															   :before-upload="beforeAvatarUpload" >
														<img v-if="item.pic_url" :src="item.pic_url" class="avatar">
														<i v-else class="el-icon-plus avatar-uploader-icon" @click="insertTo"></i>

													</el-upload>
														<!--<input type="text" required="required" class="form-control" v-model="item.tag_url">-->
													</template>

													<div class="avatar-uploader btn-wrap">
														<div class="el-upload el-btn_wrap">
															<button class="btn btn-primary" @click.stop.prevent="addImage2" data-i18n="creative.h9">add image</button><br>
															<button class="btn btn-danger" @click.stop.prevent="deleteImage2" data-i18n="creative.h10">delete image</button>
														</div>
													</div>
													</div>
												</div>
											</div>

											<div class="form-group">
												<div class="col-md-10 col-md-offset-2">
													<button class="btn btn-danger" @click.stop.prevent='taskCancel' data-i18n="smart_ad.cancel">取消</button>
													<button class="btn btn-primary" @click.stop.prevent='save2' data-i18n="zizhi.g2">保存</button>
												</div>
											</div>
										</form>
									</div>

									<div role="tabpanel" class="tab-pane" :class="{'active': modelCard == 3}" id="weibo3">
										<form method="get" id="myForm3" class="form-horizontal" ref="myForm3">
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h11">广告标题</label>
												<div class="col-md-10">
													<input type="text" required="required" class="form-control" v-model="form3.name">
												</div>
											</div>
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h7">正文</label>
												<div class="col-md-10">
													<textarea required="required" class="form-control" rows="3" v-model="form3.elements.mblog_text" @input="formatterStr" data-id="form3"></textarea>
												</div>
											</div>
                                            <div class="form-group">
                                                <label for="" class="col-md-2 control-label" >ad url</label>
                                            <div class="col-md-10">

                                                <el-upload class="avatar-uploader"
                                                           :action="form3.upload_pic"
                                                           :data="form3.upload_data_pic"
                                                           :show-file-list="false"
                                                           :on-success="handleVideoSuccessPic"
                                                           :before-upload="beforeAvatarUpload" >
                                                    <img v-if="form3.elements.ad_url" :src="form3.elements.ad_url" class="avatar"></i>
                                                    <i v-else class="el-icon-plus avatar-uploader-icon" @click="insertTo"></i>
                                                </el-upload>
                                            </div>
                                            </div>
										 <div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h20">视频标题</label>
												<div class="col-md-10">
													<input type="text" required="required" class="form-control" v-model="form3.elements.title" placeholder="14个字以内">
												</div>
											</div>
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h21">视频简介</label>
												<div class="col-md-10">
													<textarea required="required" class="form-control" rows="3" v-model="form3.elements.desc" @input="formatterStr" data-id="form4" placeholder="34个字以内"></textarea>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-2 control-label" data-i18n="creative.h22">视频按钮类型</label>
												<div class="col-md-10">
													<label for="none" class="checkbox-inline">
														<input type="radio" id="none" value="none" v-model="form3.elements.button_type">
														<span> none </span>
													</label>
													<label for="join" class="checkbox-inline">
														<input type="radio" id="join" value="join" v-model="form3.elements.button_type">
														<span> join </span>
													</label>
													<label for="buy" class="checkbox-inline">
														<input type="radio" id="buy" value="buy" v-model="form3.elements.button_type">
														<span> buy </span>
													</label>
													<label for="download" class="checkbox-inline">
														<input type="radio" id="download" value="download" v-model="form3.elements.button_type">
														<span> download </span>
													</label>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-2 control-label" data-i18n="creative.h23">button url</label>
												<div class="col-md-10">
													<el-upload class="avatar-uploader"
															   :action="form3.upload_action"
															   :data="form3.upload_data"
															   :show-file-list="false"
															   :on-success="handleAvatarSuccessVedio"
															   :before-upload="beforeAvatarUpload" >
														<video style="width=50px;height=50px;" v-if="form3.elements.video_url1" :src="form3.elements.video_url1" ></video>
														<i v-else class="el-icon-plus avatar-uploader-icon" @click="insertTo"></i>
													</el-upload>
												</div>
											</div>											

											<div class="form-group">
												<div class="col-md-10 col-md-offset-2">
													<button class="btn btn-danger" @click.stop.prevent='taskCancel' data-i18n="smart_ad.cancel">取消</button>
													<button class="btn btn-primary" @click.stop.prevent='save3' data-i18n="zizhi.g2">保存</button>
												</div>
											</div>
										</form>
									</div>

									<div role="tabpanel" class="tab-pane" :class="{'active': modelCard == 4}" id="weibo4">
										<form method="get" id="myForm4" class="form-horizontal" ref="myForm4">
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h6">广告标题</label>
												<div class="col-md-10">
													<input type="text" required="required" class="form-control" v-model="form4.name">
												</div>
											</div>
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h7">正文</label>
												<div class="col-md-10">
													<textarea required="required" class="form-control" rows="3" v-model="form4.elements.mblog_text" @input="formatterStr" data-id="addForm"></textarea>
												</div>
											</div>
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h16">card标题</label>
												<div class="col-md-10">
													<input type="text" required="required" class="form-control" v-model="form4.elements.title" placeholder="14个字以内">
												</div>
											</div>
											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h17">card内容</label>
												<div class="col-md-10">
													<textarea required="required" class="form-control" rows="3" v-model="form4.elements.desc" @input="formatterStr" data-id="form4" placeholder="34个字以内"></textarea>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-2 control-label" data-i18n="creative.h18">card按钮类型</label>
												<div class="col-md-10">
													<label for="non" class="checkbox-inline">
														<input type="radio" id="non" value="none" v-model="form4.elements.button_type"><span> none</span>
													</label>
													<label for="join2" class="checkbox-inline">
														<input type="radio" id="join2" value="join" v-model="form4.elements.button_type"><span> join</span>
													</label>
													<label for="buy2" class="checkbox-inline">
														<input type="radio" id="buy2" value="buy" v-model="form4.elements.button_type"><span> buy</span>
													</label>
													<label for="download2" class="checkbox-inline">
														<input type="radio" id="download2" value="download" v-model="form4.elements.button_type"><span> download</span>
													</label>
												</div>
											</div>

											<!--<div class="form-group">
												<label class="col-md-2 control-label" data-i18n="creative.h19">card链接</label>
												<div class="col-md-10">
													<input type="text" required="required" class="form-control" v-model="form4.elements.ad_url">
												</div>
											</div>-->

											<div class="form-group">
												<label for="" class="col-md-2 control-label" data-i18n="creative.h8"></label>
												<div class="col-md-10">

													<el-upload class="avatar-uploader"
															   :action="form4.upload_action"
															   :data="form4.upload_data"
															   :show-file-list="false"
															   :on-success="handleAvatarSuccessCard"
															   :before-upload="beforeAvatarUpload" >
														<img v-if="form4.elements.ad_url" :src="form4.elements.ad_url" class="avatar"></i>
														<i v-else class="el-icon-plus avatar-uploader-icon" @click="insertTo"></i>
													</el-upload>													
												</div>
											</div>

											<div class="form-group">
												<div class="col-md-10 col-md-offset-2">
													<button class="btn btn-danger" @click.stop.prevent='taskCancel' data-i18n="smart_ad.cancel">取消</button>
													<button class="btn btn-primary" @click.stop.prevent='save4' data-i18n="zizhi.g2">保存</button>
												</div>
											</div>
										</form>
									</div>

								</div>
							</div>
							<div role="tabpanel" class="tab-pane" id="toutiao">
								<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active"><a href="#toutiao1" aria-controls="toutiao1" role="tab" data-toggle="tab" modelCard="3">头条1</a></li>
									<li role="presentation"><a href="#toutiao2" aria-controls="toutiao2" role="tab" data-toggle="tab" modelCard="4">头条2</a></li>
								</ul>
								<div class="tab-content">
									<div role="tabpanel" class="tab-pane active" id="toutiao1">
										toutiao1
									</div>
									<div role="tabpanel" class="tab-pane" id="toutiao2">
										toutiao2
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import util from "../common/js/util"
	import { baseurl, addAd, adList,delAd ,editAd} from '../api/api';
	
    export default {
		data(){
			return {
				modelCard: 1,
				edit: false,
                cur_index: null,
                addForm: {
                    cust_id: util.getCustID(),
                    biz_number: 1004,
                    platform: 1, //
                    material_type: 'feed',
                    name: '',

                    elements: {
                        mblog_text: '',
                        pics: []
                    },
                    upload_action: baseurl + '/material/upload',
                    upload_data: {
                        type: "material",
                        adgroupid: '',
                        custid: util.getCustID()
                    }
                },
                form2: {
                    cust_id: util.getCustID(),
                    biz_number: 1004,
                    platform: 1, //
                    material_type: 'feed_grid',
                    name: '',

                    elements: {
                        mblog_text: '',
                        grid: []
                    },

                    upload_action: baseurl + '/material/upload',
                    upload_data: {
                        type: "material",
                        adgroupid: '',
                        custid: util.getCustID()
                    }
                },
                form3: {
                    cust_id: util.getCustID(),
                    biz_number: 1004,
                    platform: 1, //
                    material_type: 'feed_video',
                    name: '',

                    elements: {
                        mblog_text: '',
                        button_type: 'download',
                        title:'',
                        desc:'',
			            video_url1:'',
                        ad_url:''
                    },
                    upload_action: baseurl + '/video/upload',
                    upload_data: {
                        type: "material",
                        adgroupid: "",
                        custid: util.getCustID()
                    },
                    upload_pic: baseurl + '/material/upload',
                    upload_data_pic: {
                        type: "material",
                        adgroupid: '',
                        custid: util.getCustID()
                    }
				},
                form4: {
                    cust_id: util.getCustID(),
                    biz_number: 1004,
                    platform: 1, //
                    material_type: 'feed_activity',
                    name: '',
                    elements: {
                        mblog_text: '',
                        button_type: 'none',
						ad_url:'',
						desc: '',
						title: ''
                    },
                    upload_action: baseurl + '/material/upload',
                    upload_data: {
                        type: "material",
                        adgroupid: '',
                        custid: util.getCustID()
                    }
                },
						
        		adList: [],
        		creatives: {},
        		items: [], // 用来存储对应的图片列表 下同
        		form2_items: []
			}
		},
		methods: {
			formatterStr: function(e) {
				var _str = $(e.target).val();
				var _form = $(e.target).data('id');
				if (_str.length > 130) {
					this.$message('最多输入130个字符！');
					var newStr = _str.substr(0,130);
					if (_form == 'addForm') {
						this.addForm.elements.mblog_text = newStr;
					} else {
						this.form2.elements.mblog_text = newStr;
					}
				}
			},
			handleAvatarSuccess: function(res, file) {
				var that = this;
        		if(res.code == 200){
        			if (this.modelCard == 1) {
						that.items.splice(that.cur_index,1,{id:res.id,type:2,imageUrl: res.url});
        			} else {
						that.form2_items.splice(that.cur_index,1,{id:res.id,type:3,imageUrl: res.url});
        			}
				}
			},
            handleAvatarSuccessGrid: function(res, file) {
                var that = this;
                if(res.code == 200){

                    this.form2.elements.grid[this.cur_index].pic_url = res.url;

                }
            },
            handleAvatarSuccessVedio: function(res, file) {
                var that = this;
                if(res.code == 200){

                    that.form3.elements.video_url1 = res.url;
                }
            },
            handleVideoSuccessPic: function(res, file) {
                var that = this;
                if(res.code == 200){

                    that.form3.elements.ad_url = res.url;
                }
            },
			handleAvatarSuccessCard: function(res, file) {
				var that = this;
				if (res.code == 200){
					that.form4.elements.ad_url = res.url;
				}
			},
			beforeAvatarUpload: function() {

			},
			addImage(){
				if (this.items.length < 9) {
					this.items.push({type: "material"});
				}
			},
			deleteImage(){
				if (this.items.length > 1) {
					this.items.splice(-1, 1);
				}
			},

			addImage2(){
				if (this.form2.elements.grid.length < 9) {
                    this.form2.elements.grid.push({tag_type: 1,pic_url:'',tag_url:'',callup_type:1,h5_url:'http://www.baidu.com'});
				}
			},
			deleteImage2(){
				if (this.form2.elements.grid.length > 1) {
                    this.form2.elements.grid.splice(-1, 1);
				}
			},
			// addImage4(){
			// 	console.log('buzhidao zheli xiang gansha!');
			// },
			// deleteImage4(){
			// 	console.log('buzhidao zheli xiang gansha 2!');
			// },
			taskCancel() {
				this.$router.push({
					path: '/main'
				})
			},
			refresh() {
				this.$router.go(0);
			},
			save() {

				var arr =[];
				for(var i=0; i<this.items.length;i++) {
				    if (this.items[i].imageUrl && this.items[i].imageUrl != '') {
				        arr.push(this.items[i].imageUrl);
                        continue;
                    }
                }

                if (arr.length == 0 ) {
                	this.$message({
				        message: "至少上传一张图片",
				        type: 'error'
				      });
                	return;
                }

                this.addForm.elements.pics = JSON.stringify(arr);

				if (!this.edit) { // 非编辑状态页既是新建状态
					if($('#myForm1').validator('validate').has('.has-error').length) {
						return;
					}



	                var that = this;
	                addAd(this.addForm).then((res) => {
	                    let {code,msg} = res.data;
	                    if (code!=200){
	                        this.$message({
	                            message: msg,
	                            type: 'error'
	                        });
	                    }else{
	                        this.$message({
	                            message: '创建成功！',
	                            type: 'info'
	                        });
	                        that.getAdList();
	                    }
	                });
                } else {

                    editAd(this.addForm).then((res) => {
                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }
                    });
                }
			},
			save2() {
				if (!this.edit) { // 非编辑状态页既是新建状态
					if($('#myForm2').validator('validate').has('.has-error').length) {
						return;
					}
                    let len = this.form2.elements.grid.length;

	                if (!(len == 4 || len == 6||len == 9)) {
                        this.$message({
                            message: "需要上传 4、 6 、 9 张图片",
                            type: 'error'
                        });
                        return;
                    } else {
                        for (var i = 0; i<len; i++) {
                            if (this.form2.elements.grid[i].pic_url == ''){

                                this.$message({
                                    message: "第"+i+"个图片没有上传！",
                                    type: 'error'
                                });
                                return;

							}
                        }
					}
                    let param = Object.assign({},this.form2)
                    let arr =JSON.stringify(param.elements);
                    param.elements = {grid:arr};

					console.log(param)

	                addAd(param).then((res) => {
	                    let {code,msg} = res.data;
	                    if (code!=200){
	                        this.$message({
	                            message: msg,
	                            type: 'error'
	                        });
	                    }else{
	                        this.$message({
	                            message: '创建成功！',
	                            type: 'info'
	                        });
	                        this.getAdList();
	                    }
	                });
                } else {
                    let param = Object.assign({},this.form2)
                    let arr =JSON.stringify(param.elements);
                    param.elements = {grid:arr};
                    editAd(param).then((res) => {
                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }
                    });
                }
			},
            save3() {
                if (!this.edit) { // 非编辑状态页既是新建状态
                    if($('#myForm3').validator('validate').has('.has-error').length) {
                        return;
                    }


                    addAd(this.form3).then((res) => {
                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }else{
                            this.$message({
                                message: '创建成功！',
                                type: 'info'
                            });
                            this.getAdList();
                        }
                    });
                } else {
                    editAd(this.form3).then((res) => {
                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }
                    });
                }
            },
            save4() {
            	if (!this.edit) { // 非编辑状态页既是新建状态
                    if($('#myForm4').validator('validate').has('.has-error').length) {
                        return;
                    }
                    addAd(this.form4).then((res) => {
                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }else{
                            this.$message({
                                message: '创建成功！',
                                type: 'info'
                            });
                            this.getAdList();
                        }
                    });
                } else {
                    editAd(this.form4).then((res) => {
                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }else{
                            this.$message({
                                message: '保存成功！',
                                type: 'info'
                            });
                        }
                    });
                }
            },
			insertTo(ev) {
				this.cur_index = $(ev.target).closest('.avatar-uploader').attr('index');
				console.log(this.cur_index)
			},
			resetModelCard1() {
				this.addForm.name = '';
				this.addForm.elements.mblog_text = '';
				this.items = [];
				this.addImage();
			},
			resetModelCard2() {
				this.form2.name = '';
				this.form2.elements.mblog_text = '';
				this.form2.elements.grid = [];
				this.addImage2();
			},
			resetModelCard3() {
                this.form3.name = '';
				this.form3.elements.mblog_text='';
                this.form3.elements.title='';
                this.form3.elements.desc='';
                this.form3.elements.button_type='';
                this.form3.elements.video_url1 = '';
                this.form3.elements.ad_url = '';
			},
			resetModelCard4() {
                this.form4.name = '';
				this.form4.elements.mblog_text='';
                // this.form4.elements.pics = '';
				this.form4.elements.title='';
                this.form4.elements.desc='';
				this.form4.elements.ad_url ='';
                this.form4.elements.button_type='';
			},
			showAd(item) {
				this.edit = true;
				this.creatives = item;
				if (item.material_type == 'feed') {
					this.modelCard = 1;
					this.items = [];

					var _arr = JSON.parse(item.elements.pics),
						len = _arr.length;

					for (var i = 0; i<len; i++) {
						this.items.push({imageUrl: _arr[i]});
					}

					this.addForm.name = item.name;
					this.addForm.id = item.id;
					this.addForm.elements = Object.assign({},item.elements);

					this.creatives.cust_id = this.addForm.cust_id;

					this.resetModelCard2();
                    this.resetModelCard3();
                    this.resetModelCard4();
				} else if (item.material_type == 'feed_grid') {
					this.modelCard = 2;
					this.form2_items = [];
					this.form2.name = item.name;
                    this.form2.id = item.id;
//					this.form2.elements.mblog_text = item.elements.mblog_text;
//					this.form2.elements.grid = item.elements.grid;
					this.form2.elements = Object.assign({},item.elements)
					this.creatives.cust_id = this.form2.cust_id;

					this.resetModelCard1();
                    this.resetModelCard3();
                    this.resetModelCard4();
				}else if (item.material_type == 'feed_video') {
                    this.modelCard = 3;
                    this.form3.name = item.name;
                    this.form3.id = item.id;
                    this.form3.elements = Object.assign({},item.elements);
                    this.creatives.cust_id = this.form3.cust_id;
                    console.log(this.form3)

                    this.resetModelCard1();
                    this.resetModelCard2();
                    this.resetModelCard4();
                }else if (item.material_type == 'feed_activity'){
					this.modelCard = 4;
                    this.form4.name = item.name;
                    this.form4.id = item.id;
                    this.form4.elements = Object.assign({},item.elements);
                    this.creatives.cust_id = this.form4.cust_id;

                    this.resetModelCard1();
                    this.resetModelCard2();
                    this.resetModelCard3();
				}
			},
			delAd(item){
				this.$confirm('确认删除该创意吗?', '提示', {
					type: 'warning'
				}).then(() => {
                delAd({id:item.id,d_flag:1 }).then((res) => {

                    let { code, msg } = res.data;

                    if(code != 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                    	this.$message({
                            message: 'Delete Success!',
                            type: 'success'
                        });
                        this.getAdList();
                }});})
			},
			getAdList() {
				adList({cust_id: util.getCustID()}).then((res) => {

				    let { code, msg } = res.data;

				    if(code != 200) {
				      this.$message({
				        message: msg,
				        type: 'error'
				      });
				    } else {
				      this.adList = res.data.result;

				      for(var j=0; j<this.adList.length; j++) {

				        var _item = this.adList[j];
                          _item.elements={};

				        if (_item.material_type == 'feed_grid'){
                            _item.elements = JSON.parse(_item.masterial[0].c_value)
						}else{
                            for(var i=0; i<_item.masterial.length; i++) {
                                var temp=_item.masterial[i];

                                _item.elements[temp.c_name] = temp.c_value;
                            }

						}


				      }
				    }
			    });
			}
		},

		mounted(){
			util.setLanguage();

		    this.getAdList();
		    this.addImage(); // 初始化直接显示一个图片占位符
		    this.addImage2();
		    var that = this;
		    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			  that.modelCard = $(this).attr('modelCard');
			})
		}
    }

</script>

<style>
	.el-upload__input {
		display: none !important;
	}
	.list-group-item {
		cursor: pointer;
	}

	.tool-wrap {
		width: 400px;
		position: relative;
		min-height: 117px;
	}

	.tool-wrap .avatar-uploader {
		float: left;
        
	}
	.avatar-uploader .btn {
        margin-top: 15px;
    }
    .btn-wrap {
    	position: absolute;
    	right: -145px;
    	bottom: 0;
    }

	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		margin-left: 15px;
	}
	.avatar-uploader .el-btn_wrap {
		border: none;
		border-radius: 0;
	}
	.img-max-width{
		max-width: 100%;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #20a0ff;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 110px;
		height: 110px;
		line-height: 110px;
		text-align: center;
	}
	.avatar {
		width: 110px;
		height: 110px;
		display: block;
	}
</style>