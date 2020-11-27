import React, { Fragment } from "react"
import "../../assets/css/reset.css"
import "./list.css"

function List() {
    return (
        <Fragment>
            <div className="works">
                <h3>学员作品</h3>
                <ul className="works_list clearfix">
                    <li>
                        <a href="#">
                            <img src="../../assets/images/icon3.png" className="work_a" />
                            <span className="wrork_txt clearfix work_a">
                                <strong className="work_a">学员作品：..</strong>
                                <span className="wrork_a clearfix">
                                    <em className="work_a">111</em>
                                    <em className='work_a'>16</em>
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}
export default List