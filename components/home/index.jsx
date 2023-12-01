import Layout from "../shared/layout";
import SwiperSlider from "./slider"
import LatestProducts from "./latest-products";
import BestSellers from "./best-sellers";
import Aquastore from "./aquastore";
import Betta from "./betta";
import Aquascape from "./aquascape";
import Shrimps from "./shrimps";
import Tetra from "./tetra";
import Arowana from "./arowana";
import AlgaeEater from "./algae-eater";
import Snail from "./snail";
import { Image, Button } from "antd";

const Home = () => {
    return (
        <Layout title="Homepage">
                        <SwiperSlider />
            <LatestProducts />
            <div className="px-[6.6rem] pt-9">
                <Image
                    src='/images/TELEGRAM.jpg'
                    width={1136}
                    height={200}
                    placeholder="empty"
                />
            </div>
            <BestSellers />
            <div className="pt-12 pb-40">
                <div className='w-full h-[220px] relative flex'>
                    <div className='absolute top-0 left-0 right-0 bottom-0 h-64'>
                        <img src='/images/unlimated.jpg' alt="" className="w-full h-[350px]" />
                    </div>
                    <div className='absolute top-0 left-0 right-0 bottom-0'></div>
                    <div className='absolute bottom-0 left-0 right-0 text-white pl-12 pb-6 z-10'>
                        <p className='text-[32px] text-white font-bold'>LIVING FENG SHUI<br />UNLIMITED VARIETIES</p>
                        <span className='flex gap-1 pt-4'>
                            <Button
                                style={{
                                    borderRadius: '20px',
                                    backgroundColor: '#ea580c',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    height: '35px',
                                    width: '115px'
                                }}
                                type="primary" block>
                                BROWSE
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
            <Aquastore />
            <Betta />
            <div className="px-[6.6rem] pt-9">
                <Image
                    src='/images/raifest-fishfood.jpg'
                    width={1136}
                    height={200} />
            </div>
            <Aquascape />
            <Shrimps />
            <Tetra />
            <Arowana />
            <AlgaeEater />
            <Snail />
        </Layout>
    )
}

export default Home;