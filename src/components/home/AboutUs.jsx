import React from 'react'
import meeting from "../../assets/images/webp/about-meeting.webp";
import Heading from '../common/Heading';
import SecondHeading from '../common/SecondHeading';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

const AboutUs = () => {
    return (
        <section className='pt-2 pb-24 lg:pt-24'>
            <div className="container pb-24 xl:py-24 relative">
                <div className="flex items-center justify-between pt-20 pb-9">
                    <img src={meeting} alt="meeting" className='absolute w-10/12 sm:w-7/12 lg:bottom-auto lg:w-1/2 xl:w-auto left-1/2 -bottom-7 sm:-bottom-10 -translate-x-1/2 lg:translate-x-0 translate-y-1/2 lg:-left-3 xl:-left-8 lg:top-[47%] lg:-translate-y-1/2' />
                    <div className="ml-auto lg:max-w-[515px] w-full relative z-10">
                        <Heading className='text-center lg:text-left'>About Us</Heading>
                        <SecondHeading className='text-center lg:text-left'>Fake or <span>Real</span></SecondHeading>
                        <Paragraph className='md:mt-5 mt-2 pt-0.5 mb-2 text-center lg:text-left'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
                        <Paragraph className='md:pt-px text-center lg:text-left'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
                        <Button className='md:mt-9 mt-4 px-8 sm:px-10 block mx-auto lg:mx-0'>Explore More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs