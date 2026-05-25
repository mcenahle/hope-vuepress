---
title: 撰写提交信息
date: 2026-04-20
icon: icon-park-outline:write
order: 2
---

> [!info]
> 本规范于 2026 年 4 月 17 日 制定，5 月 12 日、25 日新增规范。

自从 2026 年 4 月 17 日以来，本人使用新版的提交标题。具体规范如下表所示。

|    类型    |         用途         |
|:--------:|:------------------:|
|   feat   |        新功能         |
|   fix    |         修复         |
|   docs   |         文档         |
|  style   |     样式（不影响逻辑）      |
| refactor |         重构         |
|    ci    |       CI/CD        |
|  revert  |   回退更改 [^revert]   |
|  update  | 网站主题版本更新 [^update] |
|  chore   |        其它项目        |

::: caution 错误提交标题
1. ::mingcute:close-fill:: 新增 example 页面（path/to/example）
2. ::mingcute:close-fill:: 修复 check.yml 中的 Node.js 版本问题
3. ::mingcute:close-fill:: 移除自定义背景色
4. ::mingcute:close-fill:: update: 修复 check.yml 中的 Node.js 版本问题
:::

::: tip 正确提交标题
1. ::mingcute:check-fill:: docs: 新增 example 页面（path/to/example）
2. ::mingcute:check-fill:: ci: 修复 check.yml 中的 Node.js 版本问题
3. ::mingcute:check-fill:: style: 移除自定义背景色
:::

但至于提交描述（Extended description），随意即可。可以写当时的心情，天气，甚至想吃什么都行。总之，feel free to write it!

[^revert]: 示例用法：`revert: 回退更改（abcd123）`。其中，`abcd123` 为短 commit hash；
[^update]: 不得用于替代其它更新前缀类型，包括 chore。例如：`update: 网站更新 hope 主题至 2.0.0-rc.107 (2026-05-14)`。[来源：`fb5ac04`](https://github.com/mcenahle/hope-vuepress/commit/fb5ac04135811cb1a6291683c770b122721b0dff)