<template>
	<section>
		<div class="panel-group" id="accordion">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
                        <a id = "banner1" data-toggle="collapse disabled" data-parent="#accordion" href="#collapseOne">投放基本信息</a>
                    </h4>
				</div>
				<div id="collapseOne" class="panel-collapse collapse in">
					<div class="panel-body">
						<div class="col-lg-8">
							<form id="myForm1" method="get" class="form-horizontal">
								<!--
                                             // todo: 此处需要改成 div 的方式  20170604 ,by frank wang
                                            <el-row> <label>推广计划</label>
                                                <el-select v-model="addForm.campaign_id" placeholder="请选择" @visible-change="campaignSelectFromList">
                                                    <el-option
                                                            v-for="item in campaigns"
                                                            :label="item.title"
                                                            :value="item.id">
                                                    </el-option>
                                                </el-select>
                                            </el-row>

                                            -->
								<div class="form-group">
									<label class="col-sm-1 control-label">广告名称</label>
									<div class="col-sm-11">
										<input type="text" required="" class="form-control" v-model="addForm.title">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-1 control-label">投放日期</label>
									<div class="input-daterange input-group datapicker" id="datepicker">
										<input required="" type="text" class="input-sm form-control" name="start_day" value="05/14/2014">
										<span class="input-group-addon">to</span>
										<input required="" type="text" class="input-sm form-control" name="end_day" value="05/22/2014">
									</div>
								</div>

								<div class="form-group">
									<label class="col-sm-1 control-label">投放时段</label>
									<div class="col-sm-offset-1">
										<el-radio class="radio" v-model="is_all_time" label="0">全时段</el-radio>
										<el-radio class="radio" v-model="is_all_time" label="1">特定时段</el-radio>
									</div>
									<div class="col-sm-offset-1" style="margin-top: 10px" v-if="is_all_time=='1'">
										<el-time-select placeholder="起始时间" v-model="start_time" :picker-options="{start: '00:00',step: '00:15',end: '24:00'}">
										</el-time-select>
										<el-time-select placeholder="结束时间" v-model="end_time" :picker-options="{start: '00:00',step: '00:15',end: '24:00'}">
										</el-time-select>
									</div>
								</div>

							</form>
						</div>
						<div class="form-group col-lg-8">
							<div class="col-sm-offset-1">
								<button id="myButton1" type="button" class="btn btn-primary" data-parent="#accordion">下一步</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
                        <a id = "banner2" data-toggle="collapse disabled" data-parent="#accordion" href="JavaScript:;">落地页制作</a>
                    </h4>
				</div>
				<div id="collapseTwo" class="panel-collapse collapse">
					<div class="panel-body">
						<form Id="myForm2" role="form">
							<div class="col-lg-12">
								<form method="get" class="form-horizontal">

									<!--
                                                 // todo: 此处需要改成 div 的方式  20170604 ,by frank wang
                                                <el-row> <label>推广计划</label>
                                                    <el-select v-model="addForm.campaign_id" placeholder="请选择" @visible-change="campaignSelectFromList">
                                                        <el-option
                                                                v-for="item in campaigns"
                                                                :label="item.title"
                                                                :value="item.id">
                                                        </el-option>
                                                    </el-select>
                                                </el-row>

                                                -->
									<div class="form-group">
										<label class="col-sm-1 control-label">推广标的物</label>
										<div class="col-sm-11">
											<div class="i-checks">
												<label><input  required="" type="radio" value="option1" name="a"> <i></i> 广告主网站链接 </label>
											</div>
											<div class="i-checks">
												<label> <input required=""  type="radio" checked="" value="option2" name="a"> <i></i> 生成网站(此处打开广告主网站工具，待完善) </label>
											</div>
											<div class="col-sm-10 input-group">
												<input required=""  type="text" class="form-control">
												<span class="input-group-btn">
													<button type="button" class="btn btn-primary">落地页工具</button>
												</span>
											</div>
										</div>

									</div>

								</form>
							</div>

							<div class="form-group" style="margin-left: 242px;">
								<button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>

								<button id="myButtonp2" class="btn btn-primary" style="margin-left: 20px;" @click='taskOneClick' type="button">上一步</button>
								<button id="myButton2" class="btn btn-primary" style="margin-left: 20px;" type="button" @click='taskThreeClick'>下一步</button>

							</div>

						</form>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
                        <a id = "banner3" data-toggle="collapse disabled" data-parent="#accordion" href="JavaScript:;">创意制作</a>
                    </h4>
				</div>
				<div id="collapseThree" class="panel-collapse collapse">
					<div class="panel-body">
						<form Id="myForm3" role="form">
							<div class="col-lg-12">
								<div class="ibox float-e-margins">
									<div class="ibox-content" style="border-width: 0px 0">
										<form method="get" class="form-horizontal">
											<div class="form-group"><label class="col-sm-2 control-label">投放平台</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>微博</option>
														<option>今日头条</option>
													</select>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label">广告规格</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>300*200</option>
														<option>400*150</option>
													</select>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label">上传广告创意<br>(打开广告创意工具)</label>
												<div class="col-sm-6"><input required="" type="text" name="password" class="form-control"></div>
											</div>
											<div class="form-group">
												<div class="col-sm-10 col-sm-offset-2"><button type="button" class="btn btn-primary">取消</button>
													<button id="myButtonp3" type="button" class="btn btn-primary" style="margin-left: 20px;">上一步</button>
													<button id="myButton3" type="button" class="btn btn-primary" style="margin-left: 20px;">下一步</button></div>
											</div>
										</form>
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
                        <a id = "banner4" data-toggle="collapse disabled" data-parent="#accordion" href="JavaScript:;">定向设置</a>
                    </h4>
				</div>
				<div id="collapseFour" class="panel-collapse collapse">
					<div class="panel-body">
						<form Id="myForm4" role="form">

							<div class="col-lg-12">
								<div class="ibox float-e-margins">
									<div class="ibox-content" style="border-width: 0px 0">
										<form method="get" class="form-horizontal">
											<div class="form-group"><label class="col-sm-2 control-label">地域</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>不限</option>
														<option>北京</option>
														<option>上海</option>
														<option>广州</option>
													</select>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label">性别</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>不限</option>
														<option>男</option>
														<option>女</option>
													</select>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label">年龄</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>不限</option>
														<option>10-20</option>
														<option>20-30</option>
														<option>30-40</option>
														<option>40-50</option>
													</select>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label">消费能力</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>不限</option>
														<option>高</option>
														<option>中</option>
														<option>低</option>
													</select>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label">上网场景</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>不限</option>
														<option>公共场所</option>
														<option>家庭</option>
														<option>学校</option>
														<option>未知</option>
													</select>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label">用户学历</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>博士</option>
														<option>硕士</option>
														<option>本科</option>
														<option>高中</option>
														<option>初中</option>
														<option>小学</option>
														<option>未知</option>
													</select>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label">婚恋状态</label>
												<div class="col-sm-6">
													<select name="account" class="form-control m-b">
														<option>已婚</option>
														<option>单身</option>
														<option>育儿</option>
													</select>
												</div>
											</div>
											<div class="form-group">
												<div class="col-sm-10 col-sm-offset-2"><button type="button" class="btn btn-primary">取消</button>
													<button id="myButtonp4" type="button" class="btn btn-primary" style="margin-left: 20px;">上一步</button>
													<button id="myButton4" type="button" class="btn btn-primary" style="margin-left: 20px;">下一步</button></div>
											</div>
										</form>
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
                        <a id = "banner5" data-toggle="collapse disabled" data-parent="#accordion" href="JavaScript:;">计费模式</a>
                    </h4>
				</div>
				<div id="collapseFive" class="panel-collapse collapse">
					<div class="panel-body">
						<form Id="myForm5" role="form">
							<div class="col-lg-12">
								<div class="ibox float-e-margins">
									<div class="ibox-content" style="border-width: 0px 0">
										<form method="get" class="form-horizontal">
											<div class="form-group">
												<div class="form-group">
													<div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline"><input required="" type="checkbox" id="inlineCheckbox1" value="option1"> <label for="inlineCheckbox1"> CPM </label></div>
													<div class="col-lg-7">
														<div class="ibox float-e-margins">
															<div class="ibox-content"><span class="irs" id="irs-1"><div class="block"><el-slider v-model="value2" show-input></el-slider></div></span><span class="irs" id="irs-1"><div class="block"><el-slider v-model="value1" show-input></el-slider></div></span>

															</div>
														</div>
													</div>
												</div>
												<div class="form-group">
													<div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline"><input required="" type="checkbox" id="inlineCheckbox1" value="option1"> <label for="inlineCheckbox1"> CPC </label></div>
													<div class="col-lg-7">
														<div class="ibox float-e-margins">
															<div class="ibox-content"><span class="irs" id="irs-1"><div class="block"><el-slider v-model="value3" show-input></el-slider></div></span><span class="irs" id="irs-1"><div class="block"><el-slider v-model="value4" show-input></el-slider></div></span>

															</div>
														</div>
													</div>
												</div>
												<div class="form-group">
													<div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline"><label for="inlineCheckbox1"> 日限额 </label></div>
													<div class="col-lg-7">
														<div class="ibox float-e-margins">
															<div class="ibox-content"><span class="irs" id="irs-1"><div class="block"><el-slider v-model="value5" show-input></el-slider></div></span><span class="irs" id="irs-1"><div class="block"><el-slider v-model="value6" show-input></el-slider></div></span>

															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="form-group">
												<div class="col-sm-6 col-sm-offset-2"><button type="button" class="btn btn-primary">取消</button> 
													<button id="myButtonp5" type="button" class="btn btn-primary" style="margin-left: 20px;">上一步</button> 
													<button id="myButton5" type="button" class="btn btn-primary" style="margin-left: 20px;">下一步</button></div>
											</div>
										</form>
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
                        <a id = "banner6" data-toggle="collapse disabled" data-parent="#accordion" href="#collapseTwo">确认提交</a>
                    </h4>
				</div>
				<div id="collapseSix" class="panel-collapse collapse">
					<div class="panel-body">
						<form Id="myForm6" role="form">

							<div class="row" style="margin-left: -14px;"><div class="col-lg-10" style="margin: 36px 0px 0px 80px;"><div class="ibox float-e-margins"><div class="ibox-title" style="border: none; background: rgb(243, 246, 251);"><h5>基本信息</h5></div> <div class="ibox-content" style="padding: 20px; background: rgb(243, 246, 251);"><form method="get" class="form-horizontal"><div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 会员身份</label> <div class="col-sm-6"><span style="display: block; margin-top: 6px;">企业</span></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i>单位名称</label> <div class="col-sm-6"><span style="display: block; margin-top: 6px;">Fekekjekrj</span></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 营业年限</label> <div class="col-sm-6"><select name="account" class="form-control"><option>微博</option> <option>今日头条</option></select></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 企业规模</label> <div class="col-sm-6"><select name="account" class="form-control"><option>微博</option> <option>今日头条</option></select></div></div></form></div></div></div></div>

							<div class="row" style="margin-left: -14px;"><div class="col-lg-10" style="margin: 36px 0px 0px 80px;"><div class="ibox float-e-margins"><div class="ibox-title" style="border: none; background: rgb(243, 246, 251);"><h5>基本信息</h5></div> <div class="ibox-content" style="padding: 20px; background: rgb(243, 246, 251);"><form method="get" class="form-horizontal"><div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 会员身份</label> <div class="col-sm-6"><span style="display: block; margin-top: 6px;">企业</span></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i>单位名称</label> <div class="col-sm-6"><span style="display: block; margin-top: 6px;">Fekekjekrj</span></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 营业年限</label> <div class="col-sm-6"><select name="account" class="form-control"><option>微博</option> <option>今日头条</option></select></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 企业规模</label> <div class="col-sm-6"><select name="account" class="form-control"><option>微博</option> <option>今日头条</option></select></div></div></form></div></div></div></div>

							<div class="row" style="margin-left: -14px;"><div class="col-lg-10" style="margin: 36px 0px 0px 80px;"><div class="ibox float-e-margins"><div class="ibox-title" style="border: none; background: rgb(243, 246, 251);"><h5>基本信息</h5></div> <div class="ibox-content" style="padding: 20px; background: rgb(243, 246, 251);"><form method="get" class="form-horizontal"><div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 会员身份</label> <div class="col-sm-6"><span style="display: block; margin-top: 6px;">企业</span></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i>单位名称</label> <div class="col-sm-6"><span style="display: block; margin-top: 6px;">Fekekjekrj</span></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 营业年限</label> <div class="col-sm-6"><select name="account" class="form-control"><option>微博</option> <option>今日头条</option></select></div></div> <div class="form-group"><label class="col-sm-2 control-label"><i style="color: red;">*</i> 企业规模</label> <div class="col-sm-6"><select name="account" class="form-control"><option>微博</option> <option>今日头条</option></select></div></div></form></div></div></div></div>

							<div class="form-group" style="margin-left: -164px; margin-top: 20px">
								<div class="col-sm-10 col-sm-offset-2"><button type="button" class="btn btn-primary">取消</button>
									<button id="myButtonp6" type="button" class="btn btn-primary" style="margin-left: 20px;">上一步</button>
									<button  type="button" class="btn btn-primary" style="margin-left: 20px;" @click="submit">提交</button></div>
							</div>

						</form>
					</div>
				</div>
			</div>

		</div>

	</section>
