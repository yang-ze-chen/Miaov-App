import React, { useState, useEffect, useRef } from 'react';
import './teacher.css'
import { getTeacher } from '../../http/http'
import Swiperd from './swiper'
import Htop from '../home-top/h-top'
function Teacher() {
    let [data, setdata] = useState([])
    useEffect(async () => {
        await getTeacher('desc', 'sort', 2, 0).then((res) => {
            console.log(11111)
            console.log(res)
            setdata(res.data)
        })

    }, [])

    console.log(data)

    let [isLoad, setLoad] = useState(false)
    let [isLoad2, setLoad2] = useState(false)
    let [isLoad3, setLoad3] = useState(false)
    let [isLoad4, setLoad4] = useState(false)

    return (
        <div>
            <Htop></Htop>
            <div className="teacher_banner">
                <h2><span></span></h2>
                <Swiperd data={data}></Swiperd>
            </div>
            <div className="teacher_index">
                <h2>加入我们</h2>
                <ul className="teacher_list clearfix">
                    <li
                        onTouchStart={() => {

                            setLoad(true)
                        }}
                        onTouchEnd={() => {

                            setLoad(false)
                        }}

                        className={isLoad ? "active" : ""}
                    >
                        <p className={isLoad ? " activep" : "pppp"} >new</p>
                        <div className="message_li">
                            <h3>web讲师</h3>
                            <p>人数：人数不限，多多益善</p>
                            <p>薪资：面议</p>
                        </div>
                    </li>
                    <li
                        onTouchStart={() => {

                            setLoad2(true)
                        }}
                        onTouchEnd={() => {

                            setLoad2(false)
                        }}

                        className={isLoad2 ? "active" : ""}>
                        <p className={isLoad2 ? " activep" : "pppp"} >new</p>
                        <div className="message_li">
                            <h3>课程顾问</h3>
                            <p>人数：3人</p>
                            <p>薪资：底薪+提成</p>
                        </div>
                    </li>
                    <li onTouchStart={() => {

                        setLoad3(true)
                    }}
                        onTouchEnd={() => {

                            setLoad3(false)
                        }}

                        className={isLoad3 ? "active" : ""}>
                        <p className={isLoad3 ? " activep" : "pppp"} >new</p>
                        <div className="message_li">
                            <h3>客服</h3>
                            <p>人数：3人</p>
                            <p>薪资：面议</p>
                        </div>
                    </li>
                    <li onTouchStart={() => {

                        setLoad4(true)
                    }}
                        onTouchEnd={() => {

                            setLoad4(false)
                        }}

                        className={isLoad4 ? "active" : ""}>
                        <p className={isLoad4 ? " activep" : "pppp"} >new</p>
                        <div className="message_li">
                            <h3>行政前台助理</h3>
                            <p>人数：3人</p>
                            <p>薪资：底薪+提成</p>
                        </div>
                    </li>
                </ul>
                <div className="welcome clearfix">
                    <div className="welcome_photo">

                    </div>
                    <p>欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……<span>本招聘信息长期有效</span></p>
                </div>
            </div>
            <div className="foot">
                <div className="phone clearfix">
                    <a href="#">hr_recruit@miaov.com</a>
                    <a href="#">010-57269690</a>
                </div>
                <nav className="foot_tit clearfix">
                    <a href="#">网站首页</a>
                    <a href="#">课程安排</a>
                    <a href="#">学员作品</a>
                    <a href="#">视频教程</a>
                    <a href="#">关于我们</a>
                    <a href="#">在线留言</a>
                    <a href="#">常见问题</a>
                </nav>
                <p className="copyright">京ICP备08102442号-1 2007-2016 MIAOOV.COM 版权所有</p>
            </div>
        </div>
    )
}
export default Teacher;