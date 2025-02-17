import React from 'react';
import { MapPin, FileText, BarChart, Thermometer } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <MapPin size={24} />,
      title: "Real-Time Visibility",
      description: "Monitor your shipments in real-time across land, sea, and air. Get instant notifications and stay ahead of potential delays.",
      color: "bg-blue-500",
      hoverColor: "group-hover:bg-blue-600"
    },
    {
      icon: <FileText size={24} />,
      title: "Automated Documentation",
      description: "AI-powered system generates and validates all required customs documentation, reducing errors and delays by 85%.",
      color: "bg-indigo-500",
      hoverColor: "group-hover:bg-indigo-600"
    },
    {
      icon: <BarChart size={24} />,
      title: "Intelligent Routing",
      description: "Our algorithms find the most efficient routes, reducing transit time and cutting fuel consumption by up to 23%.",
      color: "bg-purple-500",
      hoverColor: "group-hover:bg-purple-600"
    },
    {
      icon: <Thermometer size={24} />,
      title: "Temperature-Controlled Excellence",
      description: "Purpose-built solutions for pharmaceutical, food, and other sensitive cargo requiring climate-controlled transport.",
      color: "bg-teal-500",
      hoverColor: "group-hover:bg-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id='why-choose-us'>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Businesses Choose FreightLink Global
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our digital platform delivers end-to-end logistics solutions that simplify complex shipping challenges
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="p-1">
                <div className={`${feature.color} ${feature.hoverColor} text-white p-5 rounded-t-lg transition-colors duration-300`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 inline-flex items-center">
            Explore All Features
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;