var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';

function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) { s = '0' + s; }
    return s;
};

export default {
    getQueryStringByName: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {
        format: function(date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function($0) {
                switch ($0.charAt(0)) {
                    case 'y':
                        return padding(date.getFullYear(), $0.length);
                    case 'M':
                        return padding(date.getMonth() + 1, $0.length);
                    case 'd':
                        return padding(date.getDate(), $0.length);
                    case 'w':
                        return date.getDay() + 1;
                    case 'h':
                        return padding(date.getHours(), $0.length);
                    case 'm':
                        return padding(date.getMinutes(), $0.length);
                    case 's':
                        return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse: function(dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y':
                            _date.setFullYear(_int);
                            break;
                        case 'M':
                            _date.setMonth(_int - 1);
                            break;
                        case 'd':
                            _date.setDate(_int);
                            break;
                        case 'h':
                            _date.setHours(_int);
                            break;
                        case 'm':
                            _date.setMinutes(_int);
                            break;
                        case 's':
                            _date.setSeconds(_int);
                            break;
                    }
                }
                return _date;
            }
            return null;
        }

    },
    checkDate(sDate, eDate) {
        if (sDate == eDate) {
            var _sDate = sDate + ' 00:00:00';
            var _now = Math.round(new Date().getTime());
            var timestamp = Date.parse(new Date(_sDate));
            if (Math.abs(_now - timestamp) <= 2*86400000) {
                return 1;
            }
        }
        return 0;
    },
    getCustID() {
        let user = sessionStorage.getItem('user');
        user = JSON.parse(user);
        return user.cust_id;
    },
    getCustName() {
        let user = sessionStorage.getItem('user');
        user = JSON.parse(user);
        return user.name;
    },
    getAvarterUrl() {
        let user = sessionStorage.getItem('user');
        user = JSON.parse(user);
        return user.avarter;
    },
    getCustStatus() {
        let user = sessionStorage.getItem('user');
        user = JSON.parse(user);
        return user.custstatus === 21;
    },
    setLanguage(lang) {
        var _lang = lang || localStorage.getItem("language") || 'en';

        $.i18n.init({
            resGetPath: '../../static/locales/' + _lang + '.json',
            load: 'unspecific',
            fallbackLng: false,
            lng: _lang
        }, function(t) {
            $('#app').i18n();
        });
    },
    getLanguage() {
        return localStorage.getItem("language") || 'en';
    }
};