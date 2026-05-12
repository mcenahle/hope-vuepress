---
title: PR 规范
date: 2026-05-12
icon: si:pull-request-duotone
order: 3
---

> [!info]
> 本规范于 2026 年 5 月 12 日（国际护士节）制定。

PR 必须：
- 基于 [dev 分支](https://github.com/mcenahle/hope-vuepress/tree/dev) 创建
- 通过所有 CI checks
- 使用 [verified commits](/coding-standards/github-commit-signature.html)
- 使用普通 `Rebase and merge` strategy
- 不允许直接 push main

PR 消息，即将历次 commit 的消息进行整合，但内容可以适当缩短。[例如](https://github.com/mcenahle/hope-vuepress/pull/3)：

| commit hash |              commit message               |
|:-----------:|:-----------------------------------------:|
|   fe6163a   |     [dev] chore: 新增 `README.md`，描述仓库工作流     |
|   47d0b9d   | [dev] chore: docs: index.html 新增“护士节快乐”提示 |

则 PR 消息为“新增 `readme.md`，描述项目工作流；主页新增护士节快乐的提示”。