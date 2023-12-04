import React, { useState } from 'react';
import Layout from '../shared/layout';
import { Breadcrumb, Button, Form, Table } from 'antd';

const columns = [
    {
        title: 'IMAGE',
        dataIndex: 'image',
        key: 'image',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'PRODUCT NAME',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'MODEL',
        dataIndex: 'model',
        key: 'model',
    },
    {
        title: 'QUANTITY',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'UNIT PRICE',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'TOTAL',
        dataIndex: 'total',
        key: 'total',
    },
]

const data = [
    {
        key: '1',
        image: 'pic',
        name: 32,
        model: 'Demasoni Cichlid Fish',
        quantity: 'quantity',
        price: 2000,
        total: 2000,
    }
]

const Cart = () => {
    const [form] = Form.useForm();

    return (
        <Layout >
            <div className='bg-purple-100'>
                <div className="flex justify-center py-9">
                    <div className="">
                        <div className='pl-[37px]'>
                            <h1 className="text-[30px] font-semibold pb-2 pl-1">Shopping Cart</h1>
                            <div className="bg-gray-300 h-[2px] w-20"></div>
                        </div>
                        <div className='py-4'>
                            <Breadcrumb
                                separator=">"
                                items={[
                                    {
                                        title: 'Home',
                                    },
                                    {
                                        title: 'Account',
                                        href: '/',
                                    },
                                    {
                                        title: 'Login',
                                        href: '/',
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className='px-[6.6rem] flex'>
                    <div className='bg-white w-full'>
                        <div className='px-8'>
                            <Table columns={columns} dataSource={data} pagination={false} />
                        </div>
                        <div className="login py-10 pl-[2.8rem] px-8">
                            <h4 className='text-2xl font-semibold pt-4 pb-6'>What would you like to do next?</h4>
                            <p className='text-[0.9rem]'>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                        </div>
                        <div className='flex justify-end px-8 py-9'>
                            <div>
                                <p className='font-bold'>Sub-Total:	<sapn className='text-orange-500'>Rs.100/-</sapn></p>
                                <p className='font-bold'>Total:	<sapn className='text-orange-500'>Rs.100/-</sapn></p>
                            </div>
                        </div>
                        <div className='flex justify-between px-8 pb-16'>
                            <Button htmlType="submit" className="login-form-button text-[0.8rem] text-white font-semibold bg-black h-10 w-[12rem] rounded-full">
                                CONTINUE SHOPPING
                            </Button>
                            <Button htmlType="submit" className="login-form-button text-[0.8rem] text-white font-semibold bg-amber-400 h-10 w-[8.5rem] rounded-full">
                                CHECKOUT
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 h-[1px]"></div>
            </div>
        </Layout >
    )
}

export default Cart;
