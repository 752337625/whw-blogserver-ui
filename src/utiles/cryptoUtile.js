// eslint-disable-next-line no-unused-vars
let cryptoUtile;
try {
  cryptoUtile = require("crypto");
} catch (err) {
  console.log("不支持 crypto");
}

class cryptoClass {
  cryptoClass() {}
  /**
   * 所有加密算法
   */
  getCiphersMethod() {
    let cipher = cryptoUtile.getCiphers();
    console.log(cipher);
  }
  /**
   * 所有散列算法
   */
  getHashesMethod() {
    let hashes = cryptoUtile.getHashes();
    console.log(hashes);
  }
  /**
   * md5 加密 —— 返回 Buffer
   * @param password
   * @returns {Buffer}
   */
  getMd5Buffer(password = "") {
    let flag =checkAngument(password)
    if(flag)throw new Error(`参数不能为空且为字符串`);
    if (!password.trim()) throw new Error(`参数不能为空`);
    let md5 = cryptoUtile.createHash("md5");
    let md5Sum = md5.update(password); // update 加密
    let result = md5Sum.digest(); // 获取加密后结果
    return result;
  }

  /**
   * md5 加密 —— 返回 Hex
   * @param password
   * @returns {string}
   */
  getMd5Hex(password = "") {
    let flag =checkAngument(password)
    if(flag)throw new Error(`参数不能为空且为字符串`);
    if (!password.trim()) throw new Error(`参数不能为空`);
    let md5 = cryptoUtile.createHash("md5");
    let md5Sum = md5.update(password);
    let result = md5Sum.digest("hex");
    return result;
  }

  /**
   * md5 加密 —— 返回 Base64
   * @param password
   * @returns {string}
   */
  getMd5Base64(password = "") {
    let flag =checkAngument(password)
    if(flag)throw new Error(`参数不能为空且为字符串`);
    if (!password.trim()) throw new Error(`参数不能为空且为字符串`);
    let md5 = cryptoUtile.createHash("md5");
    let md5Sum = md5.update(password);
    let result = md5Sum.digest("Base64");
    return result;
  }
  /**
   * Hmac 加密 —— 返回 Base64
   * @param password
   * @param salt
   * @returns {string}
   */
  getHmacBase64(password = "", salt = "") {
    let flag =checkAngument(password,salt)
    if(flag)throw new Error(`参数不能为空且为字符串`);
    if (!password.trim()) throw new Error(`参数不能为空且为字符串`);
    let md5 = cryptoUtile.createHash("sha1", salt);
    let md5Sum = md5.update(password);
    let result = md5Sum.digest("Base64");
    return result;
  }
  /**
   * Hmac 加密 —— 返回 Base64
   * @param password
   * @param salt
   * @returns {string}
   */
  getHmacHex(password = "", salt = "") {
    let flag =checkAngument(password,salt)
    if(flag)throw new Error(`参数不能为空且为字符串`);
    let md5 = cryptoUtile.createHash("sha1", salt);
    let md5Sum = md5.update(password);
    let result = md5Sum.digest("hex");
    return result;
  }
  /**
   * Hmac 加密 —— 返回 Base64
   * @param password
   * @param salt
   * @returns {string}
   */
  getHmacBuffer(password = "", salt = "") {
    let flag =checkAngument(password,salt)
    if(flag)throw new Error(`参数不能为空且为字符串`);
    let md5 = cryptoUtile.createHash("sha1", salt);
    let md5Sum = md5.update(password);
    let result = md5Sum.digest();
    return result;
  }
}
function checkAngument(){
  let arr = [...arguments]
  let flag = arr.some(i=>typeof i !=='string'||!i.trim())
  return flag
}
export default cryptoClass;
