import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Brain } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '100,000+', label: 'Applications Monthly' },
    { icon: Clock, value: '60%', label: 'Faster Hiring' },
    { icon: Brain, value: 'AI-Powered', label: 'Smart Matching' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 to-white">

      {/* Hero Content */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
                Transform Your Hiring with
                <span className="text-indigo-600"> AI-Powered Recruitment</span>
              </h1>
              <p className="text-xl text-gray-600">
                Revolutionize your recruitment process with our advanced AI matching system. 
                Find the perfect candidates faster and smarter than ever before.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className={`grid grid-cols-1 gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <stat.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6">Trusted by leading companies worldwide</p>
            <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
             
              <div className=" rounded-lg">
                <img 
                  src="https://logo.clearbit.com/google.com"
                  alt="google Logo"
                  className="h-12 w-auto px-3 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="rounded-lg">
                <img 
                  src="https://logo.clearbit.com/microsoft.com"
                  alt="google Logo"
                  className="h-12 w-auto px-3 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="rounded-lg">
                <img 
                  src="https://logo.clearbit.com/amazon.com"
                  alt="Google"
                  className="h-12 w-auto px-3 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="rounded-lg">
                <img 
                  src="https://logo.clearbit.com/tesla.com"
                  alt="Tesla"
                  className="h-12 w-auto px-3 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="rounded-lg">
                <img 
                  src="https://logo.clearbit.com/apple.com"
                  alt="Apple "
                  className="h-12 w-auto px-3 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;