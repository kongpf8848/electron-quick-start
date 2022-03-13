# [electron-quick-start](https://git.yixindev.net/kongpf/electron-quick-start)
基于electron官方demo [electron-quick-start](https://github.com/electron/electron-quick-start)修改而来
## 添加内容
- 添加打包脚本
- 添加sqlite3代码
- 添加主进程和渲染进程通信代码
- 添加C++代码

## 运行
```bash
# Install dependencies
npm install
# Run the app
npm start
```
## 打包
```bash
yarn dist-mac-arm64    //打包macOS M1芯片版本
yarn dist-mac-x64      //打包macOS x64版本
yarn dist-win32        //打包Windows 32位版本
yarn dist-win64        //打包Windows 64位版本
```
## 编译安装sqlite3(macOS Apple M1芯片)
```bash
cd electron-quick-start
npm install sqlite3 --ignore-scripts
cd node_modules/sqlite3

export PATH=/Library/Developer/CommandLineTools/usr/bin:$PATH
node-gyp rebuild --target=16.0.6 --arch=arm64 --dist-url=https://electronjs.org/headers --module_name=node_sqlite3 --module_path=./lib/binding/napi-v3-darwin-arm64
```

## 设置淘宝源
```bash
npm config set registry https://registry.npm.taobao.org/
```

# 参考资源

[npm](https://www.npmjs.com)

[electron](https://www.electronjs.org)

[electron-github](https://github.com/electron)

[electron-builder](https://github.com/electron-userland/electron-builder)

[node-sqlite3](https://github.com/mapbox/node-sqlite3)

[using-native-node-modules](https://www.electronjs.org/docs/latest/tutorial/using-native-node-modules)

[node-addon-examples](https://github.com/nodejs/node-addon-examples)
