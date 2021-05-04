module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-multi-spaces': ["error", { ignoreEOLComments: true }],// 不允许出现多个空格
    'no-multiple-empty-lines': [2, {'max': 1, 'maxEOF': 2}], // 禁止出现多个空行
    "no-unexpected-multiline": 2,//避免多行表达式
    "brace-style": [1, "1tbs"],//大括号风格
  }
};
