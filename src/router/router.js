import React from "react"
import Home from "../view/home/home"
import Teacher from "../view/teacher/teacher"
import Procenter from "../view/pro_center/pro_center"
import Class from "../view/class/class"
import Login from "../view/login/login"
const router = [
    {
        name: "首页",
        path: "/",
        exact: true,
        render: (props) => {
            return <Home {...props}></Home>;
        },
    },
    {
        name: "课程安排",
        path: "/course",
        exact: true,
        render: (props) => {
            return <Class {...props}></Class>;
        },
    },
    {
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        render: (props) => {
            return <Teacher {...props}></Teacher>;
        },
    },
    {
        name: "作品详情",
        path: "/work/:id",
        exact: true,
        render: (props) => {
            return <Procenter {...props}></Procenter>;
        },
    },
    {
        name: "登录",
        path: "/login",
        exact: true,
        render: (props) => {
            return <Login {...props}></Login>;
        },
    },
];

// const nav = [
//     {
//         name: "首页",
//         to: "/",
//         exact: true,
//         className: "iconfont icon-home",
//     },
//     {
//         name: "课程安排",
//         to: "/course",
//         exact: true,
//         className: "iconfont icon-kecheng",
//     },
//     {
//         name: "讲师团队",
//         to: "/lecturer",
//         exact: true,
//         className: "iconfont icon-peixunjiangshi",
//     },
// ];

export { router};