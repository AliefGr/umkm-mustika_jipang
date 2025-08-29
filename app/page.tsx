"use client";
import { useEffect } from "react";
// components
import About from "@/components/About";
import Explore from "@/components/Explore/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu/Menu";
import OpeningHours from "@/components/OpeningHours";
import Testimonials from "@/components/Testimonials";
import Aboutss from "@/components/Aboutss";
import Prodcuts from "@/components/Prodcuts";
import Testimonialss from "@/components/Testimonial";
import Contactt from "@/components/Contactt";


const Home = () => {
  // add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      {/* <About /> */}
      <Explore />
      <Aboutss/>
      <Prodcuts/>
      <Testimonialss/>
      <Contactt/>

      {/* <Menu /> */}
      {/* <OpeningHours /> */}
      {/* <Testimonials /> */}
      {/* temporary div */}
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default Home;
