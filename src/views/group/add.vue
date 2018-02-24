<template>
    <section>

                <el-form :model="addForm" label-width="80px" :rules="formRules" ref="addForm">
                    <el-row> <label>推广计划</label>
                    <el-select v-model="addForm.campaign_id" placeholder="请选择" @visible-change="campaignSelect">
                        <el-option
                                v-for="item in campaigns"

                                :label="item.title"
                                :value="item.id">
                        </el-option>
                    </el-select>
                    </el-row>
                </el-form-item>
                <el-form-item label="计划类型">
                    <el-radio-group v-model="addForm.type">
                       <el-row> <el-radio class="radio" :label="1">标准展示推广 - 在PC媒体流量中站上投放的展示推广</el-radio></el-row>
                       <el-row>  <el-radio class="radio" :label="2">移动展示推广 - 在移动媒体流量中站上投放的展示推广</el-radio></el-row>
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

                <el-form-item label="推广组名称" prop="title">
                    <el-input v-model="addForm.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="流量来源" prop="liuliang">
                    <input type="checkbox" id="jack" value="阿里" v-model="flow">
                    <label for="jack">阿里</label>
                    <input type="checkbox" id="john" value="腾讯" v-model="flow">
                    <label for="john">腾讯</label>
                    <input type="checkbox" id="mike" value="百度" v-model="flow">
                    <label for="mike">百度</label>
                </el-form-item>
                <el-form-item label="投放渠道" prop="qudao">
                    <input type="radio" id="one" value="One" v-model="picked">
                    <label for="one">推广位</label>
                    <input type="radio" id="two" value="Two" v-model="picked">
                    <label for="two">全网智能投放</label>
                    
                </el-form-item>
                <el-form-item label="推广位样式" prop="style">
                    <input type="checkbox" id="jack" value="阿里" v-model="checkedNames">
                    <label for="jack">浮窗，悬停</label>
                    <input type="checkbox" id="john" value="腾讯" v-model="checkedNames">
                    <label for="john">折叠</label>
                    <input type="checkbox" id="mike" value="百度" v-model="checkedNames">
                    <label for="mike">固定</label>
                </el-form-item>   
                <el-form-item label="定向人群" prop="people">
                    <input type="checkbox" id="jack" value="阿里" v-model="tag">
                    <label for="jack">地域，人群</label>
                </el-form-item>   
                <el-form-item label="关键词" prop="keyword">
                    <el-input v-model="addForm.keyword" auto-complete="off"></el-input>
                </el-form-item>   
                <el-form-item label="投放频次上限" prop="number">
                    <el-input v-model="addForm.number" auto-complete="off"></el-input>
                </el-form-item> 
                <el-form-item label="出价类型" prop="pri_style">
                    <input type="radio" id="three" value="One" v-model="pricetype">
                    <label for="one">CPC</label>
                    <input type="radio" id="four" value="Two" v-model="pricetype">
                    <label for="two">CPM</label>
                </el-form-item>  

                <el-form-item label="出价" prop="price">
                    <el-input v-model="addForm.bid_price" auto-complete="off"></el-input>
                </el-form-item>                                     

                <el-form-item label="是否启动" prop="online_status">
                    <el-switch
                            v-model="addForm.online_status"
                            on-text=""
                            off-text="">
                    </el-switch>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">

                <el-button type="primary" @click.native="submit" :loading="loading">保存并继续</el-button>
            </div>

    </section>
</template>

<script>
    import util from '../../common/js/util'

    import { addAdgroup, editAdgroup, campaignSelect } from '../../api/api';


    export default {
        data() {
            return {
                picked: '',
                pricetype: '',
                checkedNames: [],
                flows: [],
                tag: [],
                filters: {
                    title: ''
                },

                loading: false,

                campaigns:[],
                formRules: {
                    title: [
                        { required: true, message: '请输入推广组名称', trigger: 'blur' }
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


            //新增
            submit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                                this.edit();
                    });
                }
            });
            },

            edit() {

                this.loading = true;                           
                let para = Object.assign({}, this.addForm);
                editAdgroup(para).then((res) => {
                            this.loading = false;
                                
                            let {code,msg} = res.data;
                            if (code!=200){
                                this.$message({
                                    message: msg,
                                    type: 'error'
                                });
                            }else{

                                    this.$refs['addForm'].resetFields();
                                    this.$router.push({path:'/adgroupList'})

                            }

                        });

                }
        },
        mounted(){
            console.log('mounted')
            console.log(this.$route.query);

            if (this.$route.params.active==='edit') {
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