// import Image from "next/image";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-zinc-200 min-h-screen w-screen flex flex-col gap-y-4 items-center justify-start text-black">
      <Navbar/>
      <Carousel/>
      <About/>
      <Footer/>
    </main>
  );
}
