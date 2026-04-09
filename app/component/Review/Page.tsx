import { memo } from 'react';

const Page = () => {
  return (
    <div className='flex gap-3 justify-center items-center border p-3 rounded-sm'>
        <div className='w-[60%]'>
            <div>
                <div className='flex justify-start items-center gap-1'>
                    <img src='./thumbnail.jpg' alt='thumbnail' className='w-[20px] h-[20px]' /><img src='./star.png' alt='verified' className='w-[20px] h-[20px] mx-1' />
                </div>
               
                <div className='text-xs text-gray-500 flex gap-3'>
                    <span>165cm</span><span>65kg</span><span>88/78/110cm</span>
                </div>
                <br></br>
            </div>
            <div>This black kaftan is a wardrobe staple for me now</div>
            <p>November 2025</p>
        </div>
        <div className='w-[30%]'>
            <img src='./thumb up.png' alt='thumbnail' className='w-[20px] h-[20px]' />

        </div>

    </div>
  );
};

export default Page;