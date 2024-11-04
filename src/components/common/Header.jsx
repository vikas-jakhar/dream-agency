import React, { useEffect, useState } from 'react';
import { NAVBAR_DATA_LIST } from './Helper';

const Header = () => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        if (window.innerWidth < 1024) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open && window.innerWidth < 1024 ? "hidden" : "";
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className="xl:py-10 lg:pb-14 md:py-5 py-1 relative z-50">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center justify-center z-[90] lg:bg-transparent absolute flex-col w-full h-screen top-0 lg:relative lg:bg-none lg:flex-row gap-7 lg:gap-10 lg:h-fit lg:w-fit lg:left-auto duration-300 ease-linear`}>
                        {NAVBAR_DATA_LIST.map((item, index) => (
                            <a key={index} href={item.URL} aria-label={item.title} onClick={toggleOpen} className="text-off-black font-normal capitalize text-base tracking-[0.01em] duration-300 ease-linear w-fit relative after:absolute after:duration-300 after:ease-linear after:bottom-0.5 after:-left-px after:bg-off-yellow after:w-5 after:h-0.5 hover:after:w-5">
                                {item.title}
                            </a>
                        ))}

                    </div>
                    <a href="/" className="font-playfair text-2xl leading-7 tracking-[0.01em] font-bold">Dream Agency</a>
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-6">

                        </div>
                        <div role="button" aria-label="menu icon" aria-expanded={open} onClick={toggleOpen} className="w-7 h-5 rounded-full relative lg:hidden flex z-[100] cursor-pointer duration-300 ease-linear">
                            {[...Array(3)].map((_, index) => (
                                <span key={index} className={`left-0 absolute duration-300 ease-linear bg-off-black h-1 rounded w-full ${index === 0 && open ? "top-1/2 -translate-y-1/2 rotate-45" : index === 0 ? "top-0" : ""} ${index === 1 && open ? "!-left-full opacity-0 top-1/2 -translate-y-1/2" : index === 1 ? "top-1/2 -translate-y-1/2" : ""} ${index === 2 && open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}></span>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;