import Image from "next/image";
import Link from "next/link";
import Banner from "./component/Banner/Page";
import Star from "./component/Star/Page";
import Review from "./component/Review/Page";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <Banner />
      <h1 className='text-4xl font-bold mt-4'>Black Kaftan With Embellishment</h1>
      <Star />
      <div>
        Designer
      </div>
      <div className='flex flex-col items-start gap-2'>
        Product Details
        <div>Fabric</div>
        <div>Fit</div>
        <div>Size Guide</div>
      </div>
      <Link href='/review' className="text-2xl text-blue-500 mt-4">View More</Link>
      <Review />

    </div>
  );
}
