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
### 解法一：使用哈希表（推荐）

使用一个 Map 存储 \`target - nums[i]\` 的值及其索引，在一次遍历中完成查找。

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

---

### 解法二：暴力双循环（不推荐）

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

---

### 解法三：排序 + 双指针（不适用于返回索引）

> 适用于返回值对而非索引的情况，本题不推荐使用。
`
    },
    {
        id: 2,
        title: "有效的括号",
        category: "stack",
        difficulty: "中等",
        description: "给定一个只包括 '(', ')', '{', '}', '[', ']' 的字符串，判断字符串是否有效。",
        answer: "使用栈结构逐一匹配括号..."
    },
    {
        id: 3,
        title: "合并区间",
        category: "array",
        difficulty: "困难",
        description: "以数组 intervals 表示若干个区间的集合，请你合并所有重叠的区间。",
        answer: "先按区间起始位置排序，然后依次合并..."
    },
];
