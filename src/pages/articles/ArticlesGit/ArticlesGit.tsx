import React from "react";
import ArticleList from "../../../components/ArticleList/ArticleList.tsx";
import {FaGit} from "react-icons/fa";

const ArticlesGit: React.FC = () => {
    const gitArticles = [
        {
            question: "常用 Git 指令",
            answer: `
## 🧰 常用 Git 指令详解

---

### 1. 基础操作

| 指令                      | 说明                                  |
|---------------------------|---------------------------------------|
| \`git init\`              | 初始化 Git 仓库                       |
| \`git clone <repo>\`      | 克隆远程仓库到本地                    |
| \`git status\`            | 查看当前仓库状态                      |
| \`git add <file>\`        | 添加文件到暂存区                      |
| \`git commit -m "msg"\`   | 提交暂存区内容到本地仓库              |
| \`git push\`              | 推送本地提交到远程仓库                |
| \`git pull\`              | 拉取远程仓库最新内容并合并            |

---

### 2. 分支管理

| 指令                       | 说明                                   |
|----------------------------|----------------------------------------|
| \`git branch\`             | 查看本地分支列表                        |
| \`git branch <name>\`      | 新建分支                               |
| \`git checkout <branch>\`  | 切换分支                               |
| \`git checkout -b <name>\`| 新建并切换分支                         |
| \`git merge <branch>\`     | 合并指定分支到当前分支                  |
| \`git branch -d <name>\`   | 删除本地分支                           |

---

### 3. 查看历史

| 指令                      | 说明                                   |
|---------------------------|----------------------------------------|
| \`git log\`               | 查看提交历史                           |
| \`git log --oneline\`     | 简洁一行查看提交历史                   |
| \`git diff\`              | 查看未暂存的文件更新                   |
| \`git diff --staged\`     | 查看已暂存的文件和最后一次提交的差异 |

---

### 4. 其他常用

| 指令                      | 说明                                  |
|---------------------------|---------------------------------------|
| \`git reset <file>\`      | 取消暂存区文件                       |
| \`git stash\`             | 临时保存当前修改，清理工作区          |
| \`git stash pop\`         | 恢复最近一次 stash 的修改             |
| \`git remote -v\`         | 查看远程仓库地址                     |
| \`git fetch\`             | 从远程获取最新代码但不合并            |

---

### ✅ 小结

掌握以上常用指令，可以帮助你高效管理代码版本，进行分支协作和历史回溯，是日常开发必备技能。
或者使用可视端应用，如Git desktop，编译器中的插件来进行Git的管理。
`
        },
        {
            question: "Git 冲突了怎么办",
            answer: `
## ⚔️ Git 冲突处理步骤

---

### 1. 发生冲突原因

- 多人同时修改了同一文件的相同部分
- 合并分支（merge）或拉取远程代码（pull）时出现代码不一致

---

### 2. 处理冲突的基本流程

1. **查看冲突文件**  
   执行 \`git status\`，会列出有冲突的文件。

2. **打开冲突文件，定位冲突代码**  
   Git 会用特殊标记标识冲突部分：

\`\`\`
<<<<<<< HEAD
当前分支代码
=======
合并进来的代码
>>>>>>> branch-name
\`\`\`

3. **手动编辑冲突部分**  
   - 保留需要的代码，删除冲突标记  
   - 确认修改后保存文件

4. **标记冲突已解决**  
   执行 \`git add <file>\` 将解决后的文件添加到暂存区。

5. **完成合并提交**  
   - 如果是 merge，执行 \`git commit\` 完成合并提交  
   - 如果是 pull 时出现冲突，执行 \`git commit\` 完成合并，然后推送。

---

### 3. 使用工具辅助解决冲突

- **VSCode**：内置冲突高亮和选择工具  
- **Git GUI 工具**：如 SourceTree、GitKraken 提供可视化冲突解决  
- **命令行工具**：如 \`vimdiff\`、\`meld\` 等

---

### 4. 预防冲突建议

- 经常拉取远程最新代码，减少代码差异  
- 合理拆分任务，避免多人频繁修改同一文件同一区域  
- 多使用代码评审，保持代码风格统一

---

### ✅ 小结

Git 冲突不可避免，关键是理解冲突标记并合理合并代码。掌握冲突解决流程和工具，能快速恢复工作进度。
`
        }


    ];
    return (
        <>
            <div>
                <ArticleList data={gitArticles} centerTitle="Git简要" icon={<FaGit color="#F05032"/>}/>
            </div>
        </>
    );
};
export default ArticlesGit;