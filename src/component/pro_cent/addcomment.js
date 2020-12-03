import React, { Fragment, useState } from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import Addcomment from '../../store/action/addcomment'
function Procenter(props) {
    // console.log(props)
    let id=props.id
    // console.log(id)
    let [foot, setFoot] = useState(true)
    let [txt,setTxt]=useState('')
    function  sendTxt(){
        props
            .dispatch(
                Addcomment({
                    article_id:id,
                    content:txt,
                })
            )
            .then((data) => {
                console.log('000',data)
                setTimeout(() => {
                    if (data.code == 0) {
                        // console.log('111',data)
                        // setDeg(0);
                    }
                }, 100);
            })
        }
    return (
        // 详情
        <Fragment>
            <footer
                className={"miiapv_footer " + (foot ? "foot" : "unfoot")}
            >
                <span onTouchEnd={() => {
                    setFoot(!foot)
                }}>回复本帖</span>

            </footer>
            <div
                className={"miiapv_footer_er " + (foot ? "unfoot" : "foot")}>
                <textarea 
                    value={txt}
                    onChange={({target})=>{
                        setTxt(target.value)
                    }}
                ></textarea>
                <span onTouchEnd={() => {
                    setFoot(!foot)
                    sendTxt()
                    
                }}>发表本贴</span>
            </div>

        </Fragment>
    )
}
// export default Procenter
export default connect((state) => {
    // console.log('000',state);
    return { user: state.login };
})(withRouter(Procenter))