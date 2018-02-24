<template>
	<section>
		<!--工具条-->
		<!--<div class="row">
			<div class="col-lg-12 toolbar">
				<el-form :inline="true" :model="filters">
					<el-form-item>
						<el-input v-model="filters.title"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click="query" data-i18n="ad_list.query">查询</el-button>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="handleAdd">新增</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>-->

		<div class="panel panel-default">
			<div class="panel-heading">
				<h4 class="panel-title" data-i18n="ad_list.s6">推广计划列表</h4>
			</div>
			
			<div class="panel-body table-responsive">
				<table class="table table-striped table-bordered table-hover" aria-describedby="DataTables_Table_0_info">
		            <thead>
		                <tr>
		                    <th data-i18n="ad_list.name" style="min-width: 138px;">推广计划</th>
		                    <th data-i18n="ad_list.CPM" style="min-width: 120px;">CPM</th>
		                    <th data-i18n="ad_list.CPC" style="min-width: 120px;">CPC</th>
		                    <th data-i18n="ad_list.CPA" style="min-width: 120px;">CPA</th>
		                    <th data-i18n="ad_list.s1" style="min-width: 120px;">在线状态</th>
		                    <th data-i18n="ad_list.s2" style="min-width: 120px;">审核状态</th>
		                    <th data-i18n="ad_list.Operations" style="min-width: 350px;">操作</th>
		                </tr>
		            </thead>
		            <tbody>
		                <tr v-for="(item, index) in adgroups">
		                    <td>{{item.title}}</td>
							<td>{{item.elements.CPM}}</td>
							<td>{{item.elements.CPC}}</td>
							<td>{{item.elements.CPA}}</td>
							<td><el-tag :type="item.online_status | statusFilter">{{item.online_status==1?"online":"offline"}}</el-tag></td>
							<td v-if="item.audit_status==21" data-i18n="ad_list.s3"></td>
							<td v-else-if="item.audit_status==1" data-i18n="ad_list.s4"></td>
							<td v-else><a class="btn btn-danger" @click="show_audio_reason(index, item)" data-i18n="ad_list.s5"></a></td>
		                    <td>
		                    	<button class="btn btn-primary" @click="handleModifyStatus(index, item, 1)" v-if="item.online_status==0">online</button>
		                    	<button class="btn btn-primary" @click="handleModifyStatus(index, item, 0)" v-else>offline</button>
		                    	<!-- <button class="btn btn-warning" @click="handleStop(index, item)" data-i18n="ad_list.Op_start" data-i18n="ad_list.Op_pause">暂停</button> -->
		                    	<button class="btn btn-success" @click="handleEdit(index, item)" data-i18n="ad_list.Op_edit">编辑</button>
		                    	<button class="btn btn-info" @click="viewreport" data-i18n="ad_list.Op_report">查看报表</button>
		                    	<button class="btn btn-danger" @click="handleDel(index, item)" data-i18n="ad_list.Op_delete">删除</button>
		                    </td>
		                </tr>
		            </tbody>
		        </table>
	        </div>
		</div>
		
	</section>
</template>

<script>
	import util from '../../common/js/util'
	import { getCampaignList,  editAdgroup, campaignQuery ,getAdgroupList, adstatusmodify} from '../../api/api';

	export default {
		data() {
			return {
				cust_id:'',
				filters: {
					title: ''
				},
				adgroups: [],
				campaigns: [],
				total: 0,
				page: 1,
				sels: []
			}
		},
    filters: {
        statusFilter(status) {
          const statusMap = {
            0: 'darf',
            1: 'success'
          };
					console.log('sdf', statusMap[status]);
          return statusMap[status]
        }
    },
		methods: {
			//性别显示转换
			formatType: function (row, column) {
				return row.type == 1 ? '定向' : row.type == 0 ? '搜索' : '未知';
			},
			show_audio_reason(row, item){
				console.log(item);
				alert('审核未通过原因:'+ item.audit_reason)
			},
			handleModifyStatus(row, item,status) {
				this.$message({
					message: '操作成功',
					type: 'success'
				});
				item.online_status = status;
				console.log('creative', item);
				adstatusmodify({'id':item.id, 'online_status': status}).then((res) => {
						let {code,msg} = res.data;
						if (code!=200){
							this.$message({
								message: msg,
								type: 'error'
							});
						}else{
							this.$message({
								message: msg,
								type: 'success'
							})
						}
					});
			},
			handleCurrentChange(val) {
				this.page = val;
				// this.getUsers();
			},
			//获取用户列表
			getCampaigns() {
				
				let para = {
					cust_id: this.cust_id
				};
				//NProgress.start();
				getAdgroupList(para).then((res) => {
					this.total = res.data.total;
					console.log(res.data)
					this.adgroups = res.data.result;
					
					util.setLanguage();
				});
			},
			//获取用户列表
			query() {
				
				let para = {
					title: this.filters.title,
                    cust_id: this.cust_id

				};

                getAdgroupList(para).then((res) => {
//					this.total = res.data.total;
                    this.adgroups = res.data.result;
				});
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					let para = { id: row.id ,deleteflag:1};
					editAdgroup(para).then((res) => {
						let {code,msg} = res.data;
						if (code!=200){
							this.$message({
								message: msg,
								type: 'error'
							});
						}else{
							this.getCampaigns();
						}
					});
				}).catch(() => {

				});
			},
			handleStart: function (index, row) {
				console.log(index, row, 'handleStart')
			},
			handleStop: function (index, row) {
				console.log(index, row, 'handleStop')
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				
				let p = Object.assign({active:'edit'}, row);
                this.$router.push({name: '黑盒投放', params: p});
			},
			//显示新增界面
			handleAdd: function () {

                this.$router.push({ name: '创建推广组',params:{active:'add'}});

			},
			viewreport: function() {
				this.$router.push({ name: '投放报表'});
			},
			handleAddCretive: function () {

                this.$router.push({ name: '新增创意',params:{active:'add'}});

            },
			handleGreativeList: function() {
				this.$router.push({name: '创意列表', params:{active: 'add'}})
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			}
		},
		mounted() {
			util.setLanguage();

			this.cust_id = util.getCustID();
			this.getCampaigns();
		}
	}

</script>

<style scoped>
	table {
		background-color: #fff;
	}
	table th {
		text-align: center;
		background-color: #f5f5f5 !important;
	}
	table td{
		text-align: center;
		vertical-align: middle !important;
	}
</style>