import React from 'react';
import { FaStar, FaMoneyBillWave, FaRocket } from 'react-icons/fa';
const SectionV2 = () => {
    return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Clients & Freelancers Worldwide
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Freelancers Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-5xl text-blue-600 mb-4 flex justify-center">
              <FaStar />
            </div>
            <h3 className="text-4xl font-bold mb-2">3M+</h3>
            <p className="text-gray-600 mb-2">Rated Freelancers</p>
            <p className="text-sm text-gray-500">
              Covering <span className="font-semibold">8,766 skills</span> from coding to creative design
            </p>
          </div>

          {/* Earnings Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-5xl text-green-600 mb-4 flex justify-center">
              <FaMoneyBillWave />
            </div>
            <h3 className="text-4xl font-bold mb-2">$150M+</h3>
            <p className="text-gray-600 mb-2">Freelancer Earnings</p>
            <p className="text-sm text-gray-500">
              Top performers earn <span className="font-semibold">$7,000+/month</span>
            </p>
          </div>

          {/* Speed Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-5xl text-purple-600 mb-4 flex justify-center">
              <FaRocket />
            </div>
            <h3 className="text-4xl font-bold mb-2">10 mins</h3>
            <p className="text-gray-600 mb-2">Average Hiring Time</p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">90% of projects</span> completed within 7 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionV2;



