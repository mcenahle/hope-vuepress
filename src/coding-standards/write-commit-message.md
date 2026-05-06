---
title: 撰写提交信息
date: 2026-04-20
icon: icon-park-outline:write
order: 2
---

> [!info]
> 本规范于 2026 年 4 月 17 日 制定。

自从 2026 年 4 月 17 日以来，本人使用新版的提交信息。具体规范如下表所示。

|类型|       用途       |
|:--:|:--------------:|
|feat|      新功能       |
|fix|       修复       |
|docs|       文档       |
|style|   样式（不影响逻辑）    |
|refactor|       重构       |
|ci|     CI/CD      |
|revert| 回退更改 [^revert] |
|chore|      其它项目      |

::: caution 错误提交信息
1. ::mingcute:close-fill:: 新增 example 页面（path/to/example）
2. ::mingcute:close-fill:: 修复 check.yml 中的 Node.js 版本问题
3. ::mingcute:close-fill:: 移除自定义背景色
:::

::: tip 正确提交信息
1. ::mingcute:check-fill:: docs: 新增 example 页面（path/to/example）
2. ::mingcute:check-fill:: ci: 修复 check.yml 中的 Node.js 版本问题
3. ::mingcute:check-fill:: style: 移除自定义背景色
:::

[^revert]: 示例用法：`revert: 回退更改（abcd123）`。其中，`abcd123` 为短 commit hash。