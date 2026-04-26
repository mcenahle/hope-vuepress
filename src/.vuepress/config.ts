import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "mcenahle.com",
  description: "个人成长记录",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
