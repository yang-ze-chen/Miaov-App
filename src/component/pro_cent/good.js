import React, { Fragment, useState, useEffect } from 'react';
import { Good } from "../../api/index"
function Gooder(props) {
    // let [good, setGood] = useState();
    // useEffect(async () => {
    //     const { data } = await Good(0,props);
    //     setGood(data);
    // }, [])
    // console.log(good)
    return(
        <Fragment>
            {
                <p className="miiaov_zan">
                    <span>有10人学的很赞</span>
                    <span>赞</span>
                </p>
            }
        </Fragment>
    )
}
export default Gooder