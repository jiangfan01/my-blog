import React from "react";
import ArticleList from "../../../components/ArticleList/ArticleList.tsx";
import {FaJs} from "react-icons/fa";

const ArticlesJavaScript: React.FC = () => {

    const jsArticles = [
        {
            question: "JS中的数据类型",
            answer: `
# 📚 JavaScript 中的数据类型

JavaScript 中的数据类型分为两大类：**基本数据类型** 和 **引用数据类型**。

---

## ✅ 基本数据类型（Primitive Types）

这些类型的值 **直接存储在栈（Stack）中**，按值访问、比较。

- \`Number\`：数字类型，如 \`42\`、\`3.14\`
- \`String\`：字符串类型，如 \`"Hello"\`、\`'JS'\`
- \`Boolean\`：布尔值，\`true\` 或 \`false\`
- \`Null\`：表示“空值”，类型是 \`object\`
- \`Undefined\`：声明了变量但未赋值
- \`Symbol\`（ES6）：唯一且不可变的值，常用于对象属性唯一标识
- \`BigInt\`（ES11）：可表示任意精度的整数（如：大于 \`Number.MAX_SAFE_INTEGER\`）

🔎 特点：
- 占用空间小、生命周期短
- 值不可变

---

## 🧩 引用数据类型（Reference Types）

引用类型的值 **保存在堆（Heap）内存中**，变量保存的是 **对象的引用地址**。

- \`Object\`：普通对象，如 \`{ name: "Tom" }\`
- \`Array\`：数组对象，如 \`[1, 2, 3]\`
- \`Function\`：函数对象，如 \`() => {}\`
- \`RegExp\`：正则表达式对象，如 \`/abc/i\`
- \`Date\`、\`Map\`、\`Set\` 等（ES6+ 新增）

🔎 特点：
- 存储在堆内，栈中存的是引用地址
- 修改或赋值会影响所有引用该对象的变量

---

## 🆚 对比总结

| 特性             | 基本数据类型       | 引用数据类型       |
|------------------|--------------------|--------------------|
| 存储位置         | 栈（Stack）        | 堆（Heap）         |
| 访问方式         | 按值访问           | 按引用访问         |
| 是否可变         | 不可变             | 可变               |
| 常见类型         | Number, String...  | Object, Array...   |
| 比较方式         | 值比较（===）      | 引用比较（===）    |

---

✅ **小贴士**：
- 使用 \`typeof\` 可判断大部分基本类型（除了 null）
- 判断数组可用：\`Array.isArray(obj)\`
- 判断 null：\`obj === null\`（注意：\`typeof null === 'object'\` 是历史遗留问题）

`
        },
        {
            question: "三种判断数据类型的方式",
            answer: `
# 🔍 三种判断 JavaScript 数据类型的方式

JavaScript 提供了多种方式来判断变量的数据类型，以下是三种最常用的方法：

---

## ✅ 1. \`typeof\` 操作符

用于判断**基本数据类型**，返回一个表示类型的字符串。

### 示例：
\`\`\`js
typeof 123            // "number"
typeof "hello"        // "string"
typeof undefined      // "undefined"
typeof null           // "object" ❌（历史遗留 Bug）
typeof []             // "object"
typeof function() {}  // "function"
\`\`\`

🔸 **优点**：简单快速  
🔸 **缺点**：对于 \`null\`、\`array\`、\`object\` 无法准确区分

---

## ✅ 2. \`instanceof\` 运算符

用于判断一个对象是否是某个构造函数的实例，检查原型链上是否存在目标类型。

### 示例：
\`\`\`js
[] instanceof Array             // true
{} instanceof Object           // true
new Date() instanceof Date     // true
123 instanceof Number          // false ❌（基本类型）

const num = new Number(123);
num instanceof Number          // true ✅（包装对象）
\`\`\`

🔸 **优点**：适用于引用类型（Array、Function、Date...）  
🔸 **缺点**：不能判断基本数据类型

---

## ✅ 3. \`Object.prototype.toString.call()\` 方法（推荐）

这是判断所有类型最**准确可靠**的方法，尤其适合判断复杂对象类型。

### 示例：
\`\`\`js
Object.prototype.toString.call("hello")   // [object String]
Object.prototype.toString.call(123)       // [object Number]
Object.prototype.toString.call(null)      // [object Null]
Object.prototype.toString.call([])        // [object Array]
Object.prototype.toString.call({})        // [object Object]
Object.prototype.toString.call(() => {})  // [object Function]
\`\`\`

🔸 **优点**：能准确判断所有类型，包括 \`null\` 和 \`array\`  
🔸 **缺点**：语法稍长

---

## 🧠 总结对比

| 方法                         | 能判断基本类型 | 能判断引用类型 | 准确度 | 是否推荐 |
|------------------------------|----------------|----------------|--------|-----------|
| \`typeof\`                   | ✅              | 部分支持        | 中等   | ✅         |
| \`instanceof\`               | ❌              | ✅              | 中等   | 🔸 视情况 |
| \`Object.prototype.toString.call()\` | ✅        | ✅              | 高     | ✅✅✅     |

`
        },
        {
            question: "JS的数组常用方法",
            answer: `
# 📚 JavaScript 数组常用方法整理

JavaScript 提供了丰富的数组方法，帮助我们进行增删改查、遍历、排序等操作：

---

## ✅ 增删改

### 🔹 push() / pop()
- \`push()\`：向数组末尾添加元素，返回新长度
- \`pop()\`：移除并返回最后一个元素

\`\`\`js
const arr = [1, 2];
arr.push(3);     // [1, 2, 3]
arr.pop();       // [1, 2]
\`\`\`

### 🔹 unshift() / shift()
- \`unshift()\`：向数组开头添加元素
- \`shift()\`：移除数组第一个元素

\`\`\`js
arr.unshift(0);  // [0, 1, 2]
arr.shift();     // [1, 2]
\`\`\`

### 🔹 splice(start, deleteCount, ...items)
- 添加/删除/替换数组中任意位置的元素

\`\`\`js
arr.splice(1, 1, "a");  // 替换
arr.splice(0, 0, "x");  // 添加
arr.splice(2, 1);       // 删除
\`\`\`

---

## ✅ 遍历与查找

### 🔹 forEach()
- 遍历数组，无返回值

\`\`\`js
arr.forEach((item, index) => {
  console.log(index, item);
});
\`\`\`

### 🔹 map()
- 遍历并生成一个新数组

\`\`\`js
const newArr = arr.map(x => x * 2);
\`\`\`

### 🔹 filter()
- 过滤出符合条件的元素组成新数组

\`\`\`js
const result = arr.filter(x => x > 1);
\`\`\`

### 🔹 find()
- 返回第一个符合条件的元素

\`\`\`js
const first = arr.find(x => x > 1);
\`\`\`

---

## ✅ 判断与查找

### 🔹 includes()
- 判断数组是否包含某元素

\`\`\`js
arr.includes(2);  // true
\`\`\`

### 🔹 indexOf() / lastIndexOf()
- 返回元素第一次/最后一次出现的位置

\`\`\`js
arr.indexOf("a");     // 1
arr.lastIndexOf("a"); // 3
\`\`\`

---

## ✅ 排序与反转

### 🔹 sort()
- 对数组元素进行排序（默认按字符串）

\`\`\`js
[3, 1, 4].sort();               // [1, 3, 4] ❌ 错误按字符串
[3, 1, 4].sort((a, b) => a - b); // ✅ 正确排序
\`\`\`

### 🔹 reverse()
- 反转数组顺序

\`\`\`js
arr.reverse();
\`\`\`

---

## ✅ 合并与提取

### 🔹 concat()
- 合并两个或多个数组

\`\`\`js
const result = arr.concat([4, 5]);
\`\`\`

### 🔹 slice(start, end)
- 提取数组的部分内容（不修改原数组）

\`\`\`js
const sub = arr.slice(1, 3);
\`\`\`

---

## ✅ 其它常用

### 🔹 reduce()
- 聚合计算数组值

\`\`\`js
const sum = [1, 2, 3].reduce((acc, cur) => acc + cur, 0); // 6
\`\`\`

### 🔹 flat(depth)
- 展平嵌套数组

\`\`\`js
[1, [2, [3]]].flat(2); // [1, 2, 3]
\`\`\`

---

## 🧠 小结

| 分类       | 方法                      |
|------------|---------------------------|
| 增删改     | push, pop, shift, unshift, splice |
| 遍历       | forEach, map, filter, find |
| 判断查找   | includes, indexOf, some, every |
| 排序反转   | sort, reverse              |
| 合并提取   | concat, slice              |
| 高阶操作   | reduce, flat               |
`
        },
        {
            question: "JS的常用字符串方法",
            answer: `
# 🧵 JavaScript 常用字符串方法整理

JavaScript 字符串是不可变的数据类型，常用方法主要用于查找、修改、截取、格式处理等。

---

## ✅ 基础属性

### 🔹 length
- 获取字符串的长度

\`\`\`js
"hello".length; // 5
\`\`\`

---

## 🔍 查找类

### 🔹 includes(substring)
- 判断是否包含某子串（区分大小写）

\`\`\`js
"hello world".includes("world"); // true
\`\`\`

### 🔹 indexOf(substring)
- 返回第一次出现的位置（找不到返回 -1）

\`\`\`js
"abcabc".indexOf("b"); // 1
\`\`\`

### 🔹 lastIndexOf(substring)
- 返回最后一次出现的位置

\`\`\`js
"abcabc".lastIndexOf("b"); // 4
\`\`\`

### 🔹 startsWith()/endsWith()
- 判断是否以某字符串开头或结尾

\`\`\`js
"frontend".startsWith("front"); // true
"frontend".endsWith("end");     // true
\`\`\`

---

## ✂️ 截取与分割

### 🔹 slice(start, end)
- 截取部分字符串，不包含 end

\`\`\`js
"hello".slice(1, 4); // "ell"
\`\`\`

### 🔹 substring(start, end)
- 与 slice 类似，但不支持负数索引

\`\`\`js
"hello".substring(1, 4); // "ell"
\`\`\`

### 🔹 substr(start, length)
- 从指定位置开始截取指定长度

\`\`\`js
"hello".substr(1, 3); // "ell"
\`\`\`

### 🔹 split(separator)
- 将字符串拆分成数组

\`\`\`js
"1,2,3".split(","); // ["1", "2", "3"]
\`\`\`

---

## ✏️ 替换与转换

### 🔹 replace() / replaceAll()
- 替换匹配内容（支持正则）

\`\`\`js
"hello world".replace("world", "JS"); // "hello JS"
"aaa".replaceAll("a", "b");           // "bbb"
\`\`\`

### 🔹 toUpperCase() / toLowerCase()
- 转换大小写

\`\`\`js
"Hello".toLowerCase(); // "hello"
"hello".toUpperCase(); // "HELLO"
\`\`\`

---

## 🧹 去除空格

### 🔹 trim()
- 去除首尾空格

\`\`\`js
"  hello  ".trim(); // "hello"
\`\`\`

### 🔹 trimStart() / trimEnd()
- 去除开头或结尾空格

---

## 📐 其他常用方法

### 🔹 repeat(n)
- 重复字符串 n 次

\`\`\`js
"ha".repeat(3); // "hahaha"
\`\`\`

### 🔹 charAt(index)
- 获取指定索引的字符

\`\`\`js
"abc".charAt(1); // "b"
\`\`\`

### 🔹 charCodeAt(index)
- 获取字符对应的 Unicode 编码

### 🔹 padStart(length, padStr) / padEnd()
- 补全长度（前补/后补）

\`\`\`js
"5".padStart(3, "0"); // "005"
\`\`\`

---

## 🧠 小结表

| 分类       | 方法                                                  |
|------------|-------------------------------------------------------|
| 查找       | includes, indexOf, lastIndexOf, startsWith, endsWith  |
| 截取       | slice, substring, substr                              |
| 转换       | toUpperCase, toLowerCase, replace, replaceAll         |
| 去空格     | trim, trimStart, trimEnd                              |
| 拆分与组合 | split, repeat, padStart, padEnd                       |
| 其他       | charAt, charCodeAt                                    |
`
        },
        {
            question: "JavaScript 构造函数与 new 操作",
            answer: `
# 🛠️ JavaScript 构造函数与 \`new\` 操作符

JavaScript 中可以使用构造函数（Constructor Function）结合 \`new\` 操作符来创建对象的“实例”，这是一种模拟面向对象的方式。

---

## 📌 什么是构造函数？

构造函数本质上是一个普通函数，命名通常 **首字母大写**，用于创建具有相同结构的对象。

\`\`\`js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log("Hi, I'm " + this.name);
  };
}
\`\`\`

---

## 🚀 使用 \`new\` 创建实例

\`\`\`js
const p1 = new Person("Tom", 20);
p1.sayHi(); // Hi, I'm Tom
\`\`\`

---

## 🔍 new 操作符内部做了什么？

\`new Person("Tom")\` 实际上做了以下四件事：

1. **创建一个空对象**：\`const obj = {}\`
2. **设置原型指向**：\`obj.__proto__ = Person.prototype\`
3. **绑定 this 并执行函数**：\`Person.call(obj, "Tom")\`
4. **返回对象**：\`return obj\`

📦 模拟实现：
\`\`\`js
function myNew(Constructor, ...args) {
  const obj = {};
  obj.__proto__ = Constructor.prototype;
  const result = Constructor.apply(obj, args);
  return typeof result === "object" && result !== null ? result : obj;
}
\`\`\`

---

## 🧠 构造函数的特点

- 必须用 \`new\` 调用，普通函数调用 \`this\` 指向全局（或 undefined）
- 构造函数返回对象（可选），否则默认返回 this（新创建的对象）
- 可以通过 \`prototype\` 添加方法和属性共享

---

## 📦 使用 class 替代（ES6+）

构造函数可以被 \`class\` 更优雅地替代：

\`\`\`js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log("Hi, I'm " + this.name);
  }
}
const p = new Person("Jerry", 22);
\`\`\`

---

## 🧠 小结

| 概念            | 说明                                            |
|------------------|--------------------------------------------------|
| 构造函数        | 用于批量创建结构一致的对象                       |
| new 操作符      | 自动完成创建对象、绑定 this、设置原型、返回实例 |
| class（ES6）    | 构造函数的语法糖，更加规范和易于阅读             |
`
        },
        {
            question: "防抖和节流的区别与使用场景",
            answer: `
# 🕹️ 防抖（Debounce）与节流（Throttle）

它们都是前端性能优化中**控制高频触发事件**的常用技术，例如：滚动、输入、窗口大小调整等。

---

## 🧭 防抖（Debounce）

> ✅ 多次触发，只执行最后一次！

- 每次事件触发后都会重置计时器，**等用户停止操作一段时间后才执行函数**
- 常用于 **输入框搜索联想、防止按钮多次点击提交**

### 📦 示例代码（ES6 箭头函数）

\`\`\`js
const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
\`\`\`

---

## 🧭 节流（Throttle）

> ✅ 限制单位时间内函数只能执行一次！

- 无论触发多少次事件，在指定时间间隔内只执行一次
- 常用于 **滚动监听、页面 resize、游戏帧率控制**

### 📦 示例代码（ES6 箭头函数）

\`\`\`js
const throttle = (fn, delay = 300) => {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime > delay) {
      fn(...args);
      lastTime = now;
    }
  };
};
\`\`\`

---

## 🔧 额外提示

你也可以使用 [Lodash](https://lodash.com/) 库中提供的 \`_.debounce\` 和 \`_.throttle\` 方法，API 设计完善，使用简单，能帮助你更方便地实现防抖和节流效果。

例如：

\`\`\`js
import { debounce, throttle } from 'lodash';

const debouncedFn = debounce(() => {
  console.log("触发了防抖函数");
}, 300);

const throttledFn = throttle(() => {
  console.log("触发了节流函数");
}, 300);
\`\`\`

---

## 🔍 对比总结表

| 特性       | 防抖（Debounce）                   | 节流（Throttle）                     |
|------------|-------------------------------------|--------------------------------------|
| 执行频率   | 停止触发后执行一次                 | 固定时间间隔内执行一次               |
| 典型场景   | 搜索框输入、按钮防止重复点击       | 页面滚动、窗口 resize、鼠标移动监听 |
| 控制方式   | 重置延迟                            | 时间间隔检查                         |

---

## 🧠 小结口诀

- 输入框建议用 **防抖**，避免每个字都请求接口
- 滚动监听建议用 **节流**，防止回调执行过频

`
        },
        {
            question: "JS中的闭包",
            answer: `
## 闭包（Closure）

- **闭包的定义：**  
  函数内部定义了另一个函数，内部函数可以访问外部函数的变量，这个内部函数和外部函数的变量形成了一个闭包。

- **作用：**  
  闭包常用于变量或函数的私有化，避免污染全局作用域。它允许你在函数外部访问函数内部的变量。

- **优点：**  
  - 实现数据封装和隐藏  
  - 保护变量不被外部直接修改  

- **缺点：**  
  - 如果闭包中持有大量变量且未及时释放，可能导致内存泄漏，造成页面卡顿甚至浏览器崩溃。

- **示例代码：**

\`\`\`js
function createCounter() {
  let count = 0; // 私有变量
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
\`\`\`
`
        },
        {
            question: "浅拷贝和深拷贝",
            answer: `
## 浅拷贝（Shallow Copy）和深拷贝（Deep Copy）

- **浅拷贝的定义**  
  浅拷贝复制对象的第一层属性。如果属性是基本类型，拷贝的是值；如果是引用类型（对象、数组等），拷贝的是引用地址，导致拷贝对象和原对象共享同一份引用数据。

- **深拷贝的定义**  
  深拷贝会递归复制对象所有层级的属性，拷贝后的对象与原对象完全独立，互不影响。

---

### 浅拷贝示例

\`\`\`js
const obj1 = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, obj1);

shallowCopy.b.c = 99;
console.log(obj1.b.c); // 99，原对象也被修改了
\`\`\`

---

### 深拷贝示例

\`\`\`js
const obj2 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj2));

deepCopy.b.c = 99;
console.log(obj2.b.c); // 2，原对象不受影响
\`\`\`

---

### 注意事项

- JSON 方法不支持函数、undefined、Date、RegExp 等特殊数据类型。  
- 复杂对象推荐使用递归实现深拷贝，或者使用第三方库如 lodash 的 _.cloneDeep。  
`
        },
        {
            question: "JS的原型和原型链",
            answer: `
## 🧬 JavaScript 的原型与原型链

---

### 🌱 什么是原型（\`[[Prototype]]\` / \`__proto__\`）

在 JS 中，每个对象在创建时都会关联另一个对象作为它的原型（prototype）。这个原型对象可以通过：

- \`Object.getPrototypeOf(obj)\`
- \`obj.__proto__\`

进行访问。

---

### 🧩 什么是构造函数的 \`prototype\`

构造函数（函数对象）都有一个 \`prototype\` 属性，它指向一个对象：
- 这个对象会被赋值给通过该构造函数创建的实例的 \`__proto__\`

\`\`\`js
function Person() {}
const p = new Person();
console.log(p.__proto__ === Person.prototype); // true
\`\`\`

---

### 🔗 什么是原型链（Prototype Chain）

当我们访问一个对象的属性或方法时，如果该对象没有，就会查找其原型对象，逐层向上查找，直到 \`null\` 为止，这形成了“原型链”。

\`\`\`js
p.toString(); 
// Person -> Object.prototype -> null
\`\`\`

> 原型链是一种对象之间的委托机制。

---

### 🧠 原型链的查找规则

1. 先查当前对象本身
2. 如果没有就去 \`__proto__\` 查找
3. 继续向上直到 \`Object.prototype\`
4. 最后是 \`null\`，表示查找终点

---

### 🔧 示例图解

\`\`\`text
p ---> Person.prototype ---> Object.prototype ---> null
\`\`\`

---

### 📌 常见面试点

| 问题                          | 回答 |
|-------------------------------|------|
| 所有对象都有原型吗？         | 是的，除了 \`Object.create(null)\` 创建的对象 |
| \`__proto__\` 和 \`prototype\` 区别？ | \`__proto__\` 是实例对象的原型指针；\`prototype\` 是构造函数的原型对象 |
| 可以修改原型链吗？            | 可以，通过 \`Object.setPrototypeOf()\` 或直接赋值 \`__proto__\` |
| \`instanceof\` 如何判断？      | 通过原型链判断：查找实例的原型链上是否包含构造函数的 \`prototype\` |

---

### ⚠️ 注意事项

- 不要滥用 \`__proto__\`，推荐使用标准 API（如 \`Object.getPrototypeOf\`）  
- 使用原型链可以共享方法，避免重复创建  
- 也要注意原型链过长可能导致性能问题  

`
        },
        {
            question: "JS的this的指向问题",
            answer: `
## 🔍 JavaScript 中的 \`this\` 指向问题

---

### 📌 基础规则

- 在 **非严格模式** 下，\`this\` 默认指向 \`window\`（全局对象）
- 在 **严格模式**（\`'use strict'\`）下，\`this\` 为 \`undefined\`
- 一般规则：**谁调用函数，\`this\` 就指向谁**

---

### 🧠 特殊情况：箭头函数中的 \`this\`

- **箭头函数不绑定自己的 \`this\`**
- 它的 \`this\` 指向定义它的 **外部上下文中的 \`this\`**

\`\`\`js
const obj = {
  name: "test",
  say: () => {
    console.log(this.name); // undefined
  }
};
\`\`\`

---

### 🔧 如何修改 \`this\` 指向

| 方法    | 用法 | 特点 |
|---------|------|------|
| \`call\`  | \`fn.call(thisArg, arg1, arg2...)\` | 立即调用，参数逐个传递 |
| \`apply\` | \`fn.apply(thisArg, [args])\`     | 立即调用，参数数组形式传递 |
| \`bind\`  | \`fn.bind(thisArg)\`               | 返回一个新的函数，不立即调用 |

---

### ✅ 示例对比

\`\`\`js
function sayName(age) {
  console.log(this.name, age);
}

const person = { name: "张三" };

sayName.call(person, 18);     // 张三 18
sayName.apply(person, [20]);  // 张三 20

const boundFn = sayName.bind(person);
boundFn(25);                  // 张三 25
\`\`\`

---

### ⚠️ 小结

- 普通函数 \`this\`：由调用方式决定
- 箭头函数 \`this\`：取定义时的上下文
- \`call/apply/bind\`：手动改变函数内部 \`this\` 指向

`
        },
        {
            question: "JS的执行上下文",
            answer: `
## 🧠 JavaScript 执行上下文（Execution Context）

---

### 📌 什么是执行上下文？

执行上下文是 JavaScript 代码被解析和执行的环境，决定了变量的可访问性和作用域。

#### 类型包括：

1. **全局执行上下文**
   - 页面加载时创建，始终只有一个
   - 变量声明会挂载到 \`window\`（非严格模式）
   - \`this\` 指向 \`window\`

2. **函数执行上下文**
   - 每次调用函数时创建
   - 每个函数都有独立的作用域链和变量环境

3. **eval 执行上下文**
   - 只在使用 \`eval()\` 时动态创建，开发中极少使用

---

### ⚙️ 执行上下文的生命周期

1. **创建阶段**
   - 创建变量对象（Variable Object，VO）
   - 建立作用域链（Scope Chain）
   - 确定 \`this\` 指向

2. **执行阶段**
   - 初始化变量，执行代码逻辑

---

### 🧱 执行上下文栈（Call Stack）

- JS 是单线程的，所有上下文都进入一个“栈”中
- 遵循**后进先出（LIFO）**

\`\`\`text
Global EC
→ fun1 EC
→ fun2 EC
（出栈顺序与执行顺序相反）
\`\`\`

---

### 🔍 示例

\`\`\`js
function foo() {
  console.log("foo");
}
function bar() {
  foo();
}
bar(); // bar → foo 顺序入栈和执行
\`\`\`

---

### ✅ 小结

| 名称     | 说明                       |
|----------|----------------------------|
| 全局上下文 | 脚本加载第一步              |
| 函数上下文 | 每次调用函数都会生成一个    |
| 栈结构     | 执行上下文以栈形式管理入出栈 |

`
        },
        {
            question: "事件循环机制",
            answer: `
## 🔄 JavaScript 的事件循环机制（Event Loop）

---

### 🧵 JS 是单线程语言

JavaScript 的执行机制基于事件循环，所有任务分为两类：

- **同步任务**：直接进入主线程执行
- **异步任务**：进入任务队列（Event Queue）

---

### 🔄 事件循环流程（简化版）

1. 执行主线程上的同步任务
2. 清空**微任务队列**（microtasks）
3. 执行**一个**宏任务（macrotask）
4. 再次清空微任务，循环往复

---

### 📦 常见任务类型

| 任务类型    | 示例                       | 优先级 |
|-------------|----------------------------|--------|
| 宏任务（macrotask） | \`setTimeout\`、\`setInterval\`、\`setImmediate\` | 低     |
| 微任务（microtask） | \`Promise.then\` | 高     |

---

### 🧪 示例代码

\`\`\`js
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

console.log('end');
\`\`\`

#### 输出顺序：

\`\`\`text
start
end
promise
setTimeout
\`\`\`

---

### 🧠 小结

- 微任务优先于宏任务
- 每次宏任务执行完都会清空一次微任务队列
- 事件循环让 JS 能异步处理任务而不阻塞主线程

`
        },
        {
            question: "Promise、A+规范、方法、async/await",
            answer: `
## 📦 Promise、A+ 规范、常用方法与 async/await

---

### 🌟 一、Promise 是什么？

\`Promise\` 是用于**管理异步操作**的一种机制，代表一个**未来才会完成的操作**。

> Promise 是构造函数，返回一个表示异步结果的对象。

#### 创建基本语法：

\`\`\`js
const promise = new Promise((resolve, reject) => {
  // 异步操作
  if (成功) resolve(result);
  else reject(error);
});
\`\`\`

---

### 🧷 二、Promise 的三种状态

1. **pending**：初始状态，未完成
2. **fulfilled**：成功，调用 \`resolve()\`
3. **rejected**：失败，调用 \`reject()\`

状态不可逆，一旦确定就不可更改。

---

### 📜 三、Promise A+ 规范核心点

| 特性              | 描述 |
|-------------------|------|
| 状态不可逆         | 一旦 \`resolve\` 或 \`reject\` 调用，状态固定 |
| then 必须返回新的 Promise | 可链式调用，避免回调地狱 |
| 支持链式调用       | \`then().then()\` 可无限级 |
| 异常捕获机制       | 支持 \`catch\` 捕获任意中断或异常 |

---

### 🛠️ 四、常用 Promise 方法

#### ✅ Promise.then / catch / finally

\`\`\`js
promise
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log("done"));
\`\`\`

#### ✅ Promise.all()

- 所有 Promise 都成功，才成功；任意一个失败就立即失败。

#### ✅ Promise.race()

- 哪个 promise 先完成（无论成功失败），就用那个结果

#### ✅ Promise.allSettled()

- 全部执行完后返回每个 Promise 的状态（不会中断）。

---

### ⏳ 五、async / await

> async / await 是基于 Promise 的语法糖，使异步代码更像同步代码，提升可读性。

#### 📌 使用方法：

- \`async\` 修饰函数，返回一个 Promise
- \`await\` 等待 Promise 结果，**只能在 async 函数中使用**

\`\`\`js
async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
\`\`\`

---

### ⚠️ 注意事项

| 事项            | 说明 |
|------------------|------|
| await 后面是 Promise | 否则立即返回值，无阻塞作用 |
| try/catch 捕获异常 | 代替 \`catch\` |
| await 会阻塞当前作用域 | 但不会阻塞整个线程 |

---

### 🧠 小结

| 概念           | 说明 |
|----------------|------|
| Promise        | 处理异步任务的标准方式 |
| A+ 规范        | 规范化了 Promise 行为 |
| async/await    | 让异步代码更简洁易读 |
| all / race     | 控制多个 Promise 并发行为 |

---
✅ 掌握 Promise 是理解异步编程的核心，配合 async/await 写出更清晰的异步逻辑！
`
        },
        {
            question: "事件冒泡、捕获和事件委托",
            answer: `
## 📚 JS 中的事件传播机制与事件委托

---

### 🌀 一、事件传播机制简介

事件传播分为 **三个阶段**：

1. **捕获阶段（Capturing Phase）**：事件从 \`window\` 向目标元素传递
2. **目标阶段（Target Phase）**：事件到达目标元素
3. **冒泡阶段（Bubbling Phase）**：事件从目标元素向上传递到 \`window\`

---

### 🌊 二、事件冒泡（Event Bubbling）

> 默认行为。事件由目标元素向上传播到父级、祖先元素，直到 \`document\`

#### 示例：

\`\`\`html
<div id="outer">
  <button id="inner">点击我</button>
</div>
\`\`\`

\`\`\`js
outer.addEventListener('click', () => console.log('outer'));
inner.addEventListener('click', () => console.log('inner'));
\`\`\`

✅ 输出：
\`\`\`
inner
outer
\`\`\`

#### 阻止冒泡：

\`\`\`js
inner.addEventListener('click', (e) => {
  e.stopPropagation();
});
\`\`\`

---

### 👁 三、事件捕获（Event Capturing）

> 可选行为。事件从 \`window → document → html → body → ...\` 向目标元素传递

#### 如何监听捕获阶段事件：

\`\`\`js
element.addEventListener('click', handler, true); // 第三个参数为 true
\`\`\`

#### 示例对比：

\`\`\`js
outer.addEventListener('click', () => console.log('outer 捕获'), true);
outer.addEventListener('click', () => console.log('outer 冒泡'), false);
\`\`\`

✅ 输出（点击 inner）：
\`\`\`
outer 捕获
outer 冒泡
\`\`\`

---

### 🔁 四、事件委托（Event Delegation）

事件委托是一种通过 **父元素统一监听**，来处理 **子元素事件** 的技巧。

#### 原理：

- 利用冒泡机制
- 在父级绑定事件，事件冒泡触发时判断触发源（\`event.target\`）

#### 优点：

- 提高性能（避免重复绑定）
- 动态绑定新元素事件无需额外添加监听器

#### 示例：

\`\`\`js
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('点击了', e.target.textContent);
  }
});
\`\`\`

---

### 🧠 总结对比

| 概念         | 说明                            | 默认行为 |
|--------------|----------------------------------|----------|
| 事件捕获     | 从外到内触发（父 → 子）         | ❌       |
| 事件冒泡     | 从内到外触发（子 → 父）         | ✅       |
| 事件委托     | 父元素监听子元素事件的技巧      | ✅       |

---

### ✅ 实际开发建议

- 多使用 **事件委托**，提升性能与代码灵活性
- 使用 \`stopPropagation()\` 控制事件传播
- \`addEventListener\` 第三个参数可控制监听阶段（true 为捕获）

`
        },
        {
            question: "ES6新增的 Set 和 Map",
            answer: `
## 📦 ES6 中新增的 Set 和 Map 数据结构

---

### 🔹 一、Set：一种 **不重复** 的集合

> \`Set\` 是 ES6 提供的一种新的数据结构，所有成员都是唯一的，没有重复值。

#### ✅ 基本用法

\`\`\`js
const s = new Set([1, 2, 3, 3, 4]);
console.log(s); // Set(4) {1, 2, 3, 4}
\`\`\`

#### 📌 常用方法

| 方法              | 描述                         |
|-------------------|------------------------------|
| \`.add(value)\`     | 添加元素                     |
| \`.delete(value)\`  | 删除指定元素                 |
| \`.has(value)\`     | 判断元素是否存在             |
| \`.clear()\`        | 清空所有元素                 |
| \`.size\`           | 元素个数（属性）             |

#### 🔁 遍历方法（与 Array 相同）

- \`forEach()\`
- \`for...of\`
- \`values()\`
- \`keys()\`（同 \`values()\`）
- \`entries()\`（键值对相同）

#### ✅ 去重应用示例

\`\`\`js
const arr = [1, 2, 2, 3, 3];
const uniqueArr = [...new Set(arr)];
\`\`\`

---

### 🔸 二、Map：**键值对集合（可任意类型为键）**

> Map 是一种结构更加灵活的键值对集合，**键可以是任意类型**（对象、函数、基本类型）。

#### ✅ 基本用法

\`\`\`js
const map = new Map();
const objKey = { name: "key" };

map.set(objKey, "value");
console.log(map.get(objKey)); // "value"
\`\`\`

#### 📌 常用方法

| 方法               | 描述                     |
|--------------------|--------------------------|
| \`.set(key, val)\`   | 设置键值对               |
| \`.get(key)\`        | 获取指定键的值           |
| \`.has(key)\`        | 判断是否包含该键         |
| \`.delete(key)\`     | 删除指定键               |
| \`.clear()\`         | 清空所有键值对           |
| \`.size\`            | 获取键值对个数（属性）   |

#### 🔁 遍历方法

- \`map.keys()\`
- \`map.values()\`
- \`map.entries()\`
- \`forEach()\`（可获取键和值）

---

### 🧠 Set 和 Map 对比总结

| 特性        | Set                          | Map                          |
|-------------|-------------------------------|------------------------------|
| 键的唯一性  | 元素值必须唯一                | 键必须唯一                   |
| 键的类型    | 元素只能是值                  | 键可以是任意类型             |
| 用途        | 去重、集合运算               | 更灵活的键值映射             |
| 取值方式    | 无法通过 key 取值（无键值）   | 通过 \`get(key)\` 获取值     |
| 性能        | 查询快，适合做集合处理        | 插入/查找性能高，适合存储关系 |

---

### ✅ 实际应用场景

- **Set**：
  - 数组去重
  - 多集合并交集等操作（可配合扩展运算符、Array.from 使用）
- **Map**：
  - 用对象作为 key 存储数据
  - 实现缓存、状态管理、数据结构优化等

`
        },
        {
            question: "JS的垃圾回收机制",
            answer: `
## 🗑️ JavaScript 的垃圾回收机制（Garbage Collection）

---

### 🔹 一、什么是垃圾回收？

> JavaScript 是一门拥有 **自动内存管理机制** 的语言。开发者不需要手动释放内存，**JavaScript 引擎会自动清除那些“不可访问”的内存数据**。

这就是 **垃圾回收机制（GC）** 的核心目的：**释放不再使用的内存，防止内存泄漏**。

---

### 🔸 二、常见的垃圾回收算法

#### ✅ 1. 引用计数（Reference Counting）

- 每个值维护一个引用次数，引用数为 0 的值会被回收。
- 📉 缺点：**无法处理循环引用**

\`\`\`js
let obj1 = {};
let obj2 = {};
obj1.ref = obj2;
obj2.ref = obj1; // 循环引用 => 无法回收（老版本）
\`\`\`

---

#### ✅ 2. 标记清除（Mark and Sweep）✅现代主流

- 以**全局对象为根**，查找所有“可达对象”
- 无法访问的对象会被“标记”为可清除并释放内存
- ✅ 现代浏览器（如 Chrome V8）采用此机制

\`\`\`js
function test() {
  let data = { name: "chatgpt" };
}
test(); // data 无引用，出栈后会被回收
\`\`\`

---

### 🔁 三、垃圾回收的触发时机

| 场景                | 描述                                     |
|---------------------|------------------------------------------|
| 内存占用达到阈值    | 浏览器设定的内存限制被触发               |
| 主线程空闲          | 浏览器利用空闲时间进行 GC                |
| 主动触发（调试用）  | 可在 Chrome 中手动触发 GC（开发者工具） |

---

### 🔍 四、常见内存泄漏场景

| 类型             | 描述 |
|------------------|------|
| 全局变量泄漏     | 忘记用 \`let/const\` 声明变量，挂在 \`window\` 上 |
| 闭包             | 闭包持有外部变量引用，导致变量常驻内存 |
| DOM 引用未清理   | JS 仍然保存已经被移除的 DOM 节点 |
| 定时器未清除     | \`setInterval\` 没有 clear，引用一直存在 |
| 缓存未清理       | Map/Set 缓存持续增长但无释放逻辑 |

---

### 🧠 五、避免内存泄漏

- 避免不必要的全局变量
- 组件卸载时清除定时器 / 事件监听 / 引用
- 控制闭包使用，及时释放
- 使用 Chrome DevTools 进行性能分析（Memory tab）

---

### ✅ 总结对比

| 特性            | 引用计数                    | 标记清除（现代浏览器）     |
|-----------------|-----------------------------|-----------------------------|
| 基本原理        | 引用次数为 0 被清除         | 可达性分析，标记不可达对象 |
| 是否支持循环引用 | ❌ 不支持                   | ✅ 支持                     |
| 使用范围        | 较老的浏览器（如 IE）       | 所有现代浏览器              |

---

### 🧪 实际场景例子

- 调试内存泄漏可通过 DevTools 中的 **Memory 快照 + Timeline 分析**
- 在 React/Vue 中，组件卸载要清理监听器、防止闭包泄漏

`
        }




    ]

    return (
        <>
            <div>
                <ArticleList data={jsArticles} centerTitle="JavaScript" icon={<FaJs color="#F7DF1E"/>}/>
            </div>
        </>
    );
};
export default ArticlesJavaScript;