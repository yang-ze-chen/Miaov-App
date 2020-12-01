import React, { Fragment } from "react"
import { NavLink } from 'react-router-dom'
import "../../assets/css/reset.css"
import "./list.css"

function List(props) {
    let { list } = props
    return (
        // 首页
        <Fragment>
            <div className="works">
                <h3>学员作品</h3>
                <ul className="works_list clearfix">
                    {
                        list.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <NavLink to={`/work/${item.id}`}>
                                        <img src={item.icon} className="work_a" />
                                        <span className="wrork_txt clearfix work_a">
                                            <strong className="work_a">{item.title}</strong>
                                            <span className="wrork_a clearfix">
                                                <em className="work_a">{item.good}</em>
                                                <em className='work_a'>{item.message}</em>
                                            </span>
                                        </span>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
}
export default List