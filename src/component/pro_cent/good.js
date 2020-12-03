// import React, { Fragment, useState, useEffect } from 'react';
// import { Good } from "../../api/index"
// function Gooder(props) {
//     // let [good, setGood] = useState();
//     // useEffect(async () => {
//     //     const { data } = await Good(0,props);
//     //     setGood(data);
//     // }, [])
//     // console.log(good)
//     return(
//         <Fragment>
//             {
//                 <p className="miiaov_zan">
//                     <span>有10人学的很赞</span>
//                     <span>赞</span>
//                 </p>
//             }
//         </Fragment>
//     )
// }
// export default Gooder

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGood, setGood, cancelGood } from "../../store/action/good";
import { withRouter } from "react-router-dom";

function Good(props) {
    console.log('110',props)
  let { goodNum, good, user, dispatch, id, goodId } = props;
  // console.log(props);
  let { history } = props;
  // 类似于派生属性
  let [goodCount, setGoodCount] = useState(goodNum);
  console.log(goodCount)
  useEffect(() => {
    dispatch(getGood(id));
    setGoodCount(goodNum)
  }, [user]);
  return (
    <p className="miiaov_zan">
      <span>有{goodCount}人学的很赞</span>
      <span
        className={`iconfont icon-tuijian1 ${good ? "good" : ""}`}
        onTouchEnd={() => {
          if (user) {
            if (good) {
              dispatch(cancelGood({ article_id: id, goodid: goodId })).then(
                (res) => {
                  if (res) {
                    setGoodCount(--goodCount);
                    alert('取消点赞')
                  }
                }
              );
            } else {
              dispatch(setGood(id)).then((res) => {
                if (res) {
                  setGoodCount(++goodCount);
                  alert('点赞成功')
                }
              });
            }
          } else {
            history.push("/login");
          }
        }}
      >
        赞
      </span>
    </p>
  );
}
export default withRouter(
  connect((state) => {
    // console.log(state);
    return {
      ...state.good,
      user: state.login,
    };
  })(Good)
);
