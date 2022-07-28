import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CS-Note",
  description: "CS-Note",

  base: "/",

  theme,
});
