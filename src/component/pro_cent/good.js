import React, { Fragment, useState, useEffect } from 'react';
import "../../assets/css/reset.css"
import { useParams } from 'react-router-dom';
import { getGood, setGood, cancelGood } from "../../store/action/good";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
function Gooder(props) {
    let { id } = useParams()
    let {goodNum} =props.props
    let { good, user, dispatch, goodId } = props
    let { history } = props;
    let [like, setlike] = useState()
    useEffect(async () => { 
        dispatch(getGood(id));
    }, [user])
    return (
        <Fragment>
            {
                <p className="miiaov_zan">
                    <span>有{goodNum}人学的很赞</span>
                    <span
                        className={`iconfont icon-tuijian1 ${good ? "good" : ""}`}
                        onTouchEnd={() => {
                            if (user) {
                                if (good) {
                                    dispatch(cancelGood({ article_id: id, goodid: goodId })).then(
                                        (res) => {
                                            if (res) {
                                                setlike(--like);
                                            }
                                        }
                                    );
                                } else {
                                    dispatch(setGood(id)).then((res) => {
                                        if (res) {
                                            setlike(++like);
                                        }
                                    });
                                }
                            } else {
                                history.push("/login");
                            }
                        }}
                    >赞</span>
                </p>
            }
        </Fragment>
    )
}
export default connect((state) => {
    return { user: state.login };
})(withRouter(Gooder))
