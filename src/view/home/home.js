import React, { Fragment,useState } from "react"
import "../..//assets/css/reset.css"
import "./common.css"
import "./index.css"
import route from 'react-router-dom'
import ReactSwiper from 'reactjs-swiper';
import Htop from "../home-top/h-top"
import Img from '../../assets/images/banner1.jpg'
import Img2 from '../../assets/images/banner2.jpg'
import Img3 from '../../assets/images/banner3.jpg'
import Img4 from '../../assets/images/banner4.jpg'

function Home() {
  const items = [{
    image: Img,
    
  }, {
    image: Img2,
  }, {
    image: Img3,
  }, {
    image: Img4,
  }];
  const item=[
    {
    image:Img2
  },{
    image: Img2,
  }
]

  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  let [txt,setTxt]=useState(true)
  console.log('00',txt)
  
    return (
      <Fragment>
        {/* 头部区域 */}
        <Htop txt={txt} setTxt={setTxt}></Htop>
        <div id="main">
          <div className={"pageWrap "+(txt?"unpagewrfrom":"pagewrfrom") }>
            {/* 轮播区域 */}
            <div className="banner">
              <div className="banner-img">
                <ul className="banner-list clearfix">
                  <ReactSwiper swiperOptions={swiperOptions} showPagination items={items,item} item={item}
                    className="swiper-example" />
                </ul>
              </div>
            </div>
            <div className="index_content">
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
              {/* 特色 */}
              <div className="characteristic">
                <h3>妙味特色</h3>
                <ul className="characteristic_list">
                  <li className="clearfix">
                    成为VIP会员后，即刻观看“妙味VIP视频库”中任何视频
                  </li>
                  <li className="clearfix">
                    成为VIP会员后，即刻观看“妙味VIP视频库”中任何视频
                  </li>
                  <li className="clearfix">
                    成为VIP会员后，即刻观看“妙味VIP视频库”中任何视频
                  </li>
                </ul>
              </div>
              <div className="works">
                <h3>学员作品</h3>
                <ul className="works_list clearfix">
                  <li>
                    <a href="#">
                      <img src="../../assets/images/icon3.png" className="work_a" />
                      <span className="wrork_txt clearfix work_a">
                        <strong className="work_a">学员作品：..</strong>
                        <span className="wrork_txt ">
                          <em className='work_a'></em>
                          <em className="work_a"></em>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    );
}

export default Home;
