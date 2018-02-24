<template>
	<section>
		<div class="panel-group" id="accordion">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
                        <a id = "banner1" data-toggle="collapse disabled" data-parent="#accordion" href="javascript::" data-i18n="smart_ad.basic">投放基本信息</a>
                    </h4>
				</div>
				<div id="collapseOne" class="panel-collapse collapse" :class = "{ in: show == 0 }">
					<div class="panel-body">
						<div class="col-lg-12">
							<div class="ibox">
								<form id="myForm1" method="get" class="form-horizontal">
									<div class="form-group">
										<label class="col-sm-2 control-label" data-i18n="smart_ad.basic_name">广告名称</label>
										<div class="col-sm-10">
											<input type="text" required="" class="form-control" v-model="addForm.title">
										</div>
									</div>
									<div class="form-group ">
										<label class="col-sm-2 control-label" data-i18n="smart_ad.basic_date" >投放日期</label>
										<div class="col-sm-10">
											<div class="input-daterange input-group datapicker" id="datepicker" style="width: 445px;">
												<input type="text" required="" v-model="addForm.start_date" class="input-sm form-control" id="start_date">
												<span class="input-group-addon">to</span>
												<input type="text" required="" v-model="addForm.end_date" class="input-sm form-control" id="end_date">
											</div>
										</div>
									</div>

									<div class="form-group">
										<label class="col-sm-2 control-label" data-i18n="smart_ad.basic_hour" >投放时段</label>
										<div class="col-sm-10">
											<label for="basic_all_hour">
												<input type="radio" value="0" id="basic_all_hour" v-model="is_all_time">
												<span data-i18n="smart_ad.basic_all_hour">全时段</span>
											</label>
											<label for="basic_special_hour">
												<input type="radio" value="1" id="basic_special_hour" v-model="is_all_time">
												<span data-i18n="smart_ad.basic_special_hour">特定时段</span>
											</label>
										</div>
									</div>
									<div class="form-group" v-if="is_all_time=='1'">
										<div class="col-sm-offset-2">
											<div class="col-sm-10">
											<el-time-select required="" placeholder="起始时间" v-model="addForm.start_time" :picker-options="{start: '00:00',step: '01:00',end: '24:00'}">
											</el-time-select>
											<el-time-select required="" placeholder="结束时间" v-model="addForm.end_time" :picker-options="{start: '00:00',step: '01:00',end: '24:00', minTime: addForm.start_time}">
											</el-time-select>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2 control-label" data-i18n="smart_ad.basic_ison" >是否启用</label>
										<div class="col-sm-10">
											<label for="" class="control-label">
												<el-switch v-model="addForm.online_status" on-color="#1ab394"sss></el-switch>
											</label>
										</div>
									</div>
									<div class="form-group">
										<div class="col-sm-offset-2">
											<div class="col-sm-10">
											<button class="btn btn-primary" @click.stop.prevent='goTaskTwo' data-i18n="smart_ad.next" >下一步</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
                        <a id = "banner2" data-toggle="collapse disabled" data-parent="#accordion" href="javascript::" data-i18n="smart_ad.landingpage">落地页地址</a>
                    </h4>
				</div>
				<div id="collapseTwo" class="panel-collapse collapse" :class = "{ in: show == 1 }">
					<div class="panel-body">
						<div class="col-lg-12">
							<div class="ibox">
								<form method="get" id="myForm2" class="form-horizontal">
									<div class="form-group">
										<label class="col-md-2 control-label" data-i18n="smart_ad.landingpage_biaodi">推广标的物</label>
										<div class="col-sm-10">
											<label class="control-label"><input type="radio" v-model="url_origin" value="1"><span data-i18n="smart_ad.landingpage_own_url"> 我的网站链接 </span></label>
											<label class="control-label"><input type="radio" v-model="url_origin" value="0"><span data-i18n="smart_ad.landingpage_created_url"> 我制作的落地页面</span></label>
										</div>
									</div>
									<div class="form-group">
										<div class="col-sm-offset-2 col-sm-10">
											<input required="" v-model="addForm.elements.landingpage_url" type="text" class="form-control pull-left">
											<span class="input-group-btn pull-left" v-show="url_origin == 0 ">
												<button class="btn btn-primary btn-make" style="width: auto;" data-i18n="smart_ad.landingpage_tools" @click="dialogVisible = true">选择落地页</button>
											</span>
										</div>
									</div>
									<div class="form-group">
										<div class="col-sm-10 col-md-offset-2">
											<button class="btn btn-danger" @click.stop.prevent='taskCancelClick' data-i18n="smart_ad.cancel">取消</button>
											<button class="btn btn-primary" @click.stop.prevent='show = 0' data-i18n="smart_ad.last" >上一步</button>
											<button class="btn btn-primary" @click.stop.prevent='goTaskThree' data-i18n="smart_ad.next">下一步</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
                        <a id="banner3" data-toggle="collapse disabled" data-parent="#accordion" href="javascript::" data-i18n="smart_ad.creative">创意制作</a>
                    </h4>
				</div>
				<div id="collapseThree" class="panel-collapse collapse" :class = "{ in: show == 2 }">
					<div class="panel-body">
						<form Id="myForm3" role="form">
							<div class="col-lg-12">
								<div class="ibox">
									<div class="panel">
										<div class="panel-title"></div>
										<div class="panel-content">
											<div class="row">
												<div class="col-md-2">
													<div class="dropdown">
														<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span data-i18n="smart_ad.adList">创意列表</span><span class="caret"></span>
														</button>
														<ul class="dropdown-menu" aria-labelledby="dropdownMenu1" style="max-height: 300px; overflow-y:scroll;">
															<li v-for="(item, index) in adList"><a @click="showAd(item)" href="javascript:;">{{item.name}}</a></li>
															<li v-if="adList.length" role="separator" class="divider"></li>
															<li><router-link :to="{ path: '/creative_tool'}">制作新创意广告</router-link></li>
														</ul>
													</div>
												</div>
												<div class="col-md-10">
													<div class="view-wrap">
														<div class="view-head f-cb">
															<span class="pull-left">recommend</span>
															<i class="glyphicon pull-right glyphicon-menu-down"></i>
														</div>
														<div class="view-content">
															<div class="wb-user-info f-cb">
																<img :src="avarter" class="f-fl" alt="">
																<div class="f-fl wb-form">
																	<em>{{name}}</em>
																	<p>from  weibo.com</p>
																</div>
																<a class="f-fr btn btn-default btn-warning btn-sm">follow</a>
															</div>
															<preView v-if="creatives.cust_id" :adInfo="preview"></preView>
														</div>
														<div class="view-foot f-cb">
															<span><i class="glyphicon glyphicon-share"></i> 800</span>
															<span><i class="glyphicon glyphicon-edit"></i> 120</span>
															<span><i class="glyphicon glyphicon-thumbs-up"></i> 6542</span>
														</div>
													</div>
													
												</div>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-md-10 col-md-offset-2">
										<button class="btn btn-danger" @click.stop.prevent='taskCancelClick' data-i18n="smart_ad.cancel">取消</button>
										<button class="btn btn-primary" @click.stop.prevent='show = 1' data-i18n="smart_ad.last">上一步</button>
										<button class="btn btn-primary" @click.stop.prevent='goTaskFour' data-i18n="smart_ad.next">下一步</button>
										</div>
									</div>
								
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
                        <a id = "banner4" data-toggle="collapse disabled" data-parent="#accordion" href="javascript::"  data-i18n="smart_ad.ad_target">智能投放目标设定</a>
                    </h4>
				</div>
				<div id="collapseFour" class="panel-collapse collapse" :class = "{ in: show == 3 }">
					<div class="panel-body">
						<form Id="myForm4" role="form">
							<div class="col-lg-12">
								<div class="ibox">
									<form method="get" class="form-horizontal">
										<div class="form-group">
											<div class="col-sm-1 checkbox checkbox-inline">
												<label for="inlineCheckbox1"><input type="checkbox" id="inlineCheckbox1" value="cpm" v-model="checkbox1">CPM </label>
											</div>
											<label class="col-sm-2 control-label" data-i18n="smart_ad.ad_target_cpm_fee">单位费用:5.2元</label> <label class="col-sm-2 control-label" data-i18n="smart_ad.count_label" >需求数量</label>
											<div class="col-sm-4"><input @focus="clearInput" @blur="blurInput" :disabled="!checkbox1" v-model="addForm.elements.CPM" type="text" class="form-control"></div>
										</div>
										<div class="form-group">
											<div class="col-sm-1 checkbox checkbox-inline">
												<label for="inlineCheckbox2"><input type="checkbox" id="inlineCheckbox2" value="cpc" v-model="checkbox2">CPC </label>
											</div>
											<label class="col-sm-2 control-label" data-i18n="smart_ad.ad_target_cpc_fee" >单位费用:8.6元</label> <label class="col-sm-2 control-label" data-i18n="smart_ad.count_label" >需求数量</label>
											<div class="col-sm-4"><input @focus="clearInput" @blur="blurInput" :disabled="!checkbox2" v-model="addForm.elements.CPC" type="text" class="form-control"></div>
										</div>
										<div class="form-group">
											<div class="col-sm-1 checkbox checkbox-inline">
												<label for="inlineCheckbox3"><input type="checkbox" id="inlineCheckbox3" value="cpa" v-model="checkbox3">CPA </label>
											</div>
											<label class="col-sm-2 control-label" data-i18n="smart_ad.ad_target_cpa_fee" >单位费用:9.2元</label> <label class="col-sm-2 control-label" data-i18n="smart_ad.count_label" >需求数量</label>
											<div class="col-sm-4"><input @focus="clearInput" @blur="blurInput" :disabled="!checkbox3" v-model="addForm.elements.CPA" type="text" class="form-control"></div>
										</div>
										<hr>
										<div class="form-group"><label class="col-sm-offset-2 col-sm-2 control-label" style="margin-left: 248px;" data-i18n="smart_ad.total_fee_label" > 合计金额</label>
											<div class="col-sm-3"><span class="help-block m-b-none">$ {{ totalAmount }} CAD</span></div>
										</div>
										<div class="form-group" style="margin-left: 184px;">
											<div class="col-sm-10 col-sm-offset-2">
												<button class="btn btn-danger" @click.stop.prevent='taskCancelClick' data-i18n="smart_ad.cancel" >取消</button>
												<button class="btn btn-primary" @click.stop.prevent='show = 2' data-i18n="smart_ad.last" >上一步</button>
												<button class="btn btn-primary" @click.stop.prevent='goTaskFive' data-i18n="smart_ad.next" >下一步</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
                        <a id = "banner5" data-toggle="collapse disabled" data-parent="#accordion" href="javascript::" data-i18n="smart_ad.confirm" >确认提交</a>
                    </h4>
				</div>
				<div id="collapseFive" class="panel-collapse collapse" :class = "{ in: show == 4 }">
					<div class="panel-body">

						<div class="row">
							<div class="col-lg-4">
								<div class="panel panel-default">
									<div class="panel-heading">
										<h3 class="panel-title" data-i18n="smart_ad.confirm_1" >投放基本信息</h3>
									</div>
									<div class="panel-collapse">
										<div class="panel-body">
											<form role="form" class="form-horizontal">
												<div class="form-group">
												    <label class="col-sm-4 control-label" data-i18n="smart_ad.confirm_2" >广告名称</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static">{{addForm.title}}</p>
												    </div>
												</div>
												<div class="form-group">
												    <label class="col-sm-4 control-label" data-i18n="smart_ad.confirm_3" >投放日期</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static">{{addForm.start_date}} To {{addForm.end_date}}</p>
												    </div>
												</div>
												<div class="form-group">
												    <label class="col-sm-4 control-label" data-i18n="smart_ad.confirm_4" >投放时段</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static">{{addForm.start_time}} To {{addForm.end_time}}</p>
												    </div>
												</div>
												<div class="form-group">
												    <label class="col-sm-4 control-label" data-i18n="smart_ad.confirm_5" >状态</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static">
												    	<template v-if="addForm.online_status">
												    		<span class="text-success" data-i18n="smart_ad.confirm_6" >已启用</span>
														</template>
														<template v-else>
															<span class="text-danger" data-i18n="smart_ad.confirm_7" >未启用</span>
														</template>
														</p>
												    </div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="panel panel-default">
									<div class="panel-heading">
										<h3 class="panel-title" data-i18n="smart_ad.confirm_8">落地页地址</h3>
									</div>
									<div class="panel-collapse">
										<div class="panel-body">
											<form role="form" class="form-horizontal">
												<div class="form-group">
												    <label class="col-sm-4 control-label" data-i18n="smart_ad.confirm_9" >链接地址</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static" style="word-break: break-all;">{{addForm.elements.landingpage_url}}</p>
												    </div>
												</div>
											</form>
										</div>
									</div>
								</div>

								<div class="panel panel-default">
									<div class="panel-heading">
										<h3 class="panel-title" data-i18n="smart_ad.confirm_10">创意制作</h3>
									</div>
									<div class="panel-collapse">
										<div class="panel-body">
										    <div class="view-wrap" style="margin: 0 auto">
												<div class="view-head f-cb">
													<span class="pull-left">recommend</span>
													<i class="glyphicon pull-right glyphicon-menu-down"></i>
												</div>
												<div class="view-content">
													<div class="wb-user-info f-cb">
														<img :src="avarter" class="f-fl" alt="">
														<div class="f-fl wb-form">
															<em>{{name}}</em>
															<p>from weibo.com</p>
														</div>
														<a class="f-fr btn btn-default btn-warning btn-sm">关注</a>
													</div>
													<preView v-if="creatives.cust_id" :adInfo="preview"></preView>
												</div>
												<div class="view-foot f-cb">
													<span><i class="glyphicon glyphicon-share"></i> 800</span>
													<span><i class="glyphicon glyphicon-edit"></i> 120</span>
													<span><i class="glyphicon glyphicon-thumbs-up"></i> 6542</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="panel panel-default">
									<div class="panel-heading">
										<h3 class="panel-title" data-i18n="smart_ad.confirm_12">智能投放目标设定</h3>
									</div>
									<div class="panel-collapse">
										<div class="panel-body">
											<form role="form" class="form-horizontal">
												<div class="form-group">
												    <label class="col-sm-4 control-label" data-i18n="ad_list.CPM">CPM</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static">{{addForm.elements.CPM}}</p>
												    </div>
												</div>
												<div class="form-group">
													<label class="col-sm-4 control-label">CPC</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static">{{addForm.elements.CPC}}</p>
												    </div>
												</div>
												<div class="form-group">
													<label class="col-sm-4 control-label">CPA</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static">{{addForm.elements.CPA}}</p>
												    </div>
												</div>
												<div class="form-group">
													<label class="col-sm-4 control-label" data-i18n="smart_ad.confirm_13" >总金额</label>
												    <div class="col-sm-8">
												    	<p class="form-control-static">{{totalAmount}}</p>
												    </div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel-footer">
						<button class="btn btn-danger" @click.stop.prevent='taskCancelClick' data-i18n="smart_ad.cancel">取消</button>
						<button class="btn btn-primary" @click.stop.prevent = "show = 3" data-i18n="smart_ad.last">上一步</button>
						<button class="btn btn-primary" @click.stop.prevent = "submit" data-i18n="smart_ad.submit">提交</button>
					</div>
				</div>
			</div>
		</div>

		<el-dialog
		  title="选择落地页"
		  :visible.sync="dialogVisible"
		  size="tiny">
		  <ul>
        	<li v-for="(item, index) in pageList" class="page_list" :data-url="item.home_url">{{index+1}} {{item.type}}</li>
          </ul>
		  <span slot="footer" class="dialog-footer">
		    <el-button type="primary" @click="landing_tool">确 定</el-button>
		  </span>
		</el-dialog>
	</section>
