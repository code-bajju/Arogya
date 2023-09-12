import React from 'react';
import hero from "./hero.png"

const Hero = () => {
  return (
    <header className="min-h-screen bg-gray-100 py-10 px-5 xl:py-0 xl:px-0">
      <div className="min-h-screen xl:grid place-items-center place-content-center xl:grid-cols-2 xl:max-w-screen-xl mx-auto w-11/12 xl:max-w-screen-2xl gap-14">
        <div className="max-w-xl mx-auto xl:max-w-2xl xl:-mt-8">
          <h1 className="text-3xl xl:text-5xl font-semibold xl:leading-snug text-gray-900 2xl:text-6xl 2xl:leading-snug">Freedom from the eternal  <span className="text-[#54284c]">Cycle of Life, Death, and Rebirth</span></h1>
          <p className="xl:leading-9 text-base xl:text-lg mt-3 mb-10">Fusing the Power of Yoga, Nutrition, and Dynamic Gym Exercises for Complete Well-being.

</p>

          <button className="bg-[#54284c] text-white rounded-lg py-3.5 px-5 tracking-wider text-sm hover:bg-purple-800 shadow-lg inline-block">Try Yoga</button>
          <button className="capitalize tracking-wider inline-block ml-5 lg:ml-7">learn more</button>
          <div className="flex items-center max-w-sm justify-between mt-16 mx-auto text-center lg:text-left lg:mx-0">
          </div>
        </div>

        <div className="card__grid mt-14 xl:mt-0 sm:justify-items-center">
          {/* Card 1 */}
        
            <div className="w-full h-80 lg:h-88 xl:h-100">
              <img className="w-full h-full object-cover rounded-2xl" src={hero} alt="Antelope Canyon" />
            </div>

           
        </div>
      </div>
    </header>
  );
}

export default Hero;
