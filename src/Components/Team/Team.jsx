import React from 'react';

const TeamSection = () => {
  const handleCardClick = (cardTitle) => {
    console.log(`Clicked on ${cardTitle} card`);
    // Add your custom event handling logic here
  };

  const cards = [
    { title: 'Antelope Canyon', imageSrc: 'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', author: 'Elise Doe', rating: 5.0 },
    // Add data for the other 5 cards
    { title: 'Card 2', imageSrc: '...', author: 'Author 2', rating: 4.5 },
    { title: 'Card 3', imageSrc: '...', author: 'Author 3', rating: 4.2 },
    { title: 'Card 4', imageSrc: '...', author: 'Author 4', rating: 3.8 },
    { title: 'Card 5', imageSrc: '...', author: 'Author 5', rating: 4.0 },
    { title: 'Card 6', imageSrc: '...', author: 'Author 6', rating: 4.7 },
  ];

  return (
    <div className="flex flex-col items-center pt-5">
      <h1 className="text-2xl font-semibold mb-4">Features of My Project</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {cards.map((card, index) => (
          <div key={index} className="max-w-xs bg-white shadow-xl rounded-3xl pt-4 pb-8 px-5 cursor-pointer" onClick={() => handleCardClick(card.title)}>
            <div className="w-full h-40">
              <img className="w-full h-full object-cover rounded-2xl" src={card.imageSrc} alt={card.title} />
            </div>
            <div>
              <h2 className="capitalize font-semibold text-lg mt-3 mb-2 text-gray-900 ">{card.title}</h2>
              <p className="text-gray-400 text-sm flex justify-between items-center">{card.author} <span className="flex items-center"><svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.810l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>{card.rating}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
