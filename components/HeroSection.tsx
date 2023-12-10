"use client"; // this is a client component
import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-6 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5 md:pl-24 lg:pl-12 flex flex-col justify-center items-center md:items-start ">
          <h1 className="font-medium text-lg mt-6 md:mt-0 md:text-4xl">
            Let&#39;s build the future <br /> of design, now.
          </h1>
          <p className="text-xs mt-4 mb-6 md:text-base text-left md:text-center">
            Create amazing tools and integration for over 1 million
            <br /> users or customize Marvel for your own team.
          </p>
          <div className="w-full lg:w-4/6 flex flex-row justify-between">
            <button className="bg-blue-500 text-xs md:text-sm font-semibold text-white rounded-full flex justify-center items-center h-10 px-5">
              Submit your app
            </button>
            <button className="bg-slate-100 text-xs md:text-sm font-semibold text-slate-950 rounded-full flex justify-center items-center h-10 px-5">
              View API docs
            </button>
          </div>
        </div>
        <div className="mt-12 md:mt-2">
          <Image
            src="/asset/illustration.png"
            alt="illustration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            // className="rounded-full shadow-2xl"
          />
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center "></div>
    </section>
  );
};

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
