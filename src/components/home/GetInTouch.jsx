import React from 'react'

const GetInTouch = () => {
    return (
        <section className='bg-black rounded-tr-[158px] py-16'>
            <div className="container pt-0.5 pb-3">
                <div className="flex justify-between gap-10 pr-1.5">
                    <div className="max-w-[439px] w-full">
                        <h2 className='font-playfair text-4xl tracking-xl text-white'>Dream Agency</h2>
                        <p className='tracking-2xl text-white font-normal text-base mt-3.5 pt-px'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <p className='tracking-2xl font-semibold text-base uppercase text-white mt-7 pb-px'>Get In Touch</p>
                        <form name='emailFrom' method="get" className='border pl-3 border-white w-fit h-[52px] flex items-center mt-3.5'>
                            <input type="email" placeholder='Enter Your Email' className='text-white max-w-[263px] w-full bg-transparent placeholder:text-white placeholder:uppercase outline-none font-normal text-base tracking-2xl' required />
                            <button className='bg-white border border-white uppercase h-[52px] w-[143px] duration-300 ease-linear hover:bg-transparent hover:text-white text-base tracking-2xl font-semibold'>Send</button>
                        </form>
                    </div>
                    <div className="mr-24 max-w-[484px] w-full mt-2.5">
                        <iframe className='max-w-[484px] min-h-[300px] w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157508.9080316857!2d-97.03284465580276!3d32.052045369245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sin!4v1730739332540!5m2!1sen!2sin" title="Map of Texas, USA"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Map of Texas, USA"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch