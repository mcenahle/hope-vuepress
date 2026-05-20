setInterval(() => {
    document.querySelectorAll("button").forEach(btn => {
        const text = btn.innerText.trim();
        // 删除“发送”
        if (text === "发送") {
            btn.remove();
        }
        // 修改“预览”按钮样式
        if (text === "预览") {
            btn.className =
                "el-button tk-preview el-button--small el-button--primary is-plain";
        }
    });
}, 300);