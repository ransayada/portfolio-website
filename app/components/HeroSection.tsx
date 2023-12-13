"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I׳m
            </div>

            <div className="text-2xl mt-4">
              <TypeAnimation
                sequence={[
                  "Ran Sayada",
                  3000,
                  "Fullstack Developer",
                  3000,
                  "Backend Developer",
                  3000,
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7bE] text-lg mb-6 lg:text-xl">
            Greetings! I`m Ran Sayada, a passionate full-stack engineer on the
            lookout for exciting new opportunities. With a background in both
            front-end and back-end development (React, Angular, Vue,
            Next.js,Node.js Nest,js etc.), I thrive on crafting innovative and
            efficient solutions that bring ideas to life. My experience in the
            Fullstack world has equipped me with a diverse skill set, from
            designing intuitive user interfaces to implementing robust
            server-side functionalities. If you liked my portfolio, you can
            contact me or check my projects down below.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              width={300}
              height={300}
              alt=""
              src="/view-3d-man-holding-laptop-removebg.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
