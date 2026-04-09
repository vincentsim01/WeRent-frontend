import { memo } from 'react';

const Page = () => {
  return (
    <div className='flex gap-3 justify-center'>
       <div className='p-3 rounded-sm block border bg-gray-200 hover:bg-amber-300 hover:text-white'>All Review</div>
       <div className='p-3 rounded-sm block border bg-gray-200 hover:bg-amber-300 hover:text-white'>Photos/Videos</div>
       <div className='p-3 rounded-sm block border bg-gray-200 hover:bg-amber-300 hover:text-white'>Newest Reviews</div>
       <div className='p-3 rounded-sm block border bg-gray-200 hover:bg-amber-300 hover:text-white'>Rating</div>
    </div>
  );
};

export default Page;