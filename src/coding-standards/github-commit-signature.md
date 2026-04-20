---
title: GitHub 提交签名
date: 2026-04-20
icon: tdesign:verify
order: 1
---

> [!info]
> 本规范于 2026 年 4 月 16 日 制定。

自 2026 年 4 月 16 日起，本人启用 ::mdi:github:: GitHub 提交签名机制，用于标识提交的来源与完整性（[Learn about vigilant mode](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits)）。

当提交显示为 Verified 且签名来源为本人密钥时，表示该提交由持有对应私钥的一方生成，且内容未被篡改。例如：

![GitHub 签名的提交](/images/LAPTOP-QBI12I8_mcenahle_20260416_12-48-22.jpg "GitHub 签名的提交")

以下为当前使用的 SSH 签名密钥指纹（Fingerprint）及对应 Randomart image：

`4LlkGj+uV8LjbOYgvmWoGna8dUtnSepaClrVkjEZWfU`

```txt
+--[ED25519 256]--+
|     .o...       |
|     .o   .      |
|     +.    E     |
|     .=o         |
|    .==.S.       |
|  ...*=.+ .      |
|..o==++O +       |
|.++++o%.+        |
|+.oo.O+o         |
+----[SHA256]-----+
```


说明：

- 仅当提交显示为 Verified 且签名指纹与上述一致时，可确认其由该密钥签名。
- 通过 ::mdi:github:: GitHub 网页（[github.com](https://github.com)）创建的提交由 GitHub 官方密钥签名，不使用上述 SSH Key。
- 若未来更换签名密钥，本页面内容将同步更新。