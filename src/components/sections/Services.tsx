// src/components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "24/7 Support",
      description: "Dedicated support team available round-the-clock.",
    },
    {
      title: "Custom Solutions",
      description: "Tailored robotic systems for your specific needs.",
    },
    {
      title: "Training & Implementation",
      description: "Comprehensive training for your team.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;