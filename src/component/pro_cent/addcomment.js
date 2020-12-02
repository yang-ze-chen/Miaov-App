import React, { Fragment, useState } from 'react';
import { addComment } from "../../api/index"

function Procenter(props) {
    // console.log(props)
    let [foot, setFoot] = useState(true)
    // console.log(foot)
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
                <textarea></textarea>
                <span onTouchEnd={() => {
                    setFoot(!foot)
                }}>发表本贴</span>
            </div>

        </Fragment>
    )
}
export default Procenter