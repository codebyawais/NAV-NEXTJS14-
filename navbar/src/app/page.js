import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";
export default function Home() {
  return (
    <>

      <div className="w-11/12 h-16 m-auto bg-red-900 flex" >

        <div className="bg-blue-300 row w-1/2 flex"  >
           <div className="w-1/4 bg-red-200">
           <Image
                src="/src/images/logo.png" // Path to your image file
                alt="Des img"
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Ensures the image covers the container without distortion
                className="rounded-lg" // Example of a Tailwind class for rounded corners
            />
           </div>
           <div className="w-3/4 bg-red-400 ">
            <ul className="flex gap-4">
              <li> <Link href="/design">home</Link></li>
              <li> <Link href="/design">dashboard</Link></li>
              <li> <Link href="/design">Design</Link></li>
              <li> <Link href="/design">contact</Link></li>
              <li> <Link href="/design">info</Link></li>
            </ul>
           </div>
        </div>
        <div className="bg-blue-500 w-1/2 flex justify-end">
          <div>a</div>
          <div>b</div>
        </div>
      </div>































      {/* <Navbar /> */}

    </>
  );
}
