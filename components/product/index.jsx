import React, { useState } from 'react';
import Layout from '../shared/layout';
import { Breadcrumb, Button, Rate, Tabs, Menu } from 'antd';
import RelatedProduct from '../shared/related-product';
import Description from '../shared/description';
import Reviews from '../shared/reviews';

const { SubMenu } = Menu;

const tabs = [
    {
        key: 1,
        label: 'Description',
        children: <Description />
    },
    {
        key: 2,
        label: 'Reviews (0)',
        children: <Reviews />
    }
]

const Product = () => {
    const [quintity, setQuintity] = useState(1)

    return (
        <Layout >
            <div className=''>
                <div className="flex justify-center py-9 bg-purple-100">
                    <div className="">
                        <div className='pl-[37px]'>
                            <h1 className="text-[30px] font-semibold pb-2 pl-1">Demasoni Cichlid Fish</h1>
                            <div className="bg-gray-300 h-[2px] w-76"></div>
                        </div>
                        <div className='py-4'>
                            <Breadcrumb
                                separator=">"
                                items={[
                                    {
                                        title: 'Home',
                                    },
                                    {
                                        title: 'Demasoni Cichlid Fish',
                                        href: '/',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className='px-[6.6rem] flex'>
                    <div className='bg-white w-full'>
                        <div>
                            <div>
                                <div className='bg-blue-400'>
                                    <h4>Categories</h4>
                                </div>
                                <Menu mode="inline" theme="dark">
                                    <Menu.Item key="1">
                                        Hot Deals
                                    </Menu.Item>
                                    <Menu mode="inline" theme="dark">
                                    <Menu.Item key="3">Aquarium</Menu.Item>
                                        <SubMenu key="sub1" title="Aquarium">
                                            <Menu.Item key="3">Accessories</Menu.Item>
                                            <SubMenu key="sub1-1" title="AQUAStore">
                                                <Menu.Item key="6">Team 1</Menu.Item>
                                                <Menu.Item key="8">Team 2</Menu.Item>
                                            </SubMenu>
                                            <SubMenu key="sub1-1" title="Exotic Live Plants">
                                                <Menu.Item key="6">Team 1</Menu.Item>
                                                <Menu.Item key="8">Team 2</Menu.Item>
                                            </SubMenu>
                                        </SubMenu>
                                    </Menu>
                                </Menu>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <Rate />
                                <p className='hover:text-blue-500'>0 reviews</p>  | <p className='hover:text-blue-500'>Write a review</p>
                            </div>
                            <div>
                                <p>Brand: AQUAStore</p>
                                <p>Product Code: Demasoni Cichlid Fish</p>
                                <p>Availability: In Stock</p>
                            </div>
                            <div>
                                <p className='text-5xl text-amber-400 font-bold'>Rs.100/-</p>
                            </div>
                            <div className='border-[1px] border-gray-300'>
                                <div className=''>
                                    QTY
                                    <form>
                                        <input className='h-[2.8rem] rounded-full w-20 border-[1px] border-gray-300' value={quintity} />
                                        <Button htmlType="submit" className="login-form-button text-[0.8rem] text-white font-semibold bg-amber-400 h-[2.8rem] w-[8.5rem] rounded-full">
                                            ADD TO CART
                                        </Button>
                                    </form>
                                    <div>
                                        <div className='text-[0.7rem] font-bold'>ADD TO WISHLIST</div>
                                        <div className='text-[0.7rem] font-bold'>ADD TO COMPARE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-[400px]'>
                    <div>
                        <Tabs
                            defaultActiveKey="1"
                            centered
                            items={tabs}
                        />
                    </div>
                    <div className="bg-gray-300 h-[1px] w-[53rem]"></div>
                    <p className='text-[0.9rem] pb-4'>Tags: demasoni, cichlid, fish, cichlids</p>
                </div>
                <div className='pb-9'>
                    <RelatedProduct />
                </div>
                <div className="bg-gray-200 h-[1px]"></div>
            </div>
        </Layout >
    )
}

export default Product;