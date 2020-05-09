(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{444:function(s,t,a){"use strict";a.r(t);var n=a(34),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-接管负载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-接管负载"}},[s._v("#")]),s._v(" Nginx 接管负载")]),s._v(" "),a("p",[s._v("这种是基于 Nginx 的 upstream 实现的负载分流, 在高性能的 VPS 的加持之下能够有效提高 Websock 的并发请求.")]),s._v(" "),a("p",[s._v("这里启用两个监听服务(如果 VPS 性能足够好可以设置更多)")]),s._v(" "),a("ul",[a("li",[s._v("127.0.0.1:10000  加载配置文件 config_slave_01.json")]),s._v(" "),a("li",[s._v("127.0.0.1:10001  加载配置文件 config_slave_02.json")])]),s._v(" "),a("h2",{attrs:{id:"修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),a("p",[s._v("需要分出多个配置文件来进行加载")]),s._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo mv /etc/v2ray/config.json /etc/v2ray/config_slave_01.json\n$ sudo cp /etc/v2ray/config_slave_01.json /etc/v2ray/config_slave_02.json\n")])])]),a("p",[s._v("负载的配置文件只需要修改端口和日志文件目录:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//文件区分为 xxx_slave_01, 另外配置下一个 v2ray 命令 xxx_slave_02, 依此类推分开查看日志.")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"access"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/v2ray/access_slave_01.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/v2ray/error_slave_01.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"loglevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"warning"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//slave_01监听端口为10000, slave_02监听端口为10001, 不能同时占用同一个端口号, 以此类推.")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//只监听 127.0.0.1, 避免除本机外的机器探测到开放了 10000 端口.")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ws"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"wsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ray"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"freedom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"修改系统服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改系统服务"}},[s._v("#")]),s._v(" 修改系统服务")]),s._v(" "),a("p",[s._v("配置文件后, 就要把最开始 Systemctl 服务脚本修改成两个服务:")]),s._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo mv /etc/systemd/system/v2ray.service /etc/systemd/system/v2ray-slave-01.service\n$ sudo cp /etc/systemd/system/v2ray-slave-01.service /etc/systemd/system/v2ray-slave-02.service\n")])])]),a("p",[s._v("打开系统服务文件, 找到以下类似配置行并修改:")]),s._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 修改默认加载的配置文件\nExecStart=/usr/bin/v2ray/v2ray -config /etc/v2ray/config_slave_01.json\n# 还有另外一个文件修改\nExecStart=/usr/bin/v2ray/v2ray -config /etc/v2ray/config_slave_02.json\n")])])]),a("p",[s._v("完成之后刷新 systemctl 的服务信息并且启动:")]),s._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo systemctl daemon-reload\n$ sudo systemctl start v2ray-slave-01.service\n$ sudo systemctl start v2ray-slave-02.service\n\n# 如果启动没问题记得设置开机启动\n$ sudo systemctl enable v2ray-slave-02.service\n$ sudo systemctl enable v2ray-slave-02.service\n")])])]),a("h2",{attrs:{id:"修改-nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-nginx-配置"}},[s._v("#")]),s._v(" 修改 Nginx 配置")]),s._v(" "),a("p",[s._v("打开 Nginx 配置监听文件修改:")]),s._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('upstream v2ray {\n    # 转发数据服务\n    # weight 代表了请求连接会随机分配到服务器权重,权重值越高越容易被命中\n    hash $remote_addr consistent;\n    server 127.0.0.1:10000 weight=3 max_fails=3 fail_timeout=30s;\n    server 127.0.0.1:10001 weight=3 max_fails=3 fail_timeout=30s;\n}\n\nserver {\n  listen 443 ssl;\n  listen [::]:443 ssl;\n  \n  ssl_certificate       /etc/v2ray/v2ray.crt;\n  ssl_certificate_key   /etc/v2ray/v2ray.key;\n  ssl_session_timeout 1d;\n  ssl_session_cache shared:MozSSL:10m;\n  ssl_session_tickets off;\n  \n  ssl_protocols         TLSv1.2 TLSv1.3;\n  ssl_ciphers           ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;\n  ssl_prefer_server_ciphers off;\n  \n  server_name           mydomain.me;\n  location /ray { # 与 V2Ray 配置中的 path 保持一致\n    if ($http_upgrade != "websocket") { # WebSocket协商失败时返回404\n        return 404;\n    }\n    proxy_redirect off;\n    \n    # 注意这里直接将请求以 http 协议转发到名为 v2ray 的 upstream\n    proxy_pass http://v2ray;\n    \n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "upgrade";\n    proxy_set_header Host $host;\n    # Show real IP in v2ray access.log\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n  }\n}\n')])])]),a("p",[s._v("设置完成直接重启 Nginx 即可, 这样在大并发请求的时候 Nginx 会按照权重转发数据到不同的 v2ray 进程.")])])}),[],!1,null,null,null);t.default=e.exports}}]);