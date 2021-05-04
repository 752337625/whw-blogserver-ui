import Base from "@/entry/base";
class User extends Base {
  enabled = 1;
  locked = 1;
  clause = 1;
  ip = "未获取用户IP";
  description = "简短的描述自己一下";
  email=''
  telephone=''
  constructor(userName, password, salt, headPhoto,address="根据经纬度查询地址失败",) {
    super();
    this.userName = userName;
    this.password = password;
    this.salt = salt;
    this.headPhoto = headPhoto;
    this.address = address;
  }
}

export default User;
