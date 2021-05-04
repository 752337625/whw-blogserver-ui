import Requert from "@/api/http.js";
const requert = new Requert();
const Login = {
  loginServer(url = "", params = {}, headers = {}) {
    return requert.GET(url, params, headers);
  }
};
export default Login;
