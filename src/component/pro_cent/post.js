import React, { Fragment, useState } from 'react'
import { useParams } from "react-router-dom"
import Addcomment from '../../store/action/addcomment'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
function Post(props) {
    let { foot, setFoot } = props
    let { id } = useParams()
    let [txt, setTxt] = useState('')
    function sendTxt() {
        props.dispatch(
            Addcomment({
                article_id: id,
                content: txt,
            })
        )
            .then((data) => {
                setTimeout(() => {
                    if (data.code == 0) {
                        // console.log('111', data)
                    }
                }, 100);
            })
    }

    return (
        <Fragment>
            <div
                className={"miiapv_footer_er " + (foot ? "unfoot" : "foot")}
            >
                <textarea
                    value={txt}
                    onChange={(e) => {
                        setTxt(e.target.value)
                    }}
                ></textarea>
                <span
                    onTouchEnd={() => {
                        if (txt === "") {
                            alert("请输入内容")
                        } else {
                            setFoot(!foot)
                            sendTxt()
                        }
                    }}>发表本贴</span>
            </div>
        </Fragment>
    )
}
export default connect((state) => {
    return { user: state.login };
})(withRouter(Post))
