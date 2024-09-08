// import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Register() {
  return (
    <main className="bg-zinc-200 min-h-screen w-screen flex flex-col gap-y-4 items-center justify-start text-black px-24">
      <Navbar/>
      <p className="text-3xl font-bold m-3">Register your Daycare</p>
      <div className="flex flex-col justify-start items-start h-auto gap-y-3">
        <p>Name of the daycare</p>
        <input type="text" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Name of the owner</p>
        <input type="text" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Address of the daycare</p>
        <input type="text" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        <p>Contact Number</p>
        <input type="tel" className="rounded-md bg-white text-black focus:outline-none focus:border-slate-800 border border-slate-700 p-2 w-96"/>
        

      </div>
      <Link href={'/submit'}><button className="bg-green-600 hover:bg-green-700 p-2 w-48 rounded-md text-white hover:font-semibold">Submit Application</button></Link>
      <Footer/>
    </main>
  );
}
