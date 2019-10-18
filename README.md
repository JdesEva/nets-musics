# nets-musics

react + electron 构建 PC 版网易云音乐

> 本项目使用了 [Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)提供的网易云音乐 API 服务，感谢支持

> 为方便项目保存，在`git clone` API 服务后删除了原项目的 `.git` 文件将其同此项目一起整合。

> server 文件夹即为原来的 **NeteaseCloudMusicApi** 项目

## 重要说明

> 运行此项目需要安装`python2.7.x`环境，以及 Visual Studio C++ 环境（建议安装2017版本）。请自行安装环境。

### 安装

```bash
git clone https://github.com/JdesEva/nets-musics.git
```

#### 安装依赖 & 运行

- 安装依赖

```bash
yarn install
```

- 运行 electron

```bash
yarn dev
```

- 运行项目

```bash
yarn start
```

- 运行 API 服务

```bash
yarn serve
```

- 打包
  - 第一步请先运行react-app打包命令
  ```bash
  yarn build
  ```

  - 第二步运行electron打包命令
  ```bash
  yarn dist:win | yarn dist:win32 | yarn dist:win64
  ```

### 已完成

- [x] 项目打包流程
- [x] 窗口调整功能（最大化、最小化、还原、关闭） | mini模式暂不支持
- [x] 窗口拖拽
- [x] 调整窗口大小

### 待完成

- [ ] 底部播放器

### 未完成部分

- 那可多了去了


### 效果图

![index](src/asserts/public/index.png)