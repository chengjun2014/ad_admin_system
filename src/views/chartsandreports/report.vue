<template>
    <div class="ibox">
        <div class="ibox-title">
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#toutiao1" aria-controls="toutiao1" role="tab" data-toggle="tab">效果数据</a></li>
                <li role="presentation"><a href="#toutiao2" aria-controls="toutiao2" role="tab" data-toggle="tab">人群分析</a></li>
            </ul>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="input-daterange input-group datapicker pull-left" id="datepicker" style="width: 300px;margin-right: 8px; height: 36px;">
                        <input type="text" required="" v-model="addForm.start_date" class="input-sm form-control temp-input" id="start_date">
                        <span class="input-group-addon">to</span>
                        <input type="text" required="" v-model="addForm.end_date" class="input-sm form-control temp-input" id="end_date">
                    </div>
                    <el-select v-model="value">
                        <el-option v-for="item in timeOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" filterable placeholder="全部">
                        <el-option v-for="item in adList" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                    <el-button type="primary" v-on:click="getReportDetail" data-i18n="ad_list.query">查询</el-button>
                </div>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="toutiao1">
                        <div class="row">
                            <div class="col-lg-12">
                                <div id="chartLine" style="height:320px; width:100%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" role="tabpanel" id="toutiao2">
                        <div class="clearfix panel">
                            <div class="col-lg-6">
                                <h3>省级地域分布</h3>
                                <div id="china" style="height:400px; width:600px;"></div>
                            </div>
                            <div class="col-lg-6">
                                <h3>性别分布</h3>
                                <div id="gender" style="height:400px; width:600px;"></div>
                            </div>
                        </div>
                        <div class="clearfix panel">
                            <div class="col-lg-6">
                                <h3>年龄分布</h3>
                                <div id="age" style="height:400px; width:600px;"></div>
                            </div>
                            <div class="col-lg-6">
                                <h3>设备分布</h3>
                                <div id="os" style="height:400px; width:600px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ibox">
                    <div class="ibox-title">
                        <table class="table table-stripped">
                            <thead>
                                <tr>
                                    <th class="footable-visible footable-first-column footable-sortable" data-i18n="report.e1">时间</th>
                                    <th class="footable-visible footable-sortable" data-i18n="report.e2">推广计划</th>
                                    <th data-hide="phone" class="footable-visible footable-sortable" data-i18n="report.e3">曝光量</th>
                                    <th data-hide="phone" class="footable-visible footable-sortable" data-i18n="report.e4">url点击量</th>
                                    <th data-hide="phone" class="footable-visible footable-sortable" data-i18n="home_page.cpa2">page点击量</th>
                                    <th data-hide="phone,tablet" class="footable-visible footable-sortable" data-i18n="report.e6">花费</th>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import util from "../../common/js/util"
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import { getReport, adList, getDaysAllDim, getOneDayAllDim } from "../../api/api"

