# project-v2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 接口地址
地址：[https://www.showdoc.com.cn/jinducasey/8321036098744323]
密码：jinduVIP
登录用户名和密码符合校验和规则即可(用户名:admin,密码1qaz!QAZ)

### 资源
分数地图资源:[http://192.144.199.210:8080/editor/index.html?chart_id=7Ph0yZtNoJ1JhGDl]

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Nginx部署
**启动之前最好先检查配置文件,每次修改后也要验证**
打开cmd `cd C:\Tool\nginx-1.16.1\` 输入 `nginx -t -c C:\Tool\nginx-1.16.1\conf\nginx.conf`

```
设置监听端口号 8080 

# nginx.conf
location / {
    root   C:\Users\17542\Desktop\project-v2\dist;
    index  index.html index.htm;
    try_files $uri $uri/ @router; # 解决页面刷新404问题  分号不要少,验证失败 
}

location @router {
    rewrite ^.*$ /index.html last; # Vue项目路由不是真实存在的
}
```

**这里一直 失败 报错 500 `error.log：could not find named location "@router"`**