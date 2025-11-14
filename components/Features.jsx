"use client" ;


import React, { useEffect } from "react";
import Title from "./Common/Title";
import Description from "./Common/Description";
import FeatureCard from "./Common/FeatureCard"
import AOS from "aos";
import "aos/dist/aos.css";;

const Features = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, offset: 100 });
      }, []);
    
const reviews = [
    {
        title: "Smart Task Tracking",
        desc: "Organize tasks with priorities, deadlines, and custom labels for maximum clarity.",
        i: "fa-tasks"
    },
    {
        title: "Team Collaboration",
        desc: "Work together seamlessly with real-time updates, comments, and file sharing.",
        i: "fa-users-cog"
    },
    {
        title: "Progress Analytics",
        desc: "Visualize your productivity with insightful charts and performance metrics.",
        i: "fa-chart-line"
    },
    {
        title: "Intuitive Design",
        desc: "Beautiful, user-friendly interface that makes task management a pleasure.",
        i: "fa-palette"
    },
] 

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 honeycomb-bg relative">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-900"></div>
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
                <Title text={"Powerful Features"} />
                <Description description={"Everything you need to supercharge your productivity and achieve your goals."} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {
                        reviews.map((review , ind)=>
                            <FeatureCard key={ind} title={review.title} desc={review.desc} i={review.i} ind={ind} />
                        )
                    }
                </div>
            </div>
        </section>
  );
};

export default Features;
