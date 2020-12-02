import React, { Fragment } from 'react';
import './pro_center.css'
import "../../assets/css/reset.css"
import Htop from "../home-top/h-top"
import Procenpl from "../../component/pro_cent/pro_cenpl"
import Procent from "../../component/pro_cent/pro_center"
import Footer from "../../component/pro_cent/addcomment"

function Procenter(props) {
    let id = props.match.params.id
    // console.log('88',id)
    return (
        // 详情
        <Fragment>
            <div id="main">
                <Htop></Htop>
                <Procent id={id}></Procent>
                <Footer id={id}></Footer>
                {/* 评论 */}
                <Procenpl id={id}></Procenpl>
            </div>

        </Fragment >
    )
}
export default Procenter