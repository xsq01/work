import {NavItem} from "vuepress/config";

export default [
    {
        text: "SuShy学习记录",
        ariaLabel: "/sushy学习记录/",
        items: [
            {text: "git",link: '/sushy学习记录/git/'},
            {text: "redis",link: '/sushy学习记录/redis/'},
            {text: "os",link: '/sushy学习记录/os/'},
        ]
    },
    {
        text: "Ham学习记录",
        items: [
            {text: "MySQL", link: '/Ham/MySQL/'},
            {text: "Pytorch", link: '/Ham/Pytorch/'},
            {text: "JavaWeb", link: '/Ham/javaweb/'}
        ]
    },
] as NavItem[];
