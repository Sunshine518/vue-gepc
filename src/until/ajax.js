import CryptoJS from 'crypto-js'

export default {
    // 登录密码解密
    AESEncrypt (data,key) {
        let AES_KEY = CryptoJS.enc.Utf8.parse(key);
        let sendData = CryptoJS.enc.Utf8.parse(data);
        let encrypted = CryptoJS.AES.encrypt(sendData, AES_KEY,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});
        return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    },

    /**
     * 查询参数对象属性添加a=1&b=2 ==>search.a=1&search.b=2
     */
    formatParams(obj){
        let params= {}
        for (let [key,value] of Object.entries(obj)){
             if(value){
                 params[`search.${key}`]=value
             }
        }
        return params
    }
    
}