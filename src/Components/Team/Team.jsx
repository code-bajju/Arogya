import React from 'react';

const TeamSection = () => {
  const handleFeatureClick = (featureTitle) => {
    console.log(`Clicked on ${featureTitle} feature`);
    // Add your custom event handling logic here
  };

  const features = [
    { title: 'Realtime Pose Alignment', description: 'Experience the power of our advanced AI-powered pose recognition system that provides instant feedback on your yoga poses, ensuring proper alignment and reducing the risk of injury.    ' },
    { title: 'Personalized Nutrition Guidance', description: 'Say goodbye to generic nutrition advice. Our platform analyzes your individual needs, preferences, and goals to deliver personalized nutrition guidance, meal planning, and recipes tailored to support your yoga practice and overall well-being.    ' },
    { title: 'ChatBot Assistant', description: 'Have questions about health, yoga, or nutrition? Our intelligent ChatBot is here to assist you 24/7, providing reliable information, clarifying doubts, and offering valuable insights to enhance your wellness journey.' },
    { title: 'AR / VR Yoga Tutor', description: 'Incorporate 3D models for AR and VR applications, enhancing alignment visualization and facilitating pose adjustments in practice support. Utilize cutting-edge features for immersive experiences, and offering a dynamic platform.    ' },
    { title: 'BMI Based Diet Planning', description: 'Customize a nutrition regimen to align with individual fitness aspirations through a BMI-centric approach. Tailor dietary plans meticulously to harmonize with specific fitness objectives, ensuring a personalized and effective strategy for success.' },
    { title: 'Sleep Meditation', description: ' Take a moment to unwind and prepare for a restful night sleep with this guided meditation' },
    { title: 'Meditation', description: 'Find a quiet and comfortable space. Sit or lie down in a relaxed position.' },
    { title: 'Diary Journaling', description: 'It provide you with a space to capture your thoughts and feelings' },
    { title: 'Breathing Exercises', description: 'Enable Respiratory Monitoring in Yoga and Workouts through Computer Vision Utilizing Webcam Technology. Implement cutting-edge computer vision for real-time breath analysis during exercise, enhancing performance insights.' },
  ];

  return (
    <div className="flex flex-col items-center pt-5">
      <h1 className="text-3xl text-[#54284c] font-semibold mb-4">What We Provide?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col h-full max-w-md bg-white shadow-xl rounded-3xl p-4 cursor-pointer justify-between">
            <div className="flex flex-col justify-center h-full">
              <h2 className="capitalize font-semibold text-lg mt-3 mb-2 text-gray-900 ">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
