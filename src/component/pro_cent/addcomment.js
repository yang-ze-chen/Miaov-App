import React, { Fragment, useState ,useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Post from "./post"
function Procenter(props) {
    let [foot, setFoot] = useState(true)
    //文本域
    let {user,id}=props
    return (
        // 详情
        <Fragment>
            <footer
                className={"miiapv_footer " + (foot ? "foot" : "unfoot")}
            >
                <span onTouchEnd={() => {
                    let user= props.user
                    if (user=='') {
                        alert("请登录")
                    }else{
                        setFoot(!foot)
                    }
                    
                }}>回复本帖</span>

            </footer>
            <Post props={props} foot={foot} setFoot={setFoot}></Post>
        </Fragment>
    )
}
export default connect((state) => {
    return { user: state.login };
})(withRouter(Procenter))   
