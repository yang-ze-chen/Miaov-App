import React, { useState, useEffect, Fragment } from 'react';
import ReactSwiper from 'reactjs-swiper';

function Procent(props) {
    // console.log('111',props)
    
    let {info} =props
    console.log(info)
    const swiperOptions = {
        preloadImages: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false
    };
    
    return (
        <Fragment>
            <div className="miiaov_banner" >
                <ReactSwiper
                    swiperOptions={swiperOptions}
                    showPagination
                    // items={info.image_path}
                    className="swiper-example"
                >
                </ReactSwiper>
            </div>
            <div className="miiaov_box">
                <div className="miiaov_article">
                    <h3 className></h3>
                    {
                        <article className="art_cle" dangerouslySetInnerHTML={{ __html: info.content }}>
                        </article>
                    }
                </div>
            </div>
        </Fragment>

    )
}
export default Procent