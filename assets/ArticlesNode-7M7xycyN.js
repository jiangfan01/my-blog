import{j as e,f as t}from"./index-wjD_FM3g.js";import{A as r}from"./ArticleList-BIp3k0cH.js";const n=()=>{const s=[{question:"Node.js 的 FS（文件系统）模块使用",answer:`
## 📁 Node.js FS（文件系统）模块详解

---

### 1. FS 模块简介

- Node.js 内置模块，用于操作文件和目录。
- 提供同步和异步 API，支持读写文件、操作目录、监控文件变化等。

---

### 2. 常用方法

| 方法                                      | 说明                          | 示例                                      |
| ----------------------------------------- | ----------------------------- | ----------------------------------------- |
| \`fs.readFile(path, [options], callback)\` | 异步读取文件内容               | \`fs.readFile('file.txt', 'utf8', (err, data) => {})\` |
| \`fs.readFileSync(path, [options])\`         | 同步读取文件内容               | \`const data = fs.readFileSync('file.txt', 'utf8')\`   |
| \`fs.writeFile(path, data, [options], callback)\` | 异步写入文件内容               | \`fs.writeFile('file.txt', 'Hello', err => {})\`       |
| \`fs.writeFileSync(path, data, [options])\`         | 同步写入文件内容               | \`fs.writeFileSync('file.txt', 'Hello')\`              |
| \`fs.appendFile(path, data, [options], callback)\`  | 追加内容到文件                 | \`fs.appendFile('file.txt', 'More', err => {})\`       |
| \`fs.mkdir(path, [options], callback)\`             | 创建目录                     | \`fs.mkdir('mydir', {recursive: true}, err => {})\`    |
| \`fs.readdir(path, [options], callback)\`           | 读取目录内容                 | \`fs.readdir('.', (err, files) => {})\`                |
| \`fs.unlink(path, callback)\`                        | 删除文件                     | \`fs.unlink('file.txt', err => {})\`                    |
| \`fs.rmdir(path, [options], callback)\`             | 删除目录                     | \`fs.rmdir('mydir', {recursive: true}, err => {})\`    |

---

### 3. 示例代码

\`\`\`js
const fs = require('fs');

// 异步读取文件
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件失败:', err);
    return;
  }
  console.log('文件内容:', data);
});

// 异步写入文件
fs.writeFile('example.txt', 'Hello Node.js', err => {
  if (err) {
    console.error('写入文件失败:', err);
  } else {
    console.log('写入成功');
  }
});
\`\`\`

---

### 4. 流式操作

- 适合处理大文件，避免一次性读取占用大量内存。
- 使用 \`fs.createReadStream()\` 和 \`fs.createWriteStream()\` 创建读写流。

\`\`\`js
const readStream = fs.createReadStream('largefile.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);
\`\`\`

---

### 5. 小结

- FS 模块是 Node.js 文件操作的基础，异步 API 友好性能佳。
- 结合流操作可处理大文件，提高效率。
- 支持丰富的文件和目录操作，适合构建多种文件管理功能。
`},{question:"Node.js 的 http / https 模块讲解",answer:`
## 🌐 Node.js 的 http / https 模块详解

---

### 1. 简介

- \`http\` 和 \`https\` 模块是 Node.js 中用于创建 Web 服务器和客户端请求的核心模块。
- 区别在于：\`http\` 是明文传输，\`https\` 支持加密传输（基于 SSL/TLS）。

---

### 2. 创建 HTTP 服务

\`\`\`js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js HTTP!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
\`\`\`

---

### 3. 请求对象（\`req\`）

- \`req.url\`：请求路径
- \`req.method\`：请求方法（GET、POST 等）
- \`req.headers\`：请求头对象
- \`req.on('data')\`：接收请求体数据（POST 时常用）

---

### 4. 响应对象（\`res\`）

- \`res.writeHead(statusCode, headers)\`：设置状态码和响应头
- \`res.write()\`：写入响应内容
- \`res.end()\`：结束响应

---

### 5. 创建 HTTPS 服务

- 需要额外提供 SSL 证书文件（\`.key\` 和 \`.crt\`）

\`\`\`js
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, HTTPS!');
});

server.listen(443);
\`\`\`

---

### 6. 发起客户端请求（http.request）

\`\`\`js
const http = require('http');

const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, res => {
  res.on('data', chunk => {
    console.log('响应内容:', chunk.toString());
  });
});

req.on('error', err => {
  console.error('请求出错:', err);
});

req.end();
\`\`\`

---

### 7. 小结

| 模块    | 说明                         |
|---------|------------------------------|
| \`http\`  | 用于创建普通 Web 服务        |
| \`https\` | 支持加密传输，适用于生产环境  |
| \`http.request()\` | 作为客户端发起请求   |

- http/https 模块是 Node 服务端开发的基础，结合路由、文件读写即可实现 Web 服务框架的雏形。
`},{question:"Node.js 的 crypto 模块详解",answer:`
## 🔐 Node.js 的 crypto 模块详解

---

### 1. 模块简介

- \`crypto\` 是 Node.js 内置模块，用于加密、解密、哈希、数字签名等操作。
- 常用于：用户密码加密存储、接口签名校验、数据完整性校验等场景。

---

### 2. 常用功能一览

| 功能           | 方法                         | 应用示例                         |
|----------------|------------------------------|----------------------------------|
| 哈希（Hash）   | \`createHash\`               | 密码加密、文件校验               |
| HMAC 签名      | \`createHmac\`               | 接口签名验证                     |
| 对称加解密     | \`createCipheriv\`, \`createDecipheriv\` | AES 加密/解密                    |
| 非对称加解密   | \`publicEncrypt\`, \`privateDecrypt\` | 使用 RSA 加密/解密              |
| 数字签名       | \`sign\`, \`verify\`         | 数据来源认证                     |
| 随机数/密钥生成| \`randomBytes\`              | 密码盐、Token、Session 密钥等   |

---

### 3. Hash 示例（如 MD5 / SHA256）

> 用于加密密码、生成文件指纹等

\`\`\`js
const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('my-password');
const result = hash.digest('hex');

console.log('SHA256:', result);
\`\`\`

---

### 4. HMAC 示例（加盐哈希签名）

> 常用于 API 请求签名校验

\`\`\`js
const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('data-to-sign');
console.log('HMAC 签名:', hmac.digest('hex'));
\`\`\`

---

### 5. 对称加解密（AES）

> 明文 ➜ 密文 ➜ 明文，适用于数据加密传输

\`\`\`js
const crypto = require('crypto');

const key = crypto.randomBytes(32); // 256位密钥
const iv = crypto.randomBytes(16);  // 初始化向量

// 加密
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');

// 解密
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('密文:', encrypted);
console.log('明文:', decrypted);
\`\`\`

---

### 6. 生成随机数/密钥

> 用于生成 salt、验证码、Token 等

\`\`\`js
const crypto = require('crypto');

const randomToken = crypto.randomBytes(16).toString('hex');
console.log('生成的随机 token:', randomToken);
\`\`\`

---

### 7. 实战：密码加密存储（不可逆）

\`\`\`js
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .createHmac('sha256', salt)
    .update(password)
    .digest('hex');
  return { salt, hash };
}
\`\`\`

---

### 8. 小结

| 功能       | 推荐算法       | 应用场景             |
|------------|----------------|----------------------|
| 哈希       | \`sha256\`      | 密码、文件一致性校验 |
| HMAC       | \`sha256 + key\`| 接口签名校验         |
| 加解密     | \`AES\`, \`RSA\` | 数据传输、机密存储   |
| 随机生成   | \`randomBytes\` | Token、盐值等        |

> ⚠️ 密码存储推荐：**HMAC + 盐值 + 多次加密**
`},{question:"Node.js 中的 JWT（JSON Web Token）使用",answer:`
## 🔐 JWT（JSON Web Token）认证机制详解

---

### 1️⃣ 什么是 JWT？

- JWT 是一种轻量级的 **身份认证和授权机制**。
- 本质是一个 **加密后的字符串**，前端和后端之间通过它来传递用户身份信息。

---

### 2️⃣ JWT 的结构（三部分组成）

\`\`\`txt
Header.Payload.Signature
\`\`\`

| 部分      | 说明                             |
|-----------|----------------------------------|
| Header    | 声明类型（JWT）和加密算法（如 HS256） |
| Payload   | 存储用户数据（如 userId、过期时间）   |
| Signature | 签名，防止被篡改                     |

> ✅ 特点：**无状态**，服务端不存储登录状态（Token 自包含）。

---

### 3️⃣ 安装 JWT 库（Node 中）

\`\`\`bash
npm install jsonwebtoken
\`\`\`

---

### 4️⃣ 签发 Token（登录成功后）

\`\`\`js
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { userId: 123, username: 'alice' },
  'your-secret-key',
  { expiresIn: '2h' } // 设置过期时间
);

console.log('生成的 Token:', token);
\`\`\`

---

### 5️⃣ 验证 Token（中间件）

\`\`\`js
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) return res.status(401).json({ message: '缺少 Token' });

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token 无效或已过期' });
  }
}
\`\`\`

---

### 6️⃣ JWT 的优点

- 📦 **无状态**，不需要服务器保存 session
- 🌍 **跨平台**，前后端分离架构中使用方便
- 📈 **性能好**，减少数据库验证

---

### 7️⃣ 安全建议

| 项目              | 建议                              |
|-------------------|-----------------------------------|
| 签名密钥          | 使用强加密密钥，防止伪造 Token    |
| 加密算法          | 使用 HS256 / RS256 等安全算法     |
| Token 存储        | 不建议存在 localStorage（容易被 XSS 攻击）|
| 设置过期时间      | \`expiresIn\` 控制有效期，提升安全 |
| 使用 HTTPS        | 传输时防止被劫持                  |

---

### 8️⃣ 小结

- JWT 适用于：**用户登录认证、接口权限控制、前后端分离系统认证**
- 推荐结合：**登录接口 + JWT 签发 + 中间件校验**

> 🔑 JWT = 安全、灵活、高性能的 Token 认证机制
`},{question:"Node.js 中的框架",answer:`
## 🚀 Node.js 最流行的 Web 框架：Express

---

### 1️⃣ Express 是什么？

- Express 是一个基于 Node.js 的 **Web 开发框架**。
- 提供了丰富的 API，帮助我们快速搭建 Web 服务或接口服务。
- ⭐ GitHub Star 超过 6 万，是 Node 生态中最主流的框架之一。

---

### 2️⃣ 安装 Express

\`\`\`bash
npm install express
\`\`\`

---

### 3️⃣ 创建一个简单的服务器

\`\`\`js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
\`\`\`

---

### 4️⃣ 核心概念

#### 📦 路由（Routing）

- 根据请求路径和请求方法分发处理逻辑

\`\`\`js
app.get('/user/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});
\`\`\`

#### 🧱 中间件（Middleware）

- 本质是函数，可以在请求处理过程中做拦截、校验、记录日志等操作

\`\`\`js
app.use((req, res, next) => {
  console.log('中间件触发');
  next(); // 继续往下执行
});
\`\`\`

---

### 5️⃣ 常用功能示例

#### 📄 处理 POST 请求

\`\`\`js
app.use(express.json()); // 解析 JSON 请求体

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(\`欢迎 \${username}\`);
});
\`\`\`

#### 🧾 设置静态资源目录

\`\`\`js
app.use(express.static('public')); // 访问 /index.html 会自动查找 public/index.html
\`\`\`

---

### 6️⃣ 路由模块拆分

\`\`\`js
// routes/user.js
const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.send('用户信息');
});

module.exports = router;

// app.js
const userRouter = require('./routes/user');
app.use('/user', userRouter);
\`\`\`

---

### 7️⃣ 搭配其他库构建后端系统

| 功能           | 推荐库              |
|----------------|---------------------|
| 数据库操作     | Sequelize, Mongoose |
| 身份验证       | jsonwebtoken        |
| 表单校验       | express-validator   |
| 跨域处理       | cors                |
| 日志记录       | morgan              |

---

### 8️⃣ 小结

- Express 是 Node 开发中最主流的 Web 框架，拥有简洁的 API 和庞大的生态。
- 支持中间件机制、路由拆分、请求处理、静态资源托管等丰富功能。
- 可快速搭建 RESTful API 或 SSR 项目，适合小型项目到大型系统开发。
`},{question:"除了 Express，Node 还有哪些优秀框架？",answer:`
## 🚀 Node.js 常见开发框架盘点

虽然 Express 是最主流的 Web 框架，但在不同的开发需求下，我们还可以选择其他更合适的框架：

---

### 1️⃣ Koa —— 更现代的轻量框架

- **由 Express 原班人马打造**，更加极简、现代化。
- 基于 **ES6 async/await**，中间件采用“洋葱模型”。
- 适合中高级开发者，灵活性高，**更接近原生**。

\`\`\`js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Koa!';
});

app.listen(3000);
\`\`\`

---

### 2️⃣ NestJS —— 企业级 Node 框架首选

- 使用 **TypeScript 开发**，基于 Angular 风格架构。
- 内置模块化、依赖注入（DI）、装饰器等功能，适合大型系统。
- 支持 REST API、GraphQL、WebSocket、微服务开发。

> ✅ NestJS 是构建大型、可维护性强的后端项目的理想选择。

---

### 3️⃣ Next.js —— React 服务端渲染（SSR）框架

- 虽不是纯粹的后端框架，但基于 Node.js 运行。
- 支持 **SSR、静态生成、API 路由**，可实现前后端同构开发。
- 是构建 SEO 友好、快速响应的 Web 应用的最佳选择。

> 🎯 适合用 React 构建内容型网站、电商系统、博客等。

---

### 4️⃣ 对比总结

| 框架      | 语言支持 | 特点                    | 适用场景                         |
|-----------|-----------|-------------------------|----------------------------------|
| Express   | JS/TS     | 简洁快速、生态丰富       | 通用后端开发、API 服务           |
| Koa       | JS/TS     | 极简、基于 async/await   | 灵活定制项目、轻量 API           |
| NestJS    | TypeScript| 面向企业级、模块化强     | 构建复杂系统、大型企业项目       |
| Next.js   | TypeScript| 前后端同构、SSR 支持     | React 项目、SEO 优化站点         |

---

> 🧠 小提示：根据你的团队技术栈和项目规模来选择最合适的框架。
`},{question:"Node.js 中的 ORM（对象关系映射）",answer:`
## 🧩 什么是 ORM？

**ORM（Object-Relational Mapping）对象关系映射**  
是指将数据库中的表结构映射为代码中的对象，通过操作对象来代替原始 SQL，提升开发效率与可维护性。

---

### ✅ 为什么使用 ORM？

| 优点                     | 描述                                      |
|--------------------------|-------------------------------------------|
| 🧠 屏蔽 SQL 细节          | 开发者更关注业务逻辑，减少手写 SQL         |
| 💻 提高开发效率          | 自动建表、联表查询、数据校验更简单         |
| ♻️ 良好的可维护性        | 数据结构变化时便于统一维护                 |
| 🔄 跨数据库支持          | 通过配置可适配 MySQL、PostgreSQL、SQLite 等 |

---

### 🚀 Sequelize（Node 中常用 ORM 框架）

> Sequelize 是 Node.js 最流行的 ORM 框架之一，支持 MySQL、MariaDB、SQLite、PostgreSQL 等数据库。

---

### ✨ Sequelize 核心概念

| 概念       | 说明                               |
|------------|------------------------------------|
| Model      | 类似于数据库中的表结构              |
| Instance   | 表中的一条记录                     |
| DataTypes  | 数据类型定义（如 STRING、INTEGER） |
| Associations | 表与表之间的关联关系（hasOne、hasMany、belongsTo） |

---

### 🧱 示例代码：定义模型

\`\`\`js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('db', 'user', 'password', {
  dialect: 'mysql'
});

// 定义 User 模型
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER
  }
});

// 同步表结构
sequelize.sync();
\`\`\`

---

### ✍️ 增删改查操作

#### ✅ 新增数据

\`\`\`js
await User.create({ username: 'Alice', age: 25 });
\`\`\`

#### 🔍 查询数据

\`\`\`js
const users = await User.findAll();
const oneUser = await User.findByPk(1);
\`\`\`

#### ✏️ 更新数据

\`\`\`js
await User.update({ age: 26 }, { where: { id: 1 } });
\`\`\`

#### ❌ 删除数据

\`\`\`js
await User.destroy({ where: { id: 1 } });
\`\`\`

---

### 🔗 表关联关系（如：用户和文章）

\`\`\`js
User.hasMany(Article);
Article.belongsTo(User);
\`\`\`

---

### 🧠 小结

| 优势                         | 劣势                        |
|------------------------------|-----------------------------|
| ✅ 提升开发效率               | ❌ 复杂 SQL 查询不够灵活     |
| ✅ 统一管理数据结构           | ❌ 初学者上手成本略高         |
| ✅ 支持自动建表、联表查询     | ❌ 性能比不上手写原生 SQL     |

> 📌 建议：中小型项目推荐使用 Sequelize；若对性能要求极高、SQL 非常复杂的项目可适当使用原生 SQL。

`},{question:"Node.js 中常见 ORM 对比",answer:`
## 🧱 Node.js 常见 ORM 框架对比

在 Node.js 中，除了 Sequelize，还有一些优秀的 ORM 框架，适用于不同项目场景。

---

### 1️⃣ Sequelize（最流行）

- 🔧 **面向模型**：每个模型对应一张表，支持模型定义、关联、自动建表等。
- ✅ 支持 MySQL、PostgreSQL、SQLite、MariaDB。
- 🎯 适合中小型项目、快速开发接口服务。

---

### 2️⃣ TypeORM（支持装饰器，面向 TypeScript）

- ✨ 基于 TypeScript，支持装饰器定义模型（Entity）。
- 📦 类似 Java 的 Hibernate，功能丰富，支持同步数据库结构、迁移等。
- 🧩 支持 Active Record 和 Data Mapper 两种模式。
- 📚 推荐用于 **NestJS 项目**。

\`\`\`ts
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
}
\`\`\`

---

### 3️⃣ Prisma（新生代 ORM，极简强大）

- 🚀 极速崛起的新一代 ORM，拥有超强类型推导和自动补全。
- 🧠 专注于开发体验，使用 Schema 语言定义模型，自动生成类型。
- 🧬 支持关系映射、事务、迁移等功能。
- 💡 推荐用于现代 TypeScript 项目。

\`\`\`prisma
// schema.prisma
model User {
  id       Int     @id @default(autoincrement())
  name     String
  email    String  @unique
}
\`\`\`

---

### 4️⃣ Objection.js（基于 Knex，更接近 SQL）

- 📊 ORM 与 SQL 结合紧密，适合熟悉 SQL 的开发者。
- 🛠️ 支持复杂查询、模型关联，内部基于 Knex.js 实现。
- ❗ 学习曲线略高，不适合初学者。

---

### ✅ 对比总结

| ORM 框架     | 语言支持   | 特点与优势                                  | 推荐使用场景                         |
|--------------|------------|---------------------------------------------|--------------------------------------|
| Sequelize    | JS / TS    | 功能成熟，文档丰富，社区大                   | 中小型项目，入门友好                 |
| TypeORM      | TypeScript | 支持装饰器，适配 NestJS，支持迁移             | NestJS 项目，大型后台系统            |
| Prisma       | TypeScript | 类型安全极高，自动生成代码，开发体验优         | 现代化全栈项目，前后端协作紧密        |
| Objection.js | JS / TS    | 灵活接近 SQL，适合复杂查询，基于 Knex         | 对 SQL 有深入理解的项目，复杂数据操作 |

---

### 🧠 小结建议

- 🟩 **初学者推荐**：Sequelize，上手快、文档好。
- 🟨 **TS 项目推荐**：Prisma（体验极佳）或 TypeORM（配合 NestJS）。
- 🟦 **重 SQL 查询推荐**：Objection.js。

> 📌 ORM 是解放双手的利器，但**在性能或复杂 SQL 查询场景下，也可搭配使用原生 SQL** 灵活应对。
`},{question:"Node 模块化标准",answer:`
## Node.js 模块化标准详解：CommonJS vs ESModule 
## Node.js 支持哪些模块化标准？有什么区别？我在项目中应该选哪一种？

这是前后端通吃的必备基础知识，尤其在使用模块系统构建工具（如 Vite、Webpack）或写 Node 服务时非常重要。
---

### 🧱 一、CommonJS（CJS）

#### ✅ 特点：
- Node.js 默认支持的模块系统（无需配置）
- 使用 \`require\` 引入模块
- 使用 \`module.exports\` 或 \`exports\` 导出模块
- **同步加载**（适合服务端执行环境）

#### ✅ 示例：

\`\`\`js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
\`\`\`

\`\`\`js
// index.js
const math = require('./math');
console.log(math.add(2, 3)); // 输出 5
\`\`\`

---

### 🌍 二、ESModule（ESM）

#### ✅ 特点：
- JavaScript 官方模块系统（ES6 标准）
- 使用 \`import\` / \`export\` 语法
- **异步加载**（支持静态分析，利于 Tree Shaking）
- 在 Node.js 中使用，需要显式启用：

  - 文件后缀为 \`.mjs\`，或
  - 在 \`package.json\` 中加入 \`"type": "module"\`

#### ✅ 示例：

\`\`\`js
// math.mjs
export function add(a, b) {
  return a + b;
}
\`\`\`

\`\`\`js
// index.mjs
import { add } from './math.mjs';
console.log(add(2, 3)); // 输出 5
\`\`\`

---

### 🔁 对比总结表

| 对比项        | CommonJS (CJS)          | ESModule (ESM)         |
|---------------|--------------------------|--------------------------|
| 引入方式      | \`require()\`             | \`import\`               |
| 导出方式      | \`module.exports\`        | \`export / export default\` |
| 加载方式      | 同步                     | 异步                     |
| 文件扩展名    | \`.js\`、\`.cjs\`           | \`.mjs\`，或配置 \`"type"\`   |
| 是否支持顶层 await | ❌ 否                  | ✅ 支持                   |
| 是否浏览器兼容 | ❌ 否                     | ✅ 是                    |

---

### 🧪 三、实际项目中该怎么选？

| 场景                              | 推荐使用            |
|-----------------------------------|---------------------|
| 传统 Node.js 项目                 | CommonJS            |
| 前端 / Node 全用 ESModule 的项目  | ESModule            |
| 开源包开发（要适配多环境）        | 同时支持 CJS + ESM  |
| Vite / Rollup 等现代构建工具配合   | ESM（更好优化）      |

---

### 🎯 四、如何启用 ESModule？

1. 在 \`package.json\` 中声明：

\`\`\`json
{
  "type": "module"
}
\`\`\`

2. 或者将文件改为 .mjs 后缀。

---

### 📌 五、模块混用限制

- **CJS 中引入 ESM**：只能用动态 \`import()\`，不能用 \`require()\`
- **ESM 中引入 CJS**：可以使用 \`import xxx from 'cjs模块'\`

---

### ✅ 小结

- **CommonJS 是 Node 默认的老牌模块系统**
- **ESModule 是现代推荐方式，更适合前后端统一**
- 在项目中选哪种模块，取决于你的环境需求与工具链支持
- **Node 默认使用 CommonJS 模块化规范，采用同步加载，使用 require 和 module.exports；而现代前端多采用支持异步的 ESModule（import / export），Node 也支持它，但需额外配置**


---
`}];return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(r,{data:s,centerTitle:"Node.js",icon:e.jsx(t,{color:"#8CC084"})})})})};export{n as default};
