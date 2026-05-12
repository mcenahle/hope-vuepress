---
title: 本网站仓库策略
date: 2026-04-20
icon: ri:git-repository-fill
order: 4
---

> [!info]
> 本规范于 2026 年 5 月 12 日（国际护士节）制定。

自从 2026 年 5 月 12 日起，本网站仓库采取以下强制性策略：

1. `main` 分支：
- Require a pull request before merging. _(All commits must be made to a non-protected branch and submitted via a pull request before they can be merged into a branch that matches this rule.)_
- Require status checks to pass before merging. _(Commits must first be pushed to another branch, then merged or pushed directly to a branch that matches this rule after status checks have passed.)_
- Require signed commits. _(Commits pushed to matching branches must have verified signatures.)_
- Do not allow bypassing the above settings. _(The above settings will apply to administrators and custom roles with the "bypass branch protections" permission.)_
- Force pushes are forbidden. _(Running `git push --force` command will be rejected.)_
- Branch deletion is forbidden.

2. `dev` 分支：
- Require signed commits. _(Commits pushed to matching branches must have verified signatures.)_
- Do not allow bypassing the above settings. _(The above settings will apply to administrators and custom roles with the "bypass branch protections" permission.)_
- Force pushes are forbidden. _(Running `git push --force` command will be rejected.)_
- Branch deletion is forbidden.