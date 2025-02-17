import React, { useState, FC } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg px-4 font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 mx-3 text-indigo-500" />
        ) : (
          <ChevronDown className="w-5 h-5 mx-3 text-indigo-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 pr-4 px-4 text-base text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQs: FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "How does FreightLink Global ensure the security of my shipments?",
      answer: "We employ a multi-layered security approach including real-time tracking, verified carrier network (with rigorous background checks), and secure digital documentation. All data is protected with 256-bit encryption, and our platform is ISO 27001 certified and SOC 2 Type II audited for maximum security compliance."
    },
    {
      question: "Can FreightLink handle temperature-sensitive shipments?",
      answer: "Absolutely! Our temperature-controlled shipping solution offers continuous monitoring, validated cold chain integrity, and specialized container options. We comply with FDA and EU regulations for pharmaceuticals, food, and other sensitive cargo, with instant alerts for any temperature excursions."
    },
    {
      question: "How does the customs documentation automation work?",
      answer: "Our AI-powered system automatically generates and validates all required customs documents based on your shipment details, destination requirements, and product classifications. This reduces paperwork errors by 85% and accelerates border clearance time by up to 68%, ensuring smooth international shipping."
    },
    {
      question: "What if I need help with a shipment outside business hours?",
      answer: "We provide 24/7 support through multiple channels. All Business and Enterprise plans include priority support with faster response times, and Enterprise customers enjoy dedicated account managers. Our help center and knowledge base are always accessible, and emergency situations are escalated immediately."
    },
    {
      question: "Can FreightLink integrate with my existing systems?",
      answer: "Yes, we offer seamless integrations with major ERP systems (SAP, Oracle), WMS platforms, and e-commerce solutions (Shopify, WooCommerce). Our comprehensive API allows for custom integrations, and our development team can work with you to ensure smooth data flow between systems."
    },
    {
      question: "How do you handle shipping delays or exceptions?",
      answer: "Our proactive monitoring system detects potential delays before they occur. When an exception happens, you receive instant notifications with the cause, impact, and recommended solutions. Our team works directly with carriers to resolve issues, and all shipments are backed by our service guarantee for additional peace of mind."
    },
    {
      question: "Is there a minimum shipping volume requirement?",
      answer: "No, we serve businesses of all sizes. Our Startup plan is perfect for companies shipping as few as 10-50 shipments per month, while our Enterprise solution can handle unlimited volume. You can start small and scale your plan as your business grows."
    },
    {
      question: "How accurate is your real-time tracking?",
      answer: "Our platform provides 99.8% tracking accuracy across all transport modes. We combine carrier APIs, GPS data, IoT sensors, and predictive algorithms to give you precise shipment location and ETA information, refreshed every 15 minutes for ground shipments and hourly for air/ocean freight."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get answers to the most common questions about our platform
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-base text-gray-600">
            Still have questions?{' '}
            <a
              href="#contact"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
