import React, { useState } from 'react';
import { 
  Brain, 
  Clock, 
  ChartBar, 
  Users, 
  CheckCircle,
  Zap,
  LineChart,
  Shield
} from 'lucide-react';


const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI-Powered Matching",
      icon: Brain,
      description: "Our advanced AI algorithm analyzes thousands of data points to find the perfect candidate-job fit.",
      stats: "93% matching accuracy",
      color: "indigo",
      background: "/images/ai-matching.jpg" 
    },
    {
      title: "Skill Assessment",
      icon: ChartBar,
      description: "Automated technical and soft skill evaluations using cutting-edge assessment tools.",
      stats: "40% better hire quality",
      color: "blue",
      background: '/images/skill-assessment.jpg' // Add background image for this feature
    },
    {
      title: "Behavioral Analysis",
      icon: Users,
      description: "Deep insights into candidate behavior and cultural fit using AI-driven analysis.",
      stats: "85% culture fit rate",
      color: "purple",
      background: '/images/behavioral-analysis.jpg' // Add background image for this feature
    },
    {
      title: "Fast-Track Hiring",
      icon: Zap,
      description: "Streamlined recruitment process that reduces time-to-hire by 60%.",
      stats: "18 days average hire time",
      color: "green",
      background: '/images/fast-track-hiring.jpg' // Add background image for this feature
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce manual screening by 80%"
    },
    {
      icon: CheckCircle,
      title: "Better Matches",
      description: "AI-driven candidate scoring"
    },
    {
      icon: LineChart,
      title: "Data Insights",
      description: "Real-time hiring analytics"
    },
    {
      icon: Shield,
      title: "Bias Prevention",
      description: "AI-powered fair hiring"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionize Your Recruitment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform streamlines your hiring process while finding the best matches for your team.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer 
                  ${activeFeature === index 
                    ? `bg-${feature.color}-50 border-2 border-${feature.color}-200 shadow-lg` 
                    : 'bg-white hover:shadow-md'}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${feature.color}-100`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{feature.description}</p>
                    <span className={`text-${feature.color}-600 font-medium`}>
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Preview */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-8 h-full">
              {/* Interactive Demo Preview with Background Image */}
              <div
                className="aspect-video rounded-lg mb-6 bg-cover bg-center"
                style={{ backgroundImage: `url(${features[activeFeature].background})` }}
              >
                <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <span className="text-white text-lg font-semibold">
                    Interactive Demo Preview
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4">
                {features[activeFeature].title}
              </h4>
              <p className="text-gray-600">
                See how our {features[activeFeature].title.toLowerCase()} feature 
                transforms your recruitment process.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <benefit.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;