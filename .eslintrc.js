// https://eslint.org/docs/user-guide/configuring

module.exports = {

  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,

  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parser: 'babel-eslint',

  //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    // 设置 script(默认) 或 module，如果代码是在ECMASCRIPT中的模块
    sourceType: 'module'
  },

  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
  extends: 'standard',

  // 此项是用来提供插件的，插件名称省略了eslint-plugin，下面这个配置是用来规范html的
  plugins: [
    'html'
  ],
  /* 
   下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
    主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
    "off" -> 0 关闭规则
    "warn" -> 1 开启警告规则
    "error" -> 2 开启错误规则
  */
  rules: {
    // allow async-await
    'generator-star-spacing': 'off', // 是否允许方法之间加星号
    'indent': [2], // 缩进风格
    // "semi": [0, "always"], // 语句不强制分号结尾
    // 控制逗号前后的空格 
    // "comma-spacing": [2, { "before": false, "after": true }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 文件末尾强制换行  
    "eol-last": 0,
    // 使用 === 替代 ==  
    "eqeqeq": [2, "allow-null"],
    "no-alert": 1, // 使用alert confirm prompt 警告
    "no-console": 1, // 警告使用console
    "no-dupe-args": 2, // 函数参数不能重复
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-empty-label": 0, // 使用空label
    "no-eq-null": 2,  // 禁止对null使用==或!=运算符
    "no-multi-spaces": 1, // 不能用多余的空格
    // "no-undef": 0, // 允许有未定义的变量
    "no-use-before-define": 2, // 未定义前不能使用
    // 可以在有更简单的可替代的表达式时使用三元操作符
    "no-unneeded-ternary": 0,
    // "no-new-func": 0, // 允许使用new Function
    // "no-new-object": 0, // 允许使用new Object()
    // "no-new-wrappers": 0, // 允许使用new创建包装实例
    // "no-return-assign": 0, // 允许return 语句中有赋值表达式
    "default-case": 2, //switch语句最后必须有default
    // "func-names": 0, // 函数表达式必须有名字
  }
}
