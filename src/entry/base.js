class Base {
  constructor(createTime, modifyTime) {
    this.createTime = createTime;
    this.modifyTime = modifyTime;
  }
  setCreateTime(createTime) {
    this.createTime = createTime;
  }
  getCreateTime() {
    return this.createTime;
  }
  setModifyTime(modifyTime) {
    this.modifyTime = modifyTime;
  }
  getModifyTime() {
    return this.modifyTime;
  }
  toString() {
    return `创建时间为${this.createTime},更新时间为${this.modifyTime}`;
  }
}

export default Base;
