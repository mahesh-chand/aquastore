import { React, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { FaSearch, FaUser, FaShoppingCart, FaEnvelope, FaPhone, FaFacebook } from "react-icons/fa";
import { Dropdown, Space, Affix, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const currancy = [
    {
        label: <Link href="#">Indian Rupee</Link>,
        key: '0',
    },
    {
        label: <Link href="#">US Dollar</Link>,
        key: '1',
    },
];

const fishes = [
    {
        label: <Link href="#">Algae Eaters</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Angel</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Barbs</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Betta</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Cichlids</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Flower Horn</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Guppy</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Oscar</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Tetra</Link>,
        key: '1',
    },
]

const exoticFishes = [
    {
        label: <Link href="#">Arowana</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Discus</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Monster Fishe</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Pleco</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Stingray</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Snails</Link>,
        key: '1',
    }
]

const plants = [
    {
        label: <Link href="#">ForeGround Plants</Link>,
        key: '0',
    },
    {
        label: <Link href="#">MidGround Plants</Link>,
        key: '1',
    },
    {
        label: <Link href="#">BackGround Plants</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Floating Plants</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Live Plants</Link>,
        key: '0',
    }
]

const exoticPlants = [
    {
        label: <Link href="#">Exotic Plants on Mesh</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Exotic Plants on Rok</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Exotic Plants on Pot</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Tissue Culture Plants</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Exotic Live Plants</Link>,
        key: '0',
    }
]

const foodAccessories = [
    {
        label: <Link href="#">Accessories</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Fish Food</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Soil Fertilizers</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Treatments</Link>,
        key: '1',
    }
]

const topMenus = [
    {
        label: "My Account",
        href: "/",
    },
    {
        label: "Wish List (0)",
        href: "/",
    },
    {
        label: "Shopping Cart",
        href: "/",
    },
    {
        label: "Checkout",
        href: "/",
    }
]

const contact = [
    {
        icon: <FaPhone />,
        label: '+91 9995 793 684 WhatsApp',
        href: '#'
    },
    {
        icon: <FaEnvelope />,
        label: ' aquastore.in@gmail.com',
        href: '#'
    },
    {
        icon: <FaEnvelope />,
        label: 'MailTrack Your Order',
        href: '#'
    }
]

const information = [
    {
        label: 'About Us',
        href: '#'
    },
    {
        label: 'Shipping and Refund',
        href: '#'
    },
    {
        label: 'Privacy Policy',
        href: '#'
    },
    {
        label: 'Terms & Conditions',
        href: '#'
    },
    {
        label: 'Frequently Asked Questions',
        href: '#'
    }
]

const service = [
    {
        label: 'Contact Us',
        href: '#'
    },
    {
        label: 'Return Order',
        href: '#'
    },
    {
        label: 'Site Map',
        href: '#'
    },
    {
        label: 'Chat with Us',
        href: '#'
    },
]

const extras = [
    {
        label: 'Brands',
        href: '#'
    },
    {
        label: 'Gift Vouchers',
        href: '#'
    },
    {
        label: 'Affiliates',
        href: '#'
    },
    {
        label: 'Special Offers',
        href: '#'
    },
    {
        label: 'Blog',
        href: '#'
    }
]

const myAccount = [
    {
        label: 'My Account',
        href: '#'
    },
    {
        label: 'Order History',
        href: '#'
    },
    {
        label: 'Privacy Policy',
        href: '#'
    },
    {
        label: 'Newsletter',
        href: '#'
    }
]

const locations = [
    {
        label: 'online fish in Karnataka',
        href: '#'
    },
    {
        label: 'online fish in Tamilnadu',
        href: '#'
    },
    {
        label: 'online fish in Andhra Pradesh',
        href: '#'
    },
    {
        label: 'online fish in Maharashtra',
        href: '#'
    },
    {
        label: 'online fish in Delhi',
        href: '#'
    },
    {
        label: 'online fish in Gujarat',
        href: '#'
    },
    {
        label: 'online fish in Haryana',
        href: '#'
    },
    {
        label: 'online fish in Madhya Pradesh',
        href: '#'
    },
    {
        label: 'online fish in Telangana',
        href: '#'
    },
    {
        label: 'online fish in Rajastan',
        href: '#'
    },
    {
        label: 'online fish in Punjab',
        href: '#'
    },
    {
        label: 'online fish in Uttar Pradesh',
        href: '#'
    },
    {
        label: 'online fish in Goa',
        href: '#'
    },
    {
        label: 'online fish in West Bengal',
        href: '#'
    },
    {
        label: 'online fish in Chattisgarh',
        href: '#'
    },
    {
        label: 'online fish in Mumbai',
        href: '#'
    },
    {
        label: 'online fish in Chennai',
        href: '#'
    },
    {
        label: 'online fish in Ahmedabad',
        href: '#'
    },
    {
        label: 'online fish in Bengaluru',
        href: '#'
    },
    {
        label: 'online fish in Lucknow',
        href: '#'
    },
    {
        label: 'online fish in Kolkata',
        href: '#'
    },
    {
        label: 'online fish in Jaipur',
        href: '#'
    },
    {
        label: 'online fish in Pune',
        href: '#'
    },
    {
        label: 'online fish in Gwalior',
        href: '#'
    },
    {
        label: 'online fish in Nagpur',
        href: '#'
    },
]

const Layout = ({ children, description, keywords }) => {
    const [container, setContainer] = useState(null);
    return (
        <>
            <Head>
                <title>aquastore</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="robots" content="index,follow" />
                <meta property="og:title" content={process.env.NEXT_PUBLIC_BRAND_NAME} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={process.env.NEXT_PUBLIC_BRAND_LOGO} />
                <meta property="og:url" content="website" />
            </Head>
            <header>
                <div id="top" className='bg-black py-[9px] px-[6.6rem]'>
                    <nav className='flex'>
                        <div className='w-[20%]'>
                            <Dropdown
                                menu={{
                                    items: currancy,
                                }}
                            >
                                <a className='text-[0.8rem] font-semibold text-gray-500 hover:text-white' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Rs./ -
                                        <DownOutlined className='text-white font-bold text-[10px] hover:text-gray-500' />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className='w-[80%]'>
                            <ul className="flex gap-9 h-full items-center justify-end">
                                {
                                    topMenus.map((item, index) => (
                                        <li className='text-[0.8rem]'>
                                            <Link href={item.href} legacyBehavior key={index}>
                                                <a className="flex gap-1 text-gray-500 items-center">{item.icon}{item.label}</a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='bg-[#f59e0b] h-[131px]'>
                    <div className='px-[6.6rem] pt-[31px]'>
                        <div className='flex'>
                            <div className='absolute'>
                                <Link href='/'>
                                    <Image
                                        src='/images/aqua-logo.png'
                                        width={300}
                                        height={300}
                                    />
                                </Link>
                            </div>
                            <div className='flex relative pl-[257px] pt-[5px] item-center'>
                                <img src='/images/icon-phone.png' className='h-[1.9rem] w-[1.9rem]' />
                                <div className='text-[9px] font-bold leading-[9px] pt-[7px] pl-[5px]'>NEED<br /> HELP?</div>
                                <h1 className='text-white font-bold text-[1.4rem] pl-[7px] font-sans'>09995793684 WhatsApp only</h1>
                            </div>
                            <div className='pl-[56px]'>
                                <div className='flex justify-center bg-white h-[45px] w-[220px] rounded-full'>
                                    <form className='flex bg-white items-center'>
                                        <input placeholder='Search' className='w-40' />
                                        <FaSearch />
                                    </form>
                                </div>
                            </div>
                            <div className='flex gap-4 pl-4'>
                                <div className='flex items-center'>
                                    <Link href='/' legacyBehavior>
                                        <a className='bg-white rounded-full h-[45px] w-[45px] flex items-center justify-center hover:bg-[#38bdf8]'><FaUser /></a>
                                    </Link>
                                </div>
                                <div className='flex items-center'>
                                    <p className='bg-black rounded-full h-[20px] w-[20px] flex items-center justify-center text-white'>0</p>
                                    <Link href='/' legacyBehavior>
                                        <a className='bg-white rounded-full h-[45px] w-[45px] flex items-center justify-center hover:bg-[#38bdf8]'><FaShoppingCart /></a>
                                    </Link>
                                    <p className='flex gap-1 pl-4 text-[0.9rem] text-white font-bold'>Rs./- <DownOutlined /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Affix>
                    <div className='bg-white border-b-[1px] border-gray-300'>
                        <div className='px-[6.6rem]'>
                            <div className='flex items-center'>
                                <div>
                                    <Dropdown
                                        menu={{
                                            items: fishes,
                                        }}
                                    >
                                        <a className='text-[0.8rem] font-semibold' onClick={(e) => e.preventDefault()}>
                                            <Space style={{ height: "81px", width: "150px" }} className='border-r-[1px] border-gray-300 flex justify-start'>
                                                Fishes
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div>
                                    <Dropdown
                                        menu={{
                                            items: exoticFishes,
                                        }}
                                    >
                                        <a className='text-[0.8rem] font-semibold' onClick={(e) => e.preventDefault()}>
                                            <Space style={{ height: "81px", width: "150px" }} className='border-r-[1px] border-gray-300 flex justify-center'>
                                                Exotic Fishes
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div>
                                    <Dropdown
                                        menu={{
                                            items: plants,
                                        }}
                                    >
                                        <a className='text-[0.8rem] font-semibold' onClick={(e) => e.preventDefault()}>
                                            <Space style={{ height: "81px", width: "150px" }} className='border-r-[1px] border-gray-300 flex justify-center'>
                                                Plants
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div>
                                    <Dropdown
                                        menu={{
                                            items: exoticPlants,
                                        }}
                                    >
                                        <a className='text-[0.8rem] font-semibold' onClick={(e) => e.preventDefault()}>
                                            <Space style={{ height: "81px", width: "150px" }} className='border-r-[1px] border-gray-300 flex justify-center'>
                                                Exotic Plants
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div>
                                    <Dropdown
                                        menu={{
                                            items: foodAccessories,
                                        }}
                                    >
                                        <a className='text-[0.8rem] font-semibold' onClick={(e) => e.preventDefault()}>
                                            <Space style={{ height: "81px", width: "150px" }} className='border-r-[1px] border-gray-300 flex justify-center'>
                                                Food Accessories
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className='text-[0.8rem] font-semibold pl-4 pt-[19px]'>Blog<p className='text-gray-600'>U need to know</p></div>
                            </div>
                        </div>
                    </div>
                </Affix>
            </header>
            <div className='flex justify-end absolute'>
                <Affix offsetTop={260} offsetBottom={500}>
                    <div  className='bg-blue-700 h-12 w-12 flex justify-center items-center'><FaFacebook className='text-white'/></div>
                </Affix>
            </div>
            <div>{children}</div>
            <footer>
                <div className='bg-slate-50'>
                    <div>
                        <div className='pt-10 pb-16 px-[6.6rem]'>
                            <h1 className='text-[1.2rem] font-medium pb-[10px]'>Who we are?</h1>
                            <div className='bg-red-500 w-[115px] h-[2px]'></div>
                            <div className='py-7'>
                                <p className='text-[13px]'>We are basically from Kochi, Kerala. The company starts its working from June 2019, till now we are providing the world class services to our customers. We are the genuine and premium online</p>
                                <p className='text-[14px] leading-[26px] font-sans'>aquarium shopping site in India with fully fledged amenities for all your aqua/pet needs. AQUAStore.in deals with premium quality aquarium products including different varieties of <br />
                                    Aquarium products, Aquarium decorative, finest fish foods, fish medicines, accessories and exclusive pet services for Exotic fish and aquarium plants all under one roof.</p>
                                <p className='text-[14px] leading-[26px] pt-4'>Shipping available anywhere in India with guarantee. DOA, Refund and Return options also available. We have secure payment options including VISA/MasterCard, Credit or Debit<br />
                                    Cards, Net Banking and UPI Payments. Free shipping and exciting offers are available to our customers. Sign up and experience the unique features we offer you.</p>
                            </div>
                        </div>
                        <div className='bg-gray-300 w-full h-[1px]'></div>
                        <div className='bg-[#f3f3f3]'>
                            <div className='pb-[43px] px-[6.6rem]'>
                                <div className='py-12'>
                                    <ul className="flex gap-12">
                                        {
                                            contact.map((item, index) => (
                                                <li>
                                                    <Link href={item.href} legacyBehavior key={index}>
                                                        <a className="flex gap-4 text-[21px] font-semibold items-center">{item.icon} {item.label}</a>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className='grid grid-cols-4 gap-4 pb-8 pt-2'>
                                    <div>
                                        <h2 className='text-xl font-semibold pb-[10px]'>Information</h2>
                                        <div className='bg-gray-300 w-[110px] h-[2px]'></div>
                                        <ul className="pt-4">
                                            {
                                                information.map((item, index) => (
                                                    <li className='text-[14px] leading-[29px]'>
                                                        <Link href={item.href} legacyBehavior key={index}>
                                                            <a className="flex gap-1 text-gray-500 items-center">{item.label}</a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-semibold pb-[10px]'>Customer Service</h2>
                                        <div className='bg-gray-300 w-[160px] h-[2px]'></div>
                                        <ul className="pt-4">
                                            {
                                                service.map((item, index) => (
                                                    <li className='text-[14px] leading-[29px]'>
                                                        <Link href={item.href} legacyBehavior key={index}>
                                                            <a className="flex gap-1 text-gray-500 items-center">{item.label}</a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-semibold pb-[10px]'>Extras</h2>
                                        <div className='bg-gray-300 w-[56px] h-[2px]'></div>
                                        <ul className="pt-4">
                                            {
                                                extras.map((item, index) => (
                                                    <li className='text-[14px] leading-[29px]'>
                                                        <Link href={item.href} legacyBehavior key={index}>
                                                            <a className="flex gap-1 text-gray-500 items-center">{item.label}</a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-semibold pb-[10px]'>My Account</h2>
                                        <div className='bg-gray-300 w-[112px] h-[2px]'></div>
                                        <ul className="pt-4">
                                            {
                                                myAccount.map((item, index) => (
                                                    <li className='text-[14px] leading-[29px]'>
                                                        <Link href={item.href} legacyBehavior key={index}>
                                                            <a className="flex gap-1 text-gray-500 items-center">{item.label}</a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className='pt-9'>
                                    <h2 className='text-xl font-semibold pb-[10px]'>Locations we Deliver</h2>
                                    <div className='bg-gray-300 w-[185px] h-[2px]'></div>
                                    <ul className="grid grid-rows-5 grid-flow-col gap-2 pt-[30px]">
                                        {
                                            locations.map((item, index) => (
                                                <li className='text-[14px]'>
                                                    <Link href={item.href} legacyBehavior key={index}>
                                                        <a className="text-gray-500">{item.label}</a>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='h-[76px] px-[6.6rem]'>
                                <div className='bg-gray-300 w-full h-[1px]'></div>
                                <p className='text-[13px] font-custom text-gray-600 py-7'>Powered By AQUAStore © 2023 || Developed By Regent Digital Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;