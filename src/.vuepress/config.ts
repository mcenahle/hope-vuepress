import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import * as fs from 'fs'
import theme from "./theme.js";

const isDev = process.env.NODE_ENV === 'development'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "mcenahle.com",
  description: "个人成长记录",

  theme,

  bundler: viteBundler({
    viteOptions: {
      server: {
        port: isDev ? 443 : 8080,
        host: '0.0.0.0',
        ...(isDev
            ? {
              https: {
                key: fs.readFileSync('./cert/mcenahle.edu.cn-key.pem'),
                cert: fs.readFileSync('./cert/mcenahle.edu.cn.pem'),
              },
            }
            : {}),
        allowedHosts: ['mcenahle.edu.cn']
      }
    }
  }),
});