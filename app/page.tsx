import Image from "next/image";
import Link from "next/link";
import Banner from "./component/Banner/Page";
import Star from "./component/Star/Page";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <Banner />
      <Star />
      <Link href='/review' className="text-2xl text-blue-500 mt-4">View More</Link>

    </div>
  );
}
