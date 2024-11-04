import React from 'react'
import Header from '../common/Header'
import yellowEllipse from "../../assets/images/png/yellow-ellipse.png";

const Hero = () => {
    return (
        <div className='relative'>
            <Header />
            <div className="container relative z-10">
                <div className="flex flex-row">
                    <div className="">
                        <h2><span>We Help you</span> to grow your Business</h2>
                    </div>
                </div>
            </div>
            <img src={yellowEllipse} alt="yellowEllipse" className='top-0 right-0 absolute' />
        </div>
    )
}

export default Hero