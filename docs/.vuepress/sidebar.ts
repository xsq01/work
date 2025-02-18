import {SidebarConfig4Multiple} from "vuepress/config";
import git from "./sidebars/git";
import redis from "./sidebars/redis";
import MySQL from "./sidebars/MySQL";
import Pytorch from "./sidebars/Pytorch";
import os from "./sidebars/os";

// @ts-ignore
export default {
    "/Ham/MySQL/": MySQL,
    "/Ham/Pytorch/": Pytorch,
    "/sushy学习记录/git/": git,
    "/sushy学习记录/redis/": redis,
    "/sushy学习记录/操作系统/": os,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
