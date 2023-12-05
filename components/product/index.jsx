import React, { useState } from 'react';
import Layout from '../shared/layout';
import { Breadcrumb, Button, Rate } from 'antd';

const Product = () => {
    const [quintity, setQuintity] = useState(1)

    return (
        <Layout >
            <div className='bg-purple-100'>
                <div className="flex justify-center py-9">
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
                <div className="bg-gray-200 h-[1px]"></div>
            </div>
        </Layout >
    )
}

export default Product;
