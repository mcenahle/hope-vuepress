import {navbar} from "vuepress-theme-hope";
// 已被迁移到 theme.ts
export default navbar([
    "/",
    "/me",
    "/my/",
    "coding-standards/",
    "/math/",
    {
        text: "个人成长记录",
        icon: "mingcute:web-fill",
        link: "https://mcenahle.cn/",
    },
    "/friendslink",
]);
