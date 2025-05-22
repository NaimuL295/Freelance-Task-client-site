import React from 'react';
import Hero from '../../Hero/Hero';
import FeaturedTasks from '../../FeaturedTasks/FeaturedTasks';
import SectionV2 from '../../Section-v2/Sectionv2';

const Home = () => {
    return (
        <div>
     <Hero/>


<section> <FeaturedTasks/>  </section>

<SectionV2/>




<section className="bg-white py-10">
  <h2 className="text-2xl font-bold text-center mb-6">🛠 How It Works</h2>
  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div className="text-center">
      <div className="text-4xl mb-2">📝</div>
      <h3 className="font-semibold text-lg">Post a Task</h3>
      <p className="text-sm text-gray-600">Describe your need and set a budget.</p>
    </div>
    <div className="text-center">
      <div className="text-4xl mb-2">📬</div>
      <h3 className="font-semibold text-lg">Get Bids</h3>
      <p className="text-sm text-gray-600">Freelancers send offers based on your task.</p>
    </div>
    <div className="text-center">
      <div className="text-4xl mb-2">💼</div>
      <h3 className="font-semibold text-lg">Hire & Work</h3>
      <p className="text-sm text-gray-600">Choose the best freelancer and collaborate easily.</p>
    </div>
  </div>
</section>


        </div>
    );
};

export default Home;