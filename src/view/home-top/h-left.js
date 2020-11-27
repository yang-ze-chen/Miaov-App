import React, {Fragment} from "react"
import './h-left.css'
function Left(props) {

    return (
        <Fragment>
            <nav className="menus">
                <a className="iconfont icon-home active">首页</a>
                <a className="iconfont icon-kecheng">课程安排</a>
                <a className="iconfont icon-peixunjiangshi">讲师团队</a>
            </nav>
        </Fragment>
    )
}
export default Left