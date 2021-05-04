



function conversionURL(url=''){
  if(typeof url !=='string'&&!url) throw new Error('必须输入字符串');
  return new URL(url)
}

/**
 * URL.href：返回整个 URL
 * URL.protocol：返回协议，以冒号:结尾
 * URL.hostname：返回域名
 * URL.host：返回域名与端口，包含:号，默认的80和443端口会省略
 * URL.port：返回端口
 * URL.origin：返回协议、域名和端口
 * URL.pathname：返回路径，以斜杠/开头
 * URL.search：返回查询字符串，以问号?开头
 * URL.searchParams：返回一个URLSearchParams实例，该属性是Location对象没有的
 * URL.hash：返回片段识别符，以井号#开头
 * URL.password：返回域名前面的密码
 * URL.username：返回域名前面的用户名
 * @param url
 * @param params
 * @returns {*}
 */
export function getURLParams(url=document.location.href,params='href'){
  let i = conversionURL(url)
  return i[params]
}

/**
 * URLSearchParams 对象
 * URLSearchParams对象是浏览器的原生对象，用来构造、解析和处理 URL 的查询字符串（即 URL 问号后面的部分）。
 * @param urlSearch
 * @returns {URLSearchParams}
 */
function conversionURLSearchParams(urlSearch=''){
  return new URLSearchParams(urlSearch)
}

/**
 * URLSearchParams.toString:方法返回实例的字符串形式。
 * URLSearchParams.append:方法用来追加一个查询参数。它接受两个参数，第一个为键名，第二个为键值，没有返回值。
 * URLSearchParams.delete:方法用来删除指定的查询参数。它接受键名作为参数。
 * URLSearchParams.has:方法返回一个布尔值，表示查询字符串是否包含指定的键名。
 * URLSearchParams.set:方法用来设置查询字符串的键值。
 * URLSearchParams.get:方法用来读取查询字符串里面的指定键。它接受键名作为参数。如果指定的键名不存在，返回值是null。
 * URLSearchParams.getAll:方法返回一个数组，成员是指定键的所有键值。它接受键名作为参数。如果指定的键名不存在，返回值是[]。
 * URLSearchParams.sort:方法对查询字符串里面的键进行排序，规则是按照 Unicode 码点从小到大排列。
 * URLSearchParams.keys、URLSearchParams.values，URLSearchParams.entries：这三个方法都返回一个遍历器对象，供for...of循环遍历。它们的区别在于，keys方法返回的是键名的遍历器，values方法返回的是键值的遍历器，entries返回的是键值对的遍历器。
 * @param url
 * @param params
 * @returns {*}
 */
export function getURLSearchParams(url=document.location.href,params='toString'){
  let search = conversionURL(url).search
  let i =conversionURLSearchParams(search)
  return i[params]

}
