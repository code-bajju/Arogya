import React from 'react';
import sujalImage from './sujal.jpeg';
import bajrangImage from './bajrang.jpeg';
import sushantImage from './sushant.jpeg';
import vishalImage from './vishal.jpeg';

const teamMembers = [
  {
    name: 'Mr. Vishal Gupta',
    role: 'NLP Dev',
    description: 'Assistant Professor, MMEC, MM(DU)',
    imageSrc: vishalImage,
  },
  {
    name: 'Sujal Garg',
    role: 'Ai/Ml Dev',
    description: '4th Year',
    imageSrc: sujalImage,
  },
  {
    name: 'Bajrang',
    role: 'Frontend Dev',
    description: '3rd Year',
    imageSrc: bajrangImage,
  },
  {
    name: 'Sushant',
    role: 'Backend Dev',
    description: '3rd Year',
    imageSrc: sushantImage,
  },

];

const AboutTeam = () => {
  return (
    <>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <h1 className="title-font font-bold text-3xl text-[#54284c]">Our Team</h1>
        </div>
      </div>
      <div className="w-ful flex justify-center px-15 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {teamMembers.map((member, index) => (
              <div key={index} className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={member.imageSrc}
                        alt={member.name}
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      {member.name}
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      {member.role}
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal mb-5">
                      {member.description}
                    </p>
                    {/* Social media links can be added here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
