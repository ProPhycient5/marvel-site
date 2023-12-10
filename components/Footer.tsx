import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="my-16 w-full flex justify-between flex-col base:flex-row items-start">
        <div className="w-full md:w-32 px-6 md:px-0 flex flex-row justify-between items-start">
          <div className="h-48 w-48 flex items-start pt-10">
            <Image
              src="/asset/logo-white.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white mb-1">Overview</p>
            <p className="text-xs text-slate-400 font-bold mb-1">Why Marvel</p>
            <p className="text-xs text-slate-400 mb-1">Enterprise</p>
            <p className="text-xs text-slate-400 mb-1">Pricing</p>
            <p className="text-xs text-slate-400 mb-1">Request a demo</p>
            <p className="text-xs text-slate-400 mb-1">Explore</p>
            <p className="text-xs text-slate-400 mb-1">Apps</p>
            <p className="text-xs text-slate-400 mb-1">Developer API</p>
          </div>
        </div>

        <div className="w-full md:w-32 px-6 md:px-0 flex flex-row justify-between items-center">
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white font-bold mb-1">Features</p>
            <p className="text-xs text-slate-400 mb-1">Why Marvel</p>
            <p className="text-xs text-slate-400 mb-1">Enterprise</p>
            <p className="text-xs text-slate-400 mb-1">Pricing</p>
            <p className="text-xs text-slate-400 mb-1">Request a demo</p>
            <p className="text-xs text-slate-400 mb-1">Explore</p>
            <p className="text-xs text-slate-400 mb-1">Apps</p>
            <p className="text-xs text-slate-400 mb-1">Developer API</p>
          </div>
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white font-bold mb-1">Support</p>
            <p className="text-xs text-slate-400 mb-1">Why Marvel</p>
            <p className="text-xs text-slate-400 mb-1">Enterprise</p>
            <p className="text-xs text-slate-400 mb-1">Pricing</p>
            <p className="text-xs text-slate-400 mb-1">Request a demo</p>
            <p className="text-xs text-slate-400 mb-1">Explore</p>
            <p className="text-xs text-slate-400 mb-1">Apps</p>
            <p className="text-xs text-slate-400 mb-1">Developer API</p>
          </div>
        </div>

        <div className="w-full md:w-32 px-6 md:px-0 hidden sm:flex flex-row justify-between items-center">
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white font-bold mb-1">Marvel</p>
            <p className="text-xs text-slate-400 mb-1">Blog</p>
            <p className="text-xs text-slate-400 mb-1">Our Team</p>
            <p className="text-xs text-slate-400 mb-1">Contact Us</p>
            <p className="text-xs text-slate-400 mb-1">Success Stories</p>
            <p className="text-xs text-slate-400 mb-1">Brand Guidelines</p>
          </div>
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white font-bold mb-1">Follow</p>
            <p className="text-xs text-slate-400 mb-1">Twitter</p>
            <p className="text-xs text-slate-400 mb-1">Dribble</p>
            <p className="text-xs text-slate-400 mb-1">Facebook</p>
            <p className="text-xs text-slate-400 mb-1">Github</p>
            <p className="text-xs text-slate-400 mb-1">Workable</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
