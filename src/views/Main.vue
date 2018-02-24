<template>
    <section>
        <!--顶部-->
        <div class="white-bg row ibox dashboard-header">
            <div class="col-lg-3">
                <div class="widget style1 blue-bg">
                    <div class="row">
                        <div class="col-xs-4">
                            <img src="/static/img/1账户余额.png" />
                        </div>
                        <div class="col-xs-8 text-right">
                            <span data-i18n="home_page.account_remain">账号余额(元)</span>
                            <h2 class="font-bold">{{infoSum.balance}}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="widget style1 navy-bg">
                    <div class="row">
                        <div class="col-xs-4">
                            <img src="/static/img/2今日充值.png" />
                        </div>
                        <div class="col-xs-8 text-right">
                            <span data-i18n="home_page.today_add_money">今日充值(元)</span>
                            <h2 class="font-bold">{{infoSum.today_pay}}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="widget style1 lazur-bg">
                    <div class="row">
                        <div class="col-xs-4">
                            <img src="/static/img/3广告待审核.png" />
                        </div>
                        <div class="col-xs-8 text-right">
                            <span data-i18n="home_page.ad_tobe_audit">广告待审核数(个)</span>
                            <h2 class="font-bold">{{infoSum.invalid_crt}}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="widget style1 yellow-bg" style="background-color: #ed5565;">
                    <div class="row">
                        <div class="col-xs-4">
                            <img src="/static/img/4广告数量.png" />
                        </div>
                        <div class="col-xs-8 text-right">
                            <span data-i18n="home_page.ad_valid_count">广告有效数(个)</span>
                            <h2 class="font-bold">{{infoSum.valid_crt}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--投放情况-->
        <div class="row ibox">
            <div class="col-lg-12 ibox-title">
                <ul class="nav nav-pills pull-left" @click.capture="getCount">
                    <li role="presentation" class="active"><a>今天</a></li>
                    <li role="presentation"><a>昨天</a></li>
                    <li role="presentation"><a>过去七天</a></li>
                    <li role="presentation"><a>过去30天</a></li>
                </ul>
                <form class="form-inline pull-left">
                    <div class="form-group">
                        <label class="control-label">自定义</label>
                        <div class="input-daterange input-group datapicker" id="datepicker" style="width: 300px;margin-left: 8px; height: 36px;">
                            <input type="text" required="" v-model="addForm.start_date" class="input-sm form-control temp-input" id="start_date">
                            <span class="input-group-addon">to</span>
                            <input type="text" required="" v-model="addForm.end_date" class="input-sm form-control temp-input" id="end_date">
                        </div>
                    </div>
                    <div class="form-group">
                        <el-select v-model="value" filterable placeholder="请选择">
                            <el-option v-for="item in timeOptions" :key="item.value" :label="item.label" :disabled="item.disabled" :value="item.value">
                            </el-option>
                        </el-select>
                        <!-- 备选方案 也有问题暂时保留，别删 -->
                        <!-- <div class="dropdown input-group">
							<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Dropdown<span class="caret"></span></button>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
								<template v-for="item in timeOptions">
									<li :class="{disabled: item.disabled}"><a>{{item.label}}</a></li>
								</template>
							</ul>
						</div> -->
                    </div>
                </form>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox">
                        <div class="ibox-content">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="panel panel-warning">
                                        <div class="panel-heading" data-i18n="home_page.impress">曝光量(次)</div>
                                        <div class="panel-body">
                                            <h1>{{count.impressions}}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="panel panel-warning">
                                        <div class="panel-heading" data-i18n="home_page.click">点击量(次)</div>
                                        <div class="panel-body">
                                            <h1>{{ count.clicks }}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="panel panel-warning">
                                        <div class="panel-heading" data-i18n="home_page.cpa2">CPA</div>
                                        <div class="panel-body">
                                            <h1>{{ count.cpa }}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="panel panel-warning">
                                        <div class="panel-heading" data-i18n="home_page.cost">花费(元)</div>
                                        <div class="panel-body">
                                            <h1>{{ count.cost }}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <!-- <select>
                                <option>impression</option>
                                <option>click</option>
                                <option>cost</option>
                                <option>CPA</option>
                            </select> -->
                            <div id="chartLine" style="width:100%; height:400px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.temp-input {
    height: 36px;
}
</style>
<script>
import echarts from 'echarts'
import { getInfoSum, getReport, getTopRet, getOneDayEffect, getMultiDayEffect } from '../api/api'
import util from '../common/js/util'

