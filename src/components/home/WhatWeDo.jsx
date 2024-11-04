import React from 'react'
import Heading from '../common/Heading'
import SecondHeading from '../common/SecondHeading'

const WhatWeDo = () => {
    return (
        <div className='relative pt-24'>
            <div className="max-w-[1920px] mx-auto w-full pt-24 mt-1.5">
                <div className="container relative z-10">
                    <Heading className='text-center'>What We Do</Heading>
                    <SecondHeading className='text-center'>For Your <span>Business</span></SecondHeading>
                </div>
            </div>
            <div className="top-[106px] absolute z-[1] bg-off-blue h-[578px] rounded-tr-[400px] w-full xl:right-[calc((100vw-1340px)/2+57px)]"></div>
        </div>
    )
}

export default WhatWeDo