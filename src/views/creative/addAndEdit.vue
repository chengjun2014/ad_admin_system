<template>

    <section>

        <el-col :span="24" class="toolbar">

            <el-row> <label>推广计划</label>
                <el-select v-model="addForm.campaign_id" placeholder="请选择" @visible-change="campaignSelect">
                    <el-option
                            v-for="item in campaigns"

                            :label="item.title"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-row>
            <el-row> <label>广告组</label>
                <el-select v-model="addForm.group_id" placeholder="请选择" @visible-change="adgroupSelect">
                    <el-option
                            v-for="item in groups"
                            :label="item.title"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-row>

        </el-col>
 
    
       <el-form :model="addForm" label-width="80px" :rules="formRules" ref="addForm">




            <el-form-item label="创意名称" prop="name">
                <el-input v-model="addForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="素材类型">

                <el-radio-group  v-for="item in types" v-model="addForm.material_type" @change="showDiv">

                        <el-radio :label="item.label" :key="item.label">{{item.msg}} </el-radio>

                </el-radio-group>


            </el-form-item>
           <div v-if="tuwen">

               <el-form-item label="文字标题" prop="title">
                   <el-input v-model="addForm.title" auto-complete="off"></el-input>
               </el-form-item>
               <el-form-item label="文字描述" prop="title">
                   <el-input v-model="addForm.title" auto-complete="off"></el-input>
               </el-form-item>

           </div>

           <div v-if="tupian">

               <el-form-item label="图片标题" prop="title">
                   <el-input v-model="addForm.tuwens.title" auto-complete="off"></el-input>
               </el-form-item>
               <el-form-item label="文字描述" prop="title">
                   <el-input v-model="addForm.tuwens.content" auto-complete="off"></el-input>
               </el-form-item>

           </div>
            <el-form-item label="目标地址链接" prop="start_time">

                <el-input v-model="addForm.objective_url" auto-complete="off"></el-input>

            </el-form-item>

            <el-form-item label="是否启动" prop="online_status">
                <el-switch
                        v-model="addForm.online_status"
                        on-text=""
                        off-text="">
                </el-switch>
                
            </el-form-item>

        </el-form>

        <div>

            <el-button type="primary" @click.native="submit" :loading="loading">保存并继续</el-button>
        </div>

    </section>
</template>

<script>
    import util from '../../common/js/util'
    import { addCreative , editCreative,campaignSelect ,adgroupSelect } from '../../api/api';



    export default {

        data() {
            return {
                filters: {
                    title: ''
                },

                loading: false,

                campaigns:[],

                groups:[],

                types:[{msg:'图文',label:1},{msg:'图片',label:2},{msg:'九宫格',label:3}],

                formRules: {
                    name: [
                        { required: true, message: '请输入创意名称', trigger: 'blur' }
                    ]
                },

                addOrEdit: true,//新增界面是否显示

                tuwen : false,
                tuwens:{
                    title:'',
                    content:''
                },
                tupian : false,

                //新增界面数据
                addForm: {

                    id:'',
                    biz_number:'',
                    template_id:'',
                    cust_id:util.getCustID(),
                    group_id:'',
                    campaign_id:0,
                    name:'',
                    material_type:0,
                    objective_url:'',
                    online_status:false,
                    audit_status:'1',

                }

            }
        },

        methods: {

            campaignSelect(){
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
            adgroupSelect(){
                console.log('campaignSelect');

                let para = {

                    campaign_id:this.addForm.campaign_id

                }

                adgroupSelect(para).then((res) => {

                    this.loading = false;
                    let {code,msg} = res.data;
                    if (code!=200){
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }else{
                        console.log(res.data.result)
                        this.groups = res.data.result

                    }

                });

            },
            showDiv(label){
                console.log(label)

                if (label ===1){
                    this.tuwen = true;

                }

                if (label ===2){
                    this.tuwen = false;

                }

                if (label ===3){
                    this.tuwen = false;

                }

            },

            //新增
            submit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {

                            if (this.addOrEdit){
                                this.add();
                            }
                            else {
                                this.edit();
                            }
                        });
                    }
                });
            },
            add() {
                this.loading = true;
                this.addForm.cust_id = util.getCustID();
                let para = Object.assign({}, this.addForm);
                console.log(para)
                addCreative(para).then((res) => {
                    this.loading = false;

                    let {code,msg} = res.data;
                    if (code!=200){
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }else{

                        this.$refs['addForm'].resetFields();
                        this.$router.push({path:'/creativeList'})

                    }

                });
            } ,

            edit() {

                this.loading = true;
                let para = Object.assign({}, this.addForm);
                editCreative(para).then((res) => {
                    this.loading = false;

                    let {code,msg} = res.data;
                    if (code!=200){
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }else{

                        this.$refs['addForm'].resetFields();
                        this.$router.push({path:'/creativeList'})

                    }

                });

            }
        },
        mounted(){
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


        }
    }

</script>

<style scoped>

</style>