</template>

<script>
	import util from '../common/js/util'
	import preView from '../components/preview'
	import { addAdgroup, baseurl, getAdgroupID, editAdgroup, adList, getCreativeEls, getHomepageList} from '../api/api';

	export default {
		data() {
			return {
				show: 0,
				url_origin: 1,
				filters: {
					title: ''
				},
				siteurl: '',
				loading: false,
				formRules: {
					title: [{
						required: true,
						message: '请输入推广组名称',
						trigger: 'blur'
					}]
				},
				checkedNames: [],

				addOrEdit: true, //新增界面是否显示
				campaigns: [],
				//新增界面数据
				addForm: {
					name: "name",
					id: '',
					campaign_id: '3',
					biz_number: '1',
					cust_id: util.getCustID(),
					member_id: 0,
					title: '',
					start_date: '',
					end_date: '',
					start_time: '',
					end_time: '',
					audit_status:1,
					online_status: true,
					settle_status: '0',
					settle_time: '',
					settle_reason: '',
					type: '',
					product_line_id: '',
					op_id: 'modify',
					elements: {
						ad_url: "",
						landingpage_url: '',
						CPM: 0,
						CPC: 0,
						CPA: 0
					}

				},
				is_all_time: '0',
				start_time: '',
				end_time: '',
				upload_action: baseurl + '/material/upload',
				upload_data: {
					type: "material",
//						type:"banner",
					adgroupid: '',
					custid: util.getCustID()
				},
				obj_set: {
					cpm: 5.2,
					cpc: 8.3,
					cpa: 9.8
				},
				checkbox1: false,
				checkbox2: false,
				checkbox3: false,
				adList: [],
				creatives: {},
                name: util.getCustName(),
                avarter:util.getAvarterUrl(),
				preview:{
				    elements:{
				        pics:''
                    }
                },
                dialogVisible: false,
                pageList: [],
                selectedPage: {}
			}
		},
		components:{
			preView
		},
		methods: {
			taskCancelClick: function() {
				this.$router.push({
					path: '/main'
				})
			},
			goTaskOne: function() {
				this.show = 0;
			},
			goTaskTwo: function() {
				if($('#myForm1').validator('validate').has('.has-error').length) {
					return;
				} else {
					this.show = 1;
					if (this.is_all_time == 0) {
						this.addForm.start_time = "00:00";
						this.addForm.end_time = "24:00";
					}
				}
			},
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
                        this.pageList = res.data.result;
                    }
                });
            },
            landing_tool() {
            	this.addForm.elements.landingpage_url = this.addForm.elements.click_url= $('.el-dialog .text-success').data('url');
            	this.dialogVisible = false;
            },
			goTaskThree: function() {
				if($('#myForm2').validator('validate').has('.has-error').length) {
					return;
				} else {
					this.show = 2;
				}
			},
			goTaskFour: function() {
				if(!this.creatives.cust_id) {
					var _lang = util.getLanguage(),
						_str = '',
						txt1 = '';
					if (_lang == 'en') {
						_str = "Please selected your ad type!";
						txt1 = 'OK';
					} else {
						_str = "请选择投放广告类型！";
						txt1 = '确定';
					}
					this.$alert(_str, 'Warning', {confirmButtonText: txt1}).then(() => {
						console.log('yes!')
					});
					return;
				} else {
					this.show = 3;
				}
			},
			goTaskFive: function() {
				if (this.totalAmount <= 0 || this.totalAmount == NaN) {
					var _lang = util.getLanguage(),
						_str = '',
						txt1 = '';
					if (_lang == 'en') {
						_str = "Please set the amount first!";
						txt1 = 'OK';
					} else {
						_str = "请先设定投放金额 ^_^";
						txt1 = '确定';
					}
					this.$alert(_str, 'Warning', {confirmButtonText: txt1}).then(() => {
						console.log('yes!')
					});
				} else {
					this.show = 4;
				}
			},
			clearInput: function(ev) {
				var _target = ev.target;
				if (_target.value == 0) {
					_target.value = '';
				}
			},
			blurInput: function(ev) {
				var _target = ev.target;
				if ($.trim(_target.value) == '') {
					_target.value = 0;
				}
			},
			campaignSelectFromList() {
				let para = {
					cust_id: util.getCustID()
				};

				campaignSelect(para).then((res) => {

					this.loading = false;
					let {
						code,
						msg
					} = res.data;
					if(code != 200) {
						this.$message({
							message: msg,
							type: 'error'
						});
					} else {
						this.campaigns = res.data.result;
					}
				});
			},

			//新增
			submit: function() {
				var _lang = util.getLanguage(),
					_submitStr = '',
					_title = '';
					if (_lang == 'en') {
						_submitStr = "Comfirm Submit Order ?";
						_title = 'Tips';
					} else {
						_submitStr = "确认提交吗？";
						_title = '提示';
					}
				this.$alert(_submitStr, _title, {}).then(() => {
					// 一步一步这块，不需要编辑功能。只需要增加推广组  by frank wang 2017.06.03
					// 编辑广告组，在单独页面实现
                    if (this.addOrEdit){
                        this.add();
                    }
                    else {
                        this.edit();
                    }
				});

			},
			add() {
				this.loading = true;
				this.creatives.objective_url = this.addForm.elements.landingpage_url;
				let para = Object.assign({}, {creatives:this.creatives}, {adgroup: this.addForm});
				
				addAdgroup(para).then((res) => {
					this.loading = false;

					let {
						code,
						msg
					} = res.data;
					if(code != 200) {
						this.$message({
							message: msg,
							type: 'error'
						});
					} else {
						this.$router.push({
							path: '/adgroupList'
						})
					}

				});
			},
            edit() {

                this.loading = true;
                let para = Object.assign({}, {creatives:this.creatives}, this.addForm);
                editAdgroup(para).then((res) => {
                    this.loading = false;

                    let {code,msg} = res.data;
                    if (code!=200){
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }else{
                        this.$router.push({path:'/adgroupList'})
                    }
                });

            },
			showAd(item) {
			    console.log(item)
			    if(this.addOrEdit){
                    this.creatives = item;
                    this.creatives.cust_id = this.addForm.cust_id;
				}else{
                    this.creatives.elements = item.elements;
				}
                this.preview = item;
//                if (item.material_type == 'feed_grid'){
//                    this.preview.type = 'feed_grid';
//			        let elements = JSON.parse(item.elements.grid)
//					console.log("feed_grid",elements)
//					let pl=[]
//                    for(var i=0; i<elements.grid.length; i++) {
//                        pl.push(elements.grid[i].pic_url)
//
//                    }
//                    console.log(pl)
//                    this.preview.elements.pics = pl
//			    } else {
//                    console.log("not feed grid")
//                    this.preview.type = item.material_type;
//                    this.preview.elements  = item.elements
//					}
//
                }

		},
		computed: {
			totalAmount: function() {
				if (!this.checkbox1) {
					this.addForm.elements.CPM = 0;
				}
				if (!this.checkbox2) {
					this.addForm.elements.CPC = 0;
				}
				if (!this.checkbox3) {
					this.addForm.elements.CPA = 0;
				}

				if(isNaN(this.addForm.elements.CPM - 0)){
					this.addForm.elements.CPM = 0;
				}
				if(isNaN(this.addForm.elements.CPC - 0)){
					this.addForm.elements.CPC = 0;
				}
				if(isNaN(this.addForm.elements.CPA - 0)){
					this.addForm.elements.CPA = 0;
				}

				var total = 0;
				total += (this.checkbox1 ? this.obj_set.cpm : 0) * this.addForm.elements.CPM;
				total += (this.checkbox2 ? this.obj_set.cpc : 0) * this.addForm.elements.CPC;
				total += (this.checkbox3 ? this.obj_set.cpa : 0) * this.addForm.elements.CPA;

				return total.toFixed(2);
			}
		},

		mounted() {
			var $start_date = $("#start_date"),
				$end_date = $("#end_date");

			util.setLanguage();
			this.getPageList();

			$('body').on('click', '.page_list', function(){
				$(this).addClass('text-success').siblings('.text-success').removeClass('text-success');
			});

			adList({cust_id: this.addForm.cust_id}).then((res) => {

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
						for(var i=0; i<_item.masterial.length; i++) {
							var temp=_item.masterial[i];

							_item.elements[temp.c_name] = temp.c_value;
						}
					}
				}
			});

			var _this = this;
			$('.input-daterange').datepicker({
				keyboardNavigation: false,
				forceParse: false,
				autoclose: true,
				startDate: 'd'
			}).on('changeDate', function(ev){
				var _date = ev.date,
					_target = ev.target;
				if (_target.id == 'start_date') {
					_this.addForm.start_date = _target.value;
					$end_date.datepicker('setStartDate', _date);
				} else {
					_this.addForm.end_date = _target.value;
					$start_date.datepicker('setEndDate', _date);
				}
			});


			if(this.$route.params.active === 'add') {

				this.addOrEdit = true;
                getAdgroupID({}).then((res) => {
                    this.loading = false;

                    let { code, id ,msg} = res.data;

                    if(code != 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        this.addForm.id = this.upload_data.adgroupid = id;
                    }
                });

			} else if(this.$route.params.active === 'edit') {
				this.addOrEdit = false;
				this.addForm = this.$route.params;

				if (this.addForm.elements.CPM > 0) {
					this.checkbox1 = true;
				}
				if (this.addForm.elements.CPC > 0) {
					this.checkbox2 = true;
				}
				if (this.addForm.elements.CPA > 0) {
					this.checkbox3 = true;
				}

				this.upload_data.adgroupid = this.addForm.id;
                getCreativeEls({adgroup_id: this.addForm.id}).then((res) => {
                    this.loading = false;

                    let { code, msg, result } = res.data;
                    
                    if(code != 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        this.creatives = result;
                        this.preview = result;
//                        console.log(result, '1212')
//                        if (result.material_type == 'feed_grid'){
//                        	this.preview.type = 'feed_grid';
//                            this.preview.elements = result.elements;
//                        } else if(result.material_type == 'feed_video') {
//                        	this.preview.type = 'feed_video';
//                            this.preview.elements  = result.elements;
//                        } else if(result.material_type == 'feed_activity') {
//                        	this.preview.type = 'feed_activity';
//                            this.preview.elements  = result.elements;
//                        } {
//                        	this.preview.elements  = result.elements;
//                        }

                    }
                });
			}
		}
	}


