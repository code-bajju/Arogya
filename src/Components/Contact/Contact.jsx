import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can replace the above console.log with your actual form submission code
  };

  return (
    <section className="text-gray-400 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-[#54284c]">Contact Us</h1>
          <p className="leading-relaxed mt-4 text-[#54284c]">Feel Free to contact us for any query.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-white bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          
          <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-[#54284c]">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-300 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-400 focus:border-purple-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-[#54284c]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-300 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-400 focus:border-purple-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-[#54284c]">Message</label>
             
    
            <textarea  className="w-full bg-gray-300 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-400 focus:border-purple-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="comment" form="usrform"></textarea>
            </div>
            <button type="submit" className="text-gray-300 bg-[#54284c] border-0 py-1 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
