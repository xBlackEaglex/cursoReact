import Link from "next/link";
import Image from "next/image";
import Bunny from "../../public/bunny.jpg"

//       <Image src="/bunny.jpg" alt="bunny" width={1000} height={667} priority />

export default function Home() {
  return (
    <div>
      <Link href="./chanchitos">ir chanchitos</Link>
      <p>Hola Mundo</p>
      <Image src={Bunny} alt="bunny" width="1000" height="667" priority />
    </div>
  )
}
