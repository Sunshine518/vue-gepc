module.exports = {
    //axios域代理，解决axios跨域问题
    baseUrl: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://47.110.167.38/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                }
            }
        }
    }
}