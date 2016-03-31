//require
/*
 *设置cookie cookie.set(name, value, expires, path, domain, secure)
 *获取cookie cookie.get(name)
 *删除cookie cookie.del(name, path, domain, secure)
 */
var cookie = {
    get: function(name) {
        var cookie = document.cookie;
        var cookieName = encodeURIComponent(name) + "=";
        var start = cookie.indexOf(cookieName);
        var value = null;
        if (start > -1)
        {
            var end = cookie.indexOf(";", start);
            if (end == -1)
                end = cookie.length;
            value = decodeURIComponent(cookie.substring(start + cookieName.length, end));
        }
        return value;
    },
    set: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires instanceof Date)
            cookieText += "; expires=" + expires.toGMTString();
        if (path)
            cookieText += "; path=" + path;
        if (domain)
            cookieText += "; domain=" + domain;
        if (secure)
            cookieText += "; secure";

        document.cookie = cookieText;
    },
    del: function(name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};


//exports
module.exports = cookie;