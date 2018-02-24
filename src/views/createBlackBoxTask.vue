<template>
    <section>
        <div style="background-color: white;height: 100px;width: 100%;padding: 20px;">
            <div class="task-steps">
                <el-steps :space="150" :active="show" finish-status="success">
                    <el-step title="投放基本信息"></el-step>
                    <el-step title="落地页制作"></el-step>
                    <el-step title="物料上传"></el-step>
                    <el-step title="智能投放目标设定"></el-step>
                    <el-step title="确认提交"></el-step>
                </el-steps>
            </div>
        </div>



        <div class="row first" v-show="show == 0">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                  <!--  <div class="ibox-title">
                        <h5>投放基本信息</small>
                        </h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i class="fa fa-wrench"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li>
                                    <a href="#">Config option 1</a>
                                </li>
                                <li>
                                    <a href="#">Config option 2</a>
                                </li>
                            </ul>
                            <a class="close-link">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>-->
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
                                    <el-time-select
                                            placeholder="起始时间"
                                            v-model="start_time"
                                            :picker-options="{start: '00:00',step: '00:15',end: '24:00'}">
                                    </el-time-select>
                                    <el-time-select
                                            placeholder="结束时间"
                                            v-model="end_time"
                                            :picker-options="{start: '00:00',step: '00:15',end: '24:00'}">
                                    </el-time-select>
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                    <button class="btn btn-primary" style="margin-left: 20px;" type="button" @click='taskTwoClick'>下一步</button>
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
                                <label class="col-sm-2 control-label">推广标的物</label>
                              

                                    <div class="col-sm-10">
                                        
                                        <div class="i-checks"><label style="margin:8px 0px  10px 0px;"> <input type="radio" value="option1" name="a"> <i></i> 广告主网站链接 </label></div>
                                        <div class="i-checks"><label style="margin-bottom:10px;"> <input type="radio" checked="" value="option2" name="a"> <i></i> 生成网站(此处打开广告主网站工具，待完善) </label></div>
                                        <div class="col-sm-10"><input type="text" class="form-control" style="margin-left:-16px ;"></div>

                                    </div>
                            
                            </div>
    
                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                     
                                    <button class="btn btn-primary" style="margin-left: 20px;" @click='taskOneClick' type="button">上一步</button>
                                    <button class="btn btn-primary" style="margin-left: 20px;" type="button" @click='taskThreeClick'>下一步</button>
                                   
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


                            <div class="form-group"><label class="col-sm-2 control-label">广告图片</label>

                                <el-upload
                              class="avatar-uploader"
                              action="https://jsonplaceholder.typicode.com/posts/"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="imageUrl" :src="imageUrl" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload> 
                                                           
                         </div>


                         <div class="form-group"><label class="col-sm-2 control-label">广告文字</label>

                                     <div class="col-sm-10"><input type="text" class="form-control"></div>
                                </div>


                            
                            


                            <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                     
                                    <button class="btn btn-primary" style="margin-left: 20px;" @click='taskTwoClick' type="button">上一步</button>
                                    <button class="btn btn-primary" style="margin-left: 20px;" type="button" @click='taskFourClick'>下一步</button>
                                   
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
                                <div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox1" value="option1">
                                            <label for="inlineCheckbox1"> CPM </label>
                                        </div>
                                        <label class="col-sm-2 control-label">单位费用:5.2元</label>
                                        
                                        <label class="col-sm-2 control-label">需求数量</label>
                                        <div class="col-sm-2">
                                        <input type="text" class="form-control">
                                        </div>
                            
                            </div>

                            <div class="form-group">
                                <div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox1" value="option1">
                                            <label for="inlineCheckbox1"> CPC </label>
                                        </div>
                                        <label class="col-sm-2 control-label">单位费用:8.6元</label>
                                        
                                        <label class="col-sm-2 control-label">需求数量</label>
                                        <div class="col-sm-2">
                                        <input type="text" class="form-control">
                                        </div>
                            
                            </div>
                                                        <div class="form-group">
                                <div class=" col-sm-offset-1 col-sm-1 checkbox checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox1" value="option1">
                                            <label for="inlineCheckbox1"> CPA </label>
                                        </div>
                                        <label class="col-sm-2 control-label">单位费用:9.2元</label>
                                      
                                        <label class="col-sm-2 control-label">需求数量</label>
                                        <div class="col-sm-2">
                                        <input type="text" class="form-control">
                                        </div>
                            
                            </div>

                            
