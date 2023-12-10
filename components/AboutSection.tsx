"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-6 w-full flex flex-col justify-center items-center">
        <div className="text-2xl font-bold text-center mb-6">
          Experience the freedom to build <br /> features, right away.
        </div>
        <div className="text-sm text-center">
          You can now harness components of our platform and build powerful{" "}
          <br />
          integrations for our 2 millions users - or simply just for your team.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
