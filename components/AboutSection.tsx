"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-6 w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center mb-6 px-2 w-full md:w-1/2">
          Experience the freedom to build features, right away.
        </h1>
        <div className="text-xs text-slate-400 text-center w-full md:w-1/2">
          You can now harness components of our platform and build powerful{" "}
          integrations for our 2 millions users - or simply just for your team.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
