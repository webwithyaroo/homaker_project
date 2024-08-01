import { useState } from "react";
import { user, quote, arrowLeft, arrowRight, testimonials } from "../constant";
import Button from "./Button";

const Testimonials = () => {
  const [curr, setCurr] = useState(0);
  const currentTestimonial = testimonials[curr];

  // Handle Next
  function handleNext() {
    setCurr((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }

  // Handle Prev
  function handlePrev() {
    setCurr((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  return (
    <section>
      <h1 className="custom-fontSizeBig2 font-bolder text-start mt-[200px] max-sm:mt[52px]  max-sm:mb-8 ">
        This is what they say
      </h1>
      <div className=" flex justify-between items-center w-full gap-10 max-sm:flex-col-reverse mb-[96px] max-sm:mb-[65px]">
        <div className="flex ">
          <span className="max-h-fit">
            <img src={quote} alt="img" className=" mr-2" />
          </span>

          <div className="max-w-[549px] ">
            <h2 className="text-lg max-sm:text-base max-sm:mb-4 mb-6">
              Complete application integrated and simple
            </h2>
            <p className="max-sm:mb-6 mb-5 text-regular">
              {currentTestimonial.text}
            </p>
            <div className="flex-custom">
              <div>
                <h1 className="text-xl font-bolder max-sm:text-base max-sm:mb-1 mb-2">
                  {currentTestimonial.name}
                </h1>
                <p>{currentTestimonial.profession}</p>
              </div>
              <div className="flex items-center gap-x-4 max-sm:gap-x-1 justify-center">
                <Button
                  IconUrl={arrowLeft}
                  onClick={handlePrev}
                  className={"p-3 max-sm:p-[5px] bg-primary rounded-full"}
                />
                <div className="flex-custom">
                  <p>{curr + 1}</p>/<p>5</p>
                </div>
                <Button
                  IconUrl={arrowRight}
                  onClick={handleNext}
                  className={"p-3 bg-primary rounded-full max-sm:p-[5px] "}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={user} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
