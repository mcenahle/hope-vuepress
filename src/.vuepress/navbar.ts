import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/me",
  "/my/",
  "coding-standards/",
  /* {
    text: "代码规范",
    icon: "material-symbols:code",
    prefix: "/coding-standards/",
    children: [
      {
        text: "Github 相关",
        icon: "mdi:github",
        prefix: "/coding-standards/",
        children: ["github-commit-signature", "write-commit-message"],
      },
      {
        text: "编程语言相关",
        icon: "akar-icons:python-fill",
        prefix: "/",
        children: ["https://peps.python.org/pep-0008/", "https://ecma-international.org/publications-and-standards/standards/ecma-262/"],
      }
    ],
  }, */
  {
    text: "之前的主页网站",
    icon: "material-symbols:archive",
    link: "https://archive.mcenahle.cn/",
  },
  "/friendslink",
]);
