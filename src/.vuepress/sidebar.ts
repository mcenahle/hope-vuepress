import { sidebar } from "vuepress-theme-hope";

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
      text: "代码规范",
      icon: "material-symbols:code",
      prefix: "coding-standards/",
      link: "coding-standards/",
      children: ["github-commit-signature", "write-commit-message"],
    },
    {
      text: "数学",
      icon: "boxicons:math",
      prefix: "math/",
      link: "math/",
      children: ["2026-04-27-exercise", "2026-04-27-study"],
    },
    {
      text: "上海师范大学",
      icon: "mdi:university",
      link: "https://www.shnu.edu.cn",
    },
  ],
});
