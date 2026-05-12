import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://mcenahle.com",
    fullscreen: true,
    print: true,
    darkmode: "switch",
    contributors: false,

    navbarAutoHide: "none",

    author: {
        name: "mcenahle",
        url: "",
    },

    logo: "/logo.png",

    repo: "mcenahle/hope-vuepress",

    docsDir: "src",

    docsBranch: "main",

    // 导航栏
    navbar: [
        "/",
        "/me",
        "/my/",
        {
            text: "我的爱好",
            icon: "mdi:heart",
            children: ["coding-standards/", "/math/", "/status/", "resources/"],
        },
        "/friendslink",
        {
            text: "个人成长记录",
            icon: "mingcute:web-fill",
            link: "https://mcenahle.cn/",
        },
    ],

    // 侧边栏
    sidebar,

    // 页脚
    footer: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110l312 110z"/><path fill="currentColor" d="M378.4 475.1a35.91 35.91 0 0 0-50.9 0a35.91 35.91 0 0 0 0 50.9l129.4 129.4l2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7z"/></svg> mcenahle.com | <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 0v64q0 167-25 310t-80 273t-137 248t-201 238q-38 38-77 75t-81 72h-210q75-54 143-112t134-124q99-101 173-203t124-213t76-234t32-265q-142 5-265 31t-233 77t-213 123t-203 173q-100 97-182 204T668 962l356 355v248q-138 80-279 156l-418-418q76-141 156-279H256V722l572-191v1q127-136 252-236t264-166t295-98t345-32zM973 1447l-372-372q-29 51-57 102t-58 102v1l282 282h1q51-29 102-57t102-58M558 896q29-46 58-91t62-89l-294 98v82zm978-128q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100m-384 0q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50m-896 768q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20H0v-256q0-53 20-99t55-82t81-55t100-20m0 384q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50v128zm1152-128v-128h640v128zm0-256v-128h640v128zm-256 512v-128h128v128zm0-512v-128h128v128zm256 512v-128h640v128zm-256-256v-128h128v128z"/></svg> 当前稳定版本：<a href="https://github.com/mcenahle/hope-vuepress/releases/latest" target="_blank"><img src="https://img.shields.io/github/v/release/mcenahle/hope-vuepress?logo=github" alt="Latest release" style="vertical-align:middle;"></a>',
    displayFooter: true,

    // 加密配置
    encrypt: {
        config: {
            "/demo/encrypt.html": {
                hint: "Password: 1234",
                password: "1234",
            },
            // "/thoughts/": ["mcenahlethoughts-page"],
        },
    },

    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    hotReload: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdown: {
        align: true,
        alert: true,
        attrs: true,
        codeTabs: true,
        component: true,
        demo: true,
        figure: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        plantuml: true,
        spoiler: true,
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({tag}) => {
                    if (tag === "em") {
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
                            content: "Recommended",
                        };
                    }
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,

        // 取消注释它们如果你需要 TeX 支持
        math: {
            //   // 启用前安装 katex
            // type: "katex",
            //   // 或者安装 @mathjax/src
            type: "mathjax",
            // output: "chtml",  // 取消注释以使用 chtml
        },

        // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
        // revealjs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // 在启用之前安装 chart.js
        // chartjs: true,

        // insert component easily

        // 在启用之前安装 echarts
        // echarts: true,

        // 在启用之前安装 flowchart.ts
        // flowchart: true,

        // 在启用之前安装 mermaid
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // 在启用之前安装 sandpack-vue3
        // sandpack: true,
    },

    // 在这里配置主题提供的插件
    plugins: {
        // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
        comment: {
            provider: "Twikoo",
            envId: "https://twikoo.mcenahle.com/", // your server url
        },

        components: {
            components: ["Badge", "VPCard"],
        },

        icon: {
            prefix: "fa6-solid:",
            assets: "iconify",
        },

        copyCode: {
            showInMobile: true,
        },

        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cacheImage: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
