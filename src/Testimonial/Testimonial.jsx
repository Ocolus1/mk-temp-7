import React from "react";
import TestimonialCarousel from "./TestimonialComponent";

function TestimonialSection() {
  return (
    <section className="testimonial__section bg-[#F3F3F3]">
      <div className="max-w-5xl mx-auto py-10 lg:py-20">
        <div className="testimonial-headline flex flex-col items-center gap-y-2">
          <div className="w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
