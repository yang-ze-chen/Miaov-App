import React, { Fragment, useState} from "react"
import { NavLink } from 'react-router-dom'
import './h-top.css'
function Htop() {
    let [txt, setTxt] = useState(true)
    return (
        // 首页头部
        <Fragment>
            <header id="header">
                <nav className='menu'>
                    <a className="menu-a icon-size" onTouchEnd={()=>{
                        setTxt(!txt)
                    }}></a>
                </nav>
                <h1 className="logo">miaov.com</h1>
                <NavLink to={"/login"} className="user"
                    
                ></NavLink>
            </header>
            <nav className={"menus "+ (txt?"unshow":"show")}>
                <NavLink to={"/"} className="iconfont icon-home active">首页</NavLink>
                <NavLink to={"/course"} className="iconfont icon-kecheng">课程安排</NavLink>
                <NavLink to={"/lecturer"} className="iconfont icon-peixunjiangshi">讲师团队</NavLink>
            </nav>
        </Fragment>
    )
}
export default Htop