<template>
    <section>
            <el-form :model="addForm" label-width="180px" :rules="formRules" ref="addForm">
                <el-form-item label="推广计划名称" prop="title">
                    <el-input v-model="addForm.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="计划类型">
                    <el-radio-group v-model="addForm.type">
                       <el-row> <el-radio class="radio" :label="1">标准展示推广 - 在PC媒体流量中站上投放的展示推广</el-radio></el-row>
                       <el-row> <el-radio class="radio" :label="2">移动展示推广 - 在移动媒体流量中站上投放的展示推广</el-radio></el-row>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="投放时间" prop="start_time">
                        <el-date-picker
                          v-model="addForm.start_time"
                          type="datetime"
                          placeholder="选择开始日期时间">
                        </el-date-picker>
                        <el-date-picker
                          v-model="addForm.end_time"
                          type="datetime"
                          placeholder="选择结束日期时间">
                        </el-date-picker>
                    
                </el-form-item>

                <el-form-item label="是否启动" prop="online_status">
                    <el-switch
                            v-model="addForm.online_status"
                            on-text=""
                            off-text="">
                    </el-switch>
                </el-form-item>

                <el-form-item label="" prop="">
                    <el-button type="primary" @click.native="submit" :loading="loading">保存并继续</el-button>
                </el-form-item>
            </el-form>
    </section>
</template>

<script>
    import util from '../../common/js/util'

    import { addCampaign , editCampaign } from '../../api/api';


    export default {
        data() {
            return {
                
                filters: {
                    title: ''
                },

                loading: false,


                formRules: {
                    title: [
                        { required: true, message: '请输入推广计划名称', trigger: 'blur' }
                    ]
                },

                addOrEdit: true,//新增界面是否显示

                //新增界面数据
                addForm: {
                    id:'',
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
                }

            }
        },

        methods: {


            //新增
            submit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            if (this.addOrEdit){
                                this.add();
                            } else {
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
                addCampaign(para).then((res) => {
                            this.loading = false;
                                
                            let {code,msg} = res.data;
                            if (code!=200){
                                this.$message({
                                    message: msg,
                                    type: 'error'
                                });
                            }else{

                                    this.$refs['addForm'].resetFields();
                                    this.$router.push({path:'/campaignList'})

                            }

                        });
                } ,              

            edit() {

                this.loading = true;                           
                let para = Object.assign({}, this.addForm);
                editCampaign(para).then((res) => {
                            this.loading = false;
                                
                            let {code,msg} = res.data;
                            if (code!=200){
                                this.$message({
                                    message: msg,
                                    type: 'error'
                                });
                            }else{

                                    this.$refs['addForm'].resetFields();
                                    this.$router.push({path:'/campaignList'})

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