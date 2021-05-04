import axios from "axios";
import QS from "qs";
let axiosCancelArr = [];
//API 白名单
let whiteList = process.env.VUE_APP_WHITE_API_LIST || [];
const server = axios.create({
  baseURL: process.env.VUE_APP_PUBLIC_PATH,
  timeout: 3000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default
  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: "json" // default
});
server.interceptors.request.use(
  config => {
    //const apiInterface = new URL(config.url);
    let flag = whiteList.includes(config.url); // true
    if (!flag) {
      config.cancelToken = new axios.CancelToken(function(cancel) {
        axiosCancelArr.push({url: config.url, method: config.method, cancel });
      });
    }


    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
server.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
class Requert {
  /**
   * GET
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   * @param {Object} headers [请求头参数]
   **/
  GET(url = {}, params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      server
        .get(url, {
          params: { ...params },
          headers: { ...headers }
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   * POST
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   * @param {Object} headers [请求头参数]
   **/
  POST(url = "", params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      server
        .post(url, QS.stringify(params), {
          headers: { ...headers },
          transformRequest: [
            function(data) {
              // 对 data 进行任意转换处理
              return data;
            }
          ]
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   * GET+POST并用模式 ，注意：后台采用Bean类型和单独参数并用方式接受，这时采用GET+POST并用模式
   * @param {String} url [请求的url地址]
   * @param {getParams} params [请求时携带的参数【A=X&B=X...】]
   * @param {postParams} params [请求时携带的参数]
   * @param {Object} headers [请求头参数]
   **/
  GP(url = {}, getParams = "", postParams = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      server
        .post(`${url}?${getParams}`, QS.stringify(postParams), {
          headers: { ...headers },
          transformRequest: [
            function(data) {
              // 对 data 进行任意转换处理
              return data;
            }
          ]
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   * PUT
   * @param {String} url [请求的url地址]
   * @param {getParams} params [请求时携带的参数【A=X&B=X...】]
   * @param {postParams} params [请求时携带的参数]
   * @param {Object} headers [请求头参数]
   **/
  PUT(url = "", params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      server
        .put(url, QS.stringify(params), {
          headers: { ...headers },
          transformRequest: [
            function(data) {
              // 对 data 进行任意转换处理
              return data;
            }
          ]
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   * DELETE
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   * @param {Object} headers [请求头参数]
   **/
  DELETE(url = {}, params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      server
        .delete(url, {
          params: { ...params },
          headers: { ...headers }
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export default Requert;
export { axiosCancelArr };
