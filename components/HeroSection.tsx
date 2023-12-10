"use client"; // this is a client component
import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section id="hero_section">
      <div className="my-32 pt-0 md:pt-12 px-0 sm:px-4 w-full flex justify-between flex-col md:flex-row items-center">
        <div className="h-56 w-full sm:w-10/12 md:w-48 mb-16 md:mb-0 flex flex-col">
          <p className="text-white font-bold  text-center sm:text-left text-xl sm:text-2xl lg:text-4xl mb-4 lg:mb-8 ">
            Let&#39;s build the future <br /> of the design, now.
          </p>
          <p className="text-xs text-slate-400 text-center md:text-left mb-4 lg:mb-8">
            Creating amazing tools and integrations for over 2 million users or
            customize Marvel for own team
          </p>

          <div className="flex flex-row w-full items-center justify-between">
            <button className="bg-blue-400 w-48 text-xs font-semibold text-slate-100 rounded-full flex justify-center items-center py-2 px-2 sm:px-3">
              Submit your app
            </button>
            <button className="bg-slate-100 text-xs w-48 font-semibold text-slate-950 rounded-full flex justify-center items-center py-2 px-2 sm:px-3 md:mt-0">
              View API docs
            </button>
          </div>
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
