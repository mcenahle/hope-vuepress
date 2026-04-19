import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "mcenahle.cn",
  description: "个人成长记录",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
