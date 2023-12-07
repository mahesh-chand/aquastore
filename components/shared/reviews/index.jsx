import { Button, Form, Rate, Input } from "antd"

const Reviews = () => {
    return (
        <div className="pr-[6.6rem] px-9">
            <div>
                <p className="text[0.9rem] py-4">There are no reviews for this product.</p>
                <h4 className="text-2xl font-semibold">Write a review</h4>
            </div>
            <div className="pt-6">
                <Form
                    layout="vertical"
                    name="basic"
                    autoComplete="off"
                >
                    <Form.Item
                        label="Your Name"
                        name="your-name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input className="h-12 w-full rounded-full" />
                    </Form.Item>

                    <Form.Item
                        name="rate"
                        label="Rating"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your rate!',
                            },
                        ]}
                    >
                        <Rate style={{ fontSize: '16px' }}/>
                    </Form.Item>

                    <Form.Item
                        label="Your Review"
                        name="your-review"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your review!',
                            },
                        ]}
                        className="mb-2"
                    >
                        <Input className="h-36 w-full rounded-3xl" />
                    </Form.Item>
                    <p className="text-[0.8rem]">Note: HTML is not translated!</p>

                    <Form.Item
                    className="flex justify-end pt-6 pb-3"
                    >
                        <Button type="primary" className="bg-amber-400 rounded-full h-[2.5rem] w-[8.5rem]" htmlType="submit">
                            CONTINUE
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Reviews;