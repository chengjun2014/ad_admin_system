<template>
    <section>
        <div style="background-color: white;height: 100px;width: 100%;padding: 20px;">
            <div class="task-steps">
                <el-steps :space="150" :active="show" finish-status="success">
                    <el-step title="投放基本信息"></el-step>
                    <el-step title="落地页制作"></el-step>
                    <el-step title="创意制作"></el-step>
                    <el-step title="定向设置"></el-step>
                    <el-step title="计费模式"></el-step>
                    <el-step title="确认提交"></el-step>
                </el-steps>
            </div>
        </div>
        <div class="row first" v-show="show == 0">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">
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
                                <label class="col-sm-2 control-label">广告名称</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" v-model="addForm.title">
                                </div>
                            </div>
                            <div class="form-group ">
                                <label class="col-sm-2 control-label">投放日期</label>
                                <div class="input-daterange  input-group datapicker" id="datepicker">
                                    <input type="text" class="input-sm form-control" name="start_day" value="05/14/2014">
                                    <span class="input-group-addon">to</span>
                                    <input type="text" class="input-sm form-control" name="end_day" value="05/22/2014">
                                </div>
                            </div>
                            <div class="form-group ">
                                <label class="col-sm-2 control-label">投放时段</label>
                                <div class="col-sm-offset-1">
                                    <el-radio class="radio" v-model="is_all_time" label="0">全时段</el-radio>
                                    <el-radio class="radio" v-model="is_all_time" label="1">特定时段</el-radio>
                                </div>
                                <div class="col-sm-offset-2" style="margin-top: 10px" v-if="is_all_time=='1'">
                                    <el-time-select placeholder="起始时间" v-model="start_time" :picker-options="{start: '00:00',step: '00:15',end: '24:00'}">
                                    </el-time-select>
                                    <el-time-select placeholder="结束时间" v-model="end_time" :picker-options="{start: '00:00',step: '00:15',end: '24:00'}">
                                    </el-time-select>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" type="button" @click='taskTwoClick'>下一步</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row second" v-show="show == 1">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">
                        <form method="get" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-2 control-label">推广标的物</label>
                                <div class='col-sm-10 pad'>
                                    <label class="font-normal">网站链接</label>
                                    <input type="text" style="margin-bottom: 30px;" class="form-control">
                                    <label class="font-normal">生成网站(此处打开广告主网站工具，待完善)</label>
                                    <input type="text" style="margin-bottom: 30px;" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" @click='taskOneClick' type="button">上一步</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" type="button" @click='taskThreeClick'>下一步</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row third" v-show="show == 2">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">
                        <form method="get" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-2 control-label">投放平台</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
                                        <option>微博</option>
                                        <option>今日头条</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">广告规格</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
                                        <option>300*200</option>
                                        <option>400*150</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">上传广告创意
                                    <br>(打开广告创意工具)</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" name="password">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" @click='taskTwoClick' type="button">上一步</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" type="button" @click='taskFourClick'>下一步</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row fourth" v-show="show == 3">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">
                        <form method="get" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-2 control-label">地域</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
                                        <option>不限</option>
                                        <option>北京</option>
                                        <option>上海</option>
                                        <option>广州</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">性别</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
                                        <option>不限</option>
                                        <option>男</option>
                                        <option>女</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">年龄</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
                                        <option>不限</option>
                                        <option>10-20</option>
                                        <option>20-30</option>
                                        <option>30-40</option>
                                        <option>40-50</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">消费能力</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
                                        <option>不限</option>
                                        <option>高</option>
                                        <option>中</option>
                                        <option>低</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">上网场景</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
                                        <option>不限</option>
                                        <option>公共场所</option>
                                        <option>家庭</option>
                                        <option>学校</option>
                                        <option>未知</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">用户学历</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
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
                            <div class="form-group">
                                <label class="col-sm-2 control-label">婚恋状态</label>
                                <div class="col-sm-6">
                                    <select class="form-control m-b" name="account">
                                        <option>已婚</option>
                                        <option>单身</option>
                                        <option>育儿</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" @click='taskThreeClick' type="button">上一步</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" type="button" @click='taskFiveClick'>下一步</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row fifth" v-show="show == 4">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">
                        <form method="get" class="form-horizontal">
                            <div class="form-group">
                                <div class="form-group">
                                    <div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                                        <label for="inlineCheckbox1"> CPM </label>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="ibox float-e-margins">
                                            <div class="ibox-content">
                                                <div id="ionrange_1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                                        <label for="inlineCheckbox1"> CPC </label>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="ibox float-e-margins">
                                            <div class="ibox-content">
                                                <div id="ionrange_2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline">
                                        <!--<input type="checkbox" id="inlineCheckbox" value="option1">-->
                                        <label for="inlineCheckbox1"> 日限额 </label>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="ibox float-e-margins">
                                            <div class="ibox-content">
                                                <div id="ionrange_3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-6 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" @click='taskFourClick' type="button">上一步</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" type="button" @click='taskSixClick'>下一步</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row sixth" v-show="show == 5">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <!--<div class="ibox-title">
                                <h5>确认提交</small>
                                </h5>
                            </div>-->
                    <div class="ibox-contenta">
                        <form method="get" class="form-horizontala">
                            <div class="form-group">
                                <ui>
                                    <li>
                                        <h5 style="float: left;">广告名称</h5> <span style="float: left;padding-left: 20px;">campaign1</span></li>
                                    <li>
                                        <h5 style="float: left;">广告日期</h5> <span style="float: left;padding-left: 20px;">2017-06-13 to 2017-06-15</span></li>
                                    <li>
                                        <h5 style="float: left;">投放时段</h5> <span style="float: left;padding-left: 20px;">12:00 to 16:00</span></li>
                                </ui>
                            </div>
                        </form>
                        <form method="get" class="form-horizontala">
                            <div class="form-group">
                                <ui>
                                    <li>
                                        <h5 style="float: left;">网站链接</h5> <span style="float: left;padding-left: 20px;">www.baidu.com</span></li>
                                </ui>
                            </div>
                        </form>
                        <form method="get" class="form-horizontala">
                            <div class="form-group">
                                <ui>
                                    <li>
                                        <h5 style="float: left;">创意预览</h5> <span style="float: left;padding-left: 20px;">加图片</span></li>
                                </ui>
                            </div>
                        </form>
                        <form method="get" class="form-horizontala">
                            <div class="form-group">
                                <ui>
                                    <li>
                                        <h5 style="float: left;">地域</h5> <span style="float: left;padding-left: 20px;">北京</span></li>
                                    <li>
                                        <h5 style="float: left;">年龄</h5> <span style="float: left;padding-left: 20px;">20-40</span></li>
                                </ui>
                            </div>
                        </form>
                        <form method="get" class="form-horizontala">
                            <div class="form-group">
                                <ui>
                                    <li>
                                        <h5 style="float: left;">CPC</h5> <span style="float: left;padding-left: 20px;">6.5元</span></li>
                                    <li>
                                        <h5 style="float: left;">CPM</h5> <span style="float: left;padding-left: 20px;">4.3元</span></li>
                                </ui>
                            </div>
                        </form>
                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                <button class="btn btn-primary" style="margin-left: 20px" @click='taskFiveClick' type="button">上一步</button>
                                <button class="btn btn-primary" style="margin-left: 20px" type="button" @click='submit'>提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import util from '../common/js/util'
