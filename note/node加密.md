const crytpo = require("crytpo");
###### md5 是开发中经常使用的算法之一，官方称为摘要算法，具有以下几个特点：
`不可逆；
不管加密的内容多长，最后输出的结果长度都是相等的；
内容不同输出的结果完全不同，内容相同输出的结果完全相同。
由于相同的输入经过 md5 加密后返回的结果完全相同，所以破解时通过 “撞库” 进行暴力破解，当连续被 md5 加密 3 次以上时就很难被破解了，所以使用 md5 一般会进行多次加密。`

let md5 = crytpo.createHash("md5"); // 创建 md5
let md5Sum = md5.update("hello"); // update 加密
let result = md5Sum.digest(); // 获取加密后结果
digest 方法参数用于指定加密后的返回值的格式，不传参默认返回加密后的 Buffer，常用的参数有 hex 和 Base64，hex 代表十六进制，加密后长度为 32，Base64 的结果长度为 24，以 == 结尾。
update 方法的返回值就是 this，即当前实例，所以支持链式调用，较长的信息也可以多次调用 update 方法进行分段加密，调用 digest 方法同样会返回整个加密后的值。
let result = crypto.createHash("md5").update("he").update("llo").digest("hex");
######Hmac 算法
`mac 算法又称加盐算法，是将哈希算法与一个密钥结合在一起，用来阻止对签名完整性的破坏，同样具备 md5 加密的几个特点。`