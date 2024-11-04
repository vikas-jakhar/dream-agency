import Heading from '../common/Heading'
import SecondHeading from '../common/SecondHeading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { WHAT_WE_DO_DATA_LIST } from '../common/Helper';
import Icon from '../common/Icons';
import dottedEllipse from "../../assets/images/webp/dotted-ellipse.webp";

const WhatWeDo = () => {
    return (
        <section className='relative pt-20 sm:pt-24'>
            <div className="max-w-[1920px] mx-auto w-full relative lg:pt-24 mt-1.5">
                <div className="container relative z-10">
                    <Heading className='text-center'>What We Do</Heading>
                    <SecondHeading className='text-center'>For Your <span>Business</span></SecondHeading>
                </div>
                <div className="flex items-center w-fit gap-3.5 mx-auto mt-5 relative z-10 lg:absolute lg:bottom-24 lg:!ml-5 lg:left-[calc((100vw-1024px)/2)] xl:left-[calc((100vw-1340px)/2+90px)] custom-left">
                    <Icon iconName='arrow' className='prevButton cursor-pointer w-[35px] h-[34px] rounded-full justify-center items-center opacity-[33%] rotate-180 border-2 border-black' />
                    <Icon iconName='arrow' className='nextButton cursor-pointer w-[35px] h-[34px] rounded-full justify-center items-center border-2 border-black' />
                </div>
                <div className="relative z-10 !ml-5 lg:!ml-[calc((100vw-1024px)/2+143px)] xl:!ml-[calc((100vw-1340px)/2+203px)] custom-ml !mr-0 lg:py-12">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        navigation={{
                            prevEl: '.prevButton',
                            nextEl: '.nextButton',
                        }}
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper !py-8 sm:!py-12 !pl-3"
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = '.prevButton';
                            swiper.params.navigation.nextEl = '.nextButton';
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 35,
                            },
                            1200: {
                                slidesPerView: 3.25,
                                spaceBetween: 38,
                            },
                            1400: {
                                slidesPerView: 3.42,
                                spaceBetween: 41,
                            },
                        }}
                    >
                        {WHAT_WE_DO_DATA_LIST.map((items, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full min-h-[192px] shadow-3xl bg-white p-[18px] rounded-[10px]">
                                    <Icon iconName={items.icon} className={`w-[52px] h-12 rounded-[10px] justify-center items-center ${index === 0 ? "bg-off-cream" : index === 1 || index === 4 ? "bg-light-cream" : index === 2 || index === 5 ? "bg-light-sky" : "bg-medium-cream"}`} />
                                    <p className='mt-3 mb-1.5 text-off-black font-bold text-base leading-5 tracking-[0.055em uppercase]'>{items.course}</p>
                                    <p className='text-off-black opacity-65 font-light tracking-2xl text-custom-xl leading-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <img src={dottedEllipse} alt="dottedEllipse" className='right-0 absolute -bottom-14 hidden sm:flex lg:-bottom-24' />
            </div>
            <div className="lg:top-[106px] top-14 absolute z-[1] bg-off-blue h-[450px] sm:h-[500px] lg:h-[578px]  lg:rounded-tr-[400px] md:rounded-tr-[300px] sm:rounded-tr-[200px] w-full xl:right-[calc((100vw-1340px)/2+57px)] lg:right-[calc((100vw-1024px)/2+40px)]"></div>
        </section>
    )
}

export default WhatWeDo