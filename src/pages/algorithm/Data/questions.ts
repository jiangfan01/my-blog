// src/pages/algorithm/data/questions.ts
export interface Question {
    id: number;
    title: string;
    category: string; // array / stack / queue ...
    difficulty: "简单" | "中等" | "困难";
    description: string;
    answer: string;
}

export const questions: Question[] = [
    {
        id: 1,
        title: "两数之和",
        category: "array",
        difficulty: "简单",
        description: `
给定一个整数数组 \`nums\` 和一个整数目标值 \`target\`，请你在该数组中找出 **和为目标值** 的那 **两个整数**，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里 **不能重复出现**。

你可以按任意顺序返回答案。

---

### 示例：

\`\`\`js
输入：nums = [2, 7, 11, 15], target = 9
输出：[0, 1]
// 因为 nums[0] + nums[1] === 9
\`\`\`

---

### 函数签名：

\`\`\`js
function twoSum(nums, target) { /* ... */ }
\`\`\`
`,
        answer: `
### 解法讲解

本题是经典的「数组 + 查找」问题。

目标是找出数组中 **两个数**，它们的和正好等于 target，并返回这两个数的下标。

有几种常见的解法：

1. **哈希表解法**（推荐）：一次遍历，用哈希表记录已访问过的元素，时间复杂度 O(n)。
2. **暴力双重循环**：穷举所有组合，时间复杂度 O(n²)，简单但效率低。
3. **排序 + 双指针**：适合返回元素值对，不适合需要返回原始下标的情况。

---

### 解法一：使用哈希表（推荐）

使用一个 Map 存储 target - nums[i] 的值及其索引，在一次遍历中完成查找。

\`\`\`js
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
\`\`\`

- 时间复杂度：O(n)
- 空间复杂度：O(n)
- 优势：速度快、一次遍历即可找到答案。

---

### 解法二：暴力双循环（不推荐）

最直观的思路：遍历所有两数组合，找出符合条件的一对。

\`\`\`js
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
\`\`\`

- 时间复杂度：O(n²)
- 空间复杂度：O(1)
- 劣势：效率低，不适合大数据量。

---

### 解法三：排序 + 双指针（不适用于返回索引）

这种解法是将数组排序，然后用左右指针向中间靠拢。

但排序会打乱原始下标，因此无法正确返回索引，**不适用于本题**。

---
`
    },
    {
        id: 2,
        title: "移动零",
        category: "array",
        difficulty: "简单",
        description: `
给定一个数组 \`nums\`，编写一个函数将所有 \`0\` 移动到数组的末尾，同时保持非零元素的相对顺序。

**你必须在原地修改输入数组，不能使用额外的数组。**

---

### 示例：

\`\`\`js
输入: nums = [0, 1, 0, 3, 12]
输出: [1, 3, 12, 0, 0]
\`\`\`

---

### 函数签名：

\`\`\`js
function moveZeroes(nums) { /* ... */ }
\`\`\`
`,
        answer: `
### 解法讲解

这是经典的数组 **就地操作** 问题，目标是将所有 0 移动到末尾，并保持非零元素相对顺序。

推荐用 **双指针** 解法：

---

### 解法一：双指针（推荐）

- 一个指针负责遍历（\`i\`）
- 一个指针 \`lastNonZeroIndex\` 记录当前应该插入非零元素的位置

\`\`\`js
function moveZeroes(nums) {
  let lastNonZeroIndex = 0; // 指向要填非 0 的位置

  // 先把非零值按顺序填入前面
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  // 剩余位置填 0
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}
\`\`\`

- 时间复杂度：O(n)
- 空间复杂度：O(1)
- 原地完成，无需额外数组，效率高 ✅

---

### 解法二：使用额外数组（不推荐）

虽然可行，但题目要求**原地修改数组**，不建议使用。

---

### 小结

- 本题核心是「就地替换 + 保序」
- 和「两数之和」一样，属于基础数组操作 + 双指针经典题目

---
`
    },
    {
        id: 3,
        title: "删除有序数组中的重复项",
        category: "array",
        difficulty: "简单",
        description: `
给你一个 **升序排列的整数数组** \`nums\`，请你 **原地删除重复出现的元素**，使每个元素 **只出现一次**，返回移除后数组的新长度。

不要使用额外的数组空间，你必须使用 O(1) 额外空间并**原地修改输入数组**。

---

### 示例：

\`\`\`js
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
\`\`\`

---

### 函数签名：

\`\`\`js
function removeDuplicates(nums) { /* ... */ }
\`\`\`
`,
        answer: `
### ✅ 解题思路：双指针法

本题是经典的「双指针 + 原地修改」问题，适用于有序数组去重。

---

### 💡 思路详解：

- 由于数组是**有序的**，重复的元素一定是**连续的**
- 使用两个指针：
  - \`j\` 是快指针，遍历整个数组
  - \`i\` 是慢指针，指向当前**不重复元素的最后一个位置**
- 每当遇到新的不同元素时（\`nums[j] !== nums[i]\`）：
  - 就将它覆盖到 \`i+1\` 的位置
  - 然后 \`i++\`，表示新的不重复区间扩大一位

---

### 📌 示例：

\`\`\`js
输入：nums = [1,1,2,3,3]

初始：
i = 0, j 从 1 开始

步骤：
j=1：nums[1] = 1 == nums[0]，跳过
j=2：nums[2] = 2 ≠ nums[0]，i++ => i=1, nums[1]=2
j=3：nums[3] = 3 ≠ nums[1]，i++ => i=2, nums[2]=3
j=4：nums[4] = 3 == nums[2]，跳过

最终 nums = [1,2,3,...]，返回长度 3
\`\`\`

---

### ✅ 代码实现：

\`\`\`js
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
\`\`\`

---

### ✅ 时间空间复杂度分析：

- 时间复杂度：\`O(n)\`，只遍历一次
- 空间复杂度：\`O(1)\`，原地修改，无额外空间

---
`
    },
    {
        id: 4,
        title: "数组去重",
        category: "array",
        difficulty: "简单",
        description: `
给定一个整数数组 \`nums\`，请你编写一个函数，返回去重后的新数组，保持原有顺序。

---

### 示例：

\`\`\`js
输入：nums = [1, 2, 2, 3, 1]
输出：[1, 2, 3]
\`\`\`

---

### 函数签名：

\`\`\`js
function removeDuplicates(nums) { /* ... */ }
\`\`\`
`,
        answer: `
### ✅ 解法讲解：数组去重的多种方式对比

---

### 🌟 解法一：使用 Set（最推荐）

Set 是 ES6 新增的数据结构，天然去重。

\`\`\`js
function removeDuplicates(nums) {
  return [...new Set(nums)];
}
\`\`\`

- 时间复杂度：O(n)
- 空间复杂度：O(n)
- 优势：代码最简洁，适用于大部分情况

---

### 🔁 解法二：手动哈希 + includes（保序）

\`\`\`js
function removeDuplicates(nums) {
  const res = [];
  for (const num of nums) {
    if (!res.includes(num)) {
      res.push(num);
    }
  }
  return res;
}
\`\`\`

- 时间复杂度：O(n²)，因为 includes 是线性查找
- 空间复杂度：O(n)
- 缺点：效率不如 Set

---

### 🔂 解法三：先排序后去重（不保顺序）

\`\`\`js
function removeDuplicates(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      res.push(nums[i]);
    }
  }
  return res;
}
\`\`\`

- 时间复杂度：O(n log n)（排序）
- 优点：对原数组有序处理适用
- 缺点：改变原顺序

---

### 🚀 解法四：Object 哈希法（适合整数）

\`\`\`js
function removeDuplicates(nums) {
  const seen = {};
  const res = [];
  for (const num of nums) {
    if (!seen[num]) {
      seen[num] = true;
      res.push(num);
    }
  }
  return res;
}
\`\`\`

- 时间复杂度：O(n)
- 缺点：数字和字符串可能混淆，慎用
- 更推荐 Map 或 Set 替代

---

### ✅ 数组去重方法对比总结

- Set 用的是 ES6 的 Set 集合，简洁且保持元素原始顺序，性能很好，适合大多数场景。

- includes 是最直观的判断重复，时间复杂度高，代码量多，不推荐。

- 排序 + 去重 不保持顺序，但可以通过排序快速去重，适用于不在乎顺序的情况。

- 对象哈希 利用对象键去重，性能接近 Set，但写法稍复杂。
---
`
    },
    {
        id: 5,
        title: "移除元素",
        category: "array",
        difficulty: "简单",
        description: `
给定一个数组 \`nums\` 和一个数值 \`val\`，请你**原地移除**数组中所有等于 \`val\` 的元素，并返回移除后数组的新长度。

你**不能使用额外的数组空间**，必须**在原地修改**输入数组，并在条件允许的情况下**减少操作次数**。

---

### 示例：

\`\`\`js
输入: nums = [3, 2, 2, 3], val = 3
输出: 2
说明: 函数应返回新的长度 2，并且 nums 中的前两个元素为 2。
\`\`\`

---

### 函数签名：

\`\`\`ts
function removeElement(nums: number[], val: number): number;
\`\`\`
`,
        answer: `
### ✅ 解法讲解：移除数组中指定元素的多种方式

---

### 🔁 解法一：双指针法（推荐）

适用于需要**原地修改数组且保持顺序**的场景。

**思路：**

- 用两个指针：快指针 \`j\` 遍历数组，慢指针 \`i\` 标记结果位置；
- 每当 \`nums[j] !== val\`，就将其赋值给 \`nums[i]\`，并让 i 自增；
- 最后返回 i 即为新数组长度，前 i 个值为有效部分。

\`\`\`ts
function removeElement(nums: number[], val: number): number {
  let i = 0;  // i 用来指向新数组的写入位置
  for (let j = 0; j < nums.length; j++) {  // 遍历原数组
    if (nums[j] !== val) {  // 如果当前元素不等于 val，说明需要保留
      nums[i] = nums[j];  // 把这个元素写到 i 位置
      i++;  // i 指针向前移动
    }
    // 如果等于 val，就跳过，不做操作，相当于过滤掉
  }
  return i;  // i 就是新数组长度
}
\`\`\`

---

### 🔄 解法二：双指针优化版（不保顺序，性能高）

**适用场景**：不要求保持原数组顺序，追求更少写操作。

**思路：**

- 遇到 \`nums[i] === val\` 时，把它替换为数组最后一个值；
- 然后将数组长度减一继续遍历；
- 这样可以少做移动操作。

\`\`\`ts
function removeElement(nums: number[], val: number): number {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--; // 减少长度
    } else {
      i++;
    }
  }
  return n;
}
\`\`\`

---

### 🧹 解法三：借助 filter（不推荐，非原地）

这是最简洁的方式之一，但**不符合题目要求**，因为会创建新数组。

\`\`\`ts
function removeElement(nums: number[], val: number): number {
  const filtered = nums.filter(num => num !== val);
  for (let i = 0; i < filtered.length; i++) {
    nums[i] = filtered[i];
  }
  return filtered.length;
}
\`\`\`

---

### 📝 总结建议：

- 若对顺序无要求，可使用“末尾覆盖法”进一步减少写入；
- 若场景允许额外空间，\`filter\` 写法更直观，但非最佳选择。

---
`
    },
    {
        id: 6,
        title: "最长连续递增子序列",
        category: "array",
        difficulty: "中等",
        description: `
给定一个未排序的整数数组 \`nums\`，找到最长且 **连续递增的子序列** 的长度。

注意：子序列必须是连续的，不能跳过元素。

---

### 示例：

\`\`\`ts
输入：nums = [1, 3, 5, 4, 7]
输出：3
解释：最长连续递增序列是 [1, 3, 5]，长度为 3。
\`\`\`

---

### 函数签名：

\`\`\`ts
function findLengthOfLCIS(nums: number[]): number;
\`\`\`
`,
        answer: `
### ✅ 解法讲解：遍历 + 计数

---

### 🧠 思路解析

- 使用一个变量 \`count\` 记录当前连续递增序列的长度；
- 使用一个变量 \`max\` 记录最大连续递增长度；
- 遍历数组：
  - 如果 \`nums[i] > nums[i - 1]\`，说明还在递增，\`count++\`；
  - 否则，重置 \`count = 1\`；
- 最终返回 \`max\` 即可。

---

### ✅ 代码实现

\`\`\`ts
function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 0) return 0;
  let max = 1, count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 1;
    }
  }

  return max;
}
\`\`\`

---

### 📌 总结

- 时间复杂度：O(n)
- 空间复杂度：O(1)
- 连续递增问题不需要使用动态规划，**遍历+计数**是最优解法；
- 与“最长递增子序列”不同，后者不要求连续。

✅ 面试常考，注意题目对“连续”的要求，别混淆！

`
    },
    {
        id: 7,
        title: "数组分块 chunk",
        category: "array",
        difficulty: "简单",
        description: `
实现一个函数 \`chunk\`，将数组分成多个长度为 \`size\` 的区块，并将这些区块组成一个新数组返回。如果数组不能被均分，最后剩余的元素也要组成一个区块。

---

### 示例：

\`\`\`js
chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]
\`\`\`

---

### 函数签名：

\`\`\`js
function chunk(arr, size) {}
\`\`\`
`,
        answer: `
### ✅ 解法 1：遍历切片法（推荐）

---

### 💡 思路：
- 利用 \`for\` 循环，每次步进 \`size\`；
- 使用 \`slice(i, i + size)\` 截取固定大小子数组；
- 结果数组每次 push 一个分块。

---

### ✅ 代码：

\`\`\`js
function chunk(arr, size) {
  const res = [];
  if(size < 1) return []; //size为0的边界情况
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
\`\`\`

---

### ✅ 解法 2：临时数组缓存法

---

### 💡 思路：
- 使用一个临时子数组保存当前块；
- 遍历时逐个加入，达到 \`size\` 就 push 到结果中并清空临时数组。

---

### ✅ 代码：

\`\`\`js
function chunk(arr, size) {
  const res = [];
  let temp = [];
  for (let item of arr) {
    temp.push(item);
    if (temp.length === size) {
      res.push(temp);
      temp = [];
    }
  }
  if (temp.length) res.push(temp); // 剩余部分
  return res;
}
\`\`\`

---

### ✅ 解法 3：使用 reduce 高阶函数

---

### 💡 思路：
- 利用 \`reduce\` 累积结果数组；
- 每次判断是否需要新建子数组。

---

### ✅ 代码：

\`\`\`js
function chunk(arr, size) {
  return arr.reduce((res, curr) => {
    const last = res[res.length - 1];
    if (!last || last.length === size) {
      res.push([curr]);
    } else {
      last.push(curr);
    }
    return res;
  }, []);
}
\`\`\`

---
### ⏱️ 时间复杂度：O(n)  
### 🧠 空间复杂度：O(n)

---

### 🔚 适用场景：

- 用于分页展示数据；
- 拆分任务块、分组处理；
- chunk 是经典的数组处理函数。

`
    },
    {
        id: 8,
        title: "countBy筛选",
        category: "array",
        difficulty: "简单",
        description: `
## 📌 countBy 筛选

实现一个函数 \`countBy\`，根据数组元素经过某个函数处理后的结果进行分组，并统计每组的数量。

类似于 lodash 中的 \`_.countBy\`。

**示例：**

\`\`\`js
countBy([6.1, 4.2, 6.3], Math.floor)
// => { '4': 1, '6': 2 }

countBy(['one', 'two', 'three'], 'length')
// => { '3': 2, '5': 1 }
\`\`\`
  `,
        answer: `
## ✅ 解法一：使用 for of 遍历

\`\`\`js
function countBy(array) {
  const result = {};

  for (const item of array) {
    result[item] = (result[item] || 0) + 1;  // 如果result里有这个元素的key，则在原来次数上加1，否则赋值为1
  }

  return result;
}
\`\`\`

---

## ✅ 解法二：使用 reduce

\`\`\`js
function countBy(array, iteratee) {
  return array.reduce((acc, item) => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}
\`\`\`

---

## ✅ 解法三：使用 Map（可选更强类型支持）

\`\`\`js
function countBy(array, iteratee) {
  const map = new Map();

  for (const item of array) {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    map.set(key, (map.get(key) || 0) + 1);
  }

  return Object.fromEntries(map);
}
\`\`\`

---

## 🧠 思路解析

- \`iteratee\` 可以是函数，也可以是属性名（如 'length'）。
- 每个元素根据规则归类（分组），然后统计各组数量。
- 注意要处理 \`undefined\` 值或异常情况。
  `
    },
    {
        id: 9,
        title: "有效的括号",
        category: "stack",
        difficulty: "简单",
        description: `
## 📌 有效的括号

给定一个只包括 \`'('\`、\`')'\`、\`'{'\`、\`'}'\`、\`'['\` 和 \`']'\` 的字符串 \`s\`，判断字符串是否有效。

有效字符串需满足：
- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

**示例：**

\`\`\`js
isValid("()") // => true
isValid("()[]{}") // => true
isValid("(]") // => false
isValid("([)]") // => false
isValid("{[]}") // => true
\`\`\`
  `,
        answer: `
## ✅ 解法一：使用栈进行配对判断

\`\`\`js
function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char); // 遇左括号入栈
    } else {
      const top = stack.pop(); // 弹出栈顶，检查是否匹配
      if (top !== map[char]) {
        return false; // 不匹配则无效
      }
    }
  }

  return stack.length === 0; // 栈为空才是完全匹配
}

\`\`\`

# ✅ 解法二：使用数组+指针
\`\`\`js

function isValid(s){
    const n = s.length;
    const arr = new Array(n);
    let top = -1
    
    for (const char of s){
        if (char === '(' || char === '[' || char === '{') {
            arr[++top] = char; //确保左括号推入数组最前
        }else{
            if(top < 0 || arr[top] !== map[char]){
                return false
            }
            top--;//移除已经匹配的一对
        }
        }
    }
    return top === -1 //确保数组为空所有的都匹配完成
}
\`\`\`
---

## 🧠 思路解析

- 括号匹配问题非常适合使用 **栈结构**。
- 每遇到左括号，就压入栈中；
- 遇到右括号时，看是否与栈顶元素匹配。
- 最后栈应为空（所有括号都被匹配完）。
- 时间复杂度：O(n)
  `
    },
    {
        id: 10,
        title: "最小括号删除",
        category: "stack",
        difficulty: "简单",
        description: `
## 📌 最小括号删除

给定一个只包含 \`'('\` 和 \`')'\` 的字符串 \`s\`，你需要最少删除多少个括号，使其成为有效括号字符串（所有括号匹配且顺序正确），并返回结果字符串。

**示例：**

\`\`\`js
minRemoveToMakeValid("lee(t(c)o)de)") // => "lee(t(c)o)de"
minRemoveToMakeValid("a)b(c)d")       // => "ab(c)d"
minRemoveToMakeValid("))((")          // => ""
\`\`\`
  `,
        answer: `
## ✅ 解法：栈记录无效括号下标

\`\`\`js
function minRemoveToMakeValid(s) {
  const stack = [];
  const toRemove = new Set();
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      stack.push(i); // 左括号位置入栈
    } else if (char === ')') {
      if (stack.length === 0) {
        toRemove.add(i); // 没有可匹配的左括号
      } else {
        stack.pop(); // 匹配成功，弹出一个左括号位置
      }
    }
  }

  // 剩下的未匹配左括号也要删除
  for (let index of stack) {
    toRemove.add(index);
  }

  // 构造新字符串，跳过无效下标
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (!toRemove.has(i)) {
      result += s[i];
    }
  }

  return result;
}
\`\`\`

---

## 🧠 思路解析

- 使用一个栈来追踪未匹配的左括号位置。
- 每遇到无法匹配的右括号，也记录它的位置。
- 最后从字符串中排除这些无效的括号即可。
- 时间复杂度：O(n)，只遍历两次。
- 空间复杂度：O(n)，用于存储索引。
`
    },
    {
        id: 11,
        title: "每日温度",
        category: "stack",
        difficulty: "中等",
        description: `
## 🌡️ 每日温度（Daily Temperatures）

给定一个整数数组 \`temperatures\`，表示每天的温度，返回一个数组 \`answer\`，其中 \`answer[i]\` 表示从第 i 天开始，**要等多少天才会有更高的温度**。如果没有更高温度，则为 0。

**示例：**

\`\`\`js
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
// => [1, 1, 4, 2, 1, 1, 0, 0]
\`\`\`
  `,
        answer: `
## ✅ 解法：单调递减栈

\`\`\`js
function dailyTemperatures(temperatures) {
  const stack = []; // 存放下标
  const res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      res[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return res;
}
\`\`\`

---

## 🧠 思路解析

- 使用一个**单调递减栈**，栈中存的是还没遇到更高温度的下标。
- 当前温度比栈顶元素高，说明找到“升温日”，计算差值填入结果。
- 最终未出栈的元素，说明后面都没有更高温度，保留为 0。
- 时间复杂度：O(n)，每个元素最多进出栈一次。
- 空间复杂度：O(n)，存储栈和结果。
`
    },
    {
        id: 12,
        title: "用队列实现栈",
        category: "queue",
        difficulty: "简单",
        description: `
## 📥 用队列实现栈

使用两个队列 \`queue1\` 和 \`queue2\` 来实现一个先进后出的栈。

实现以下操作：
- \`push(x)\`：将元素 x 推入栈顶
- \`pop()\`：移除栈顶元素并返回
- \`top()\`：返回栈顶元素
- \`empty()\`：判断栈是否为空

**示例：**

\`\`\`js
const s = new MyStack();
s.push(1);
s.push(2);
s.top();   // 返回 2
s.pop();   // 返回 2
s.empty(); // false
\`\`\`
  `,
        answer: `
## ✅ 解法：两个队列模拟栈（函数式写法）

\`\`\`js
function MyStack() {
  this.queue1 = [];
  this.queue2 = [];
}

MyStack.prototype.push = function(x) {
  this.queue1.push(x);
};

MyStack.prototype.pop = function() {
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  const popped = this.queue1.shift();
  [this.queue1, this.queue2] = [this.queue2, this.queue1];
  return popped;
};

MyStack.prototype.top = function() {
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  const top = this.queue1.shift();
  this.queue2.push(top);
  [this.queue1, this.queue2] = [this.queue2, this.queue1];
  return top;
};

MyStack.prototype.empty = function() {
  return this.queue1.length === 0;
};
\`\`\`

---

## 🧠 思路解析

- 使用两个队列，\`queue1\` 用于存储元素，\`queue2\` 辅助实现栈顶操作。
- \`pop\` 和 \`top\` 操作通过将 \`queue1\` 中元素逐个出队并入队到 \`queue2\`，只留下最后一个元素即为栈顶。
- 操作完成后交换两个队列，保证下一次操作从 \`queue1\` 开始。
- 时间复杂度：\`push\` O(1)，\`pop\` 和 \`top\` 均为 O(n)。
- 空间复杂度：O(n)，存储队列元素。
`
    },
    {
        id: 13,
        title: "环形队列",
        category: "queue",
        difficulty: "简单",
        description: `
## 🔄 环形队列设计

设计一个环形队列（循环队列），实现以下操作：
- \`enQueue(value)\`：将一个元素添加到队尾，成功返回 \`true\`，队满返回 \`false\`
- \`deQueue()\`：删除队头元素，成功返回 \`true\`，队空返回 \`false\`
- \`Front()\`：获取队头元素，队空返回 \`-1\`
- \`Rear()\`：获取队尾元素，队空返回 \`-1\`
- \`isEmpty()\`：检查队列是否为空
- \`isFull()\`：检查队列是否为满

**示例：**

\`\`\`js
const cq = new MyCircularQueue(3);
cq.enQueue(1); // true
cq.enQueue(2); // true
cq.enQueue(3); // true
cq.enQueue(4); // false 队满
cq.Rear();     // 3
cq.isFull();   // true
cq.deQueue();  // true
cq.enQueue(4); // true
cq.Rear();     // 4
\`\`\`
  `,
        answer: `
## ✅ 解法：数组实现环形队列（函数式写法）

\`\`\`js
function MyCircularQueue(k) {
  this.queue = new Array(k);
  this.head = 0;
  this.tail = 0;
  this.size = 0;
  this.capacity = k;
}

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  this.queue[this.tail] = value;
  this.tail = (this.tail + 1) % this.capacity;
  this.size++;
  return true;
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  this.head = (this.head + 1) % this.capacity;
  this.size--;
  return true;
};

MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this.queue[this.head];
};

MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  return this.queue[(this.tail - 1 + this.capacity) % this.capacity];
};

MyCircularQueue.prototype.isEmpty = function() {
  return this.size === 0;
};

MyCircularQueue.prototype.isFull = function() {
  return this.size === this.capacity;
};
\`\`\`

---

## 🧠 思路解析

- 使用固定大小的数组模拟队列。
- \`head\` 和 \`tail\` 指针循环移动，实现环形效果。
- 通过 \`size\` 判断队列满或空状态，避免指针重合判断歧义。
- 入队尾部插入，出队头部删除。
- 时间复杂度均为 O(1)。
- 空间复杂度为 O(k)，固定大小。
`
    },
    {
        "id": 14,
        "title": "打乱有序数组",
        "category": "array",
        "difficulty": "简单",
        "description": `
## 🎲 打乱一个有序数组

实现一个函数，用于将一个升序排列的数组打乱，使其每个排列出现的概率相等（即实现洗牌算法）。

**示例：**

\`\`\`js
const arr = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(arr);
console.log(shuffled); // 输出可能为 [3,1,5,2,4] 等任意顺序
\`\`\`
  `,
        "answer": `
## ✅ 解法：Fisher-Yates 洗牌算法

\`\`\`js
function shuffleArray(arr) {
  const result = [...arr]; // 创建副本，避免修改原数组
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 从0到i随机索引
    [result[i], result[j]] = [result[j], result[i]]; // 交换元素
  }
  return result;
}
\`\`\`

---

## 🧠 思路解析

- 此算法又称“现代洗牌算法”，能确保所有排列的出现概率均等。
- 从后往前遍历数组，每次将当前位置和一个随机位置的元素交换。
- 保证第 \`i\` 个位置的元素有 \`1/(i+1)\` 概率在该位置。
- \`[...arr]\` 用于避免直接修改原数组。
- 时间复杂度：\`O(n)\`，只需一次遍历。
- 空间复杂度：\`O(n)\`，返回了一个副本数组。
`
    },
    {
        "id": 15,
        "title": "动态规划：斐波那契数列",
        "category": "dp",
        "difficulty": "简单",
        "description": `
## 🧮 斐波那契数列 - 动态规划实现

给定一个正整数 \`n\`，请用动态规划的方法求出斐波那契数列的第 \`n\` 项。

斐波那契数列定义如下：
- \`F(0) = 0\`
- \`F(1) = 1\`
- \`F(n) = F(n-1) + F(n-2)\` （n ≥ 2）

**示例：**

\`\`\`js
fib(5); // 输出 5
fib(10); // 输出 55
\`\`\`
  `,
        "answer": `
## ✅ 解法：自底向上动态规划

\`\`\`js
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
\`\`\`

---  

## 🧠 思路解析

- 使用 \`dp[i]\` 表示第 \`i\` 个斐波那契数。
- 初始条件为 \`dp[0] = 0\`，\`dp[1] = 1\`。
- 从 \`2\` 开始迭代，使用前两项推出当前项。
- 这是典型的“重叠子问题”且“最优子结构”问题，适合用动态规划解决。
- 时间复杂度：\`O(n)\`
- 空间复杂度：\`O(n)\`（如需优化可改为常量空间）
`
    },
    {
        "id": 16,
        "title": "骑士只能往下和往右的路径计数（动态规划）",
        "category": "dp",
        "difficulty": "中等",
        "description": `
## 🏇 骑士只能往下和往右的路径计数问题

给定一个 \`m \times n\` 的棋盘，骑士只能向下或向右移动一步，求从左上角到右下角的不同路径数。

要求计算所有可能的路径数量。

**示例：**

\`\`\`js
uniquePaths(3, 3); // 输出 6
\`\`\`
  `,
        "answer": `
## ✅ 解法一：从起点开始的动态规划（迭代）

\`\`\`js
function uniquePaths(m, n) {
 // 创建DP表 (m x n的二维数组)
 const dp = [];
 
 // 遍历每一行
 for (let i = 0; i < m; i++) {
    // 初始化当前行为空数组
    dp.push([]);
    
    // 遍历当前行的每一列
    for (let j = 0; j < n; j++) {
        // 边界情况：第一行或第一列
        if (i === 0 || j === 0) {
            // 对于第一行或第一列，只有一条直线路径
            // 即只能从一个方向（右或下）到达
            dp[i][j] = 1; 
        } else {
            // 状态转移方程：
            // 到达(i,j)的路径数 = 从左边的路径数 + 从上边的路径数
            // 因为只能从左边（向右移动）或上边（向下移动）到达当前位置
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
 }
 
 // 返回右下角位置的路径总数
 return dp[m - 1][n - 1];
}
\`\`\`

---

## ✅ 解法二：从终点逆推的递归 + 记忆化（递归）

\`\`\`js
function uniquePathsReverse(m, n) {
  const memo = Array.from({ length: m }, () => Array(n).fill(-1));

  function dfs(i, j) {
    if (i === m - 1 && j === n - 1) return 1; // 到达终点
    if (memo[i][j] !== -1) return memo[i][j];

    let paths = 0;
    if (i + 1 < m) paths += dfs(i + 1, j); // 向下走
    if (j + 1 < n) paths += dfs(i, j + 1); // 向右走

    memo[i][j] = paths;
    return paths;
  }

  return dfs(0, 0);
}
\`\`\`

---

## 🧠 思路解析

- **解法一**：用二维数组自底向上迭代计算，每个格子的路径数等于上方和左方路径数之和。
- **解法二**：递归从起点出发尝试向下和向右走，用记忆化缓存结果避免重复计算，实现自顶向下的动态规划。
- 两种方法本质相同，递归版本更直观易懂，迭代版本更高效。
- 时间复杂度均为 \`O(m \times n)\`。
- 空间复杂度：递归栈 \`O(m+n)\` + 记忆数组 \`O(m \times n)\`。
`
    },
    {
        "id": 17,
        "title": "除自身以外数组的乘积",
        "category": "array",
        "difficulty": "中等",
        "description": `
## ✖️ 除自身以外的数组乘积

给你一个整数数组 \`nums\`，返回一个数组 \`answer\`，其中 \`answer[i]\` 是 \`nums\` 中除 \`nums[i]\` 以外其余各元素的乘积。

**示例：**

\`\`\`js
productExceptSelf([1,2,3,4]); // 输出 [24,12,8,6]
\`\`\`
  `,
        "answer": `
## ✅ 解法：左右乘积数组

\`\`\`js
function productExceptSelf(nums) {
  const n = nums.length;
  const left = Array(n).fill(1);
  const right = Array(n).fill(1);
  const result = Array(n);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}
\`\`\`

---

## 🧠 思路解析

- 先构建两个辅助数组：左乘积和右乘积。
- 最终结果为 \`result[i] = left[i] * right[i]\`。
- 时间复杂度：\`O(n)\`。
- 空间复杂度：\`O(n)\`，可进一步优化为 \`O(1)\` 使用一个输出数组。
`
    }







];
