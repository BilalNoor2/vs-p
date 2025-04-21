import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [counter, setcounter] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const clicked = () => {
    if (counter === 3) {
      setcounter(1);
    } else {
      setcounter(counter + 1);
    }
  };

  useGSAP(() => {
    if (isHovered) {
      gsap.set("#box-video", { opacity: 0, scale: 0.5 });
      gsap.to("#box-video", {
        opacity: 1,
        scale: 1,
        duration: 1,
      });
    } else {
      gsap.to("#box-video", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
      });
    }
  }, [counter, isHovered]);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div
      id="video-frame"
      className="relative bg-slate-400 h-dvh w-screen overflow-x-hidden "
    >
      <div id="video-frame" className="absolute top-0 left-0 w-full h-full">
        <video
          className=" top-0 left-0 w-full h-full object-cover object-center     "
          src={getVideoSrc(counter)}
          loop
          muted
          autoPlay
        />
      </div>

      <div
        id="box-video"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={clicked}
        className="absolute  z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0  "
      >
        <video
          className="size-64 object-cover object-center  rounded-lg   "
          src={getVideoSrc(counter + 1)}
        />
      </div>

      <h1 className="absolute z-10  text-white text-[12rem] bottom-3 right-10 font-[zentry]  ">
        GAMING
      </h1>

      <div className="absolute leading-none mt-24 px-5 size-[60%]">
        <h1 className="text-white    uppercase text-[12rem] bottom-3 right-10 font-[zentry]">
          redefi<b>n</b>e
        </h1>
        <p className="mb-5 leading-6 font-[robert-regular] text-blue-100">
          Enter the Metagame Layer <br /> Unleash the Play Economy
        </p>
        <button className="px-8 py-3 hover:bg-yellow-600 hover:text-sm transition-all duration-300 bg-yellow-400 text-xs font-medium rounded-full">
          {" "}
          WATCH TRAILER
        </button>
      </div>
    </div>
  );
};

export default Hero;
