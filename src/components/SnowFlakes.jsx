import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import SnowFlake from '../images/assets/snowflake1.png';
import SnowFlakeLightMode from '../images/assets/snowflakeLightMode.png';
import { useTheme } from '../contexts/ThemeContext';

import PlusSvg from "../assets/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundSnow = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute left-1/2 w-[70rem] aspect-square -translate-x-1/2" style={{ pointerEvents: "none" }}>
      {/* <Rings /> */}

      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
      <div className="absolute bottom-1/2 left-1/10 w-16 h-16">
        <img
          src={theme==="light" ? SnowFlakeLightMode : SnowFlake}
          alt="Decorative element"
          className="w-10 h-10 object-contain"
        />
      </div>

      <div className="absolute bottom-1/2 -left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-2 h-2 -ml-3 -mt-3 bg-gradient-to-b from-[#77aff8] to-[#3e85e2] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-2/3 left-1/11 w-16 h-16">
        <img
          src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
          alt="Decorative element"
          className={`w-8 h-8 -ml-4 -mt-36 object-contain transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
        </div>

        <div className="absolute bottom-1/3 right-[4rem] w-16 h-16">
        <img
          src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
          alt="Decorative element"
          className={`w-8 h-8 -ml-4 -mt-36 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
        </div>

        <div className="absolute bottom-[70%] left-[90%] w-16 h-16">
        <img
          src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
          alt="Decorative element"
          className={`w-14 h-14 -ml-4 -mt-36 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
        </div>

        <div className="absolute bottom-[50%] -left-[30%] w-16 h-16">
          <img
            src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
            alt="Decorative element"
            className={`w-8 h-8 -ml-4 -mt-36 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-2 h-2 -ml-3 -mt-3 bg-gradient-to-b from-[#77aff8] to-[#3e85e2] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-[45%] -right-[20%] w-16 h-16">
        <img
          src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
          alt="Decorative element"
          className={`w-13 h-13 -ml-4 -mt-36 object-contain transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
        </div>

        <div className="absolute bottom-[80%] -left-[22%] w-16 h-16">
        <img
          src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
          alt="Decorative element"
          className={`w-10 h-10 -ml-4 -mt-36 object-contain transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
        </div>

        <div className="absolute bottom-[80%] -right-[22%] w-16 h-16">
        <img
          src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
          alt="Decorative element"
          className={`w-10 h-10 -ml-4 -mt-36 object-contain transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
        </div>

        <div className="absolute bottom-[22%] -right-[12%] w-16 h-16">
        <img
          src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
          alt="Decorative element"
          className={`w-11 h-11 -ml-4 -mt-36 object-contain transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
        </div>

        <div className="absolute bottom-[22%] -left-[12%] w-16 h-16">
        <img
          src={theme === 'light'? SnowFlakeLightMode:SnowFlake}
          alt="Decorative element"
          className={`w-8 h-8 -ml-4 -mt-36 object-contain transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
        </div>

        <div className="absolute bottom-[75%] left-[56%] w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-2 h-2 -ml-3 -mt-3 bg-gradient-to-b from-[#77aff8] to-[#3e85e2] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-[79%] -left-[40%] w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-2 h-2 -ml-3 -mt-3 bg-gradient-to-b from-[#77aff8] to-[#3e85e2] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-[69%] -left-[63%] w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-2 h-2 -ml-3 -mt-3 bg-gradient-to-b from-[#77aff8] to-[#3e85e2] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-[35%] -left-[65%] w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-2 h-2 -ml-3 -mt-3 bg-gradient-to-b from-[#77aff8] to-[#3e85e2] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-[35%] left-[60%] w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-2 h-2 -ml-3 -mt-3 bg-gradient-to-b from-[#77aff8] to-[#3e85e2] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
