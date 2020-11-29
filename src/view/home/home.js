import React, { Fragment, useState,useEffect } from "react"
import "../../assets/css/reset.css"
import "./index.css"
import ReactSwiper from 'reactjs-swiper';
import Htop from "../home-top/h-top"
import Img from '../../assets/images/banner1.jpg'
import Img2 from '../../assets/images/banner2.jpg'
import Img3 from '../../assets/images/banner3.jpg'
import Img4 from '../../assets/images/banner4.jpg'
import Content from "../content/content"
import List from "../list/list"
import {getHome} from '../../http'
function Home(props) {
  // console.log(props)
  // let {txt}=props
  // console.log(txt)
  const items = [{
    image: Img,
  }, {
    image: Img2,
  }, {
    image: Img3,
  }, {
    image: Img4,
  }];

  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };

  let [txt, setTxt] = useState(true)
  // console.log(0,txt)
  // useEffect(()=>{
  //   getHome(1,1).then((res)=>{
  //       console.log(11111)
  //       console.log(res)
  //     })
  // })
  return (
    <Fragment>
      {/* 头部区域 */}
      <Htop txt={txt} setTxt={setTxt}></Htop>
      <div id="main">
        <div className={"pageWrap " + (txt ? "unpagewrfrom" : "pagewrfrom")}>
          {/* 轮播区域 */}
          <div className="banner">
            <div className="banner-img">
              <ul className="banner-list clearfix">
                <ReactSwiper
                  swiperOptions={swiperOptions}
                  showPagination
                  items={items}
                  className="swiper-example"
                />
              </ul>
            </div>
          </div>
          <div className="index_content">
            <Content></Content>
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
            <List></List>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default Home;
