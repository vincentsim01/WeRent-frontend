"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {  
    const [year, setYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return(
        <div className='md:h-[25vh] h-[45vh]'>
            <div className='md:flex md:justify-evenly gap-5 md:items-center h-full'>
                <div className='p-5'>
                    <div className="relative w-[150px] md:w-[200px] flex justify-center items-center">
                        <Image src='/werent-logo-green.png' alt='WeRent Footer' width={200} height={100} />
                    </div>
                    <br></br>
                    <p className='text-center md:text-left' style={{ color: "var(--warm-gray)" }}>
                        Your trusted platform for seamless rentals. 
                        <br></br>
                        Find, rent, and return with confidence — every single time.
                    </p>
                </div>

                <div>
                    <div><h3 className='text-2xl text-center'>Help</h3></div>
                    <div className='flex flex-col items-center gap-2 mt-2 mb-2' style={{ color: "var(--warm-gray)" }}>
                        <p>Privacy Policy</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div><h3 className='text-2xl text-center'>Payment Method</h3></div>
                    <div></div>
                    <div className='flex justify-center items-center gap-4 mt-2'>
                        <img src='/gopay.jpeg' alt='GoPay' className='w-[20px] md:w-[35px]' />
                        <img src='/ovo.png' alt='OVO' className='w-[20px] md:w-[35px]' />
                        <img src='/dana.png' alt='Dana' className='w-[20px] md:w-[35px]' />
                        <img src='/visa.png' alt='Visa' className='w-[20px] md:w-[35px]'/>
                        <img src='/mastercard.png' alt='Mastercard' className='w-[20px] md:w-[35px]' />
                    </div>
                </div>
                <div className='mb-2'>
                    <div><h3 className='text-2xl text-center'>Connect With Us</h3></div>
                    <div className='flex justify-center gap-4 mt-2'>
                        <img src='/facebook.png' alt='Facebook' className='w-[20px] md:w-[35px]' />
                        <img src='/instagram.png' alt='Instagram' className='w-[20px] md:w-[35px]' />
                        <img src='/tiktok.png' alt='TikTok' className='w-[20px] md:w-[35px]' />
                        <img src='/x.png' alt='X' className='w-[20px] md:w-[35px]' />
                    </div>
                </div>
            </div>
            <br></br>
            <div className='flex justify-evenly items-center h-[30vh] text-sm' style={{ color: "var(--warm-gray)" }}>
                <span>© {year} WeRent. All rights reserved.</span>
                <span className='ml-4'>Terms of Service</span>
                <span className='ml-4'>Privacy Policy</span>
                <span className='ml-4'>Sitemap</span>
            </div>
        </div>

    )
}