import { memo } from 'react';
import Review from '../component/Review/Page';
import Filter from '../component/Filter/Page';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
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