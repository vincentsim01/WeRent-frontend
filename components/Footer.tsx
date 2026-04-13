"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {  
    const [year, setYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return(
        <div className='md:h-[25vh] h-[60vh]'>
            <div className='md:flex md:justify-evenly md:items-center h-full bg-green-700 text-white gap-5'>
                {/* left footer */}
                <div className='p-5 flex flex-col items-center md:items-start gap-3'>
                    <div className="relative w-[150px] md:w-[200px]">
                        <Image src='/werent-logo-green.png' alt='WeRent Footer' width={200} height={100} />
                    </div>
                    <br></br>
                    <p className='text-center md:text-left'>
                        We Rent. We Return. We Repeat. 
                    </p>
                </div>
                {/* Help */}
                <div className=''>
                    <div><h3 className='text-2xl text-center'>Help</h3></div>
                    <div className='flex flex-col items-center gap-2 mt-2 mb-2'>
                        <p>Privacy Policy</p>
                        <p>FAQ</p>
                    </div>
                </div>
                {/* Payment */}
                <div className=''>
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
                <div className=''>
                    <div><h3 className='text-2xl text-center'>Connect With Us</h3></div>
                    <div className='flex justify-center gap-4 mt-2'>
                        <img src='/facebook.png' alt='Facebook' className='w-[20px] md:w-[35px]' />
                        <img src='/instagram.png' alt='Instagram' className='w-[20px] md:w-[35px]' />
                        <img src='/tiktok.png' alt='TikTok' className='w-[20px] md:w-[35px]' />
                        <img src='/x.png' alt='X' className='w-[20px] md:w-[35px]' />
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly items-start h-[25vh] text-sm bg-green-700 text-white'>
                <span>© {year} WeRent. All rights reserved.</span>
                <span className='ml-4'>Terms of Service</span>
                <span className='ml-4'>Privacy Policy</span>
                <span className='ml-4'>Sitemap</span>
            </div>
        </div>

    )
}