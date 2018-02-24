// import Login from './views/Login.vue'
// import Reg from './views/register.vue'
// import NotFound from './views/404.vue'
// import Home from './views/Home.vue'
// import Main from './views/Main.vue'
// import Table from './views/campaign/Table.vue'
// import campaignList from './views/campaign/main.vue'
// import Form from './views/campaign/Form.vue'
// import user from './views/campaign/user.vue'
// import Page5 from './views/group/Page5.vue'
// import Page6 from './views/creative/List.vue'
// import echarts from './views/chartsandreports/echarts.vue'

const Login  = resolve => {
    require.ensure(['./views/Login.vue'], () => {
        resolve(require('./views/Login.vue'))
    })
}
// const Login  =  r => require.ensure([], () => r(require('./views/Login.vue')), 'chunkname3')
const Reg  = resolve => require(['./views/register.vue'], resolve);

const NotFound = resolve => require(['./views/404.vue'], resolve);

const Home = resolve => require(['./views/Home.vue'], resolve);
const campaignList = resolve => require(['./views/campaign/main.vue'], resolve);
const addCampaign = resolve => require(['./views/campaign/add.vue'], resolve);
const Main = resolve => require(['./views/Main.vue'], resolve);
const Table  = resolve => require(['./views/campaign/Table.vue'], resolve);
const Form = resolve => require(['./views/campaign/Form.vue'], resolve);
const user  = resolve => require(['./views/campaign/user.vue'], resolve);
const adgroupList = resolve => require(['./views/group/main.vue'], resolve);
const creativeList = resolve => require(['./views/creative/List.vue'], resolve);
const addCreative = resolve => require(['./views/creative/addAndEdit.vue'], resolve);
const echarts  = resolve => require(['./views/chartsandreports/echarts.vue'], resolve);

const addAdgroupe = resolve => require(['./views/group/add.vue'], resolve);

const info  = resolve => require(['./views/customer/info.vue'], resolve);
const account  = resolve => require(['./views/customer/account.vue'], resolve);
const report = resolve => require(['./views/chartsandreports/report.vue'], resolve);
const createTask = resolve => require(['./views/createTask.vue'], resolve);
const createBlackBoxTask = resolve => require(['./views/createBlackBoxTask.vue'], resolve);


//add by frank wang .2017.06.03
const tools = resolve => require(['./views/tools.vue'], resolve);
const creative_tool = resolve => require(['./views/creative_tool.vue'], resolve);
const luodipage_tool = resolve => require(['./views/luodipage_tool.vue'], resolve);

const aderver_files_tool = resolve => require(['./views/aderver_files_tool.vue'], resolve);

const addBlackTask = resolve => require(['./views/addBlackTask.vue'], resolve);
const addCreateTask = resolve => require(['./views/addCreateTask.vue'], resolve);

const send_pwd = resolve => require(['./views/forgetpwd.vue'], resolve);

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/reg',
        component: Reg,
        name: '客户注册',
        hidden: true
    },
    {
        path: '/findpwd',
        component: send_pwd,
        name: '找回密码',
        hidden: true
    },
    {
        path: '/createTask',
        component: createTask,
        name: '创建白盒推广组',
        hidden: true
    },
    {
        path: '/createBlackBoxTask',
        component: createBlackBoxTask,
        name: '创建黑盒推广组',
        hidden: true
    },
    // {
    //     path: '/addBlackTask',
    //     component: addBlackTask,
    //     name: '黑盒投放',
    //     hidden: true
    // },
      {
        path: '/addCreateTask',
        component: addCreateTask,
        name: '白盒投放',
        hidden: true
    },


    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,//只有一个节点
        children: [
            { path: '/main', component: Main, name:  '首页' },
        //     { path: '/table', component: Table, name: 'Table' , hidden: true},
        // { path: '/form', component: Form, name: 'Form' },
        //     { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '推广投放',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/addcampaign', component: addCampaign, name: '创建推广计划', query:{active:'add'} },
            { path: '/campaignList', component: campaignList, name: '推广计划列表' },
            { path: '/adgroupList', component: adgroupList, name: '广告组列表' },
            { path: '/addadgroupe', component: addAdgroupe, name: '创建推广组', hidden: true },
            { path: '/creativeList', component: creativeList, name: '创意列表' },
            { path: '/addCreative', component: addCreative, name: '新增创意' , hidden: true},
            { path: '/editCreative', component: addCreative, name: '编辑创意' , hidden: true},
            { path: '/addBlackTask', component: addBlackTask, name: '黑盒投放' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '账户中心',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/custInfo', component: info, name: '账号基本信息' },
            { path: '/account', component: account, name: '账户消耗及金额' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '报表模块',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/report', component: report, name: '投放报表' },
        ]
    },



    {
        path: '/tool',
        component: Home,
        name: '工具箱',
        iconCls: 'fa fa-laptop',
        children: [
            { path: '/creative_tool', component: creative_tool, name: '创意制作工具' },
            { path: '/luodipage_tool', component: luodipage_tool, name: '落地页制作工具' },
            { path: '/aderver_files_tool', component: aderver_files_tool, name: '广告主资质' }
        ]
    },

    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;