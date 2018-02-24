<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.title" placeholder="推广计划名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="query">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="campaigns" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="50">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="title" label="推广计划名称" width="200" sortable>
			</el-table-column>
			<el-table-column prop="start_time" label="计划开始时间" width="100"  sortable>
			</el-table-column>
			<el-table-column prop="end_time" label="计划下线时间" width="100" sortable>
			</el-table-column>
			<el-table-column prop="online_status" label="状态" width="100"  sortable>
			</el-table-column>
			<el-table-column prop="settle_status" label="结算状态" width="100" sortable>
			</el-table-column>
			<el-table-column prop="type" label="计划类型" width="100"  :formatter="formatType" sortable>
			</el-table-column>
			<!-- <el-table-column prop="settle_time" label="结算状态变更时间" width="100" sortable>
			</el-table-column>
			<el-table-column prop="settle_reason" label="结算下线原因" width="100" sortable>
			</el-table-column> -->
			<el-table-column label="操作" width="400">
				<template scope="scope">
					<el-button size="small" :disabled="scope.row.online_status===0" @click="handleStart(scope.$index, scope.row)">启动</el-button>
					<el-button size="small" :disabled="scope.row.online_status===1" @click="handleStop(scope.$index, scope.row)">暂停</el-button>
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
					<el-button size="small" @click="$router.push({path: '/addadgroupe'})">新增推广组</el-button>
					<el-button size="small" @click="$router.push({path: '/adgroupList'})">全部推广组</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
		
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getCampaignList,  editCampaign,campaignQuery } from '../../api/api';


	export default {
		data() {
			return {
				cust_id:'',
				filters: {
					title: ''
				},
				campaigns: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					title: [
						{ required: true, message: '请输入推广计划名称', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id:'',
					biz_number   :'1',  
					cust_id        :'',
					member_id    :0,
					title          :'',
					start_time  :'',   
					end_time       :'',
					online_status  :'0',
					settle_status  :'0',
					settle_time    :'',
					settle_reason  :'',
					type           :'',
					product_line_id:'',
					op_id          :'modify'
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {            
					biz_number   :'1',  
					cust_id        :'',
					member_id    :0,
					title          :'',
					start_time  :'',   
					end_time       :'',
					online_status  :'0',
					settle_status  :'0',
					settle_time    :'',
					settle_reason  :'',
					type           :'',
					product_line_id:'',
					op_id          :'add'
				}

			}
		},

		methods: {
			//性别显示转换
			formatType: function (row, column) {
				return row.type == 1 ? '定向' : row.type == 0 ? '搜索' : '未知';
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
				this.listLoading = true;
				//NProgress.start();
				getCampaignList(para).then((res) => {
					this.total = res.data.total;

					this.campaigns = res.data.campaigns;

					this.listLoading = false;
					//NProgress.done();
				});
			},
			//获取用户列表
			query() {
				
				let para = {
					title: this.filters.title
				};
				this.listLoading = true;
				//NProgress.start();
				campaignQuery(para).then((res) => {
					this.total = res.data.total;
					console.log(res.data)
					this.campaigns = res.data.campaigns;
					console.log(this.campaigns)
					this.listLoading = false;
					//NProgress.done();
				});
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id ,deleteflag:1};
					editCampaign(para).then((res) => {
								this.listLoading = false;
								//NProgress.done();
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
			//显示编辑界面
			handleEdit: function (index, row) {

//				this.editFormVisible = true;
				let p = Object.assign({active:'edit'}, row);
				console.log(p)
                this.$router.push({name: '创建推广计划',params:p});
			},
			//显示新增界面
			handleAdd: function () {

                this.$router.push({ name: '创建推广计划',params:{active:'add'}});

			},

			selsChange: function (sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
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

			this.cust_id = util.getCustID();
			this.getCampaigns();
		}
	}

</script>

<style scoped>

</style>