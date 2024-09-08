import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="bg-slate-300 w-screen h-48 px-24 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-y-2">
                <p className="flex flex-row gap-x-3 text-slate-600 justify-start items-center"><MdEmail /> myemail@email.com
                </p>
                <p className="flex flex-row gap-x-3 text-slate-600 justify-start items-center"><FaPhoneAlt /> +92-XXX-XXXXXXX
                </p>
                <p className="flex flex-row gap-x-3 text-slate-600 justify-start items-center"><FaLocationDot /> House 123, abc street, xyz city, Pakistan
                </p>
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="font-bold">Have a query?</p>
                <p>Drop your contact information and we will surely contact you</p>
                <input type="text" className="bg-white w-80 rounded-md focus:border-slate-800 focus:outline-none p-2 border border-slate-700 text-black" />
                <button className="bg-sky-600 hover:bg-sky-700 p-2 w-20 rounded-md text-white hover:font-semibold">Submit</button>
            </div>
        </div>
    )
}