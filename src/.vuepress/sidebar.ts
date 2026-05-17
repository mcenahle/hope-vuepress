import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        "me",
        {
            text: "我的自我介绍",
            icon: "carbon:user-profile-alt",
            prefix: "my/",
            link: "my/",
            children: "structure",
        },
        {
            text: "上海师范大学",
            icon: "mdi:university",
            link: "https://www.shnu.edu.cn",
        },
    ],
    "/coding-standards/": [
        {
            text: "代码规范",
            icon: "material-symbols:code",
            prefix: "",
            collapsible: true,
            expanded: true,
            children: "structure",
        },
    ],
    "/apps/": [
        {
            text: "个人应用程序",
            icon: "tdesign:app",
            prefix: "",
            collapsible: true,
            expanded: true,
            children: "structure",
        },
    ],
    "/med/": [
        {
            text: "个人医学知识探索",
            icon: "jam:medical",
            prefix: "",
            collapsible: true,
            expanded: true,
            children: "structure",
        },
    ],
    "/edu/": [
        {
            text: "教育学",
            icon: "mdi:education-outline",
            prefix: "",
            collapsible: true,
            expanded: true,
            children: "structure",
        },
    ],
    "/math/": [
        {
            text: "数学",
            icon: "boxicons:math",
            prefix: "",
            collapsible: true,
            expanded: true,
            children: ["2026-04-27-exercise", "2026-04-27-study", "2026-04-28-study", "2026-04-29-study"],
        },
    ],
    "/articles/": [
        {
            text: "文章",
            icon: "majesticons:paper-fold",
            prefix: "",
            collapsible: true,
            expanded: true,
            children: "structure",
        },
    ],
    "/site-affairs-documents/": [
        {
            text: "2026年站务文件",
            icon: "formkit:file",
            prefix: "",
            collapsible: true,
            expanded: true,
            children: "structure",
        },
    ],
});
