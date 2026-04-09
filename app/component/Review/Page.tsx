import { memo } from 'react';

const Page = () => {
  return (
    <div>
        <div className='w-[60%]'>
            <img src='./thumbnail.jpg' alt='thumbnail' className='w-[20px] h-[20px]' />
            <span>165cm</span><span>65kg</span><span>88/78/110cm</span>
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