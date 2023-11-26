import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Navbar() {
  return (
    <nav>
        <Image 
          src={Logo}
          alt='Silly Reminds logo'
          width={100}
          quality={100}
        />
        <h1>Silly Reminds</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/create">Add workspace</Link>
        <Link href="/notes">Notes</Link>
    </nav>
  )
}
