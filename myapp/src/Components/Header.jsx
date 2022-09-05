import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import add from '../Redux/Action';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Autoplay, EffectFade, Navigation, Pagination ,Zoom} from "swiper";

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const m = useSelector((x) => x.HandleTtitle)
  const dispatch = useDispatch()

  return (
    <>


      <div id='header' className="header w-100">

        <Swiper


 
         zoom= {{
          maxRatio: 3,
          minRatio: 1
        }}

          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,

          }}
          modules={[EffectFade, Navigation, Pagination,Autoplay,Zoom]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img className='w-100' src="https://drammar-clinics.com/images/banner/banner-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100' src="https://drammar-clinics.com/images/banner/banner-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100' src="https://drammar-clinics.com/images/banner/banner-3.png" />
          </SwiperSlide>


        </Swiper>

        {m !== null ? <div className="position-header text-center px-4 py-3 ">
          <h2>{m}</h2>
          <h4 className='text-muted mt-3'>{m}/   <NavLink to='/' onClick={() => dispatch(add(null))}>الرئسيه</NavLink></h4>
        </div> : ""}

      </div>



    </>
  )
}

export default Header