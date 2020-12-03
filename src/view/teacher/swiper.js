
import React, { useState, useEffect } from 'react'
import './swiper.min.css'
import Swiper from './swiper.min.js'
import Teacherxq from './teacherxq'

function Swiperd(props){

    let {data} = props

    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay:2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let [isloca,setloca] = useState(false);
    let [id,setId] = useState("")
    return (
        <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            data.map((item,index) => {
                                let point = {};
                                // console.log(item.icon)
                                return (<div 
                                    className="swiper-slide" 
                                    key={index} 
                                    style={{width:'2.6rem'}}
                                    key={item.id}
                                >
                                            <img  src={item.icon}
                                             onClick={()=>{
                                              setloca(true)
                                              setId(item.id)
                                            }} />
                                            <p>{item.title}</p>
                                        </div>
                                        )
                            })
                        } 

                    </div>
                    <Teacherxq id={id} isloca={isloca} setloca={setloca}></Teacherxq> 
                    <div className="swiper-pagination" style={{position:'relative'}}></div>
                </div>
    )

}
export default Swiperd;

