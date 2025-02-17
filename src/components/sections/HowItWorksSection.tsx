import React from 'react';
import { Link2, PackageCheck, Radio, BarChart2 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Link2 size={28} />,
      title: "Connect",
      description: "Create your account and connect with our network of 50,000+ verified carriers",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      number: "01"
    },
    {
      icon: <PackageCheck size={28} />,
      title: "Book",
      description: "Compare rates, select carriers, and book shipments with just a few clicks",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      number: "02"
    },
    {
      icon: <Radio size={28} />,
      title: "Track",
      description: "Monitor your freight in real-time with GPS tracking and automated alerts",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      number: "03"
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Manage",
      description: "Access documentation, invoices, and analytics in one centralized dashboard",
      color: "bg-teal-100",
      iconColor: "text-teal-600",
      number: "04"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden" id='how-it-works'>
      <div className="container mx-auto px-4 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>
        
        {/* Content Container */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Simplified Global Shipping in Four Steps
            </h2>
            <p className="text-gray-600 dark:text-gray-100 max-w-2xl mx-auto text-lg">
              Our streamlined process makes international logistics accessible for businesses of all sizes
            </p>
          </div>

          {/* Connected Steps */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200 hidden md:block" aria-hidden="true"></div>
            
            {/* Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`rounded-xl ${step.color} p-8 h-full transition-all duration-300 hover:shadow-lg`}>
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md">
                      <div className={`${step.iconColor} ${step.color} rounded-full w-16 h-16 flex items-center justify-center relative z-10`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="pt-12 text-center">
                      <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                      <h3 className="text-xl font-semibold text-gray-800 mt-2">{step.title}</h3>
                      <p className="text-gray-600 mt-3">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Video Teaser */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">See How It Works in Action</h3>
                <p className="text-gray-600 mb-6">
                  Watch our 2-minute demo to see how FreightLink Global streamlines your entire shipping process from end to end.
                </p>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 inline-flex items-center">
                  Watch Demo Video
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L19 12M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden m-4 md:m-12 shadow-lg relative">
                  <img src="/api/placeholder/640/360" alt="Platform demo preview" className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L18 12L6 20V4Z" fill="#2563EB" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition duration-200">
              Learn more about our platform
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;