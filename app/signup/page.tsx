// import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="bg-zinc-200 min-h-screen w-screen flex flex-col gap-y-4 items-center justify-start text-black px-24">
      <Navbar/>
      <div className="flex flex-col justify-start items-start h-auto gap-y-3">
        <p>Name of the parent</p>
        <input type="text" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Name of the child</p>
        <input type="text" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Age of the child</p>
        <input type="number" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Contact Number</p>
        <input type="tel" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Email Address</p>
        <input type="email" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Password</p>
        <input type="password" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        
      </div>
      <Link href={'/signin'}><button className="bg-green-600 hover:bg-green-700 text-white hover:font-bold rounded-md p-2 w-32">Signup</button></Link>
      <p>Already have an account? <Link href={'/signin'}><button className="text-green-800 hover:text-green-900 font-semibold hover:font-bold">Sign In</button></Link></p>

      <Footer/>
    </main>
  );
}
