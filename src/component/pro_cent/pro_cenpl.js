import React, { Fragment, useState, useEffect } from 'react';
import "../../assets/css/reset.css"
import { getComment } from "../../api/index"
import image from '../../assets/images/comment_photo.png';
import Good from "./good"
function Procenpl(props) {
    let {id} =props
    let [comment, setComment] = useState([]);
    useEffect(async () => {
        const { data } = await getComment(id);
        setComment(data);
    }, [])
    return (
        <Fragment>
            <div className="miiaov_comment">
                <Good props={props}></Good>
                <ul className="comment_list" >
                    {
                        comment.map((item, index) => {
                            return (
                                <li key={item.create_time}>
                                    <div className="user_comment clearfix">
                                        <img src={image} />
                                        <span>{item.username}</span>
                                    </div>
                                    <div className="comment_txt">
                                        {item.content}
                                    </div>
                                    <div className="comment_footer">
                                        {item.create_time}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
}
export default Procenpl