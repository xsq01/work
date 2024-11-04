import {SidebarConfig4Multiple} from "vuepress/config";
import lusir from "./sidebars/lusir";
import git from "./sidebars/git";

// @ts-ignore
export default {
    "/Ham/": lusir,
    "/sushy学习记录/git/": git,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
