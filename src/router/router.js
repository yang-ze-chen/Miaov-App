import React from "react"
import {Redirect} from 'react-router-dom'
import Home from "../view/home/home.js"
import Login from '../view/login/login.js'
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
    }
]
export {router}