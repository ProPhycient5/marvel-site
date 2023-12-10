import React from "react";
import Image from "next/image";

export const Architecture = () => {
  return (
    <section id="about">
      <div className="my-32 w-full flex justify-between flex-col base:flex-row items-center">
        <div className="h-auto px-4 lg:h-60 w-10/12 base:w-32 my-5 md:my-10 flex flex-col justify-center items-center">
          <Image
            src="/asset/apiTeam.png"
            alt="apiTeam"
            width={0}
            height={0}
            sizes="100hw"
            className="w-full h-auto sm:h-48 lg:h-full mb-2 md:mb-0"
          />
          <h2 className="text-sm font-semibold mb-2">Dedicated API team</h2>
          <p className="text-xs text-slate-400 text-center">
            Our team are available for user&#39;s questions via our Slack
            Developer Community and Email
          </p>
        </div>
        <div className="h-auto px-4 lg:h-60 w-10/12 base:w-32 my-5 md:my-10 flex flex-col justify-center items-center">
          <Image
            src="/asset/graphQL.png"
            alt="graphQL"
            width={0}
            height={0}
            sizes="100hw"
            className="w-full h-auto sm:h-48 lg:h-full mb-2 md:mb-0"
          />
          <h2 className="text-sm font-semibold mb-2">Our API uses GraphQL</h2>
          <p className="text-xs text-slate-400 text-center">
            No handling server side. Get many API&#39;s response in a single
            response
          </p>
        </div>
        <div className="h-auto px-0 lg:px-4 lg:h-60 w-10/12 base:w-32 my-5 md:my-10 flex flex-col justify-center items-center">
          <Image
            src="/asset/superchargeWorkflow.png"
            alt="workflow"
            width={0}
            height={0}
            sizes="100hw"
            className="w-full h-auto sm:h-48 lg:h-full mb-2 md:mb-0"
          />
          <h2 className="text-sm font-semibold mb-2">
            Supercharge your workflow
          </h2>
          <p className="text-xs text-slate-400 text-center">
            Automate workflow, integrate and analyze data and take Marvel to the
            next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export const TechIntegration = () => {
  return (
    <section id="integration">
      <div className="my-16 w-full flex justify-between flex-col-reverse base:flex-col items-center">
        <div className="w-full px-6 h-full flex justify-between flex-col-reverse base:flex-row items-center">
          <div className="h-auto lg:h-60 w-10/12 base:w-48 my-5 md:my-10 flex flex-col">
            <h1 className=" text-lg text-white font-semibold mb-8">
              Showcase your app in our <br />
              integrations directory
            </h1>
            <p className="text-xs text-slate-400 text-justify md:text-left mb-8">
              Building something special? We r always looking to work with
              partner who wants to help the world bring their ideas to life.
            </p>

            <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-between">
              <button className="bg-slate-100 w-2/3 md:w-48 text-xs font-semibold text-slate-950 rounded-full flex justify-center items-center py-2 px-1 md:px-3">
                Become a partner
              </button>
              <button className="text-xs w-2/3 md:w-48 font-semibold text-slate-100 rounded-full flex justify-center items-center py-2 px-3 border border-white mt-4 md:mt-0">
                View integrations
              </button>
            </div>
          </div>
          <div className="h-auto lg:h-60 w-10/12 base:w-48 my-5 md:my-10">
            <Image
              src="/asset/showcase.png"
              alt="showcase"
              width={0}
              height={0}
              sizes="100hw"
              className="w-full h-auto sm:h-48 lg:h-full mb-2 md:mb-0"
            />
          </div>
        </div>
        <div className="w-full h-full flex justify-between flex-col base:flex-row items-center my-28 base:my-0">
          <div className="h-auto lg:h-60 w-10/12 base:w-48 my-5 md:my-10">
            <Image
              src="/asset/botbot.png"
              alt="showcase"
              width={0}
              height={0}
              sizes="100hw"
              className="w-full h-auto sm:h-48 lg:h-full mb-2 md:mb-0"
            />
          </div>
          <div className="h-auto lg:h-60 w-10/12 base:w-48 my-5 md:my-10 flex flex-col">
            <h1 className=" text-lg text-white font-semibold mb-8">
              A Slack-bot for creating <br />
              and managing prototypes
            </h1>
            <p className="text-xs text-slate-400 text-justify md:text-left mb-8">
              Building something special? We&#39;r always looking to work with
              partner who wants to help the world bring their ideas to life.
            </p>

            <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-between">
              <button className="bg-slate-100 w-2/3 md:w-48 text-xs font-semibold text-slate-950 rounded-full flex justify-center items-center py-2 px-1 md:px-3">
                View on github
              </button>
              <button className="text-xs w-2/3 md:w-48 font-semibold text-slate-100 rounded-full flex justify-center items-center py-2 px-3 border border-white mt-4 md:mt-0">
                Try a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
