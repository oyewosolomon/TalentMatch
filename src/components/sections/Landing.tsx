import React from 'react';
import { 
  Brain, Clock, ChartBar, Users, CheckCircle, Zap, LineChart, Shield,
  ArrowRight, Star, Building, Globe, Database, Lock, Mail
} from 'lucide-react';

// Define interfaces for props
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isActive?: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isActive = false }) => (
  <div className={`relative p-6 rounded-xl transition-all duration-300 ${
    isActive ? 'bg-indigo-50 border-2 border-indigo-200' : 'bg-white'
  }`}>
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isPopular = false }) => (
  <div className={`relative p-8 rounded-xl ${
    isPopular ? 'bg-indigo-50 border-2 border-indigo-200' : 'bg-white'
  } shadow-lg`}>
    {isPopular && (
      <span className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-gray-600">/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
      isPopular 
        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
        : 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
    }`}>
      Get Started
    </button>
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, company, content, rating }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{content}</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600 text-sm">{role} at {company}</p>
      </div>
    </div>
  </div>
);

const Website: React.FC = () => {
  // How It Works Section
  const processSteps: ProcessStepProps[] = [
    {
      number: 1,
      title: "AI Profile Analysis",
      description: "Upload job requirements and our AI analyzes key skills and experience needed."
    },
    {
      number: 2,
      title: "Smart Candidate Matching",
      description: "Our AI matches candidates based on skills, experience, and cultural fit."
    },
    {
      number: 3,
      title: "Automated Assessment",
      description: "Candidates complete AI-powered assessments to verify their capabilities."
    },
    {
      number: 4,
      title: "Final Selection",
      description: "Review AI-ranked candidates and make data-driven hiring decisions."
    }
  ];

  // Pricing Plans
  const pricingPlans: PricingCardProps[] = [
    {
      title: "Starter",
      price: "199",
      features: [
        "Up to 10 job postings",
        "Basic AI matching",
        "Email support",
        "Basic analytics"
      ]
    },
    {
      title: "Professional",
      price: "499",
      features: [
        "Up to 50 job postings",
        "Advanced AI matching",
        "Priority support",
        "Advanced analytics",
        "Custom assessments"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "999",
      features: [
        "Unlimited job postings",
        "Premium AI matching",
        "24/7 support",
        "Custom analytics",
        "API access",
        "White labeling"
      ]
    }
  ];

  // Testimonials
  const testimonials: TestimonialCardProps[] = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp",
      content: "TalentMatch AI has transformed our hiring process. We've reduced our time-to-hire by 65% while finding better-qualified candidates.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Talent Acquisition Manager",
      company: "InnovateCo",
      content: "The AI-powered matching is incredibly accurate. We've seen a significant improvement in candidate quality and retention rates.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Recruiting Lead",
      company: "StartupHub",
      content: "The automated assessments save us countless hours. The platform is intuitive and the support team is excellent.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* How It Works Section */}
      <section className="py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How TalentMatch AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform simplifies your recruitment process in four easy steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our clients say about TalentMatch AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your recruitment needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-white" id="integrations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with your favorite HR tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[Database, Globe, Building, Lock].map((Icon, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                <span className="text-gray-600">Integration Partner {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of companies using TalentMatch AI to find their perfect candidates
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Website;