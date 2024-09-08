import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="bg-slate-300 flex flex-row justify-between items-center w-screen h-16 px-24">
            <div className="flex flex-row justify-center items-center gap-x-4 font-bold">
                <p>Logo</p>
                <p>Company Name</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-8">
                <Link href={'/'}><button className="flex text-black hover:text-slate-700">Home</button></Link>
                <Link href={'/register'}><button className="flex text-black hover:text-slate-700">Find Daycare</button></Link>
                <Link href={'/register'}><button className="flex text-black hover:text-slate-700">Register Daycare</button></Link>
                <Link href={'/register'}><button className="flex text-black hover:text-slate-700">Monitor your child</button></Link>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-4">
                <Link href={'/signup'}><button className="bg-green-600 hover:bg-green-700 text-white font-bold p-2 w-20 rounded-md">Sign Up</button></Link>
                <Link href={'/signin'}><button className="bg-green-600 hover:bg-green-700 text-white font-bold p-2 w-20 rounded-md">Sign In</button></Link>
            </div>
        </div>
    )
}