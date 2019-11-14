import CryptoJS from 'crypto-js'

export default {
    // 登录密码解密
    AESEncrypt (data,key) {
        let AES_KEY = CryptoJS.enc.Utf8.parse(key);
        let sendData = CryptoJS.enc.Utf8.parse(data);
        let encrypted = CryptoJS.AES.encrypt(sendData, AES_KEY,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});
        return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    }
}