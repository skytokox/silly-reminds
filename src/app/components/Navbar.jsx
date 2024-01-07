"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";
import signInButton from "./SignInButton";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";

export default function Navbar() {

  const { data: session, status } = useSession();
  
  // if(status === 'loading') {
  //   return 'loading....';
  // }

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
      <SignInButton />
      {/* <Link href="/create">Add workspace</Link> */}
      {/* <Link href="/notes">Notes</Link> */}
    </nav>
  )
}
