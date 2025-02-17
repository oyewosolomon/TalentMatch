import React, { useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "FreightLink Global has transformed our logistics. Real-time visibility and intelligent routing have saved us time and cost."
  },
  {
    name: "Jane Smith",
    role: "Logistics Manager, SupplyChain Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Their automated documentation system is a game-changer. We’ve reduced errors and improved our on-time delivery rate."
  },
  {
    name: "Michael Brown",
    role: "Founder, StartUp Express",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "The platform’s ease of use and seamless integration into our systems has been remarkable."
  }
];

const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    // Pause on hover
    const pauseScroll = () => clearInterval(scrollInterval);
    scrollContainer?.addEventListener('mouseover', pauseScroll);
    scrollContainer?.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer?.removeEventListener('mouseover', pauseScroll);
      scrollContainer?.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Discover how FreightLink Global is transforming logistics worldwide.
          </p>
        </div>

        <div 
          ref={carouselRef} 
          className="flex gap-6 overflow-x-hidden no-scrollbar px-4 md:px-0 scroll-smooth"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-[150px] md:min-w-[150px] lg:min-w-[150px] flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <Quote className="text-blue-500 mb-4" size={32} />
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
