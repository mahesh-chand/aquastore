import React, { useState } from 'react';
import Layout from "../../shared/layout";
import Link from 'next/link';
import { Breadcrumb, Button, Form, Input, Radio } from 'antd';

const sidelink = [
    {
        label: <Link href=''>Forgotten Password</Link>
    },
    {
        label: <Link href=''>My Account</Link>
    },
    {
        label: <Link href=''>Address Book</Link>
    },
    {
        label: <Link href=''>Wish List</Link>
    },
    {
        label: <Link href=''>Order History</Link>
    },
    {
        label: <Link href=''>Downloads</Link>
    },
    {
        label: <Link href=''>Recurring payments</Link>
    },
    {
        label: <Link href=''>Reward Points</Link>
    },
    {
        label: <Link href=''>Returns</Link>
    },
    {
        label: <Link href=''>Transactions</Link>
    },
    {
        label: <Link href=''>Newsletter</Link>
    }
]

const Login = () => {
    const [form] = Form.useForm();

    return (
        <Layout >
            <div className='bg-purple-100'>
                <div className="flex justify-center py-9">
                    <div className="">
                        <div className='pl-[37px]'>
                            <h1 className="text-[30px] font-semibold pb-2 pl-1">Login</h1>
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
                    <div className='bg-white flex w-[70%]'>
                        <div className="new-customer w-[50%] px-8 py-12">
                            <h1 className='text-2xl font-semibold'>New Customer</h1>
                            <h4 className='text-[1rem] font-bold py-3'>Register Account</h4>
                            <p className='text-[0.8rem] text-gray-800 pb-4'>By creating an account you will be able to shop faster,<br /> be up to date on an order's status, and keep track of the<br /> orders you have previously made.</p>
                            <Button className='text-[0.8rem] text-white font-semibold bg-amber-400 h-10 w-[8.5rem] rounded-full'>CONTINUE</Button>
                        </div>
                        <div className="login py-12">
                            <h1 className='text-2xl font-semibold'>Returning Customer</h1>
                            <h4 className='text-[1rem] font-bold py-3'>I am a returning customer</h4>
                            <div className=''>
                                <Form
                                    form={form}
                                    layout='vertical'
                                >
                                    <Form.Item label="E-Mail Address">
                                        <Input placeholder="E-Mail Address" className='rounded-full w-[22rem] h-[45px] pl-6' />
                                    </Form.Item>
                                    <Form.Item label="Password" className='mb-[4px]'>
                                        <Input placeholder="Password" className='rounded-full w-[22rem] h-[45px] pl-6' />
                                    </Form.Item>
                                    <Link href="/">Forgotten Password</Link>
                                    <Form.Item className='py-8'>
                                        <Button htmlType="submit" className="login-form-button text-[0.8rem] text-white font-semibold bg-amber-400 h-10 w-[7rem] rounded-full">
                                            Log in
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar pl-6 w-[30%]">
                        <div className='bg-white h-full w-full py-9'>
                            <ul className='pb-4'>
                                <li className='pl-7 text-[14px] text-gray-800 pb-2'>
                                    <Link className='hover:text-blue-500' href=''>Login /</Link>
                                    <Link className='hover:text-blue-500' href=''>Register</Link>
                                </li>
                                <div className="bg-gray-200 h-[1px]"></div>
                                {sidelink.map((element, index) => {
                                    return (
                                        <>
                                            <li className='pl-7 pt-3 pb-2 text-[14px] text-gray-800 hover:text-blue-500'>{element.label}</li>
                                            <div className="bg-gray-200 h-[1px]"></div>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 h-[1px]"></div>
        </Layout >
    )
}

export default Login;
