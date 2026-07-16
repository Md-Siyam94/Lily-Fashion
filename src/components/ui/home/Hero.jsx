'use client'
import Image from 'next/image';
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import Banner1 from '../../../assets/hero/banner1.webp'
import Banner2 from '../../../assets/hero/banner2.webp'
import Banner3 from '../../../assets/hero/banner3.png'
import Banner4 from '../../../assets/hero/banner4.avif'
import Banner5 from '../../../assets/hero/banner5.avif'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Hero() {

    return (
        <div className='max-w-7xl min-h-[calc(100vh-30vh)] mx-auto gap-5 grid grid-cols-8 grid-rows-3'>
            <div className='col-span-6 h-full w-full row-span-3 rounded-lg '>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Pagination]}
                    className="mySwiper">
                    <SwiperSlide><Image className='h-full w-full object-cover rounded-lg' src={Banner1} alt='banner-1' /></SwiperSlide>
                    <SwiperSlide><Image className='h-full w-full object-cover rounded-lg' src={Banner2} alt='banner-2' /></SwiperSlide>
                    <SwiperSlide><Image className='h-full w-full object-cover rounded-lg' src={Banner3} alt='banner-3' /></SwiperSlide>
                    <SwiperSlide><Image className='h-full w-full object-cover rounded-lg' src={Banner2} alt='banner-4' /></SwiperSlide>
                    <SwiperSlide><Image className='h-full w-full object-cover rounded-lg' src={Banner1} alt='banner-5' /></SwiperSlide>

                </Swiper>
            </div>
            <div className='col-span-2 h-full w-full row-span-1 '><Image className='rounded-lg' src={Banner1} alt='banner-1' /></div>
            <div className='col-span-2 h-full w-full row-span-1 '><Image className='rounded-lg' src={Banner2} alt='banner-2' /></div>
            <div className='col-span-1 h-full w-full row-span-1 border'></div>
            <div className='col-span-1 h-full w-full row-span-1 border'></div>

        </div>
    )
}
