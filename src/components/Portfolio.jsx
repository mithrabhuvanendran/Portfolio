import React from "react";
import plushLuxe from "../assets/portfolio/plushLuxe.png"
import todoApp from "../assets/portfolio/todoApp.png"
import weatherAppReact from "../assets/portfolio/weatherAppReact.png"
import business from "../assets/portfolio/business.png"
import weatherApp from "../assets/portfolio/weatherApp.png"
import famms from "../assets/portfolio/famms.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: plushLuxe,
      demo: "https://plush-luxe-frontend.vercel.app/",
      code: "https://github.com/mithrabhuvanendran/PlushLuxe"
    },
    {
      id: 2,
      src: todoApp,
      demo: "https://to-do-app-wkpv.vercel.app/",
      code: "https://github.com/mithrabhuvanendran/ToDoApp"
    },
    {
      id: 3,
      src: weatherAppReact,
      demo: "https://weather-app-react-five-orcin.vercel.app/",
      code: "https://github.com/mithrabhuvanendran/WeatherApp-React"
    },
    {
      id: 4,
      src: business,
      demo: "https://business-nine-rho.vercel.app/",
      code: "https://github.com/mithrabhuvanendran/Business"
    },
    {
      id: 5,
      src: weatherApp,
      demo: "https://mithrabhuvanendran.github.io/Weather-App/",
      code: "https://github.com/mithrabhuvanendran/Weather-App"
    },
    {
      id: 6,
      src: famms,
      demo: "https://mithrabhuvanendran.github.io/famms/",
      code: "https://github.com/mithrabhuvanendran/famms"
    },
  ];


  return (
    <div
      name="portfolio"
      className="bg-linear-to-b from-black to-gray-800 w-full text-white md:h-screen pb-10! md:pb-0!"
    >
      <div className="max-w-screen-lg p-4! mx-auto! flex flex-col justify-center w-full h-full">
        <div className="pb-8!">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6!">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10! sm:px-0!">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" className="w-1/2 px-6! py-3! m-4! duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} target="_blank" className="w-1/2 px-6! py-3! m-4! duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
