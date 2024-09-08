// import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Submit() {
  return (
    <main className="bg-zinc-200 min-h-screen w-screen flex flex-col gap-y-4 items-center justify-start text-black px-24">
      <Navbar/>
      <p className="text-red-800 mt-10 font-bold">We have received your application to register your daycare.</p>
      <p className="text-red-800 flex-grow font-bold">We will contact you soon for further process.</p>

      <Footer/>
    </main>
  );
}
