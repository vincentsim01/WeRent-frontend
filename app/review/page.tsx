import { memo } from 'react';
import Review from '../component/Review/Page';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <h2>All Review</h2>
      <Review />
    </div>
  );
};

export default Page;