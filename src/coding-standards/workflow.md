---
title: 工作流
date: 2026-05-12
icon: ri:git-repository-commits-fill
order: 5
---

> [!info]
> 本规范于 2026 年 5 月 12 日（国际护士节）制定。

1. 开发：一直处于 `dev` 分支；
2. 发 PR（dev → main）。使用 `Squash and merge` 方式；
3. 本地运行命令：
```
git checkout dev
git merge main
```
4. 同步 dev（需要网络环境）
```
git push origin dev
```
于是 [GitHub dev 分支](https://github.com/mcenahle/hope-vuepress/tree/dev) 提示：`This branch is up to date with main.`