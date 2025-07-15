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
        id: 5,
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
    }


];
