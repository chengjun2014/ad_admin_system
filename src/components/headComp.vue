<template>

    <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="javascript:;" @click="miniMenu"><i class="fa fa-bars"></i> </a>
            </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
                    <span class="m-r-sm text-muted welcome-message" data-i18n="head.welcome" > {{name}}</span>
                </li>
                 <li>
                    <span class="m-r-sm text-muted welcome-message" >{{name}}</span>
                </li> 
                <li @click="changeLang" class="lang-tab" :class="{'text-info': lang == 'en'}" lang="EN">EN</li>
                <li @click="changeLang" class="lang-tab" :class="{'text-info': lang == 'cn'}" lang="CN">中文</li>
                <li>
                    <a onclick="sessionStorage.removeItem('user')" href="#/login">
                        <i class="fa fa-sign-out" data-i18n="head.logout" ></i> 
                    </a>
                </li>
            </ul>
        </nav>
        <div class="hide" id="completeInfo" style="background: #fff8e7; padding: 6px 20px; color:#e43b4d;">
            <span data-i18n="head.zizhi_buquan"></span>
            <a href="#/custInfo" class="link" data-i18n="head.account_center">  </a>
        </div>    
    </div>
</template>

<script>
    import util from "../common/js/util"
    export default {
        data() {
            return {
                name: util.getCustName(),
                lang: localStorage.getItem("language")
            }
        },
        methods: {
            changeLang: function(ev) {
                var lang = ev.target.getAttribute('lang').toLowerCase();

                this.lang = lang;
                localStorage.setItem("language", lang);
                util.setLanguage(lang);
            },
            miniMenu: function() {
                $("body").toggleClass('mini-navbar');
            }
        },
        mounted() {
            if (!util.getCustStatus()) {
                $("#completeInfo").removeClass('hide');
            }
        }
    }
</script>

<style scoped>
    .lang-tab {
        cursor: pointer;
        padding: 20px 10px;
    }
</style>

