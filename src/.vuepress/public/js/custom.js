setInterval(() => {
    // 删除“发送”按钮
    document.querySelectorAll("button").forEach(btn => {
        if (btn.innerText.trim() === "发送") {
            btn.remove();
        }
    });

    // 修改“预览”按钮样式
    document.querySelectorAll("button").forEach(btn => {
        if (btn.innerText.trim() === "预览") {
            btn.classList.remove("el-button--default");
            btn.classList.add("el-button--primary");
        }
    });
}, 30);