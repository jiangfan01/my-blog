import React from "react";
import ArticleList from "../../../components/ArticleList/ArticleList.tsx";
import {FaVuejs} from "react-icons/fa";

const ArticlesVue: React.FC = () => {
    const vueArticles = [
        {
            question: "Vue 的响应式原理",
            answer: `
## 🔁 Vue 的响应式原理（以 Vue 3 为主）

---

### 📌 一、什么是响应式？

响应式（Reactivity）指的是：**当数据变化时，视图会自动更新，无需手动操作 DOM**。

---

### 🧱 二、Vue2 与 Vue3 响应式原理对比

| 版本   | 响应式实现方式            | 特点/问题                        |
|--------|----------------------------|----------------------------------|
| Vue2   | \`Object.defineProperty\`   | 不支持数组索引/新增属性监听     |
| Vue3   | \`Proxy\` + Reflect         | 更强大、更全面、更灵活           |

---

### 🔎 三、Vue3 响应式原理核心流程

#### ✅ 核心工具：

- **Proxy**：劫持对象的 get/set
- **Reflect**：对对象的基本操作，如 Reflect.get、Reflect.set

#### ✅ 实现流程图解：

1. **创建响应式对象**：使用\`reactive\`函数将一个普通对象转换为响应式对象。
2. **依赖收集**：在读取属性时，通过\`track\`函数收集当前正在执行的副作用函数（例如组件的渲染函数）
作为依赖。
3. **触发更新**：在修改属性时，通过\`trigger\`函数触发所有收集到的依赖，重新运行副作用函数。
4. **自动更新视图**：依赖更新，重新执行渲染函数

#### 示例代码：

\`\`\`js
import { reactive, effect } from 'vue';

const state = reactive({ count: 0 });

effect(() => {
  console.log(state.count); // 自动依赖收集
});

state.count++; // 修改后会自动触发 effect
\`\`\`

---

### 🧠 四、响应式系统中的依赖追踪

Vue 内部使用了一个**依赖收集器 Dep**：

- 每个响应式属性对应一个 Dep 实例
- \`effect(fn)\` 会注册依赖关系
- 属性变更时通知相关副作用函数重新执行

---

### ⚠️ 五、响应式陷阱（注意点）

| 场景                         | 说明                                       |
|------------------------------|--------------------------------------------|
| 不能代理原始值               | \`reactive(1)\` 无效，只能作用于对象       |
| 深层嵌套对象                 | Vue3 默认是“深响应式”                     |
| reactive 与 ref 的区别       | \`ref\` 适用于原始类型，内部会包一层对象   |
| 不能使用 Proxy 检测新增属性 | 需通过 \`Reflect.defineProperty\` 手动处理 |

---

### 🔄 六、ref 和 reactive 区别

| 特性       | reactive                | ref                           |
|------------|--------------------------|--------------------------------|
| 数据类型   | 用于对象、数组           | 用于原始类型或单值             |
| 解包访问   | 模板中自动解包           | JS 中访问需要加 \`.value\`     |
| 使用场景   | 管理多个属性组成的对象   | 管理单一值或 DOM 引用         |

---

### ✅ 七、总结

- 本质上差异Proxy是在拦截对象的基本方法包含了对象的所有操作和函数，而defineProperty只是众多内部方法之一。
- vue2的defineProperty有缺陷，他只能拦截现有的属性读写，而Proxy可以全面实现对象内部的所有方法的拦截
- 一句话概括响应式原理本质上就是数据和函数关联。大致流程是vue通过数据劫持vue2通过Object.defineProperty vue3 通过proxy代理实现对数据的劫持读写，劫持到数据后收集依赖收集依赖的函数或组件产生关联，最后就是派发更新数据更新时通知被依赖的组件或者函数去更新渲染

`
        },
        {
            question: "Vue 的模板语法",
            answer: `
## 🧩 Vue 模板语法全面梳理

Vue 使用基于 HTML 的模板语法，将 DOM 与组件数据进行声明式绑定，常用于开发视图结构清晰、数据响应式强的页面。

---

### 🔧 一、插值表达式

#### 1. 文本插值（{{ }}）

\`\`\`html
<span>{{ message }}</span>
\`\`\`

#### 2. 原始 HTML

\`\`\`html
<div v-html="rawHtml"></div>
\`\`\`

---

### 🎯 二、指令（Directives）

#### ✅ 常见指令：

| 指令         | 作用                             |
|--------------|----------------------------------|
| \`v-bind\`     | 绑定属性                         |
| \`v-model\`    | 表单双向绑定                     |
| \`v-if\`       | 条件渲染（完全移除/插入 DOM）   |
| \`v-else-if\`  | 条件判断                         |
| \`v-else\`     | 条件兜底                         |
| \`v-show\`     | 条件显示（控制 display 属性）   |
| \`v-for\`      | 列表渲染                         |
| \`v-on\`       | 事件绑定（语法糖为 @）           |
| \`v-slot\`     | 插槽内容传递                     |
| \`v-pre\`      | 跳过编译                         |
| \`v-cloak\`    | 防止闪烁                         |
| \`v-once\`     | 只渲染一次，不再响应式更新       |

---

### 🧠 三、指令语法细节

#### 1. v-bind 简写

\`\`\`html
<!-- 完整写法 -->
<img v-bind:src="imgUrl" />

<!-- 简写 -->
<img :src="imgUrl" />
\`\`\`

#### 2. v-on 简写

\`\`\`html
<!-- 完整写法 -->
<button v-on:click="doSomething"></button>

<!-- 简写 -->
<button @click="doSomething"></button>
\`\`\`

---

### 🔄 四、列表渲染 v-for

\`\`\`html
<ul>
  <li v-for="(item, index) in items" :key="index">
    {{ index }} - {{ item }}
  </li>
</ul>
\`\`\`

> 💡 建议始终添加 \`:key\` 提升渲染性能

---

### ✅ 五、条件渲染

\`\`\`html
<div v-if="isShow">展示内容</div>
<div v-else-if="isOther">其他内容</div>
<div v-else>默认内容</div>
\`\`\`

---

### 📥 六、双向绑定 v-model

适用于 input/textarea/select 等表单元素：

\`\`\`html
<input v-model="username" />
\`\`\`

---

### 🔌 七、事件修饰符

| 修饰符       | 含义             |
|--------------|------------------|
| \`.stop\`     | 阻止冒泡         |
| \`.prevent\`  | 阻止默认事件     |
| \`.capture\`  | 使用捕获模式     |
| \`.once\`     | 只触发一次       |
| \`.self\`     | 只在自身触发     |
| \`.native\`   | 监听原生事件（2.x）|

\`\`\`html
<button @click.stop.prevent="submit">提交</button>
\`\`\`

---

### ✳️ 八、计算属性 & 方法绑定

\`\`\`html
<p>姓名：{{ fullName }}</p>

<script>
export default {
  computed: {
    fullName() {
      return this.first + ' ' + this.last;
    }
  }
};
</script>
\`\`\`

---

### 🧠 九、模板语法小结

| 特性         | 示例                  | 说明                 |
|--------------|-----------------------|----------------------|
| 文本插值     | {{ title }}           | 输出响应式变量       |
| 属性绑定     | :src="imgUrl"         | 动态绑定属性         |
| 条件渲染     | v-if / v-show         | 控制节点显示与否     |
| 列表渲染     | v-for="item in list"  | 渲染数组数据         |
| 事件监听     | @click="handleClick"  | 响应用户操作         |
| 表单双绑     | v-model="username"    | 实现输入和数据联动   |

---
📌 **模板语法的本质**：Vue 模板最终会被编译为 JavaScript 渲染函数（render function），并结合响应式系统自动触发更新。

`
        },
        {
            question: "Vue 的生命周期",
            answer: `
## 🔁 Vue 生命周期详解（Composition + Options API）

Vue 生命周期是指：**组件从创建、挂载、更新到卸载的整个过程中的钩子函数**，开发者可在这些时机执行逻辑，如请求数据、清除定时器等。

---

### 📦 一、Vue 3 Composition API 生命周期（常用）

| 生命周期钩子     | 触发时机                     | 说明                           |
|------------------|------------------------------|--------------------------------|
| \`onBeforeMount\` | 组件挂载前                   | DOM 尚未创建，适合初始化逻辑   |
| \`onMounted\`     | 组件挂载后                   | DOM 渲染完成，适合 DOM 操作、请求等 |
| \`onBeforeUpdate\`| 数据更新前                   | 组件将重新渲染，适合对比前后数据 |
| \`onUpdated\`     | 数据更新后                   | DOM 已更新，适合依赖最新 DOM 的逻辑 |
| \`onBeforeUnmount\` | 组件卸载前                 | 清理工作如事件解绑、定时器清除 |
| \`onUnmounted\`   | 组件卸载完成                 | 组件已被移除，确认清理完成     |

#### ✅ 示例代码：

\`\`\`ts
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log('组件已挂载');
});

onUnmounted(() => {
  console.log('组件已卸载');
});
\`\`\`

---

### 🧱 二、Vue 2 Options API 生命周期（经典）

| 生命周期钩子         | 描述                                      |
|----------------------|-------------------------------------------|
| \`beforeCreate\`       | 实例初始化，data 和 methods 都未创建     |
| \`created\`            | 实例创建完成，可访问 data/methods，但无 DOM |
| \`beforeMount\`        | 模板编译完成，但 DOM 尚未挂载           |
| \`mounted\`            | DOM 挂载完成，常用于请求、DOM 操作等     |
| \`beforeUpdate\`       | 数据变更，DOM 还未重新渲染              |
| \`updated\`            | 数据变更且 DOM 已重新渲染               |
| \`beforeDestroy\`      | 实例销毁前，清除操作                    |
| \`destroyed\`          | 实例销毁完成，已解绑所有资源            |

#### ✅ 简略流程图：

\`\`\`
beforeCreate → created → beforeMount → mounted
数据更新时：
beforeUpdate → updated
销毁时：
beforeUnmount → unmounted
\`\`\`

---

### 🧠 三、生命周期使用场景

| 钩子             | 场景案例                                 |
|------------------|------------------------------------------|
| \`mounted\`       | 发起 API 请求、初始化动画、第三方库挂载 |
| \`beforeUnmount\` | 清除定时器、解绑事件、取消订阅          |
| \`updated\`       | DOM 更新后需要获取新尺寸或位置的场景    |

---

### 🎯 四、Composition API 生命周期对照表（Vue3）

| Vue2（Options）   | Vue3（Composition） |
|-------------------|---------------------|
| beforeCreate       | -                   |
| created            | -                   |
| beforeMount        | onBeforeMount       |
| mounted            | onMounted           |
| beforeUpdate       | onBeforeUpdate      |
| updated            | onUpdated           |
| beforeDestroy      | onBeforeUnmount     |
| destroyed          | onUnmounted         |

---

### ✅ 五、小结

- Vue 生命周期让你**精确控制组件的每个阶段行为**
- Vue3 更推荐使用 \`Composition API + 生命周期钩子函数\`
- 常用组合：\`onMounted + onUnmounted\`（初始化 + 清理）

📌 建议将副作用逻辑都集中写在生命周期钩子中，方便管理和维护。

`
        },
        {
            question: "vue3的setup",
            answer: `
## 📌Setup
- Setup() 是 Vue 3 中最核心的概念之一，也是 Composition API 的入口函数。它用于编写组件的响应式逻辑、变量定义、生命周期等。
- Setup相当于vue2的逻辑准备区，只不过用一个setup代替了vue2的所有逻辑，他的执行时间等同于vue2中的beforeCreated.

\`\`\`ts
- 语法糖写法
<script setup></script>
\`\`\`

| 特性            | setup 中                 | options API 中           |
|------------------|--------------------------|---------------------------|
| this             | ❌ 无法使用              | ✅ 可用，指向组件实例     |
| 数据声明         | ref / reactive            | data() return 对象        |
| 方法             | 普通函数或箭头函数       | methods 对象              |
| 生命周期         | onXxx 组合式 API          | mounted / created 等选项  |

`
        },
        {
            question: "v-model 双向绑定原理",
            answer: `
## 🔄 Vue 的 v-model 双向绑定原理

---

### 🧠 一、什么是 v-model？

\`v-model\` 是 Vue 提供的一个用于实现**表单控件双向数据绑定**的语法糖，常用于 \`input\`、\`textarea\`、\`select\` 等元素。

---

### 📦 二、v-model 的底层原理（以 Vue 2 为例）

#### 实际等价于：

\`\`\`html
<input v-model="msg">
\`\`\`

✔️ 等价于：

\`\`\`html
<input :value="msg" @input="msg = $event.target.value">
\`\`\`

- \`:value\` 实现从数据 ➡ 视图
- \`@input\` 实现从视图 ➡ 数据

---

### 📦 三、Vue 3 中的 v-model 改进

#### 默认等价于：

\`\`\`html
<CustomInput v-model="username" />
\`\`\`

✔️ 等价于：

\`\`\`html
<CustomInput :modelValue="username" @update:modelValue="username = $event" />
\`\`\`

### Vue 3 中使用 v-model 的组件写法：

\`\`\`vue
<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>
\`\`\`

---

### 🔧 四、自定义组件使用 v-model（Vue2）

Vue2 中要实现 v-model，需要：

- 组件 \`props: ['value']\`
- 触发 \`this.$emit('input', newVal)\`

\`\`\`vue
<template>
  <input :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  props: ['value']
};
</script>
\`\`\`

---

### 🎯 五、v-model 的核心机制

| 操作方向         | 实现方式                       |
|------------------|--------------------------------|
| 数据更新视图     | 通过绑定 \`value / modelValue\` |
| 视图更新数据     | 通过 \`@input\` 或 \`@update:modelValue\` 事件 |

---

### ✨ 六、Vue 3 支持多个 v-model

Vue 3 允许多个 v-model，通过自定义参数：

\`\`\`html
<MyComp v-model:title="title" v-model:content="content" />
\`\`\`

等价于：

\`\`\`html
<MyComp
  :title="title"
  @update:title="title = $event"
  :content="content"
  @update:content="content = $event"
/>
\`\`\`

---

### ✅ 七、小结

- \`v-model\` 是一个语法糖，实际是绑定 \`value + input/update:modelValue\`
- Vue3 更灵活，支持多个 v-model、自定义参数
- 自定义组件要手动处理 \`props + emit\` 才能实现绑定

📌 **建议**：表单场景下优先使用 \`v-model\` 提升开发效率与代码简洁性

`
        },
        {
            question: "Vue 的组件通信",
            answer: `
## 🔗 Vue 的组件通信方式汇总

---

### 👨‍👩‍👧 1. 父子组件通信

- **父传子：** 使用 \`props\`，数据是**单向传递**的（父 ➝ 子）。
- **子传父：** 使用 \`$emit\` 触发自定义事件。推荐在 Vue3 中使用 \`defineEmits()\` 显式声明事件。

---

### 🧍‍♂️↔️🧍‍♀️ 2. 兄弟组件通信

- 通过**状态提升**（将共享状态提升至它们的共同父组件）。

---

### 📢 3. 事件总线（Vue 2）

- 借助中央事件总线（event bus）通信，如：

  \`\`\`js
  // Vue 2 中写法
  EventBus.$emit('eventName', data);
  EventBus.$on('eventName', callback);
  \`\`\`

- ⚠️ Vue 3 已不推荐使用 event bus，建议使用轻量库 \`mitt\` 代替。

---

### 🏗️ 4. provide / inject（跨层级通信）

- **祖先组件**使用 \`provide()\` 提供数据。
- **任意后代组件**通过 \`inject()\` 获取该数据。

适合用在深层嵌套、祖孙通信等场景。

---

### 🌐 5. 全局状态管理（Vuex / Pinia）

- 用于中大型项目的复杂通信。
- **Vue 3 推荐使用 Pinia**，相比 Vuex 更轻量、类型更好。

\`\`\`ts
// 示例
const userStore = useUserStore();
userStore.username = '张三';
\`\`\`

---

### 🚦 6. URL 传参通信（借助 Vue Router）

- 通过路由参数传递数据：

\`\`\`ts
router.push({ name: 'Detail', params: { id: 123 } });
\`\`\`

适合在页面跳转或刷新保留状态的场景。

---

### ✅ 总结

| 通信方式         | 适用场景             | 特点                     |
|------------------|----------------------|--------------------------|
| props / emit      | 父子组件             | 简单直接，推荐使用       |
| 状态提升          | 兄弟组件             | 单一数据源，数据流清晰   |
| provide / inject | 跨层级组件           | 跨多层嵌套，适合祖孙关系 |
| mitt / EventBus  | 非父子、轻量通信     | Vue3 中推荐 mitt         |
| Vuex / Pinia     | 全局状态管理         | 大型项目最佳实践         |
| 路由传参          | 跨页通信             | 可持久，但非响应式       |

---
📌 **建议按项目规模选择通信方式：**
- 小项目用 props / emit
- 中型项目可用 provide / inject / mitt
- 大型项目推荐 Pinia 管理全局状态
`
        },
        {
            question: "Vue 的 keep-alive",
            answer: `
## 🧊 Vue 的 \`<keep-alive>\` 缓存组件机制

---

### 📌 一、什么是 \`<keep-alive>\`？

\`<keep-alive>\` 是 Vue 内置的**抽象组件**，用于缓存被包裹的组件，避免组件重复渲染和销毁，从而提升性能。

---

### 🚀 二、使用场景

- 页面切换频繁，但需要保留状态  
- 表单输入内容，切换后回来不希望重置  
- Tab 页面切换、缓存子路由组件等

---

### 🧪 三、基本用法

\`\`\`vue
<keep-alive>
  <component :is="activeView" />
</keep-alive>
\`\`\`

搭配 Vue Router：

\`\`\`vue
<keep-alive>
  <router-view />
</keep-alive>
\`\`\`

---

### ⚙️ 四、常用属性

| 属性      | 类型              | 说明                                 |
|-----------|-------------------|--------------------------------------|
| \`include\` | string / RegExp / Array | 指定要缓存的组件名                   |
| \`exclude\` | string / RegExp / Array | 指定不需要缓存的组件名               |
| \`max\`     | number            | 最多缓存组件实例的个数，超出将自动移除 |

\`\`\`vue
<keep-alive include="Home,Profile" max="5">
  <router-view />
</keep-alive>
\`\`\`

---

### ⏱️ 五、专属生命周期钩子

被缓存的组件会触发：

- \`activated\`：组件被激活（显示）时调用  
- \`deactivated\`：组件被缓存（隐藏）时调用

\`\`\`ts
onActivated(() => {
  console.log("进入缓存组件");
});

onDeactivated(() => {
  console.log("离开缓存组件");
});
\`\`\`

---

### 🧠 六、工作原理简述

1. 首次加载时正常挂载组件并缓存
2. 再次访问时，直接使用缓存实例而非重新创建
3. 离开时不会销毁，只是暂时“冻结”状态

---

### ✅ 七、小结

| 优点                               | 缺点                           |
|------------------------------------|--------------------------------|
| 保留组件状态，切换更流畅           | 长时间缓存可能占用过多内存     |
| 提升性能，减少重复创建和销毁       | 生命周期管理需特别注意         |

📌 建议搭配 \`include\`、\`max\` 过滤和限制缓存范围，提升可控性与稳定性。

`
        },
        {
            question: "Vue 的 nextTick",
            answer: `
## 🕒 Vue 的 \`nextTick\` 用法与原理

---

### 📌 一、什么是 \`nextTick\`？

Vue 的 DOM 更新是**异步执行的**。当数据变化时，Vue 并不会立即更新 DOM，而是把更新任务放入微任务队列中。

\`nextTick\` 的作用是：**等待 Vue 完成 DOM 更新后再执行回调函数**。

---

### 📦 二、典型使用场景

- 需要在 **DOM 更新后访问最新的 DOM 元素**
- 操作 DOM 时保证其为最新状态（如手动获取宽高、调用滚动、聚焦）

---

### 🧪 三、使用方式（Vue3）

#### 在 \`setup\` 中使用：

\`\`\`ts
import { nextTick, ref, onMounted } from 'vue';

const count = ref(0);
const el = ref(null);

onMounted(() => {
  count.value++;

  nextTick(() => {
    // DOM 已更新，可访问最新的 DOM
    console.log(el.value?.offsetHeight);
  });
});
\`\`\`

---

### 🔁 四、更新流程示意

1. 修改响应式数据  
2. DOM 不会立刻更新  
3. 进入微任务队列，等待本轮事件循环结束  
4. DOM 更新完成后，执行 \`nextTick\` 中的回调

---

### ⚙️ 五、配合动画/第三方库常见写法

\`\`\`ts
await nextTick();
// 此时 DOM 已更新
startAnimation();
\`\`\`

或：

\`\`\`ts
nextTick(() => {
  // DOM 已完成更新
  doSomethingWithUpdatedDOM();
});
\`\`\`

---

### ✅ 六、小结

| 特点             | 描述 |
|------------------|------|
| 更新时机         | DOM 更新之后 |
| 类型             | 返回 Promise 或接收回调函数 |
| 常见用途         | DOM 操作、动画、聚焦等 |

📌 **建议**：只在需要访问更新后的 DOM 时使用 \`nextTick\`，否则不需要额外调用。

`
        },
        {
            question: "Vue 的 Slot",
            answer: `
## 🎯 Vue 的 Slot 插槽机制详解

---

### 📌 一、什么是 Slot？

\`<slot>\` 是 Vue 提供的一种**内容分发机制**，用于组件封装时向子组件传递结构化内容，实现**灵活布局与复用**。

---

### 🧪 二、基本用法（默认插槽）

父组件向子组件插入内容：

\`\`\`vue
<!-- 父组件 -->
<Dialog>
  <p>这是插入的内容</p>
</Dialog>

<!-- 子组件 -->
<template>
  <div class="dialog">
    <slot></slot> <!-- 渲染插入的内容 -->
  </div>
</template>
\`\`\`

---

### 🎯 三、具名插槽

为插槽命名，实现多区域分发。

\`\`\`vue
<!-- 父组件 -->
<Dialog>
  <template #header>
    <h3>标题</h3>
  </template>
  <template #footer>
    <button>关闭</button>
  </template>
</Dialog>

<!-- 子组件 -->
<template>
  <div class="dialog">
    <header><slot name="header" /></header>
    <main><slot /></main>
    <footer><slot name="footer" /></footer>
  </div>
</template>
\`\`\`

---

### 🧠 四、作用域插槽（scoped slot）

当父组件需要**访问子组件内部数据**时使用。

#### 子组件暴露数据：

\`\`\`vue
<!-- 子组件 -->
<slot :user="user"></slot>
\`\`\`

#### 父组件接收并使用：

\`\`\`vue
<!-- 父组件 -->
<UserCard>
  <template #default="{ user }">
    <p>{{ user.name }}</p>
  </template>
</UserCard>
\`\`\`

---

### 📋 五、默认内容（fallback content）

如果父组件没有传内容，则显示默认内容：

\`\`\`vue
<slot>暂无内容</slot>
\`\`\`

---

### ✅ 六、小结

| 插槽类型       | 特点说明                                   |
|----------------|--------------------------------------------|
| 默认插槽       | 最基础形式，内容自动注入组件中             |
| 具名插槽       | 多区域内容插入，适合复杂布局组件           |
| 作用域插槽     | 子传父结构 + 数据，适合表格、列表类组件    |
| 默认内容       | 无传入内容时显示默认内容                   |

📌 插槽机制是 Vue 封装高复用组件的核心能力，灵活使用能大幅提升组件通用性。

`
        },
        {
            question: "Vue 中的 watch 和 watchEffect",
            answer: `
## 👁️ Vue 的 \`watch\` 与 \`watchEffect\` 对比与使用

---

### 📌 一、相同点

- 都用于**监听响应式数据变化**
- 都可执行**副作用逻辑**（如发请求、打印、更新 DOM）
- 都是 Vue Composition API 提供的响应式侦听器

---

### 🎯 二、watch 用法详解

用于**精确监听一个或多个特定的响应式数据源**。

#### ✅ 基本语法：

\`\`\`ts
watch(source, callback, options?);
\`\`\`

#### 📦 示例：监听单个 ref

\`\`\`ts
const count = ref(0);

watch(count, (newVal, oldVal) => {
  console.log("count 变了：", newVal, oldVal);
});
\`\`\`

#### 📦 示例：监听多个数据

\`\`\`ts
watch([foo, bar], ([newFoo, newBar], [oldFoo, oldBar]) => {
  // 多源监听
});
\`\`\`

#### ⚙️ 常用选项：

| 选项         | 说明                       |
|--------------|----------------------------|
| immediate    | 是否立即执行一次回调       |
| deep         | 是否深度监听（对象内部变化） |
| flush        | 控制执行时机（post、sync）  |

---

### ⚡ 三、watchEffect 用法详解

用于**自动收集依赖**，不需要手动指定监听对象，适合快速响应式副作用。

#### ✅ 基本用法：

\`\`\`ts
watchEffect(() => {
  console.log(count.value); // 自动追踪依赖
});
\`\`\`

#### ⚠️ 特点：

- 初始化时立即执行一次
- 自动追踪响应式依赖（依赖什么，触发什么）
- 不支持精确控制新旧值

---

### 📊 四、对比总结

| 特性             | \`watch\`                         | \`watchEffect\`                     |
|------------------|----------------------------------|--------------------------------------|
| 依赖收集方式     | 手动指定监听对象                | 自动追踪响应式依赖                  |
| 是否立即执行     | 默认否，可配置 \`immediate\`     | 默认立即执行一次                    |
| 是否能得知旧值   | ✅ 支持                          | ❌ 不支持旧值                        |
| 控制性强弱       | 更强，适合明确目标              | 简洁，适合快速建立响应式副作用      |
| 使用场景         | 明确数据变化处理                | 快速绑定副作用逻辑（如打印、请求） |

---

### 🧠 五、小结建议

- 想监听**某个数据变化** ➜ 使用 \`watch\`
- 想快速响应多个依赖 ➜ 使用 \`watchEffect\`
- 若需使用旧值或进行复杂判断 ➜ 优先使用 \`watch\`

📌 推荐：开发中**优先尝试 watchEffect，复杂逻辑再用 watch**。
`
        },
        {
            question: "Vue 中的 computed",
            answer: `
## 🧠 Vue 的 \`computed\` 计算属性详解

---

### 📌 一、什么是 \`computed\`？

\`computed\` 是 Vue 中用于**声明响应式计算属性**的 API。它的值由依赖项计算得出，**具备缓存能力**，仅在依赖变化时重新计算。

---

### 🧪 二、基本用法

\`\`\`ts
import { computed, ref } from 'vue';

const count = ref(1);
const double = computed(() => count.value * 2);

console.log(double.value); // 输出 2
\`\`\`

> 当 \`count.value\` 发生变化时，\`double\` 会自动更新

---

### ⚙️ 三、特点 vs 普通函数

| 特性             | computed                     | 普通函数（methods）         |
|------------------|------------------------------|-----------------------------|
| 缓存             | ✅ 依赖不变则返回缓存         | ❌ 每次都会重新执行         |
| 响应式追踪       | ✅ 自动追踪依赖               | ❌ 不会自动收集响应式依赖   |
| 使用方式         | 可用于模板或 JS 中             | 常用于事件触发时             |

---

### 🔁 四、计算属性 vs watch

| 比较点       | computed                         | watch                            |
|--------------|----------------------------------|----------------------------------|
| 是否缓存     | ✅ 是                            | ❌ 否                            |
| 是否需要回调 | ❌ 不需要，直接返回值            | ✅ 需要回调函数                 |
| 使用场景     | 显示值、派生状态                 | 异步请求、副作用逻辑处理       |

---

### ✍️ 五、带 getter/setter 的计算属性

\`\`\`ts
const name = ref('Vue');

const fullName = computed({
  get: () => name.value + ' 3.0',
  set: (val) => {
    name.value = val.replace(' 3.0', '');
  }
});

fullName.value = 'Vue 4.0';
console.log(name.value); // 输出 Vue 4.0
\`\`\`

---

### ✅ 六、小结

- \`computed\` 更适合用于派生值展示  
- 与 \`ref\` 或 \`reactive\` 结合使用更强大  
- 提高性能，减少不必要计算

📌 **建议：**能用 \`computed\` 的场景优先使用它，减少手动逻辑，提高代码可读性与响应性。

`
        },
        {
            question: "Vue3 的 Fragment",
            answer: `
## 🧩 Vue 3 的 Fragment（片段）

---

### 📌 一、什么是 Fragment？

在 Vue 2 中，**一个组件的模板必须有一个根节点**（如 \`<div>\`），否则会报错。

而在 **Vue 3** 中，支持返回多个根节点，这项能力称为：**Fragment（片段）**。

> 也就是说：**你可以在模板中写多个并列的元素，而不再需要多余的包裹标签！**

---

### 🎯 二、使用示例

#### ✅ Vue 2 写法（必须包裹）

\`\`\`vue
<template>
  <div> <!-- 不必要的 div -->
    <h1>标题</h1>
    <p>内容</p>
  </div>
</template>
\`\`\`

#### ✅ Vue 3 写法（Fragment）

\`\`\`vue
<template>
  <h1>标题</h1>
  <p>内容</p>
</template>
\`\`\`

> 上面两个标签是**平级的根节点**，在 Vue 3 中合法

---

### 💡 三、适用场景

- 避免为满足“单根元素”而添加无意义的 \`<div>\`
- 提高 HTML 结构语义清晰度
- 避免多层嵌套影响样式布局

---

### 🧠 四、工作原理

- 编译时 Vue 会将多个根元素包装为 **虚拟 Fragment 节点**
- 渲染时不会生成真实 DOM 节点
- **不会污染最终的 HTML 结构**

---

### ⚠️ 五、注意事项

| 注意点                     | 说明                                 |
|----------------------------|--------------------------------------|
| 每个根节点仍需有效闭合     | 否则语法错误                         |
| 可搭配 \`v-for\` 使用       | 如渲染多个列表项时直接输出多个标签 |
| 渲染性能略有提升           | 因为少了无用 DOM 节点                |

---

### ✅ 六、小结

- Fragment 是 Vue 3 引入的“多根节点支持”机制  
- 有助于编写**简洁、语义清晰**的模板结构  
- 避免不必要的 DOM 层级嵌套

📌 一句话总结：**写组件时终于不需要为了结构合法而套个 \`div\` 了！🎉**

`
        },
        {
            question: "Vue 性能优化总结",
            answer: `
## 🚀 Vue 性能优化实用总结

---

1. **路由懒加载（按需加载组件） & 组件懒加载（异步组件）**  
   利用动态导入和异步组件，减少首屏包体积，加快加载速度。

2. **使用 \`v-show\` 替代 \`v-if\`（频繁切换场景）**  
   \`v-show\` 通过控制元素的 CSS 显示隐藏，避免频繁销毁重建 DOM。

3. **使用 \`keep-alive\` 缓存组件**  
   缓存切换的组件状态，减少重复渲染，提高用户体验。

4. **合理使用 \`key\` 优化 \`v-for\`**  
   确保每个列表项拥有唯一且稳定的 \`key\`，避免无效 DOM 更新。

5. **拆分组件 & 按需渲染**  
   将复杂组件拆分为小单元，按需加载和渲染，降低单个组件复杂度。

6. **使用计算属性（\`computed\`）代替方法（\`methods\`）**  
   \`computed\` 具有缓存功能，避免重复计算，提高性能。

7. **使用 \`watch\` 精细监听变更（避免无用监听）**  
   监听具体数据变化，减少不必要的副作用执行。

8. **代码压缩 + Tree Shaking**  
   生产环境开启代码压缩和摇树优化，减小打包体积。

9. **图片懒加载 + CDN 加速**  
   延迟加载图片资源，结合 CDN 提升资源加载速度和响应性能。

---

📌 **总结**：合理结合以上策略，针对项目实际情况进行性能调优，确保 Vue 应用流畅、响应迅速。
`
        },
        {
            question: "Vue 中的 h 函数",
            answer: `
## Vue 中的 \`h\` 函数详解

---

### 什么是 \`h\` 函数？

\`h\` 函数全称是“hyperscript”，它是 Vue 3 渲染函数（render function）和 JSX 背后的核心。它用来手动创建 VNode（虚拟节点），从而生成组件的渲染内容。

---

### 为什么要用 \`h\` 函数？

- Vue 3 允许你用渲染函数替代模板语法，\`h\` 是构建 VNode 的基础工具。
- 渲染函数灵活且可编程，适合动态创建复杂结构或逻辑条件渲染。
- \`h\` 函数提供对底层虚拟 DOM 的完全控制，便于性能优化。

---

### \`h\` 函数的基本用法

\`\`\`js
import { h } from 'vue';

export default {
  render() {
    return h(
      'div',                  // 标签名
      { class: 'container' }, // 属性对象
      [                       // 子节点，可以是字符串或 VNode 数组
        h('h1', 'Hello Vue 3'),
        h('p', '这个渲染是h函数制造.')
      ]
    );
  }
};
\`\`\`

---

### 参数详解

- **第一个参数**：字符串标签名（如 'div', 'span'），或组件对象。
- **第二个参数**：属性对象（props/attrs），如 \`class\`、\`style\`、事件监听等。
- **第三个参数**：子节点，可以是字符串、VNode 或数组。

---

### 使用场景

- 动态构建组件结构。
- 代替模板语法，进行细粒度渲染控制。
- 在 JSX 不适用时，直接用渲染函数编写组件。

---

### 小贴士

- Vue 3 推荐优先使用模板语法，只有在模板表达能力不足时用 \`h\`。
- \`h\` 函数是 Vue 3 组合式 API 下的关键工具。
- 结合 \`resolveComponent\` 和 \`withDirectives\` 可以构建更复杂的动态渲染。

---

### 参考文档

- [Vue 3 渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)
- [Vue 源码中的 \`h\` 函数实现](https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/h.ts)

---

📌 **总结**：  
\`h\` 函数是 Vue 3 渲染函数的核心，灵活且强大，掌握它能帮你深入理解 Vue 的渲染机制，并应对复杂的动态渲染场景。
`
        },
        {
            question: "Vue2 与 Vue3 中添加全局属性/方法的方式",
            answer: `
## 🌍 Vue 全局属性与方法添加方式对比

---

### Vue 2 中的写法：使用 \`Vue.prototype\`

在 Vue 2 中，可以通过 \`Vue.prototype\` 添加全局属性或方法，使其在所有组件中通过 \`this\` 访问。

\`\`\`js
// main.js
Vue.prototype.$appName = "我的应用";
Vue.prototype.$log = function(msg) {
  console.log("全局日志:", msg);
};
\`\`\`

在组件中使用：

\`\`\`js
export default {
  mounted() {
    console.log(this.$appName); // 我的应用
    this.$log("页面加载完成");   // 全局日志: 页面加载完成
  }
};
\`\`\`

---

### Vue 3 中的写法：使用 \`app.config.globalProperties\`

Vue 3 移除了 \`Vue.prototype\`，改用 \`app.config.globalProperties\` 来挂载全局属性或方法。

\`\`\`js
// main.js
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.$appName = "Vue3 应用";
app.config.globalProperties.$log = function(msg) {
  console.log("Vue3 全局日志:", msg);
};

app.mount("#app");
\`\`\`

在组件中一样使用 \`this\` 访问：

\`\`\`js
export default {
  mounted() {
    console.log(this.$appName); // Vue3 应用
    this.$log("页面初始化");     // Vue3 全局日志: 页面初始化
  }
};
\`\`\`

---

### 📌 对比总结

| 特性               | Vue 2                            | Vue 3                                      |
|--------------------|----------------------------------|--------------------------------------------|
| 添加方式           | \`Vue.prototype.xxx\`            | \`app.config.globalProperties.xxx\`        |
| 使用方式           | \`this.xxx\`                     | \`this.xxx\`                               |
| 适用场景           | 全局函数、工具、配置注入         | 同上，但需使用 \`createApp\` 实例配置     |
| 生命周期内访问     | 可以                             | 可以                                       |

---

### 📚 参考文档

- [Vue 2 全局 API](https://cn.vuejs.org/v2/api/#Vue-prototype)
- [Vue 3 应用实例配置](https://cn.vuejs.org/api/application.html#app-config-globalproperties)

---
`
        },
        {
            question: "Vue 的路由拦截守卫",
            answer: `
## 🚦 Vue 的路由拦截守卫（导航守卫）

---

### 🔹 一、什么是路由守卫？

> Vue Router 提供了一系列 **导航守卫（Navigation Guards）**，用于在路由跳转前/后控制页面访问行为，常用于登录验证、权限判断、数据加载等。

---

### 🔸 二、分类与触发时机

| 守卫类型             | 触发时机                  | 使用场景              |
|----------------------|---------------------------|-----------------------|
| 全局前置守卫         | 路由跳转前执行            | 登录权限拦截          |
| 全局后置守卫         | 路由跳转后执行            | 页面埋点/记录跳转日志 |
| 路由独享守卫         | 单个路由配置内执行        | 该路由特有逻辑        |
| 组件内守卫（beforeRouteEnter） | 组件加载前执行     | 控制组件访问          |

---

### ✅ 三、全局前置守卫（常用于登录校验）

\`\`\`js
// router/index.js 或 router.ts
router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem("token");

  if (to.meta.requiresAuth && !isLogin) {
    next("/login"); // 未登录，重定向
  } else {
    next(); // 放行
  }
});
\`\`\`

> ✅ \`to.meta.requiresAuth\` 用于标记需要登录的页面

---

### ✅ 四、全局后置守卫（无 next）

\`\`\`js
router.afterEach((to, from) => {
  console.log("导航结束", to.fullPath);
});
\`\`\`

---

### ✅ 五、路由独享守卫（写在路由配置中）

\`\`\`js
{
  path: "/admin",
  component: AdminPage,
  beforeEnter: (to, from, next) => {
    const isAdmin = checkAdmin(); // 自定义判断
    isAdmin ? next() : next("/403");
  }
}
\`\`\`

---

### ✅ 六、组件内守卫

#### 1. \`beforeRouteEnter\`（不能访问 this）

\`\`\`js
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 此处可以访问组件实例 this
      vm.fetchData();
    });
  }
}
\`\`\`

#### 2. \`beforeRouteLeave\`（适合弹窗确认）

\`\`\`js
export default {
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm("确定要离开当前页面吗？");
    answer ? next() : next(false);
  }
}
\`\`\`

---

### ⚠️ 七、注意事项

- \`next()\` 必须调用，否则导航会停滞
- 守卫中可以传入 \`false\`（中断）、\`path\`（重定向）、或执行异步逻辑
- 组件守卫仅在组件作为页面视图使用时有效

---

### 🧠 八、常见应用场景

| 应用方向     | 示例说明                       |
|--------------|--------------------------------|
| 登录控制     | 未登录跳转到登录页             |
| 权限管理     | 判断角色权限访问后台管理页面   |
| 表单阻止离开 | 离开页面前提示是否保存内容     |
| 路由切换加载 | 切换页面前加载远程数据         |

---

### 🧪 实际场景代码片段

#### 登录权限拦截（简洁版）

\`\`\`js
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.path !== "/login" && !token) {
    next("/login");
  } else {
    next();
  }
});
\`\`\`

#### 离开页面弹窗确认

\`\`\`js
beforeRouteLeave(to, from, next) {
  if (this.formDirty) {
    const confirmLeave = confirm("表单尚未保存，确认离开？");
    confirmLeave ? next() : next(false);
  } else {
    next();
  }
}
\`\`\`

`
        }


    ]
    return (
        <>
            <div>
                <ArticleList data={vueArticles} centerTitle="Vue" icon={<FaVuejs color="#42b883"/>}/>
            </div>
        </>
    )
}
export default ArticlesVue;