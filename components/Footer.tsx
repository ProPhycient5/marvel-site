import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="my-16 w-full flex justify-between flex-col base:flex-row items-center">
        <div className="w-full md:w-32 flex flex-row justify-between items-center">
          <div className="h-48 lg:h-60 w-48 my-5 md:my-10 bg-blue-400"></div>
          <div className="h-48 lg:h-60 w-48 my-5 md:my-10 bg-slate-400"></div>
        </div>

        <div className="w-full md:w-32 flex flex-row justify-between items-center">
          <div className="h-48 lg:h-60 w-48 my-5 md:my-10 bg-blue-400"></div>
          <div className="h-48 lg:h-60 w-48 my-5 md:my-10 bg-slate-400"></div>
        </div>

        <div className="w-full md:w-32 hidden sm:flex flex-row justify-between items-center">
          <div className="h-48 lg:h-60 w-48 my-5 md:my-10 bg-blue-400"></div>
          <div className="h-48 lg:h-60 w-48 my-5 md:my-10 bg-slate-400"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
