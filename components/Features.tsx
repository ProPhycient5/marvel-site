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
          <div className="text-sm font-semibold mb-2">Dedicated API team</div>
          <div className="text-xs text-slate-400 text-center">
            Our team are available for user&#39;s questions via our Slack
            Developer Community and Email
          </div>
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
          <div className="text-sm font-semibold mb-2">Our API uses GraphQL</div>
          <div className="text-xs text-slate-400 text-center">
            No handling server side. Get many API&#39;s response in a single
            response
          </div>
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
          <div className="text-sm font-semibold mb-2">
            Supercharge your workflow
          </div>
          <div className="text-xs text-slate-400 text-center">
            Automate workflow, integrate and analyze data and take Marvel to the
            next level.
          </div>
        </div>
      </div>
    </section>
  );
};

export const TechIntegration = () => {
  return (
    <section id="integration">
      <div className="my-16 w-full flex justify-between flex-col-reverse base:flex-col items-center">
        <div className="w-full h-full flex justify-between flex-col-reverse base:flex-row items-center">
          <div className="h-auto lg:h-60 w-10/12 base:w-48 my-5 md:my-10 bg-green-400">
            1
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
          <div className="h-auto lg:h-60 w-10/12 base:w-48 my-5 md:my-10 bg-amber-400">
            4
          </div>
        </div>
      </div>
    </section>
  );
};
