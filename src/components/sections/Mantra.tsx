import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Clock, 
  Users 
} from 'lucide-react';

// Define the type for the props
interface MantraProps {
  scrollPosition: number;
}

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


const Mantra = () => {
    const mantraRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
      
      const ctx = gsap.context(() => {
        // Create the scroll trigger effect for the mantra section
        gsap.fromTo(mantraRef.current, 
          { 
            y: '100%',
            borderTopLeftRadius: '40px',
            borderTopRightRadius: '40px'
          }, 
          {
            y: '0%',
            ease: "power3.out",
            scrollTrigger: {
              trigger: mantraRef.current,
              start: "top bottom",
              end: "top 20%",
              scrub: true,
            }
          }
        );
      });
      
      return () => ctx.revert();
    }, []);
  
    const stats = [
      { icon: Users, value: '100,000+', label: 'Applications Monthly' },
      { icon: Clock, value: '60%', label: 'Faster Hiring' },
      { icon: Brain, value: 'AI-Powered', label: 'Smart Matching' }
    ];
  
    return (
      <section 
        ref={mantraRef}
        className="min-h-screen py-20 bg-gray-900 flex items-center justify-center bg-cover bg-center relative z-20" 
        id="features"
        style={{ 
          transition: 'transform 0.3s ease-out',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64px' height='64px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12ZM12 5.5C12.8284 5.5 13.5 6.17157 13.5 7C13.5 7.82843 12.8284 8.5 12 8.5C11.1716 8.5 10.5 7.82843 10.5 7C10.5 6.17157 11.1716 5.5 12 5.5ZM9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11C8.82843 11 9.5 10.3284 9.5 9.5Z' fill='%230e111a'%3E%3C/path%3E %3C/g%3E%3C/svg%3E")`,
          backgroundSize: '550px', 
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#111827',
          boxShadow: '0 -20px 40px rgba(0,0,0,0.3)',
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-6xl max-w-3xl mx-auto font-bold text-gray-300 mb-4">
              Transform Your Hiring with AI-Powered Recruitment
            </h2>
            <p className="text-xl text-gray-300 mt-14 max-w-2xl mx-auto">
              Revolutionize your recruitment process with our advanced AI matching system. Find the perfect candidates faster and smarter than ever before.
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 pt-14 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105"
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
      </section>
    );
  };
  

export default Mantra;