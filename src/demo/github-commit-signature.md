# GitHub Commit Signature

这个文件用于演示 `@include` 语法。

你可以在提交页面看到签名状态：

- **Verified**: 提交经过签名验证
- **Partially verified**: 仅部分信息完成验证
- **Unverified**: 未通过签名验证

## 小贴士

1. 使用 GPG 或 SSH key 给提交签名。
2. 在 GitHub 设置中上传公钥。
3. 开启本地 Git 的 `commit.gpgsign`。
4. 重新提交后检查签名状态。
5. 对关键分支启用受保护策略。
6. 配置 CI 检查提交来源。
7. 定期轮换密钥并妥善保管。

以上内容仅作为文档演示示例。
