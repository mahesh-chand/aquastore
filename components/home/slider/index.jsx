import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Carousel } from 'antd';
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const swiperSlider = [
    {
        heading: 'Download Aquastore App',
        src: '/images/bannerslider.jpg',
        amount: 'starting at 500'
    },
    {
        heading: 'Primium Quility Imported Betta Fish',
        src: '/images/betta.png',
        amount: 'starting @Rs. 140'
    }
]

const SwiperSlider = () => {
    return (
        <div>
            <div className=''>
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {swiperSlider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <li style={contentStyle} className='w-full h-[400px] relative flex'>
                                    <div className='absolute top-0 left-0 right-0 bottom-0 h-full w-[100%]'>
                                        <img src={item.src} alt='' />
                                    </div>
                                    <div className='absolute top-0 left-0 right-0 bottom-0'></div>
                                    <div className='absolute bottom-0 left-0 right-0 text-white pl-16 pb-16 z-10'>
                                        <div className=''>
                                            <h1 className='flex justify-start text-5xl font-semibold text-white py-2'>{item.heading}</h1>
                                            <h1 className='flex justify-start text-5xl text-red-300 font-semibold'>{item.amount}</h1>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SwiperSlider