export default {
    data() {
        return {
            chartData: [],
            infoSum: {
                "balance": '--',
                "today_pay": '--',
                "invalid_crt": '--',
                "valid_crt": '--',
            },
            count: {
                "clicks": '--',
                "cpa": '--',
                "impressions": '--',
                "cost": '--',
            },
            addForm: {
                start_date: '',
                end_date: '',
                cust_id: util.getCustID(),
                num_days: ''
            },
            days: 1,
            pclicklist: [],
            uclicklist: [],
            consumelist: [],
            exposurelist: [],
            timeOptions: [{
                value: '1',
                label: '15分钟',
                disabled: false
            }, {
                value: '2',
                label: '30分钟',
                disabled: false
            }, {
                value: '3',
                label: '1小时',
                disabled: false
            }],
            value: '30分钟',
            selectUl: null
        }
    },
    methods: {
        getReportDetail() {
            getReport(this.addForm).then((res) => {
                let { code, msg } = res.data;
                if (code != 200) {
                    this.$message({ message: msg, type: 'error' })
                } else {
                    this.chartData = res.data.result;
                    var xAxisData = [],
                        val1Data = [],
                        val2Data = [],
                        val3Data = [],
                        val4Data = [];
                    for (var i = 0; i < this.chartData.length; i++) {
                        var temp = this.chartData[i];
                        xAxisData.push(temp.thedate.substr(0,10));
                        val1Data.push(temp.exposure);
                        val2Data.push(temp.consume);
                        val3Data.push(temp.page_click);
                        val4Data.push(temp.url_click);
                    }

                    //基于准备好的dom，初始化echarts实例
                    this.chartLine = echarts.init(document.getElementById('chartLine'));

                    this.chartLine.setOption({
                        title: {
                            text: " "
                        },
                        color: ['#1c84c6', '#1ab394', '#23c6c8', '#f8ac59'],
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            show: true,
                            data: ['Impressions', 'Cost', 'Page Clicks', "Url Clicks"],
                            selectedMode: "single",
                            top: 'top',
                            left: 'left',
                            selected: {
                                'Impressions': true,
                                'Cost': false,
                                'Page Clicks': false,
                                'Url Clicks': false
                            }
                        },
                        grid: {
                            left: '0',
                            right: '0',
                            bottom: '0',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: xAxisData
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                                name: 'Impressions',
                                type: 'bar',
                                data: val1Data
                            }, {
                                name: 'Cost',
                                type: 'bar',
                                data: val2Data
                            },
                            {
                                name: 'Page Clicks',
                                type: 'bar',
                                data: val3Data
                            }, {
                                name: 'Url Clicks',
                                type: 'bar',
                                data: val4Data
                            }
                        ]
                    });
                }
            });
        },
        toggleStyle(tar) {
            var _node = $(tar).closest('li'),
                _index = _node.index(),
                temp = {
                    "0": 0,
                    "1": 1,
                    "2": 7,
                    "3": 30
                }

            $(tar).closest('li').addClass('active').siblings('.active').removeClass('active');
            return temp[_index];
        },
        changeTimeComp(type) {
            // type 1:表示只能选择一小时 0：表示都可以选择
            if (type) {
                this.timeOptions[0].disabled = this.timeOptions[1].disabled = false;
                this.value = '30分钟';
                $('li:eq(1)', this.selectUl).addClass('selected').siblings().removeClass('selected');
            } else {
                this.timeOptions[0].disabled = this.timeOptions[1].disabled = true;
                this.value = '1小时';
                $('li:eq(2)', this.selectUl).addClass('selected').siblings().removeClass('selected');
            }
        },
        getCount() {
            var _index = event && this.toggleStyle(event.target);
            if (!this.selectUl) {
                this.selectUl = $('.el-select-dropdown__list');
            }
            var obj = {};
            switch (_index) {
                case 0:
                case 1:
                    obj = {
                        "adgroup_id": -1,
                        "cust_id": util.getCustID(),
                        "thedate": util.formatDate.format(new Date(new Date().getTime() - _index * 86400000), "yyyy-MM-dd"),
                        "time_level": 3
                    };
                    getOneDayEffect(obj).then((res) => {
                        let { code, msg } = res.data;
                        console.log(res.data.result.result_sum, 'getOneDayEffect res');
                        if (code == 200) {
                            this.count = res.data.result.result_sum;
                        }
                    });
                    this.changeTimeComp(1);
                    break;
                case 7:
                case 30:
                    obj = {
                        "adgroup_id": -1,
                        "cust_id": util.getCustID(),
                        "begin_date": util.formatDate.format(new Date(new Date().getTime() - _index * 86400000), "yyyy-MM-dd"),
                        "end_date": util.formatDate.format(new Date(), "yyyy-MM-dd")
                    };
                    getMultiDayEffect(obj).then((res) => {
                        let { code, msg } = res.data;
                        console.log(res.data.result.result_sum, 'getMultiDayEffect res');
                        if (code == 200) {
                            this.count = res.data.result.result_sum;
                        }
                    });
                    this.changeTimeComp(0);
            }

        }
    },
    mounted: function() {
        let para = {
            cust_id: util.getCustID()
        };

        getInfoSum(para).then((res) => {
            console.log(res, 'res');
            this.infoSum = res.data.result;
        });

        this.getReportDetail();
        this.getCount(1);

        var _this = this,
            $start_date = $("#start_date"),
            $end_date = $("#end_date");
        $('.input-daterange').datepicker({
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            endDate: 'd',
            format: 'yyyy-mm-dd'
        }).on('changeDate', function(ev) {
            var _date = ev.date,
                _target = ev.target;
            if (_target.id == 'end_date') {
                _this.addForm.end_date = _target.value;
                $start_date.datepicker('setEndDate', _date);
            } else {
                _this.addForm.start_date = _target.value;
                $end_date.datepicker('setStartDate', _date);
            }

            var _type = util.checkDate($start_date.val(), $end_date.val());
            _this.changeTimeComp(_type);

        });
    }

}
</script>