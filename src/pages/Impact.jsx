import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Impact() {
  const counters = [
    { end: 15, label: "Countries", withBackground: true },
    { end: 300000, label: "Volunteers", withBackground: false },
    { end: 10000000, label: "Internship Goals", withBackground: false },
    { end: 5400000, label: "Trees Planted", withBackground: false },
  ];

  return (
    <div className="App bg-[#D9D9D9] px-6 py-10 md:px-16 lg:px-40 items-center w-full h-full max-w-screen-2xl flex flex-col">
      <div className="flex justify-center items-center w-full">
        <h1 className="lg:text-5xl text-2xl lg:mb-5 mb-2 text-center">
          IMPACT
        </h1>
      </div>
      <div className="content lg:flex lg:flex-wrap justify-center items-center lg:gap-8 gap-4 font-primary">
        {counters.map((counter, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <div
              key={index}
              ref={ref}
              className={`${
                counter.withBackground
                  ? "bg-black text-white"
                  : "text-black"
              } lg:p-8 p-4 flex flex-col items-center`}
            >
              {inView ? (
                <CountUp
                  className="lg:text-4xl text-lg font-bold"
                  end={counter.end}
                  duration={2}
                />
              ) : (
                <span className="lg:text-4xl text-lg font-bold">0</span>
              )}
              <p className="lg:text-lg text-sm">{counter.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
