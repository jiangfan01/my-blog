import React from "react";
import ArticleList from "../../../components/ArticleList/ArticleList.tsx";
import {FaChrome} from "react-icons/fa";

const ArticlesWeb: React.FC = () => {
    const webArticles = [
        {
            question: "浏览器从输入 URL 到页面展示详细过程",
            answer: `
## 浏览器从输入 URL 到页面展示的详细流程

---

### 1️⃣ 用户输入 URL 并按下回车

- 浏览器首先检查 URL 格式是否合法。
- 检查浏览器缓存（包括 DNS 缓存、HTTP 缓存）是否有该资源，若命中则直接使用缓存，提升速度。

---

### 2️⃣ DNS 解析（域名解析）

- 浏览器查询本地 DNS 缓存，若未命中，则向操作系统请求 DNS 解析。
- 操作系统向配置的 DNS 服务器发起查询请求（递归或迭代查询）。
- DNS 服务器逐级返回域名对应的 IP 地址。
- 浏览器获得目标服务器的 IP 地址。

---

### 3️⃣ 建立 TCP 连接（三次握手）

- 浏览器通过 IP 地址向服务器指定端口（默认 80 或 443）发起 TCP 连接请求。
- TCP 三次握手流程：
  - 客户端发送 SYN 包，表示请求建立连接。
  - 服务器返回 SYN-ACK 包，确认收到请求。
  - 客户端再发送 ACK 包，连接建立成功。
- 连接建立后，客户端和服务器可开始数据传输。

---

### 4️⃣ 建立 TLS 连接（如果是 HTTPS）

- 在 TCP 连接基础上，浏览器与服务器进行 TLS 握手，协商加密算法，交换证书。
- 验证服务器身份，生成对称加密密钥，建立安全通道。
- 连接加密后，开始安全的 HTTP 通信。

---

### 5️⃣ 发送 HTTP 请求

- 浏览器组装 HTTP 请求报文，包含：
  - 请求行（方法、路径、协议版本）
  - 请求头（Host、User-Agent、Accept、Cookie 等）
  - 请求体（POST、PUT 请求才有）
- 发送请求到服务器。

---

### 6️⃣ 服务器处理请求并响应

- 服务器接收请求，解析请求内容。
- 路由到对应业务逻辑处理，生成响应内容（HTML、JSON、图片等）。
- 返回 HTTP 响应报文，包括状态码（200、301、404 等）、响应头和响应体。

---

### 总结

浏览器从输入 URL 到页面展示，经历了缓存检查、DNS 查询、TCP/TLS 连接建立、HTTP 请求响应。
`
        },
        {
            question: "浏览器渲染步骤",
            answer: `
## 浏览器渲染步骤详解

---

### 1️⃣ 解析 HTML，构建 DOM 树

- 浏览器接收 HTML 文档，解析标签，构建 DOM（Document Object Model）树。
- DOM 树描述页面的结构和内容。

---

### 2️⃣ 解析 CSS，构建 CSSOM 树

- 浏览器解析所有 CSS 资源（内联、外链、style 标签）。
- 构建 CSSOM（CSS Object Model）树，表示样式层级和属性。

---

### 3️⃣ 构建渲染树（Render Tree）

- 合并 DOM 树和 CSSOM 树，生成渲染树。
- 渲染树只包含可见节点及其样式信息，不包含不可见元素。

---

### 4️⃣ 布局（Layout / Reflow）

- 浏览器计算渲染树中每个节点的几何位置和大小。
- 计算元素在页面中的准确显示区域。

---

### 5️⃣ 绘制（Paint）

- 浏览器将布局信息转换为屏幕上的像素。
- 绘制文本、颜色、边框、阴影等视觉内容。

---

### 6️⃣ 合成（Composite）

- 将多个绘制层合成为最终屏幕画面。
- 优化渲染性能，支持 GPU 加速。

---

### 总结

浏览器渲染过程从解析 HTML/CSS 开始，经过 DOM 和 CSSOM 构建、渲染树生成、布局计算、绘制和合成多个步骤，最终将页面内容高效呈现在用户面前。
`
        },
        {
            question: "常见的 HTTP 请求方式",
            answer: `
## 常见的 HTTP 请求方式

---

### 1️⃣ GET 请求

- 用于请求获取资源。
- 请求参数通过 URL 查询字符串传递。
- 请求体为空。
- 适合获取数据，不适合传输敏感信息或大量数据。
- 浏览器会缓存 GET 请求结果，且可被收藏和历史记录保存。

---

### 2️⃣ POST 请求

- 用于提交数据给服务器（如表单提交、上传文件）。
- 请求参数包含在请求体中，大小不限。
- 不会缓存，且不保存在浏览器历史或收藏中。
- 适合传输敏感数据和大数据量。

---

### 3️⃣ 其他常见请求方法简介

| 方法      | 作用                           |
|-----------|--------------------------------|
| PUT       | 更新资源                       |
| DELETE    | 删除资源                       |
| PATCH     | 局部更新资源                   |
| OPTIONS   | 查询服务器支持的请求方法       |
| HEAD      | 获取响应头，与 GET 类似但无响应体 |

---

### 4️⃣ 选择请求方法建议

- 获取数据用 GET。
- 提交或修改数据用 POST/PUT/PATCH。
- 删除用 DELETE。
- 设计 API 时应遵循 RESTful 规范。

`
        },
        {
            question: "跨域及常见应对方法",
            answer: `
## 什么是跨域

- 跨域指浏览器出于安全策略限制，阻止网页从一个源（协议 + 域名 + 端口）去请求另一个源的资源。
- 例如，页面地址是 http://example.com请求 http://api.otherdomain.com 就属于跨域。

---

## 跨域表现

- AJAX 请求时浏览器报跨域错误，控制台提示跨域相关信息。
- 浏览器阻止前端访问响应内容。

---

## 常见跨域应对方法

### 1️⃣ CORS（跨域资源共享）

- 服务器在响应头添加 Access-Control-Allow-Origin 指定允许访问的域名。
- 支持复杂请求时，浏览器会先发 OPTIONS 预检请求。
- 示例：


Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type

---

### 2️⃣ JSONP（仅支持 GET 请求）

- 通过动态插入 <script> 标签绕过跨域限制。
- 服务器返回一段调用指定回调函数的 JavaScript 代码。
- 缺点：仅支持 GET，存在安全隐患。

---

### 3️⃣ 代理服务器

- 在同源服务器上设置代理，将请求转发给目标服务器。
- 对浏览器来说是同源请求，绕过跨域限制。
- 常见代理工具有 webpack devServer、nginx 等。

---

### 4️⃣ document.domain

- 仅限于主域相同的子域之间通信。
- 设置 \\\`document.domain\\\` 为相同的主域名，如 \\\`example.com\\\`。
- 适用范围有限。

---

### 5️⃣ window.postMessage

- 用于跨窗口或跨 iframe 安全通信。
- 通过发送消息实现跨域数据交换。

---

## 跨域方案对比

| 方法           | 优点               | 缺点                 | 适用场景                  |
| -------------- | ------------------ | -------------------- | ------------------------- |
| CORS           | 标准方案，灵活支持多请求类型 | 需要服务器配合         | 绝大多数跨域请求           |
| JSONP          | 简单，兼容旧浏览器 | 仅支持 GET，安全风险   | 简单的跨域 GET 请求        |
| 代理服务器     | 浏览器无感知       | 需搭建和配置代理       | 开发环境或私有服务器代理   |
| document.domain| 简单，适用子域间通信 | 仅限同一主域子域      | 主域相同子域间通信         |
| postMessage    | 安全，适合跨窗口通信 | 只能跨窗口或 iframe   | 跨窗口、iframe 的跨域通信  |
`
        }






    ];
    return (
        <>
            <div>
                <ArticleList data={webArticles} centerTitle="Web" icon={<FaChrome color="#F7DF1E"/>}/>
            </div>
        </>
    );
};
export default ArticlesWeb;