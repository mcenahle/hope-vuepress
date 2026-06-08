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

    // 导航栏 - 去 navbar.ts 进行设置
    navbar,

    // 侧边栏 - 去 sidebar.ts 进行设置
    sidebar,

    // 页脚
    footer: '<span style="background:#94cdff; color:white;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 3v2H6v4a4 4 0 0 0 8 0V5h-2V3h3a1 1 0 0 1 1 1v5a6 6 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.775 1.238a3 3 0 1 1 2.05.148A5.502 5.502 0 0 1 8.999 16.5v-1.583A6 6 0 0 1 4 9V4a1 1 0 0 1 1-1zm11 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></svg> 医学与 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a8 8 0 0 1 7.939 7H4.063A8 8 0 0 1 12 15m-1.812 2.28A6.02 6.02 0 0 0 6.802 20h5.199zm3.626 0L12.001 20h5.198a6.02 6.02 0 0 0-3.385-2.72M18.001 2v6A6 6 0 0 1 6 8V2zM8 8a4 4 0 0 0 8 0zm8-4H8v2h8z"/></svg> 护理学长期学习者</span> | 网站最新版：<a href="https://github.com/mcenahle/hope-vuepress/releases/latest" target="_blank"><img src="https://img.shields.io/github/v/release/mcenahle/hope-vuepress?logo=github&style=flat-square" alt="Latest release" style="vertical-align:middle;"></a>',
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
            // provider: "Twikoo",
            // envId: "https://twikoo.mcenahle.com/", // your server url
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
