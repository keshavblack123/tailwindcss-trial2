import Image from "next/image"
import rm1 from "../public/rm1.gif"
import rm2 from "../public/rm2.gif"
import rm3 from "../public/rm3.gif"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row">
      <p className='text-3xl text-green-900'>Tailwind CSS Trial</p>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={rm1}
          alt="picture of rm1"
          layout="fill"
          priority/>
      </div>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={rm2}
          alt="picture of rm2"
          layout="fill"
          priority/>
      </div>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={rm3}
          alt="picture of rm3"
          layout="fill"
          priority/>
      </div>
    </div>
  )
}
