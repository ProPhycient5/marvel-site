"use client"; // this is a client component
import React from "react";
import Image from "next/image";

export const HeroSection_2 = () => {
  return (
    <section id="hero_section">
      <div className="my-32 pt-0 md:pt-12 w-full flex justify-between flex-col md:flex-row items-center">
        <div className="h-full w-10/12 md:w-48 mb-16 md:mb-0 bg-slate-400">

        </div>
        <div className="h-60 lg:h-60 w-10/12 md:w-48">
          <Image
            src="/asset/illustration.png"
            alt="illustration"
            width={0}
            height={0}
            sizes="100hw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
