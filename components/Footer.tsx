    "use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {  
    const [year, setYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return(
        <div className='md:h-[25vh] h-[70vh]'>
            <div className='md:flex md:justify-evenly md:items-center h-full bg-[var(--werent-green-1)] text-white gap-5' style={{    background: "var(--werent-figma-green)"}}>
                {/* left footer */}
                <div className='p-5 flex flex-col items-center md:items-start gap-3 '>
                    <div className="relative w-[150px] md:w-[200px]">
                        <Image src='/werent-logo-green.png' alt='WeRent Footer' width={200} height={100} />
                    </div>
                    <br></br>
                    <p className='text-center md:text-left' >
                        We Rent. We Return. We Repeat. 
                    </p>
                </div>
                {/* Help */}
                <div className='mb-10'>
                    <div><h3 className='text-2xl text-center font-bold'>Help</h3></div>
                    <div className='flex flex-col items-center gap-2 mt-2 mb-2'>
                        <p className='hover:underline cursor-pointer hover:text-[var(--werent-figma-green-hover)]'>Privacy Policy</p>
                        <p className='hover:underline cursor-pointer hover:text-[var(--werent-figma-green-hover)]'>FAQ</p>
                    </div>
                </div>
                {/* Payment */}
                <div className='mb-10'>
                    <div><h3 className='text-2xl text-center font-bold'>Payment Method</h3></div>
                    <div></div>
                    <div className='flex justify-center items-center gap-4 mt-2'>
                        <img src='/gopay.jpeg' alt='GoPay' className='w-[20px] md:w-[35px] hover:scale-105 cursor-pointer' />
                        <img src='/ovo.png' alt='OVO' className='w-[20px] md:w-[35px] hover:scale-105 cursor-pointer' />
                        <img src='/dana.png' alt='Dana' className='w-[20px] md:w-[35px] hover:scale-105 cursor-pointer' />
                        <img src='/visa.png' alt='Visa' className='w-[20px] md:w-[35px] hover:scale-105 cursor-pointer'/>
                        <img src='/mastercard.png' alt='Mastercard' className='w-[20px] md:w-[35px] hover:scale-105 cursor-pointer' />
                    </div>
                </div>
                <div className='mb-10'>
                    <div><h3 className='text-2xl text-center font-bold'>Connect With Us</h3></div>
                    <div className='flex justify-center gap-4 mt-2'>
                        <img src='/facebook.png' alt='Facebook' className='w-[20px] md:w-[35px] hover:scale-105 cursor-pointer' />
                        <img src='/instagram.png' alt='Instagram' className='w-[20px] md:w-[35px] hover:scale-105  cursor-pointer' />
                        <img src='/tiktok.png' alt='TikTok' className='w-[20px] md:w-[35px] hover:scale-105 cursor-pointer' />
                        <img src='/x.png' alt='X' className='w-[20px] md:w-[35px] hover:scale-105 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly items-start pt-5 h-[25vh] text-[8px] md:text-[12px]' style={{   background: "var(--werent-figma-green)", color: 'var(--warm-gray)'  }}>
                <span>© {year} WeRent. All rights reserved.</span>
                <span className='ml-4 hover:underline hover:text-[var(--werent-figma-green-hover)] cursor-pointer'>Terms of Service</span>
                <span className='ml-4 hover:underline hover:text-[var(--werent-figma-green-hover)] cursor-pointer'>Privacy Policy</span>
                <span className='ml-4 hover:underline hover:text-[var(--werent-figma-green-hover)] cursor-pointer'>Sitemap</span>
            </div>
        </div>

    )
}