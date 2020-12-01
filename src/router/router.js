import React from "react"
import {Redirect} from 'react-router-dom'
import Home from "../view/home/home.js"
import Login from '../view/login/login.js'
import Class from '../view/class/class'
import Teacher from '../view/teacher/teacher'
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
    }
]
export {router}