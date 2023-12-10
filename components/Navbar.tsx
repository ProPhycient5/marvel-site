"use client"; // this is a client component
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Why Marvel",
    page: "/",
  },
  {
    label: "Enterprise",
    page: "/",
  },
  {
    label: "Pricing",
    page: "/",
  },
  {
    label: "Sign in",
    page: "/",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-binary-blue border-b border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 sm:py-4 md:py-1">
            <div className="flex flex-row items-center">
              <div className="md:py-5 md:block">
                <Image
                  src="/asset/logo-white.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "auto" }}
                  // className="rounded-full shadow-2xl"
                />
              </div>
              <div className="w-1 h-5 bg-slate-200 rounded-lg mx-2"></div>
              <p className=" text-base">Developers</p>
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={cx(
              "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0",
              { block: navbar },
              { hidden: !navbar }
            )}
          >
            <div className="md:flex lg:space-x-6 md:space-x-2 space-y-8 md:space-y-0 items-center justify-center">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    href={item.page}
                    passHref
                    key={idx}
                    className={
                      "block lg:inline-block hover:text-neutral-500 cursor-pointer md:text-xs lg:text-base"
                    }
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={() => setNavbar(!navbar)}
                className=" bg-slate-100 md:text-xs lg:text-sm text-slate-950 rounded-full flex justify-center items-center py-2 px-3"
              >
                Sign up Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