export default {
    data() {
        return {
            chartData: [],
            addForm: {
                start_date: '20171023',
                end_date: '20171103',
                cust_id: util.getCustID(),
                num_days: 5
            },
            timeOptions: [{
                value: 'cpa',
                label: 'cpa'
            }, {
                value: 'cost',
                label: 'cost'
            }, {
                value: 'click',
                label: 'click'
            }, {
                value: 'impression',
                label: 'impression'
            }],
            value: 'cost',
            value2: '',
            radio2: 3,
            adList: [],
            age_dim: [],
            age_cost: [],
            age_impression: [],
            age_click: [],
            area_dim: [],
            area_cost: [],
            area_impression: [],
            area_click: [],
            gender_dim: [],
            gender_cost: [],
            gender_impression: [],
            gender_click: [],
            os_dim: [],
            os_cost: [],
            os_impression: [],
            os_click: [],

        }
    },
    methods: {
        getReportDetail() {
            // let para = {'cust_id': util.getCustID()};
            if (this.value == '') {
            	this.$message('请先选择数据维度！');
            	return;
            }
            let para = Object.assign({}, this.addForm);
            getReport(para).then((res) => {
                let { code, msg } = res.data;
                if (code != 200) {
                    this.$message({ message: msg, type: 'error' })
                } else {
                    this.chartData = res.data.result;
                    console.log(res.data.result, 'res.data.result')
                    var xAxisData = [],
                        val3Data = [],
                        val4Data = [],
                        val6Data = [],
                        val7Data = [];

                    for (var i = 0; i < this.chartData.length; i++) {
                        var temp = this.chartData[i];
                        xAxisData.push(temp.thedate);
                        val3Data.push(temp.exposure);
                        val4Data.push(temp.consume);
                        val6Data.push(temp.page_click);
                        val7Data.push(temp.url_click);
                    }

                    var _this = this;
                    //基于准备好的dom，初始化echarts实例
                    this.chartLine = echarts.init(document.getElementById('chartLine'));

                    this.chartLine.setOption({
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            show: true,
                            data: ['Impressions', 'Cost', 'Page Clicks', "Url Clicks"],
                            selectedMode: "single",
                            top: 20,
                            selected: {
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
                                name: 'Impressions',
                                type: 'line',
                                data: val3Data
                            }, {
                                name: 'Cost',
                                type: 'line',
                                data: val4Data
                            },
                            {
                                name: 'Page Clicks',
                                type: 'line',
                                data: val6Data
                            }, {
                                name: 'Url Clicks',
                                type: 'line',
                                data: val7Data
                            }
                        ]
                    });
                }
            });

            // 
            if (this.addForm.start_date == this.addForm.end_date) {
                var obj = {
                    thedate: this.addForm.start_date,
                    cust_id: util.getCustID(),
                    adgroup_id: this.value2.length == 0 ? -1 : this.value2
                };

                getOneDayAllDim(obj).then((res) => {
                    let { code, msg } = res.data;
                    if (code != 200) {
                        this.$message({ message: msg, type: 'error' })
                    } else {
                        var result = res.data.result;
                        
                        this.formatDate(result.age_span, 'age');
                        this.formatDate(result.area, 'area');
                        this.formatDate(result.gender, 'gender');
                        this.formatDate(result.os, 'os');

                        this.drawChart(this.value);
                    }
                })
            } else {
                var obj = {
                    begin_date: this.addForm.start_date,
                    end_date: this.addForm.end_date,
                    cust_id: util.getCustID(),
                    adgroup_id: this.value2.length == 0 ? -1 : this.value2
                };

                getDaysAllDim(obj).then((res) => {
                    let { code, msg } = res.data;
                    if (code != 200) {
                        this.$message({ message: msg, type: 'error' })
                    } else {
                        var result = res.data.result;
                        
                        this.formatDate(result.age_span, 'age');
                        this.formatDate(result.area, 'area');
                        this.formatDate(result.gender, 'gender');
                        this.formatDate(result.os, 'os');

                        this.drawChart(this.value);
                    }
                })
            }
        },
        formatDate(result, str) {
            var me = this;

            me[str + "_dim"].splice(0, me[str + "_dim"].length);
            me[str + "_click"].splice(0, me[str + "_click"].length);
            me[str + "_cost"].splice(0, me[str + "_cost"].length);
            me[str + "_impression"].splice(0, me[str + "_impression"].length);
            
            result.forEach(function(i) {
                me[str + "_dim"].push(i.dim);
                me[str + "_click"].push(i.click);
                me[str + "_cost"].push(i.cost);
                me[str + "_impression"].push(i.impression);
            })
        },
        chart_gender(para) {
            var temp = [],
                me = this;

            this["gender_" + para].forEach(function(item, index) {
                temp.push({value: item, name: me.gender_dim[index]});
            });
            console.log(this["gender_" + para], 'chart_gender')
            this.gender.setOption({
                title : {
                    text: '性别分布',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: this.gender_dim
                },
                series : [
                    {
                        name: para,
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data: temp
                    }
                ]
            });
        },
        chart_os(para) {
            var temp = [],
                me = this;
            this["os_" + para].forEach(function(item, index) {
                temp.push({value: item, name: me.os_dim[index]});
            });
            this.os.setOption({
                title : {
                    text: 'os分布',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: this.os_dim
                },
                color: ['#61a0a8', '#d48265'],
                series : [
                    {
                        name: para,
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data: temp
                    }
                ]
            });
        },
        chart_age(para) {
            var temp = [],
                xAxis = [],
                me = this;
            var obj = {
                0: '0~18',
                1: '19~25',
                2: '26~35',
                3: '36~45',
                4: '46~55',
                5: '>55',
            }
            this["age_" + para].forEach(function(item, index) {
                temp.push(item);
                xAxis.push(obj[index]);
            });
            this.age.setOption({
                color: ['#3398DB'],
                title : {
                    text: '年龄分布',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {
                        type : 'shadow'
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : xAxis,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name: para,
                        type:'bar',
                        barWidth: '60%',
                        data: temp
                    }
                ]
            });
        },
        chart_map(para) {
        	var temp = [],
                me = this;
            var obj = [
                { name: '北京', value: Math.round(Math.random() * 1000) },
                { name: '天津', value: Math.round(Math.random() * 1000) },
                { name: '上海', value: Math.round(Math.random() * 1000) },
                { name: '重庆', value: Math.round(Math.random() * 1000) },
                { name: '河北', value: Math.round(Math.random() * 1000) },
                { name: '河南', value: Math.round(Math.random() * 1000) },
                { name: '云南', value: Math.round(Math.random() * 1000) },
                { name: '辽宁', value: Math.round(Math.random() * 1000) },
                { name: '黑龙江', value: Math.round(Math.random() * 1000) },
                { name: '湖南', value: Math.round(Math.random() * 1000) },
                { name: '安徽', value: Math.round(Math.random() * 1000) },
                { name: '山东', value: Math.round(Math.random() * 1000) },
                { name: '新疆', value: Math.round(Math.random() * 1000) },
                { name: '江苏', value: Math.round(Math.random() * 1000) },
                { name: '浙江', value: Math.round(Math.random() * 1000) },
                { name: '江西', value: Math.round(Math.random() * 1000) },
                { name: '湖北', value: Math.round(Math.random() * 1000) },
                { name: '广西', value: Math.round(Math.random() * 1000) },
                { name: '甘肃', value: Math.round(Math.random() * 1000) },
                { name: '山西', value: Math.round(Math.random() * 1000) },
                { name: '内蒙古', value: Math.round(Math.random() * 1000) },
                { name: '陕西', value: Math.round(Math.random() * 1000) },
                { name: '吉林', value: Math.round(Math.random() * 1000) },
                { name: '福建', value: Math.round(Math.random() * 1000) },
                { name: '贵州', value: Math.round(Math.random() * 1000) },
                { name: '广东', value: Math.round(Math.random() * 1000) },
                { name: '青海', value: Math.round(Math.random() * 1000) },
                { name: '西藏', value: Math.round(Math.random() * 1000) },
                { name: '四川', value: Math.round(Math.random() * 1000) },
                { name: '宁夏', value: Math.round(Math.random() * 1000) },
                { name: '海南', value: Math.round(Math.random() * 1000) },
                { name: '台湾', value: Math.round(Math.random() * 1000) },
                { name: '香港', value: Math.round(Math.random() * 1000) },
                { name: '澳门', value: Math.round(Math.random() * 1000) }
            ]
            this["area_" + para].forEach(function(item, index) {
                temp.push({value: item, name: obj[me.area_dim[index]]});
            });
        	this.china.setOption({

                tooltip: {
                    trigger: 'item'
                },
                // visualMap: {
                //     min: 0,
                //     max: 2500,
                //     left: 'left',
                //     top: 'bottom',
                //     text: ['高', '低'], // 文本，默认为数值文本
                //     calculable: true
                // },
                series: [{
                    name: para,
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    left: 40,
                    right: 40,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: obj
                }]
            });
        },
        changeTimeComp(type) {
            // type 1:表示只能选择一小时 0：表示都可以选择
            if (type) {
                this.timeOptions[0].disabled = this.timeOptions[1].disabled = false;
            } else {
                this.timeOptions[0].disabled = this.timeOptions[1].disabled = true;
            }
        },
        getAdList() {
            adList({ cust_id: util.getCustID() }).then((res) => {

                let { code, msg } = res.data;

                if (code != 200) {
                    this.$message({
                        message: msg,
                        type: 'error'
                    });
                } else {
                    this.adList = res.data.result;
                }
            });
        },
        drawChart(type) {
        	var _type = type || 'click';
        	this.chart_gender(_type);
            this.chart_age(_type);
            this.chart_os(_type);
            this.chart_map(_type);
        }
    },
    mounted: function() {
        util.setLanguage();

        //this.getReportDetail();

        var $start_date = $("#start_date"),
            $end_date = $("#end_date"),
            _this = this;
        $('.input-daterange').datepicker({
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            endDate: 'd',
            format: 'yyyymmdd'
        }).on('changeDate', function(ev) {
            var _date = ev.date,
                _target = ev.target;
            if (_target.id == 'start_date') {
                _this.addForm.start_date = _target.value;
                $end_date.datepicker('setStartDate', _date);
            } else {
                _this.addForm.end_date = _target.value;
                $start_date.datepicker('setEndDate', _date);
            }

            var _type = util.checkDate(_this.addForm.start_date, _this.addForm.end_date);
            _this.changeTimeComp(_type);
        });

        this.getAdList();
        this.china = echarts.init(document.getElementById('china'));
        this.gender = echarts.init(document.getElementById('gender'));
        this.os = echarts.init(document.getElementById('os'));
        this.age = echarts.init(document.getElementById('age'));
    }
}
</script>
<style>
.main-content {
    margin-top: 15px;
    height: 320px
}

;
.panel1 {
    margin-left: 20px;
    width: 200px;
    height: 300px;
    background-color: white;
    float: left
}

.temp-input {
    height: 36px;
}
</style>