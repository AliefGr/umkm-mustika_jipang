"use client";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen xl:h-screen relative text-white">
      {/* overlay */}
      <div className=" bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]" />
      {/* video */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Image
        src="/assets/hero/bg-jipang.png"
        alt="Background Jipang"
        fill
        priority
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full object-cover z-30">
        {/* text */}
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          {/* badge & h1 */}
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden xl:flex xl:w-[280px] xl:h-[100px]" />
            <h1 className="h1 text-white font-bold">
              <span className="text-accent">Jipang</span> Kacang
            </h1>
          </div>
          {/* separator */}
          {/* <Separator /> */}
          <p className="lead font-light text-base max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4 text-white/95">
            Jipang Kacang Mustika — perpaduan kacang pilihan dan gula manis
            alami, resep asli Kebumen yang tak lekang oleh waktu.
          </p>
          <Link href="#menu">
            <button className="bg-accent hover:bg-accent-hover text-sm text-white py-3 px-5 lg:py-4 lg:px-6 rounded-md">Pesan Sekarang</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
