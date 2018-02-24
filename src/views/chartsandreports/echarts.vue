<template>
	<div class="panel panel-default">
		<div class="panel-heading">
									
			<div class="input-daterange input-group datapicker pull-left" id="datepicker" style="width: 445px;margin-right: 8px;">
				<input type="text" required="" v-model="addForm.start_date" class="input-sm form-control" id="start_date">
				<span class="input-group-addon">to</span>
				<input type="text" required="" v-model="addForm.end_date" class="input-sm form-control" id="end_date">
			</div>
										
			<el-button type="primary" size="small" v-on:click="getReportDetail" data-i18n="ad_list.query">查询</el-button>
		</div>	
		<div class="panel-content">
			<div class="row">
				<div class="col-lg-12">
					<div id="chartLine" style="height:320px;"></div>
				</div>
			</div>
			
            <div class="ibox">
                <div class="ibox-content">
                    <table class="footable table table-stripped toggle-arrow-tiny default footable-loaded" data-page-size="15">
                        <thead>
                        <tr>
                            <th class="footable-visible footable-first-column footable-sortable" data-i18n="report.e1">时间</th>
                            <th class="footable-visible footable-sortable" data-i18n="report.e2">推广计划</th>
                            <th data-hide="phone" class="footable-visible footable-sortable" data-i18n="report.e3">曝光量</th>
                            <th data-hide="phone" class="footable-visible footable-sortable" data-i18n="report.e8">url点击量</th>
                            <th data-hide="phone" class="footable-visible footable-sortable" data-i18n="report.e9">page点击量</th>
                            <th data-hide="phone,tablet" class="footable-visible footable-sortable" data-i18n="report.e6">花费</th>
                            <!--<th class="text-right footable-visible footable-last-column footable-sortable" data-i18n="report.e7">操作</th>-->
                        </tr>
                        </thead>
						<tbody>
							<tr v-for="(item, index) in chartData">
								<td>{{item.thedate}}</td>
								<td>{{item.name}}</td>
								<td>{{item.exposure}}</td>
								<td>{{item.url_click}}</td>
								<td>{{item.page_click}}</td>
								<td>{{item.consume}}</td>
								<!--<td>{{item.elements.CPC}}</td>
								<td>{{item.elements.CPA}}</td>
								<td>{{item.online_status==0?"下线":"在线"}}</td>
								<td>{{item.audit_status==20?"valid":"invalid"}}</td>-->
							</tr>
		            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import util from "../../common/js/util"
	import echarts from 'echarts'
	// import {chartData} from '../../mock/data/user'
	import {getReport} from "../../api/api"

	export default {
		data() {
			return {
				chartData: [],
				addForm: {
					start_date: '',
					end_date: '',
					cust_id: util.getCustID(),
					num_days: 5
				}
			}
		},
		methods: {
			getReportDetail(){
				// let para = {'cust_id': util.getCustID()};
				let para = Object.assign({}, this.addForm);
				getReport(para).then((res) => {
					let {code, msg} = res.data;
					if(code != 200) {
						this.$message({message: msg, type: 'error'})
					} else {
						this.chartData = res.data.result; 
						var xAxisData = [],
						val1Data = [],
						//val2Data = [],
						val3Data = [],
						val4Data = [],
						val5Data = [],
						val6Data = [],
						val7Data = [];
						for (var i = 0; i < this.chartData.length; i++) {
							var temp = this.chartData[i];
							xAxisData.push(temp.thedate);
							val1Data.push(temp.interaction);
							// val2Data.push(temp.val2);
							val3Data.push(temp.exposure);
							val4Data.push(temp.consume);
							val5Data.push(temp.conversion);
							val6Data.push(temp.page_click);
							val7Data.push(temp.url_click);
						}

						var _this = this;
						//基于准备好的dom，初始化echarts实例
						this.chartLine = echarts.init(document.getElementById('chartLine'));

						this.chartLine.setOption({
							title: {
								text: " "
							},
							tooltip: {
								trigger: 'axis'
							},
							legend: {
								show: true,
								// data: ['Clicks', 'ClickRate', 'Impressions', 'Cost', 'CPM', "CPA", "CPC"],
								data: ['Impressions', 'Cost', 'Page Clicks', "Url Clicks"],
								selectedMode: "single",
								top: 20,
								selected: {
									// 'interaction': true,
								//	'ClickRate': true,
									'Impressions': true,
									'Cost': false,
									'Page Clicks': false,
									'Url Clicks': false
								}
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis: {
								type: 'category',
								boundaryGap: false,
								data: xAxisData
							},
							yAxis: {
								type: 'value'
							},
							series: [{
							// 		name: 'interaction',
							// 		type: 'line',
							// 		data: val1Data
							// 	}, 
								//{
								//	name: 'ClickRate',
								//	type: 'line',
								//	data: val2Data
								//},
								
									name: 'Impressions',
									type: 'line',
									data: val3Data
								},{
									name: 'Cost',
									type: 'line',
									data: val4Data
								},
								// }, {
								// 	name: 'conversion',
								// 	type: 'line',
								// 	data: val5Data
								// }, 
								{
									name: 'Page Clicks',
									type: 'line',
									data: val6Data
								},{
									name: 'Url Clicks',
									type: 'line',
									data: val7Data
								}
							]
						});
					}
				});
			}
		},
		mounted: function() {
			util.setLanguage();

			this.getReportDetail();


			// $('.input-daterange').datepicker({
			// 	keyboardNavigation: false,
			// 	forceParse: false,
			// 	autoclose: true,
			// 	startDate: 'd'
			// });
				var $start_date = $("#start_date"),
				$end_date = $("#end_date");
			var _this = this;
			$('.input-daterange').datepicker({
				keyboardNavigation: true,
				forceParse: false,
				autoclose: true,
				startView: '1',
				todayBtn: true,
				format: 'yyyy-mm-dd'
				// startDate: 'd',
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
		}
	}
</script>