</template>

<script>

	import util from '../common/js/util'
	import {
		addAdgroup,editAdgroup
	} from '../api/api';

	export default {
		data() {
				return {
					show: 0,
					filters: {
						title: ''
					},
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
						id: '',
						campaign_id: '3',
						biz_number: '1',
						cust_id: '',
						member_id: 0,
						title: '',
						start_time: '',
						end_time: '',
						online_status: true,
						settle_status: '0',
						settle_time: '',
						settle_reason: '',
						type: '',
						product_line_id: '',
						op_id: 'modify'
					},
					is_all_time: '0',
					start_time: '',
					end_time: '',
					start_day: '',
					end_day: '',
					value1:0,
                    value2:0,
					value3:0,
                    value4:0,
                    value5:0,
                    value6:0,

				}
			},
			methods: {
				taskCancelClick: function() {
					this.$router.push({
						path: '/main'
					})
				},
				taskOneClick: function() {
					this.show = 0;
					//alert(JSON.stringify(this.addForm));
				},

				taskTwoClick: function() {
					this.show = 1;
				},
				taskThreeClick: function() {
					this.show = 2;
				},
				taskFourClick: function() {
					this.show = 3;
				},
				taskFiveClick: function() {
					this.show = 4;
				},
				taskSixClick: function() {
					this.show = 5;
				},
				campaignSelectFromList() {
					console.log('campaignSelect');

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
							console.log(res.data.result)
							this.campaigns = res.data.result
						}
					});
				},

				//新增
				submit: function() {

					this.$confirm('确认提交吗？', '提示', {}).then(() => {
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

					this.addForm.cust_id = util.getCustID();
					//alert(this.addForm.title);
					let para = Object.assign({}, this.addForm);
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
							// 看不懂 by frank wang 2017.06.03
//							this.$refs['addForm'].resetFields();
							//Todo page4  改名
							this.$router.push({
								path: '/adgroupList'
							})
						}

					});
				},
                edit() {

                    this.loading = true;
                    let para = Object.assign({}, this.addForm);
                    editAdgroup(para).then((res) => {
                        this.loading = false;

                        let {code,msg} = res.data;
                        if (code!=200){
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        }else{

//                            this.$refs['addForm'].resetFields();
                            this.$router.push({path:'/adgroupList'})

                        }

                    });

                }

			},

			mounted() {
				util.setLanguage();
				
				$('.input-daterange').datepicker({
					keyboardNavigation: false,
					forceParse: false,
					autoclose: true
				});

				if(this.$route.params.active === 'add') {
					console.log('add');
					this.addOrEdit = true;

				} else if(this.$route.params.active === 'edit') {
					console.log('edit');
					this.addOrEdit = false;
					this.addForm = this.$route.params;
//					this.addForm.online_status = this.addForm.online_status == 0 ? true : false;

				}
                // Forward
                $(document).ready(function() {
                    $("#myButton1").click(function() {
                        console.log("下一步")
                        if($('#myForm1').validator('validate').has('.has-error').length) {
                            $('#myButton1').attr('href', '');
                        } else {
                            $('#myButton1').attr('href', '#collapseTwo');
                            $('#myButton1').attr('aria-expanded', "true");
                            $('#myButton1').attr('data-toggle', 'collapse');
                            $('#myButton1').attr('aria-controls', "collapseTwo");
                            $('#myButton1').attr('data-parent', '#accordion');
                        }
                    });
                });

                $(document).ready(function() {
                    $("#myButton2").click(function() {
                        if($('#myForm2').validator('validate').has('.has-error').length) {
                            $('#myButton2').attr('href', '');
                        } else {
                            $('#myButton2').attr('href', '#collapseThree');
                            $('#myButton2').attr('aria-expanded', "true");
                            $('#myButton2').attr('data-toggle', 'collapse');
                            $('#myButton2').attr('aria-controls', "collapseThree");
                            $('#myButton2').attr('data-parent', '#accordion');
                        }
                    });
                });

                $(document).ready(function() {
                    $("#myButton3").click(function() {
                        if($('#myForm3').validator('validate').has('.has-error').length) {
                            $('#myButton3').attr('href', '');
                        } else {
                            $('#myButton3').attr('href', '#collapseFour');
                            $('#myButton3').attr('aria-expanded', "true");
                            $('#myButton3').attr('data-toggle', 'collapse');
                            $('#myButton3').attr('aria-controls', "collapseFour");
                            $('#myButton3').attr('data-parent', '#accordion');
                        }
                    });
                });

                $(document).ready(function() {
                    $("#myButton4").click(function() {
                        if($('#myForm4').validator('validate').has('.has-error').length) {
                            $('#myButton4').attr('href', '');
                        } else {
                            $('#myButton4').attr('href', '#collapseFive');
                            $('#myButton4').attr('aria-expanded', "true");
                            $('#myButton4').attr('data-toggle', 'collapse');
                            $('#myButton4').attr('aria-controls', "collapseFive");
                            $('#myButton4').attr('data-parent', '#accordion');
                        }
                    });
                });
                $(document).ready(function() {
                    $("#myButton5").click(function() {
                        if($('#myForm5').validator('validate').has('.has-error').length) {
                            $('#myButton5').attr('href', '');
                        } else {
                            $('#myButton5').attr('href', '#collapseSix');
                            $('#myButton5').attr('aria-expanded', "true");
                            $('#myButton5').attr('data-toggle', 'collapse');
                            $('#myButton5').attr('aria-controls', "collapseSix");
                            $('#myButton5').attr('data-parent', '#accordion');
                        }
                    });
                });

                // Backward

                $(document).ready(function() {
                    $("#myButtonp2").click(function() {
                        $('#myButtonp2').attr('href', '#collapseOne');
                        $('#myButtonp2').attr('aria-expanded', "true");
                        $('#myButtonp2').attr('data-toggle', 'collapse');
                        $('#myButtonp2').attr('aria-controls', "collapseOne");
                        $('#myButtonp2').attr('data-parent', '#accordion');
                    });
                });

                $(document).ready(function() {
                    $("#myButtonp3").click(function() {
                        $('#myButtonp3').attr('href', '#collapseTwo');
                        $('#myButtonp3').attr('aria-expanded', "true");
                        $('#myButtonp3').attr('data-toggle', 'collapse');
                        $('#myButtonp3').attr('aria-controls', "collapseTwo");
                        $('#myButtonp3').attr('data-parent', '#accordion');
                    });
                });
                $(document).ready(function() {
                    $("#myButtonp4").click(function() {
                        $('#myButtonp4').attr('href', '#collapseThree');
                        $('#myButtonp4').attr('aria-expanded', "true");
                        $('#myButtonp4').attr('data-toggle', 'collapse');
                        $('#myButtonp4').attr('aria-controls', "collapseThree");
                        $('#myButtonp4').attr('data-parent', '#accordion');
                    });
                });
                $(document).ready(function() {
                    $("#myButtonp5").click(function() {
                        $('#myButtonp5').attr('href', '#collapseFour');
                        $('#myButtonp5').attr('aria-expanded', "true");
                        $('#myButtonp5').attr('data-toggle', 'collapse');
                        $('#myButtonp5').attr('aria-controls', "collapseFour");
                        $('#myButtonp5').attr('data-parent', '#accordion');
                    });
                });
                $(document).ready(function() {
                    $("#myButtonp6").click(function() {
                        $('#myButtonp6').attr('href', '#collapseFive');
                        $('#myButtonp6').attr('aria-expanded', "true");
                        $('#myButtonp6').attr('data-toggle', 'collapse');
                        $('#myButtonp6').attr('aria-controls', "collapseFive");
                        $('#myButtonp6').attr('data-parent', '#accordion');
                    });
                });
			}
	}





</script>

<style>
	.datapicker {
		width: 50%;
		padding-left: 13px;
	}
	
	.pad {
		padding-top: 8px;
	}
	
	.task-steps {
		background-color: white;
		margin: auto;
		width: 800px;
	}
</style>