import React, { Fragment,useState, useEffect } from 'react';
import './pro_center.css'
import "../../assets/css/reset.css"
import Htop from "../home-top/h-top"
import Procenpl from "../../component/pro_cent/pro_cenpl"
import Procent from "../../component/pro_cent/pro_center"
import Footer from "../../component/pro_cent/addcomment"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getInfo } from "../../api/index"
function Procenter(props) {
    let id = props.match.params.id
    // console.log(props)
    let [info, setInfo] = useState({});
    useEffect(async () => {
        const { data } = await getInfo(id);
        setInfo(data);
    }, [])
    return (
        // 详情
        <Fragment>
            <div id="main">
                <Htop></Htop>
                <Procent props={props} id={props.match.params.id}></Procent>
                <Footer props={props} id={props.match.params.id}></Footer>
                {/* 评论 */}
                <Procenpl props={props} goodNum={info.good} id={props.match.params.id}></Procenpl>
            </div>

        </Fragment >
    )
}
export default connect((state) => {
        return { user: state.login };
    })(withRouter(Procenter)) 