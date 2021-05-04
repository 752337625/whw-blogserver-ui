import Requert from "@/api/http.js";
const requert = new Requert();

const Register = {
  registerServer(url = "", params = {}, headers = {}) {
    return requert.POST(url, params, headers);
  }
};
export default Register;
