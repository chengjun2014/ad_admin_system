<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                    <a href="#/custInfo"><img id="img1" alt="image" class="img-circle" :src="avarter" />   {{name}}</a>
                    </div>
                    <div class="logo-element">
                        <img id="img2" alt="image" class="img-circle" :src="avarter" />
                    </div>
                </li>
                <li>
                    <a href="#/main"><img src="../../static/img/首页未选择.png" alt="" /> <span class="nav-label"  data-i18n="navi.home_page" ></span> </a>
                </li>
                <!--<li>-->
                <!--<a href="#/addcampaign"><img src="static/img/投放未选择.png" alt="" /> <span class="nav-label">自助投放</span><span class="fa arrow"></span></a>-->
                <!--<ul class="nav nav-second-level collapse">-->
                <!--&lt;!&ndash;<li><a href="#/createTask" data-i18n="test.name">新建投放</a></li>&ndash;&gt;-->
                <!--<li><a href="#/page4">广告列表</a></li>-->
                <!--&lt;!&ndash;<li><a href="#/creativeList">创意列表</a></li>&ndash;&gt;-->
                <!--</ul>-->
                <!--</li>-->
                <li>
                    <a href="javascript:;" @click="showOrHide(1, $event)"><img src="../../static/img/投放未选择.png" alt="" /> <span class="nav-label"  data-i18n="navi.smart_ad"></span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse" :class="{'in': show1}">
                        <!--<li><a href="#/createBlackBoxTask">新建投放</a></li>-->
                        <li><a href="#/addBlackTask"  data-i18n="navi.new_smart_ad"></a></li>
                        <li><a href="#/adgroupList" data-i18n="navi.campaign_list" ></a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" @click="showOrHide(2, $event)"><img src="../../static/img/账户中心未选择.png" alt="" /> <span class="nav-label" data-i18n="navi.account_centel" ></span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse" :class="{'in': show2}">
                        <li><a href="#/custInfo" data-i18n="navi.account_basic"></a></li>
                        <li><a href="#/account" data-i18n="navi.payment_detail"></a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" @click="showOrHide(3, $event)"><i class="fa fa-bar-chart-o"></i><span class="nav-label" data-i18n="navi.report_module" ></span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse" :class="{'in': show3}">
                        <li><a href="#/report" data-i18n="navi.ad_report"></a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" @click="showOrHide(4, $event)"><img src="../../static/img/工具未选择.png" alt="" /> <span class="nav-label" data-i18n="navi.tools" > </span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse" :class="{'in': show4}">
                        <li><a href="#/creative_tool"  data-i18n="navi.creative_tool" ></a></li>
                        <li><a href="#/luodipage_tool" data-i18n="navi.landingpage_tool"></a></li>
                        <li><a href="#/aderver_files_tool" data-i18n="navi.qualification_tool" ></a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

    import util from "../common/js/util"
    export default {
        data() {
            return {
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                name : util.getCustName(),
                avarter:util.getAvarterUrl()
            }
        },
        methods: {
            showOrHide: function(num, ev) {
                var _path = ev.path;
                for (var i = 0; i < _path.length; i++) {
                    if (_path[i].nodeName == 'LI') {
                        var _node = $(_path[i]);
                        if (_node.hasClass('active')) {
                            _node.removeClass('active');
                        } else {
                            _node.attr('class', 'active').siblings('.active').removeClass('active');
                        }

                        break;
                    }
                }
                if (num == 1) {
                    this.show1 = !this.show1;
                    this.show2 = false;
                    this.show3 = false;
                    this.show4 = false;
                } else if (num == 2) {
                    this.show1 = false;
                    this.show2 = !this.show2;
                    this.show3 = false;
                    this.show4 = false;
                } else if (num == 3) {
                    this.show1 = false;
                    this.show2 = false;
                    this.show3 = !this.show3;
                    this.show4 = false;
                } else if (num == 4) {
                    this.show1 = false;
                    this.show2 = false;
                    this.show3 = false;
                    this.show4 = !this.show4;
                }
            },
            modifyInfo(){
                this.$router.push('/custInfo')
            }
        },
        mounted() {
            $("body").css('backgroundColor', '#2f4050');
        }
    }
</script>

<style scoped>
    #img1 {
        width: 60px;
        height: 60px;
        margin: 15px 8px 8px 0;
    }
    #img2 {
        width: 40px;
        height: 40px;
    }
</style>