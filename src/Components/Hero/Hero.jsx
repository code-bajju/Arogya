import React from 'react';

const Hero = () => {
  return (
    <header className="min-h-screen bg-gray-100 py-10 px-5 xl:py-0 xl:px-0">
      <div className="min-h-screen xl:grid place-items-center place-content-center xl:grid-cols-2 xl:max-w-screen-xl mx-auto w-11/12 xl:max-w-screen-2xl gap-14">
        <div className="max-w-xl mx-auto xl:max-w-2xl xl:-mt-8">
          <h1 className="text-3xl xl:text-5xl font-semibold xl:leading-snug text-gray-900 2xl:text-6xl 2xl:leading-snug">Get Amazing <span className="text-purple-500">Painting</span> for your Business</h1>
          <p className="xl:leading-9 text-base xl:text-lg mt-3 mb-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero.</p>

          <button className="bg-purple-500 text-white rounded-lg py-3.5 px-5 tracking-wider text-sm hover:bg-purple-800 shadow-lg inline-block">Subscribe</button>
          <button className="capitalize tracking-wider inline-block ml-5 lg:ml-7">learn more</button>
          <div className="flex items-center max-w-sm justify-between mt-16 mx-auto text-center lg:text-left lg:mx-0">
            <div>
              <span className="text-3xl font-semibold text-gray-900">60K+</span>
              <p className="capitalize mt-2">painting collection</p>
            </div>
            <div className="w-0.5 h-12 bg-gray-900"></div>
            <div>
              <span className="text-3xl font-semibold text-gray-900">200+</span>
              <p className="capitalize mt-2">different category</p>
            </div>
          </div>
        </div>

        <div className="card__grid mt-14 xl:mt-0 sm:justify-items-center">
          {/* Card 1 */}
          <div className="card--1 max-w-xs bg-white shadow-xl rounded-3xl pt-4 pb-8 px-5 lg:row-start-1 lg:row-end-3">
            <div className="w-full h-40 lg:h-48 xl:h-56">
              <img className="w-full h-full object-cover rounded-2xl" src="https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Antelope Canyon" />
            </div>

            <div>
              <h2 className="capitalize font-semibold text-lg mt-3 mb-2 text-gray-900 ">antelope canyon</h2>
              <p className="text-gray-400 text-sm flex justify-between items-center">Elise Doe <span className="flex items-center"><svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>5.0</span></p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
