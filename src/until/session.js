const LOGIN_COOKIE_NAME = 'cf81sessionid'


export default {

    setCookie (name, value, expire) {
        let date = new Date()
        date.setDate(date.getDate() + expire)
        document.cookie = name + '=' + escape(value) +
            (expire ? ';expires=' + date.toGMTString() : '')+';path=/'
    },

    getCookie (name) {
        let start, end
        if (document.cookie.length > 0) {
            start = document.cookie.indexOf(name + '=')
            if (start !== -1) {
                start = start + name.length + 1
                end = document.cookie.indexOf(';', start)
                if (end === -1) {
                    end = document.cookie.length
                }
                return unescape(document.cookie.substring(start, end))
            }
        }
        return ''
    },

    //上传文件时判断用户cookie是否存在
    isAuthenticated () {
        return this.getCookie(LOGIN_COOKIE_NAME)
    },

    //用户登录时保存cookie
    authenticateSuccess (token) {
        this.setCookie(LOGIN_COOKIE_NAME, token)
    },

    logout () {
        this.setCookie(LOGIN_COOKIE_NAME, '', 0)
    }
}