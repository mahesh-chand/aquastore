import React, { useState } from 'react';
import Layout from "../../shared/layout";
import Link from 'next/link';
import { Breadcrumb, Button, Form, Input, Radio, Checkbox } from 'antd';

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

const Register = () => {
    const [form] = Form.useForm();

    return (
        <Layout >
            <div className='bg-purple-100'>
                <div className="flex justify-center py-9">
                    <div className="">
                        <div className='pl-[37px]'>
                            <h1 className="text-[30px] font-semibold pb-2 pl-1">Register</h1>
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
                    <div className='bg-white flex w-[74%]'>
                        <div className="login py-12 pl-[2.8rem]">
                            <p className='text-[0.9rem]'>If you already have an account with us, please login at the login page</p>
                            <h4 className='text-2xl font-semibold pt-4 pb-6'>Your Personal Details</h4>
                            <div className=''>
                                <Form
                                    form={form}
                                >
                                    <Form.Item
                                        name="first Name"
                                        label="First Name"
                                        rules={[
                                            {
                                                type: 'text'
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your First Name!',
                                            },
                                        ]}
                                        className='flex justify-end'
                                    >
                                        <Input
                                            placeholder="First Name"
                                            className='rounded-full w-[39rem] h-[45px] pl-6' />
                                    </Form.Item>
                                    <Form.Item
                                        name="last Name"
                                        label="Last Name"
                                        rules={[
                                            {
                                                type: 'Last Name',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your Last Name',
                                            },
                                        ]}
                                        className='flex justify-end'
                                    >
                                        <Input
                                            placeholder="Last Name"
                                            className='rounded-full w-[39rem] h-[45px] pl-6' />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                        className='flex justify-end'
                                    >
                                        <Input
                                            placeholder="E-Mail"
                                            className='rounded-full w-[39rem] h-[45px] pl-6' />
                                    </Form.Item>
                                    <Form.Item
                                        name="telephone"
                                        label="Telephone"
                                        rules={[
                                            {
                                                type: 'text',
                                                message: 'The input is not valid telephone!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your telephone!',
                                            },
                                        ]}
                                        className='flex justify-end'
                                    >
                                        <Input
                                            placeholder="Telephone"
                                            className='rounded-full w-[39rem] h-[45px] pl-6' />
                                    </Form.Item>
                                    <h4 className='text-2xl font-semibold pt-3 pb-4'>Your Password</h4>
                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[
                                            {
                                                type: 'password',
                                                message: 'The input is not valid Password!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your Password!',
                                            },
                                        ]}
                                        className='flex justify-end'
                                    >
                                        <Input
                                            placeholder="Password"
                                            className='rounded-full w-[39rem] h-[45px] pl-6' />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        label="Password Confirm"
                                        rules={[
                                            {
                                                type: 'password',
                                                message: 'The input is not valid Password!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your Password!',
                                            },
                                        ]}
                                        className='flex justify-end'
                                    >
                                        <Input
                                            placeholder="Password Confirm"
                                            className='rounded-full w-[39rem] h-[45px] pl-6' />
                                    </Form.Item>
                                    <h4 className='text-2xl font-semibold pt-3 pb-6'>Newsletter</h4>
                                    <Form.Item
                                        type=""
                                        name="subscribe"
                                        label="Subscribe"
                                        className='flex justify-end w-64'
                                    >
                                        <Radio.Group>
                                            <Radio value="apple">Yes</Radio>
                                            <Radio value="pear">No</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <div className='flex gap-4 justify-end pt-2 pb-4'>
                                        <Form.Item
                                            label={<>I have read and agree to the <Link className='pl-2 font-bold' href="/privacy-policy">Privacy Policy</Link></>}
                                            name="disabled"
                                            valuePropName="checked">
                                            <Checkbox></Checkbox>
                                        </Form.Item>
                                        <Form.Item className=''>
                                            <Button htmlType="submit" className="login-form-button text-[0.8rem] text-white font-semibold bg-amber-400 h-10 w-[8.5rem] rounded-full">
                                                CONTINUE
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar pl-6 w-[26%]">
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

export default Register;
