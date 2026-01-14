import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImg from "../assets/heroImage.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full bg-linear-to-b from-black via-black to-gray-800 pt-30! pb-15! md:py-0!"
    >
      <div className="max-w-screen-lg mx-auto! flex flex-col items-center justify-center h-full px-4! gap-7 md:flex-row md:gap-2">
        <div className="flex flex-col justify-center md:w-full h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-gray-500 text-sm py-4! max-w-xl md:max-w-md">
            MERN Stack Developer building scalable, responsive web applications
            with React, Node.js, Express, and MongoDB, focused on clean
            architecture, performance, and real-world functionality.{" "}
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6! py-3! my-2! flex items-center rounded-md bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1!" />
              </span>
            </Link>
          </div>
        </div>

        <div className="px-2! sm:px-0! w-full h-120">
          <img
            src={HeroImg}
            alt="my profile"
            className="rounded-2xl mx-auto! h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
