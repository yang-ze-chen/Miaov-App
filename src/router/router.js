import React from "react"
import {Redirect} from 'react-router-dom'
import Home from "../view/home/home.js"
import Login from '../view/login/login.js'
import Class from '../view/class/class'
import Teacher from '../view/teacher/teacher'
import Procenter from '../view/pro_center/pro_center'
const router=[
    {
        path:"/",
        exact:true,
        render:(props)=>{
            return <Redirect to='/home' ></Redirect>
        }
    },
    {
        path:"/home",
        exact:true,
        render:(props)=>{
            return <Home {...props} ></Home>
        }
    },
    {
        path:"/login",
        exact:true,
        render:(props)=>{
            return <Login {...props}></Login>
        }
    },
    {
        path:"/class",
        exact:true,
        render:(props)=>{
            return <Class {...props}></Class>
        }
    },
    {
        path:"/teacher",
        exact:true,
        render:(props)=>{
            return <Teacher {...props}></Teacher>
        }
    },
    {
        path:"/work/:id",
        exact:true,
        render:(props)=>{
            return <Procenter {...props}></Procenter>
        }
    }
]
const nav = [
    {
      name: "首页",
      to: "/",
      exact: true,
      className: "iconfont icon-home",
    },
    {
      name: "课程安排",
      to: "/course",
      exact: true,
      className: "iconfont icon-kecheng",
    },
    {
      name: "讲师团队",
      to: "/lecturer",
      exact: true,
      className: "iconfont icon-peixunjiangshi",
    },
  ];
  
  export  {router,nav};
