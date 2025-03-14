import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, Users, Brain } from 'lucide-react';
import { FloatingDock } from '../ui/floating-dock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '100,000+', label: 'Applications Monthly' },
    { icon: Clock, value: '60%', label: 'Faster Hiring' },
    { icon: Brain, value: 'AI-Powered', label: 'Smart Matching' }
  ];

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen bg-gradient-to-b from-indigo-50 to-white overflow-hidden flex items-center justify-center"
    >
      {/* Hero Content */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center justify-center">
            {/* Left Column */}
            <div className={`space-y-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} max-w-2xl mx-auto lg:mx-0`}>
              <h1 className="text-5xl font-bold leading-tight text-gray-900 text-center lg:text-left">
                Transform Your Hiring with{' '}
                <span className="text-indigo-600">AI-Powered Recruitment</span>
              </h1>
              <p className="text-xl text-gray-600 text-center lg:text-left">
                Revolutionize your recruitment process with our advanced AI matching system. 
                Find the perfect candidates faster and smarter than ever before.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-indigo-200">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all transform hover:scale-105">
                  Watch Demo
                </button>
              </div>
              <div className={`transform text-center  justify-center transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} max-w-2xl mx-auto lg:mx-0`}>
              <div className="space-y-2">
                <p className="text-center text-gray-600 mb-6">Trusted by leading companies worldwide</p>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  {['google', 'microsoft', 'amazon', 'tesla', 'apple'].map((company, index) => (
                    <div key={index} className="rounded-lg">
                      <img
                        src={`https://logo.clearbit.com/${company}.com`}
                        alt={`${company} Logo`}
                        className="h-12 w-auto px-3 opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>

            {/* Right Column (Trusted Companies) */}
            <div className={`transform transition-all rounded-xl duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} max-w-2xl mx-auto lg:mx-0`}>
              <div className="space-y-8">
                <img src="/images/b.png" alt="" className='rounded-xl shadow-xl' />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;