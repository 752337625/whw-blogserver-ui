/**
 * api出口,
 * 只需在api文件夹下添加对应的文件即可，此文件不需要再做修改
 */
const path = require("path");
const modulesFiles = require.context("@/api/Interface", true, /\.js$/); // 第二个argument为false，不处理子目录
/*
 * reduce((total, currentValue, currentIndex, arr)=>{}, initVal)
 * 参数： 初始值|计算结束后的返回值  当前元素
 */
const api = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath);
  // 提取出用 ‘/' 隔开的path的最后一部分,path.basename(p, [ext])。 p要处理的path,ext要过滤的字符
  const name = path.basename(modulePath, ".js");
  modules[name] = value.default;
  return modules;
}, {});

export default api;
