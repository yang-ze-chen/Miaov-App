import React, { Fragment } from "react"
import "../../assets/css/reset.css"
import "./content.css"
function Content() {
    return (
        <Fragment>
            {/* 报名分类 */}
            <ul className="content_list clearfix">
                <li className="pop_li">
                    <button className="popular">Popular</button>
                    <h3 className="list_title">
                        VIP自学阵营
                    <span>A联盟-HTML&CSS</span>
                    </h3>
                    <p className="price">FREE</p>
                    <div className="txt">
                        <a>以免费公开课的形式，解决你在学习中遇到的问题。</a>
                        <a href="https://www.kaikeba.com/" className="signUp">报名</a>
                    </div>
                </li>
                <li className="month_li">
                    <h3 className="list_title">
                        VIP自学阵营
                    <span>A联盟-HTML&CSS</span>
                    </h3>
                    <p className="price">FREE</p>
                    <div className="txt">
                        <time>2个月</time>
                        <p>PC端静态页面，移动商静 态页面制作...</p>
                        <a href="https://www.kaikeba.com/" className="signUp">报名</a>
                    </div>
                </li>
                <li className="month_li">
                    <h3 className="list_title">
                        VIP自学阵营
                    <span>A联盟-HTML&CSS</span>
                    </h3>
                    <p className="price">￥9200</p>
                    <div className="txt">
                        <time>4个月</time>
                        <p>作用域、闭包、原型链、核 心算法...</p>
                        <a href="https://www.kaikeba.com/" className="signUp">报名</a>
                    </div>
                </li>
                <li className="pop_li">
                    <button className="popular">Popular</button>
                    <h3 className="list_title">
                        VIP自学阵营
                    <span>A联盟-HTML&CSS</span>
                    </h3>
                    <p className="price">FREE</p>
                    <div className="txt">
                        <a>以免费公开课的形式，解决你在学习中遇到的问题。</a>
                        <a href="https://www.kaikeba.com/" className="signUp">报名</a>
                    </div>
                </li>
            </ul>
            {/* 注册报名 */}
            <article className="register_vip">
                <h3>注册成为 妙味VIP会员</h3>
                <div className="register_txt">
                    <p>即刻观看妙味历年来超值的实体课程内容。</p>
                    <p>感受正统的前端开发课程体系、体验超值的海量实战案例，凝聚妙味全体讲师知识精华，尽在妙味VIP！</p>
                    <strong>仅需￥199元</strong>
                    <a href="https://www.kaikeba.com/">立即报名</a>
                </div>
            </article>
        </Fragment>
    )
}
export default Content