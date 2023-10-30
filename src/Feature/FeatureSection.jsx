import React from "react";
import star from "../assets/star.svg";
import chat from "../assets/chat.svg";
import clock from "../assets/clock.svg";

const FeaturesData = [
  {
    image: star,
    title: "A unified platform",
    description: "We provide the most comprehensive approach to every user",
  },
  {
    image: chat,
    title: "Top-tier support",
    description: "We are there for you with quick & reliable responses from us",
  },
  {
    image: clock,
    title: "Time efficiency.",
    description: "Automated quick responses for everyone",
  },
];

function FeatureSection() {
  return (
    <section className="feature__section max-w-5xl px-7 lg:px-10 py-20 mx-auto ">
      <h2 className="text-3xl font-bold md:text-4xl leading-[1.2] md:max-w-xl md:mx-auto text-center lg:max-w-full text-zinc-800 ">
        Why use Kind
      </h2>
      <div className="w-full pt-10 lg:w-full relative isolate flex flex-col md:flex-row items-center justify-center gap-y-3.5">
        {FeaturesData.map(({ image, title, description }) => (
          <div
            key={title}
            className="group p-5 flex flex-col items-center justify-center gap-y-2 w-full"
          >
            <img className="w-8 h-8" src={image} alt="" />
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg text-center font-semibold">{title}</h3>
              <p className="text-center text-slate-700/70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
