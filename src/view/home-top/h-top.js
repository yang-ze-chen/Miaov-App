import React, {Fragment} from "react"
import './h-top.css'
import {NavLink} from 'react-router-dom'
function Htop(props) {
    // console.log(props)
    let {txt,setTxt}=props
    // console.log(txt,setTxt)
    // let [txt, setTxt] = useState(true)

    return (
        <Fragment>
            <header id="header">
                <nav className='menu'>
                    <a className="menu-a icon-size" onClick={()=>{
                        setTxt(!txt)
                    }}></a>
                </nav>
                <h1 className="logo">miaov.com</h1>
                <NavLink to='/login' className="user"></NavLink>
            </header>

            {!txt?(<nav className="menus">
                <a className="iconfont icon-home active">首页</a>
                <NavLink to='/class' className="iconfont icon-kecheng">课程安排</NavLink>
                {/* <a className="iconfont icon-kecheng">课程安排</a> */}
                <NavLink to='/teacher' className="iconfont icon-peixunjiangshi">讲师团队</NavLink>
                {/* <a className="iconfont icon-peixunjiangshi">讲师团队</a> */}
            </nav>):""}
            
        </Fragment>
    )
}
export default Htop