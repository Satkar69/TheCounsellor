"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

const Testimonial2 = () => {
  return (
<>
      <section id="about" className="text-gray-600 body-font bg-[#B04141]">
        <div className="container px-5 py-24 mx-auto w-full max-w-screen-xl">
          <h1 className="flex justify-center title-font text-3xl mb-12 font-bold text-white">
            Students Share Their Stories...
          </h1>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6 text-lg">
                  The Counsellor’s consultancy services exceeded expectations.
                  Their professionalism and expertise simplified the visa
                  process and boosted my test scores. I was impressed by their
                  knowledge, support, and personalized guidance.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    width={300}
                    height={300}
                    alt="testimonial"
                    src="/anish.jpg"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900 text-lg">
                      Anish Poudyal
                    </span>
                    <span className="text-gray-500 text-md">USA Visa</span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6 text-lg">
                  The Counsellor’s made a complex process effortless. Their team
                  is highly knowledgeable and provided invaluable support. I
                  wholeheartedly recommend their services.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    width={300}
                    height={300}
                    alt="testimonial"
                    src="/calculator.png"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900 text-lg">
                      Alper Kamu
                    </span>
                    <span className="text-gray-500 text-md">DESIGNER</span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial2;