import { addAdgroup } from '../api/api';


export default {
    data() {
        return {
            show: 0,
            filters: {
                title: ''
            },
            loading: false,
            formRules: {
                title: [
                    { required: true, message: '请输入推广组名称', trigger: 'blur' }
                ]
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
            end_day: ''

        }
    },
    methods: {
        taskCancelClick: function() {
            this.$router.push({ path: '/main' })
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
                let { code, msg } = res.data;
                if (code != 200) {
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
                this.add();
            });


        },
        add() {
            this.loading = true;

            this.addForm.cust_id = util.getCustID();
            //alert(this.addForm.title);
            let para = Object.assign({}, this.addForm);
            addAdgroup(para).then((res) => {
                this.loading = false;

                let { code, msg } = res.data;
                if (code != 200) {
                    this.$message({
                        message: msg,
                        type: 'error'
                    });
                } else {
                    // 看不懂 by frank wang 2017.06.03
                    this.$refs['addForm'].resetFields();
                    //Todo page4  改名
                    this.$router.push({ path: '/adgroupList' })
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

        $("#ionrange_1").ionRangeSlider({
            min: 6.8,
            max: 12.5,
            type: 'single',
            step: 0.1,
            postfix: " $",
            prettify: false,
            hasGrid: false
        });
        $("#ionrange_2").ionRangeSlider({
            min: 3.4,
            max: 10,
            type: 'single',
            step: 0.1,
            postfix: " $",
            prettify: false,
            hasGrid: false
        });

        $("#ionrange_3").ionRangeSlider({
            min: 0,
            max: 5000,
            type: 'double',
            prefix: "$",
            maxPostfix: "+",
            prettify: false,
            hasGrid: false
        });


        console.log('mounted')
        console.log(this.$route.query);

        if (this.$route.params.active === 'add') {
            console.log('add');
            this.addOrEdit = true;

        } else if (this.$route.params.active === 'edit') {
            console.log('edit');
            this.addOrEdit = false;
            this.addForm = this.$route.params;
            this.addForm.online_status = this.addForm.online_status == 0 ? true : false;

        }
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