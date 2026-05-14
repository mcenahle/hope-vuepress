---
title: 本网站仓库策略
date: 2026-05-12
icon: ri:git-repository-fill
order: 4
---

> [!info]
> 本规范于 2026 年 5 月 12 日（国际护士节）制定。

自从 2026 年 5 月 12 日起，本网站仓库采取以下强制性策略：

- Require signed commits. _(Commits pushed to matching branches must have verified signatures.)_
- Do not allow bypassing the above settings. _(The above settings will apply to administrators and custom roles with the "bypass branch protections" permission.)_
- Force pushes are forbidden. _(Running `git push --force` command will be rejected.)_
- Branch deletion is forbidden.

::: note 翻译
* 要求提交签名（推送到匹配分支的提交必须具有已验证的签名）；
* 不允许绕过上述设置（上述设置将适用于具有“绕过分支保护”权限的管理员和自定义角色）；
* 禁止强制推送（运行 `git push --force` 命令将被拒绝）；
* 禁止删除分支。
:::