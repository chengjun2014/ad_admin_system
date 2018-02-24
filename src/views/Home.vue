<template>
	<div>
		<menu-comp></menu-comp>
		<div id="page-wrapper" class="gray-bg dashbard-1">
			<head-comp></head-comp>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import MenuComp from '../components/MenuComp'
	import HeadComp from '../components/headComp'
	import util from "../common/js/util"

	export default {
		data() {
			return {
				sysName:'广告平台',
				collapsed:false,
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		components: {
			HeadComp,
			MenuComp
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});


			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			util.setLanguage();
			var user = sessionStorage.getItem('user');

			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
	}

</script>

<style scoped lang="scss">
	.white-bg {
		background-color: #fff;
	}
	.menu-collapsed{
		flex:0 0 60px;
		width: 60px;
	}
	.menu-expanded{
		flex:0 0 230px;
		width: 230px;
	}
	.content-tip {
		padding: 20px;
		padding-bottom: 0px;
		background: #fff;
		overflow:hidden;
		.breadcrumb-container {
			.title {
				width: 200px;
				float: left;
				color: #475669;
			}
			.breadcrumb-inner {
				float: right;
			}
		}
		.content-wrapper {
			background-color: #fff;
			box-sizing: border-box;
		}
	}
</style>