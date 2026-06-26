import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/me",
    "/my/",
    {
        text: "我的爱好",
        icon: "mdi:heart",
        children: ["coding-standards/", "edu/", "med/", "/status/", "resources/"],
    },
    "/friendslink",
    {
        text: "个人成长记录",
        icon: "mingcute:web-fill",
        link: "https://mcenahle.cn/",
    },
    {
        text: "电子邮件系统",
        icon: "mdi:email-outline",
        link: "https://mail.mcenahle.page/",
    },
]);