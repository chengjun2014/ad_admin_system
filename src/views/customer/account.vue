<template>
	<section>

		<div class="clients-list">

			<div class="row">
				<div class="col-lg-12">
					<div class="tabs-container">
						<ul class="nav nav-tabs">
							<li class="active">
								<a data-toggle="tab" href="#tab-1" aria-expanded="true" data-i18n="account.a2">账户消耗及金额</a>
							</li>
							<li class="">
								<a data-toggle="tab" @click="getAccount" href="#tab-2" aria-expanded="false" data-i18n="account.a7">充值记录</a>
							</li>
						</ul>
						<div class="tab-content">
							<div id="tab-1" class="tab-pane active">
								<div class="widget style1" style="margin: 0;background-color: #fff;">
									<div class="row">
										<div class="col-lg-4">
											<div class="widget style1 navy-bg" style="background-color: rgb(28, 132, 198);">
												<div class="row">
													<div class="col-xs-4">
														<img src="/static/img/1账户余额.png">
													</div>
													<div class="col-xs-8 text-right">
														<span data-i18n="account.a4">余额 </span>
														<h2 class="font-bold">{{infoSum.balance}}</h2>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-4">
											<div class="widget style1 navy-bg" style="background-color: #1ab394;">
												<div class="row">
													<div class="col-xs-4">
														<img src="/static/img/1账户余额.png">
													</div>
													<div class="col-xs-8 text-right">
														<span data-i18n="account.a5">日限额 </span>
														<h2 class="font-bold">{{infoSum.daily_limit}}</h2>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-4" >
											<div class="widget style1 navy-bg" style="background-color: #23c6c8;">
												<div class="row">
													<div class="col-xs-4">
														<img src="/static/img/1账户余额.png">
													</div>
													<div class="col-xs-8 text-right">
														<span data-i18n="account.a6">今日消费</span>
														<h2 class="font-bold">{{infoSum.spend}}</h2>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div class="widget" style="margin: 0;background-color: #fff;">
									<div class="panel-group payments-method" id="accordion">
										<div class="panel panel-default">
											<div class="panel-heading">
												<div class="pull-right">
													<img src="/static/img/paypal.png" alt="">
												</div>
												<h5 class="panel-title">
		                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="collapsed" aria-expanded="false">PayPal</a>
		                                        </h5>
											</div>
											<div id="collapseOne" class="panel-collapse collapse" aria-expanded="false">
												<div class="panel-body">
													<div class="row">
														<div class="col-md-12">
															<form role="form" id="payment-form" class="form-horizontal">
																<div class="form-group">
																	<label class="col-sm-2 control-label" data-i18n="account.a13">充值金钱</label>
																	<div class="col-sm-10">
																		<button class="btn btn-default" @click.stop.prevent = "setMoney(5, $event)"> $5</button>
																		<button class="btn btn-default" @click.stop.prevent = "setMoney(10, $event)">$10</button>
																		<button class="btn btn-default" @click.stop.prevent = "setMoney(25, $event)">$25</button>
																		<button class="btn btn-default" @click.stop.prevent = "setMoney(50, $event)">$50</button>
																		<button class="btn btn-default" @click.stop.prevent = "setMoney('other', $event)" data-i18n="account.a14">其他金额</button>
																	</div>
																</div>

																<div class="row_j" id="rowj" v-show="o2">
																	<p><span>其他金额</span> <input type="text" class="simple_button" id="paypal-amount" v-model="money"> <span>元</span> <span style="margin-left: 30px;">请输入100元以上的整数</span></p>
																</div>
																<div class="row">
																	<div class="col-xs-4">
																		<span id="paypal-button-container" type="submit" style="display:block;margin-top: 20px;"></span>
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

												<h5 class="panel-title">
                                           			 <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" class="collapsed" data-i18n="account.a15" >支付宝</a>
                                        		</h5>
											</div>
											<div id="collapseTwo" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
												
											</div>
										</div>
										
										<div class="panel panel-default">
											<div class="panel-heading">

												<h5 class="panel-title">
                                           			 <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" class="collapsed" data-i18n="account.a16" >微信</a>
                                        		</h5>
											</div>
											<div id="collapseThree" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
												
											</div>
										</div>
									</div>

								</div>

							</div>
							<div id="tab-2" class="tab-pane">
								<div class="ibox">
									<div class="ibox-content">
										<table class="table table-striped">
								            <thead>
								                <tr>
								                    <th width="240" data-i18n="home.i6">支付开始日期</th>
								                    <!--<th width="200" data-i18n="home.i7">支付完成日期</th>-->
								                    <th width="185" data-i18n="home.i8">金额</th>
								                    <th width="187" data-i18n="home.i9">类型</th>
								                    <th data-i18n="home.i10">状态</th>
								                </tr>
								            </thead>
								            <tbody>
								                <tr v-for="(item, index) in accounts">
								                    <td>{{item.pay_start_time}}</td>
								                    <!--<td>{{item.pay_complete_time}}</td>-->
								                    <td>{{item.amount}}</td>
								                    <td>{{item.type|payType}}</td>
													<td>{{item.status|payStatus}}</td>
								                </tr>
								            </tbody>
								        </table>
									</div>
								</div>
								
							</div>
						</div>

					</div>
				</div>
			</div>

		</div>

		<!--工具条-->

	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import {
		getUserListPage,
		removeUser,
		batchRemoveUser,
		editUser,
		addUser,
		baseurl,
		getAccountList,getInfoSum1
	} from '../../api/api';

	export default {

		data() {
				return {
					filters: {
						name: ''
					},
					accounts: [],
					total: 0,
					page: 1,
					sels: [], //列表选中列           
					o2:false,
					money:0,
					infoSum:{}
				}
			},

			methods: {
				setMoney(num, ev) {
					var _node = $(ev.target);
					_node.siblings('.btn-primary').removeClass('btn-primary').addClass('btn-default');
					_node.addClass('btn-primary').removeClass('btn-default');
					switch(num) {
						case 5:
							this.money = 5;
							break;
						case 10:
							this.money = 10;
							break;
						case 25:
							this.money = 25;
							break;
						case 50:
							this.money = 50;
							break;
						case 'other':
							this.money = 0
							this.o2 = true;
							break;
					}
				},

				getAccount() {

					let para = {
						cust_id: util.getCustID()
					};
					console.log(para)
					getAccountList(para).then((res) => {

						this.accounts = res.data.accounts;
//						util.setLanguage();
						//NProgress.done();
					});
				},
                getInfoSum() {

                    let para = {
                        cust_id: util.getCustID()
                    };
                    console.log("fdfdsfdsaf")
                    getInfoSum1(para).then((res) => {

                        this.infoSum = res.data.result;
//                        util.setLanguage();
                        //NProgress.done();
                    });
                }
			},
			filters:{
		    	payType(t){
		    	    if (t==1){
		    	        return "充值"
					}else if(t==2){
		    	        return "退款"
					}
				},
				payStatus(t){
					if (t==1){
						return "创建支付"
					}else if(t==2){
						return "执行支付"
					}else if(t==3){
					    return "支付完成"
					}
				}
			},
			mounted() {
        		util.setLanguage();
                this.getInfoSum();
				paypal.Button.render({

					// Set your environment

					env: 'production', // sandbox | production

					// Wait for the PayPal button to be clickedproduction
					commit: true,

                    style: {
                        size: 'medium',
                        color: 'blue',
                        label: 'pay',
                        shape: 'rect'
                    },

					payment: function() {

						// Make a call to the merchant server to set up the payment
						let amount = document.getElementById("paypal-amount").value
						if(amount <= 0) {
							alert("请示输入充值金额")
							return 0
						} else {
							let obj=document.getElementsByName("method");
							let m = "paypal"

							return paypal.request.post(`${baseurl}/payment/create`, {
								amount: document.getElementById("paypal-amount").value,
								method: m,
								cust_id: util.getCustID()
							}).then(function(res) {
								document.getElementById("paypal-amount").value = 0;
								return res.id;
							});

						}

					},

					// Wait for the payment to be authorized by the customer

					onAuthorize: function(data, actions) {

						// Make a call to the merchant server to execute the payment

						return paypal.request.post(`${baseurl}/payment/execute`, {
							payToken: data.paymentID,
							payerId: data.payerID
						}).then(function(res) {
							window.location.reload();
						});
					}
				}, '#paypal-button-container');


			}
	}
</script>


<style scoped>

</style>