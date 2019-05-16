# vueblog

> about myself

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目目录说明

components:存放公用组件
pages:存放项目主体页面
static:存放第三方插件，三方引入的代码，很少改动的，不必每次打包的


src目录结构
|── App.vue                         // APP入口文件
├── api                             // 暂时没有
│   └── index.js                    // 接口调用工具
├── components                      // 组件文件夹，目前为空
├── config                          // 暂时没有
│   └── index.js                    // 项目配置文件
├── frame                           // 暂时没有
│   └── frame.vue                   // 默认子路由文件
├── main.js                         // 项目配置文件
├── pages                           // 我们的页面组件文件夹
│   └── index.vue                   // 项目页面
├── router                          // 路由配置文件夹
│   └── index.js                    // 路由配置文件
├── style                           // 后期存放less文件
│   ├── base                        // 基础样式存放目录
│   │   ├── _base.less          // 基础样式文件
│   │   ├── _color.less     // 项目颜色配置变量文件
│   │   ├── _mixin.less     // less 混入文件
│   │   └── _reset.less     // 浏览器初始化文件
│   ├── less                        // 页面样式文件夹
│   │   ├── _content.less       // 内容页面样式文件
│   │   └── _index.less     // 列表样式文件
│   └── style.less              // 主样式文件
└── utils                           // 常用工具文件夹
    └── index.js                    // 常用工具文件
