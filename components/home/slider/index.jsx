import { React, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
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
    const sliderRef = useRef(null);
    const options = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: { clickable: true },
    };

    const next = () => {
        sliderRef.current.slickNext();
        console.log(sliderRef.current,"dgfhfhghgfhnghhnghhtyhtghghb")
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <div>
            <div className=''>
                <Swiper
                    {...options}
                    ref={sliderRef}
                
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
            <div className="flex justify-between gap-2 px-[6.6rem]">
                <Button onClick={previous} className={`cursor-pointer h-[3rem] w-[3rem] rounded-full flex items-center justify-center`}>
                    <LeftOutlined />
                </Button>
                <Button onClick={next} className={`cursor-pointer h-[3rem] w-[3rem] rounded-full flex items-center justify-center`}>
                    <RightOutlined />
                </Button>
            </div>
        </div>
    )
}

export default SwiperSlider