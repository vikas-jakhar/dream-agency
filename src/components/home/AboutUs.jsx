import React from 'react'
import meeting from "../../assets/images/png/about-meeting.png";
import Heading from '../common/Heading';
import SecondHeading from '../common/SecondHeading';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

const AboutUs = () => {
    return (
        <div className='py-24'>
            <div className="container py-24 relative">
                <div className="flex flex-row items-center justify-between pt-24 pb-9 mt-1.5">
                    <img src={meeting} alt="meeting" className='absolute -left-8 top-1/2 -translate-y-1/2' />
                    <div className="ml-auto max-w-[515px] w-full">
                        <Heading>About Us</Heading>
                        <SecondHeading>Fake or <span>Real</span></SecondHeading>
                        <Paragraph className='mt-5 pt-0.5 mb-2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
                        <Paragraph className='pt-px'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
                        <Button className='mt-9 px-10'>Explore More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs