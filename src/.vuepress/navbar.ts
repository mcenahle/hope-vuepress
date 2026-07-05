import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "我",
        icon: "mdi:face-man-profile",
        children: ["/me", "my/", "coding-standards/", "edu/", "med/", "/status/", "resources/"],
    },
    "/friendslink",
    {
        text: "博客网站",
        icon: "mdi:post-it-note-text-outline",
        link: "https://blog.mcenahle.page/",
    },
    {
        text: "电子邮件系统",
        icon: "mdi:email-outline",
        link: "https://mail.mcenahle.page/",
    },
    {
        text: "个人成长记录",
        icon: "mingcute:web-fill",
        link: "https://mcenahle.cn/",
    },
]);