</script>

<style scoped>
	.has-danger .btn-make {
	    background-color: #d9534f;
    	border-color: #d43f3a;
	}
	
	.pad {
		padding-top: 8px;
	}
	
	.task-steps {
		background-color: white;
		margin: auto;
		width: 800px;
	}

	.el-upload__input {
		display: none !important;
	}

	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
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

	.f-cb {
	    display: block;
	    zoom:1
	}

	.f-cb:after {
	    content: "";
	    display: block;
	    font-size: 0;
	    height: 0;
	    clear: both;
	    visibility: hidden
	}
	.f-fl {
		float: left;
	}
	.f-fr {
		float: right;
	}
	.view-wrap{
		width: 300px;
		margin-bottom: 12px;
	}
	.view-head {
		padding: 0 10px;
		line-height: 38px;
		height: 38px;
		border-top: 2px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.view-head .glyphicon {
		margin-top: 8px;
	}
	.view-foot {
		line-height: 38px;
		height: 38px;
		border-top: 1px solid #e9e9e9;
		border-bottom: 3px solid #e9e9e9;
	}
	.wb-user-info{
		padding-top: 12px;
	}
	.wb-user-info img {
		max-width: 38px;
		max-height: 38px;
		border-radius: 50%;
		margin-right: 8px;
	}
	.wb-user-info em {
		font-style: normal;
		font-weight: bold;
		color: #333;
	}
	.wb-user-info .btn {
		margin-top: 4px;
	}
	.view-content {
		padding-bottom: 8px;
	}
	.view-content .wb-form p {
		font-size: 12px;
		color: #808080;
	}
	.view-foot span {
		float: left;
		width: 30%;
		margin-left: 3%;
		text-align: center;
		line-height: 38px;
	}
</style>