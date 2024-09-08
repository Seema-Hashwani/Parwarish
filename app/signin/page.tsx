// import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Signin() {
  return (
    <main className="bg-zinc-200 min-h-screen w-screen flex flex-col gap-y-4 items-center justify-start text-black px-24">
      <Navbar/>
      <div className="flex flex-col mt-10 justify-start items-start h-auto gap-y-3">
        <p>Email Address</p>
        <input type="email" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Password</p>
        <input type="password" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        
      </div>
      <Link href={'/'}><button className="bg-green-600 hover:bg-green-700 text-white hover:font-bold rounded-md p-2 w-32">Sign In</button></Link>
      <p className="flex-grow">Does not have an account? <Link href={'/signup'}><button className="text-green-800 hover:text-green-900 font-semibold hover:font-bold">Sign Up</button></Link></p>

      <Footer/>
    </main>
  );
}
