import React, { useState, useRef } from "react";
import { LuArrowBigLeftDash, LuArrowBigRightDash } from "react-icons/lu";
import albus from "../../src/assets/albus.svg";
import severus from "../../src/assets/severus.svg";
import harry from "../../src/assets/harry.svg";
import testimonialsideImage from "../assets/testimonial-side-image.svg";

function ClientTestimonial() {
  const testimonials = [
    {
      content:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      author: "Albus Dumbledore",
      position: "Manager @ Howarts",
      profile: albus,
    },
    {
      content:
        "I'm super impressed by how intuitive and powerful your builder is.“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      author: "Severus Snape",
      position: "Manager @ Slytherin",
      profile: severus,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
  ];

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleLeftClick = () => {
    containerRef.current.scrollLeft -= 500; // adjust this value as needed
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleRightClick = () => {
    containerRef.current.scrollLeft += 500; // adjust this value as needed
    setScrollLeft(containerRef.current.scrollLeft);
  };

  return (
    <section className="testimonial__section py-10">
      <div className="testimonial__container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-y-5 justify-between max-w-6xl mx-auto">
          <div className="testimonial-headline flex flex-col  gap-y-2  px-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-bold leading-[1.5] lg:leading-[1.25] text-black">
              Our customers are Kind
            </h3>
          </div>
        </div>
        <div className="w-full flex items-center gap-5 justify-center">
          <div className="testimonial__container max-w-3xl mx-auto overflow-hidden">
            <div className="testimonial__card__container">
              <div
                className="testimonial-card py-10 px-10 scrollbar-hide scrollbar-hide mt-2 flex overflow-auto font-medium"
                ref={containerRef}
                style={{
                  scrollBehavior: "smooth",
                  scrollLeft: scrollLeft,
                  transition: "scrollLeft 0.5s ease",
                }}
              >
                <div className="flex items-start gap-x-7 justify-between ">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="testimonial-card-box rounded-md flex flex-col w-[300px] justify-between bg-[#F3F6FE] border border-gray-300 shadow-[5px_5px_1px_black]"
                    >
                      <div className="testimonial-card-item p-6 gap-y-2">
                        <p className="text-sm lg:text-xl font-medium">
                          {testimonial.content}
                        </p>
                        <div className="mt-5 flex items-center gap-x-2">
                          <div>
                            <img
                              className="h-8 w-8"
                              src={testimonial.profile}
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold">
                              {testimonial.author}
                            </p>
                            <p className="text-[#7c7c7c] text-xs">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="scrollable button flex items-center justify-center lg:justify-end gap-x-3 w-full">
              <button
                className="flex items-center gap-x-2 p-2 rounded-full bg-[#1d1d1d] shadow-md"
                onClick={handleLeftClick}
                type="button"
              >
                <LuArrowBigLeftDash className="text-[#7c7c7c] lg:text-3xl" />
              </button>
              <button
                className="flex items-center gap-x-2 p-2 rounded-full bg-gray-200 border border-slate-500/50 shadow-md"
                onClick={handleRightClick}
                type="button"
              >
                <LuArrowBigRightDash className="text-[#7c7c7c] lg:text-3xl" />
              </button>
            </div>
          </div>

          <div className="w-full hidden lg:flex">
            <img className="w-3/4" src={testimonialsideImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonial;
