import React, { Fragment, useState,useEffect } from "react"
import "../../assets/css/reset.css"
import "./home.css"
import ReactSwiper from 'reactjs-swiper';
import Htop from "../home-top/h-top"
import Img from '../../assets/images/banner1.jpg'
import Img2 from '../../assets/images/banner2.jpg'
import Img3 from '../../assets/images/banner3.jpg'
import Img4 from '../../assets/images/banner4.jpg'
import Content from "../content/content"
import List from "../list/list"
//接口
import {getHome} from "../../api/index"
function Home() {
  //接口数据
  let [list,setList] = useState([]);
  useEffect(async() => {
    const {data} = await getHome("desc","sort","1","1");
    console.log(data)
    setList(data);
    // console.log(list)
  }, [])
  console.log(list);
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
  return (
    // 首页区域
    <Fragment>
      {/* 头部区域 */}
      <Htop></Htop>
      <div id="main">
        <div className="pageWrap">
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
                  妙味官方会不定期安排公开课，VIP会员可以零距离与讲师接触、探讨各种技术问题
                  </li>
                <li className="clearfix">
                  “作品展示、工作推荐、举办个人技术活动、招聘”等…
                  </li>
              </ul>
            </div>
            <List list={list}></List>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default Home;
