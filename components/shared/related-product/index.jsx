import { React, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Grid]);

const latestProducts = [
    {
        src: '/images/demosoni-cichlid.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/albino-electric-yellow.jpg',
        title: 'Albino Yellow Orange Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/Golden-Yellow-Snail.jpg',
        title: 'Golden Yellow Lab Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/raifest-cichild.png',
        title: 'Raifest Premium Fish Food (cichlid Pellets) -60Gm',
        price: 'Rs.100/-',
        oldprice: 'Rs280/-',
        href: '/'
    },
    {
        src: '/images/raifest-cichild.png',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/raifest-cichild.png',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/raifest-cichild.png',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/raifest-cichild.png',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/raifest-cichild.png',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/raifest-cichild.png',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/raifest-cichild.png',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/Cuphea-Anagalloidea.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/Red-Cabomba.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/GreenCabomba.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/Cabomba-belem-Red.jpeg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/AnubiasNanaLongWavy.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/AnubiasDragonClaw.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/AnubiasLancelota.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/lindernia-roundifolia-variegated.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/rotala-sp-yarabje.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/ratala-sp-wayanad.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/widow-tetra-collection.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/Assorted_Danio_Collection.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    },
    {
        src: '/images/electric-glo-green-barb.jpg',
        title: 'Demasoni Cichlid Fish',
        price: 'Rs.100/-',
        oldprice: '',
        href: '/'
    }
]

const RelatedProduct = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [swiper, setSwiper] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = () => {
        if (swiper) {
            setCurrentIndex(swiper.realIndex);
        }
    };

    const handleNext = () => {
        if (swiper) {
            swiper.slideNext();
            setCurrentIndex(swiper.realIndex + 1);
        }
    };

    const handlePrev = () => {
        if (swiper) {
            swiper.slidePrev();
            setCurrentIndex(swiper.realIndex - 1);
        }
    };

    return (
            <div>
                <div className='px-[6.6rem] pl-[400px]'>
                    <div className='flex justify-center pt-12'>
                        <h1 className='font-semibold text-xl'>Related Product</h1>
                    </div>
                    <div className='flex justify-center pt-[10px]'>
                        <div className='bg-gray-300 w-[185px] h-[2px]'></div>
                    </div>
                    <div className=''>
                        <div className='bg-gray-300 w-full h-[1px]'></div>
                        <div className='pb-6'>
                            <Swiper
                                onSwiper={setSwiper}
                                onSlideChange={handleSlideChange}
                                pagination={true}
                                slidesPerView={4}
                                spaceBetween={5}
                            >
                                {latestProducts.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className={`py-6 px-6 border-[2px] border-white hover:border-[2px] hover:border-gray-400 h-[18rem] w-[12rem] ${index === hoveredIndex ? 'hovered' : ''
                                                }`}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <div className=''>
                                                <Link href={item.href}>
                                                    <Image src={item.src} width={150} height={120} alt={item.title} />
                                                </Link>
                                                <div>
                                                    <div className={`hide-show ${index === hoveredIndex ? 'hidden' : 'visible'} pt-[15px]`}>
                                                        <h2 className='py-1 text-[14px] w-[134px] text-[#262626]'>{item.title}</h2>
                                                        <span className='flex justify-center'>
                                                            <s>{item.oldprice}</s>
                                                            <p className=' text-orange-400 font-bold'>{item.price}</p>
                                                        </span>
                                                    </div>
                                                    <div className={`hide-show ${index === hoveredIndex ? 'visible' : 'hidden'} pt-6`}>
                                                        <div className='flex'>
                                                            <Button className='h-[46px] rounded-full'><FaShoppingCart /></Button>
                                                            <Button className='h-[45px] rounded-full'><FaSearch /></Button>
                                                            <Button className='h-[45px] rounded-full'><FaHeart /></Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='bg-gray-300 w-full h-[1px]'></div>
                        <div className="flex justify-center gap-2">
                            <Button onClick={handlePrev} className={`cursor-pointer ${currentIndex === 0 ? 'hidden' : 'visible'} h-[2rem] w-[1.8rem] rounded-full flex items-center justify-center`}>
                                <LeftOutlined />
                            </Button>
                            <Button onClick={handleNext} className={`cursor-pointer ${currentIndex >= latestProducts.length - 6 ? 'hidden' : 'visible'} h-[2rem] w-[1.8rem] rounded-full flex items-center justify-center`}>
                                <RightOutlined />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default RelatedProduct;
