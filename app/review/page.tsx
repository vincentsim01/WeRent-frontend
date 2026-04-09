import { memo } from 'react';
import Review from '../component/Review/Page';
import Filter from '../component/Filter/Page';
import Star from '../component/Star/Page';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <Link href='/' className="text-blue-500 hover:text-blue-700">
        Back to Home
      </Link>
      <br></br>
      <Star />
      <h2>All Review</h2>
      <br></br>
      <br></br>
      <Filter />
      <br></br>
      <br></br>


      <Review />
    </div>
  );
};

export default Page;