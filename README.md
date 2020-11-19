# boll-pjOne

# 使用sass编写样式代码
## 准备工作 cnpm install sass-loader node-sass --save-dev

# 如果有报错 引入Sass后启动报错 TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string则是版本太高的问题 解决方案 把package.json里面node-sass和sass-loader版本改成 "node-sass":"^4.11.1","saaa-loader":"^7.3.0",删掉node_modules文件夹,重新执行cnpm install,完美解决