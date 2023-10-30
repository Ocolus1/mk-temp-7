import React from "react";

const pricingData = [
  {
    title: "Team",
    description: "For individuals that need advanced recording & editing.",
    price: "$9",
  },
  {
    title: "Professional",
    description: "For teams that need advanced sharing & reporting.",
    price: "$39",
  },
];

function PricingSection() {
  return (
    <section className="pricing__section max-w-5xl px-7 lg:px-20 py-10 lg:py-20 mx-auto flex flex-col gap-y-10">
      <div className="flex items-center justify-center flex-col gap-y-2">
        <h2 className="text-slate-900 text-2xl md:text--3xl lg:text-4xl font-bold">
          Pricing for the pros
        </h2>
        <p className="text-slate-700/70 font-medium">
          choose a plan right for you
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {pricingData.map((item) => (
          <div
            key={item.title}
            className="p-0.5 rounded-2xl bg-gradient-to-tr from-slate-400 via-gray-600 to-neutral-400"
          >
            <div className="pricing-section p-7 w-full flex flex-col items-center gap-y-5 justify-between border border-slate-500/20 rounded-2xl mx-auto bg-white">
              <div className="flex items-start justify-between gap-x-10">
                <div className="w-full lg:w-2/3">
                  <h2 className="text-2xl md:text-3xl lg:text-left font-clash font-[600] text-zinc-800">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm  font-medium md:text-left text-zinc-800/80">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-3 w-1/3">
                  <p className="text-slate-800 text-4xl font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-details="Get started"
                className="w-full py-2 px-5 bg-slate-500 hover:bg-slate-800 active:scale-95 transition-all duration-150 ease-linear active:ring-1 shadow-[3px_3px_0px_-0px_rgba(0,0,0,0.5)] shadow-slate-400 active:shadow-none active:ring-offset-2 active:ring-slate-600 rounded-md text-white "
              >
                Get started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
