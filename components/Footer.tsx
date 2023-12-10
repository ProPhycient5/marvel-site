import React from "react";
import Image from "next/image";

const overview = [
  "Why Marvel",
  "Enterprise",
  "Pricing",
  "Request a demo",
  "Explore",
  "Apps",
  "Developer API",
];
const features = [
  "Wireframing",
  "Design",
  "Prototyping",
  "Collaboration",
  "Handoff",
  "Integrations",
  "Sketch Plugin",
];
const support = ["Help Center", "Terms of Service", "Privacy", "Security"];
const marvel = [
  "Blog",
  "Our Team",
  "Contact Us",
  "Success Stories",
  "Brand Guidelines",
];
const follow = ["Twitter", "Dribble", "Facebook", "Github", "Workable"];

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
            {overview.map((item, idx) => {
              return (
                <p key={idx} className="text-xs text-slate-400 mb-1">
                  {item}
                </p>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-32 px-6 md:px-0 flex flex-row justify-between">
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white font-bold mb-1">Features</p>
            {features.map((item, idx) => {
              return (
                <p key={idx} className="text-xs text-slate-400 mb-1">
                  {item}
                </p>
              );
            })}
          </div>
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white font-bold mb-1">Support</p>
            {support.map((item, idx) => {
              return (
                <p key={idx} className="text-xs text-slate-400 mb-1">
                  {item}
                </p>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-32 px-6 md:px-0 hidden sm:flex flex-row justify-between items-center">
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white font-bold mb-1">Marvel</p>
            {marvel.map((item, idx) => {
              return (
                <p key={idx} className="text-xs text-slate-400 mb-1">
                  {item}
                </p>
              );
            })}
          </div>
          <div className="h-auto w-48 my-5 flex flex-col item-start">
            <p className="text-xs text-white font-bold mb-1">Follow</p>
            {follow.map((item, idx) => {
              return (
                <p key={idx} className="text-xs text-slate-400 mb-1">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
