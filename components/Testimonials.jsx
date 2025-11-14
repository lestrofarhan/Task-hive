"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Title from "./Common/Title";
import Description from "./Common/Description";

const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    image:
      "/review1.jpeg",
    review:
      "Task Hive has completely transformed how our team manages projects. The intuitive interface and powerful collaboration features make it indispensable for our workflow.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image:
      "/review2.jpeg",
    review:
      "As a developer, I appreciate the clean design and smooth performance. Task Hive helps me stay organized and focused on what matters most.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image:
      "/review3.jpeg",
    review:
      "The analytics features give us incredible insights into our team's productivity. Task Hive has become an essential tool for managing our marketing campaigns.",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    image:
      "/review4.jpeg",
    review:
      "Task Hive scaled perfectly with our growing startup. It's the perfect balance of simplicity and powerful features that keeps our team aligned and productive.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-indigo-900"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <Title text={"What Our Users Say"} />
          <Description description={"Join thousands of satisfied users who have transformed their  productivity with Task Hive."} />
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { 
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: { 
              slidesPerView: 2,
              spaceBetween: 25
            },
            1224: { 
              slidesPerView: 3,
              spaceBetween: 30
            },
          }}
          className="testimonial-swiper h-full"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col h-full min-h-[300px]"
                data-aos="fade-up"
              >
                {/* User Info */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <Image
                    src={testimonial.image}
                    width={64}
                    height={64}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm sm:text-base text-purple-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Star Ratings */}
                <div className="flex mb-3 sm:mb-4">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <i
                        key={i}
                        className="fas fa-star text-yellow-400 text-sm sm:text-base"
                      ></i>
                    ))}
                </div>

                {/* Review */}
                <p className="text-sm sm:text-[17px] text-purple-200 leading-relaxed flex-grow">
                  "{testimonial.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-10 flex justify-center"></div>  
      </div>
    </section>
  );
};

export default Testimonials;
