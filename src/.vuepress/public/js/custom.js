const timer = setInterval(() => {
    const btn = document.querySelector(
        'button.el-button.tk-send'
    );
    if (btn) {
        btn.remove();
        clearInterval(timer);
    }
}, 300);

setInterval(() => {
    document.querySelectorAll("button").forEach(btn => {
        if (btn.innerText.trim() === "发送") {
            btn.remove();
        }
    });
}, 300);