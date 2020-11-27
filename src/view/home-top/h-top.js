import React, { Fragment} from "react"
import './h-top.css'
function Htop(props) {
    console.log(props)
    let {txt,setTxt}=props
    console.log(txt,setTxt)
    return (
        <Fragment>
            <header id="header">
                <nav className='menu'>
                    <a className="menu-a icon-size" onTouchEnd={()=>{
                        setTxt(!txt)
                    }}></a>
                </nav>
                <h1 className="logo">miaov.com</h1>
                <a className="user"></a>
            </header>
            <nav className="menus">
                <a className="iconfont icon-home active">首页</a>
                <a className="iconfont icon-kecheng">课程安排</a>
                <a className="iconfont icon-peixunjiangshi">讲师团队</a>
            </nav>
        </Fragment>
    )
}
export default Htop