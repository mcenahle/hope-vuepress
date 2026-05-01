import { defineUserConfig } from "vuepress";
import {viteBundler} from '@vuepress/bundler-vite'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "mcenahle.com",
  description: "个人成长记录",

  theme,

  bundler: viteBundler({
    viteOptions: {
      server: {
        port: 80,
        allowedHosts: ['mcenahle.edu.cn']
      }
    }
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