<hr/>
                            <div class="form-group">
                                 <label class="col-sm-offset-2 col-sm-2 control-label" style="margin-left: 264px;"> 合计金额</label>
                           
                                <div class="col-sm-3"><input type="text" class="form-control"> <span class="help-block m-b-none"></span>
                                </div>
                            </div>

                            <div class="form-group">


                               <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button" @click='taskCancelClick'>取消</button>
                                     
                                    <button class="btn btn-primary" style="margin-left: 20px;" @click='taskThreeClick' type="button">上一步</button>
                                   <button class="btn btn-primary" style="margin-left: 20px;" type="button" @click='taskFiveClick'>下一步</button>
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
                    <!--<div class="ibox-title">
                        <h5>确认提交</small>
                        </h5>
                    </div>-->
                    <div class="ibox-contenta">
                      

                              <form method="get" class="form-horizontala">
    
                            <div class="form-group">
                                <ui>
                                	<li><h5 style="float: left;">广告名称</h5> <span  style="float: left;padding-left: 20px;">campaign1</span></li>
                                	<li><h5 style="float: left;">广告日期</h5> <span  style="float: left;padding-left: 20px;">2017-06-13 to 2017-06-15</span></li>
                                	<li><h5 style="float: left;">投放时段</h5> <span  style="float: left;padding-left: 20px;">12:00 to 16:00</span></li>
                                </ui>
                            </div>
                            
                        </form>
                     


                         <form method="get" class="form-horizontala">
    
                            <div class="form-group">
                                <ui>
                                	<li><h5 style="float: left;">网站链接</h5> <span  style="float: left;padding-left: 20px;">www.baidu.com</span></li>
                        
                                </ui>
                            </div>
                            
                        </form>


                        <form method="get" class="form-horizontala">
    
                            <div class="form-group">
                                <ui>
                                	<li><h5 style="float: left;">创意预览</h5> <span  style="float: left;padding-left: 20px;">加图片</span></li>
                        
                                </ui>
                            </div>
                            
                        </form>


                        <form method="get" class="form-horizontala">
    
                            <div class="form-group">
                                <ui>
                                	<li><h5 style="float: left;">CPC</h5> <span  style="float: left;padding-left: 20px;">4.2元/个,10个</span></li>
                                    <li><h5 style="float: left;">CPM</h5> <span  style="float: left;padding-left: 20px;">5.6元/个,15个</span></li>
                                   <li><h5 style="float: left;">合计</h5> <span  style="float: left;padding-left: 20px;">80元</span></li>
                        
                                </ui>
                            </div>
                            
                        </form>
                      
                
                      
                        <div class="form-group">
    
                                <div class="col-sm-10 col-sm-offset-2">
                                    <button class="btn btn-primary" type="button"  @click='taskCancelClick'>取消</button>
                                    <button class="btn btn-primary" style="margin-left: 20px" @click='taskFourClick' type="button">上一步</button>
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
    import { addCampaign , editCampaign,addAdgroup ,campaignSelect} from '../api/api';


    export default {
        data() {
            return {
                imageUrl: '',
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
                addOrEdit: true,//新增界面是否显示
                campaigns:[],
                //新增界面数据
                addForm: {
                    id:'',
                    campaign_id:'3',
                    biz_number   :'1',
                    cust_id        :'',
                    member_id    :0,
                    title          :'',
                    start_time  :'',
                    end_time       :'',
                    online_status  :true,
                    settle_status  :'0',
                    settle_time    :'',
                    settle_reason  :'',
                    type           :'',
                    product_line_id:'',
                    op_id          :'modify'
                },
                is_all_time:'0',
                start_time:'',
                end_time:'',
                start_day:'',
                end_day:''

            }
        },
        methods: {
            taskCancelClick: function(){
                this.$router.push({path:'/main'})
            },
            taskOneClick: function(){
                this.show = 0;
                //alert(JSON.stringify(this.addForm));
            },

            taskTwoClick: function(){
                this.show = 1;
            },
            taskThreeClick: function(){
                this.show = 2;
            },
            taskFourClick: function(){
                this.show = 3;
            },

            taskFiveClick: function(){
                this.show = 4;
            },
            campaignSelectFromList(){
                console.log('campaignSelect');

                let para = {

                    cust_id:util.getCustID()

                };

                campaignSelect(para).then((res) => {

                    this.loading = false;
                    let {code,msg} = res.data;
                    if (code!=200){
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }else{
                        console.log(res.data.result)
                        this.campaigns = res.data.result
                    }
                });
            },


            //新增
            submit: function () {

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

                    let {code,msg} = res.data;
                    if (code!=200){
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }else{
                        // 看不懂 by frank wang 2017.06.03
                        //this.$refs['addForm'].resetFields();
                        //Todo page4  改名
                        this.$router.push({path:'/adgroupList'})
                    }

                });
            },
            handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    


        },

        mounted(){
            util.setLanguage();
            
            $('.input-daterange').datepicker({
                keyboardNavigation: false,
                forceParse: false,
                autoclose: true
            });

            console.log('mounted')
            console.log(this.$route.query);

            if (this.$route.params.active==='add'){
                console.log('add');
                this.addOrEdit = true;

            }
            else if (this.$route.params.active==='edit') {
                console.log('edit');
                this.addOrEdit = false;
                this.addForm = this.$route.params;
                this.addForm.online_status = this.addForm.online_status==0?true:false;

            }
        },
        updated(){
            console.log(this.is_all_time)
        },
        
    }

</script>

<style>
    .datapicker{
        width: 50%;
        padding-left:13px;
    }
    .pad{
        padding-top:8px;
    }
    .task-steps {
        background-color: white;
        margin: auto;
        width: 800px;
    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
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
</style>