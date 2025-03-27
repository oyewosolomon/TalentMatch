import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Clock, 
  ChartBar, 
  Users, 
  CheckCircle,
  Zap,
  LineChart,
  Shield,
  LucideIcon
} from 'lucide-react';

interface Feature {
  title: string;
  icon: LucideIcon;
  description: string;
  stats: string;
  color: string;
  background: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const features: Feature[] = [
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
      background: '/images/skill-assessment.jpg'
    },
    {
      title: "Behavioral Analysis",
      icon: Users,
      description: "Deep insights into candidate behavior and cultural fit using AI-driven analysis.",
      stats: "85% culture fit rate",
      color: "purple",
      background: '/images/behavioral-analysis.jpg'
    },
    {
      title: "Fast-Track Hiring",
      icon: Zap,
      description: "Streamlined recruitment process that reduces time-to-hire by 60%.",
      stats: "18 days average hire time",
      color: "green",
      background: '/images/fast-track-hiring.jpg'
    }
  ];

  const benefits: Benefit[] = [
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const featureCard = {
    hover: { 
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }
  };

  const benefitCard = {
    hover: { 
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Revolutionize Your Recruitment
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Our AI-powered platform streamlines your hiring process while finding the best matches for your team.
          </motion.p>
        </motion.div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Feature Cards */}
          <motion.div 
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover="hover"
                custom={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100,
                  delay: index * 0.1
                }}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer 
                  ${activeFeature === index 
                    ? `bg-${feature.color}-50 border-2 border-${feature.color}-200 shadow-lg` 
                    : 'bg-white hover:shadow-md'}`}
                onClick={() => setActiveFeature(index)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className={`p-3 rounded-lg bg-${feature.color}-100`}
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{feature.description}</p>
                    <motion.span 
                      className={`text-${feature.color}-600 font-medium`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {feature.stats}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Preview */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.9 }}
                className="bg-white rounded-xl shadow-xl p-8 h-full"
              >
                {/* Interactive Demo Preview with Background Image */}
                <motion.div
                  className="aspect-video rounded-lg mb-6 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${features[activeFeature].background})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div 
                    className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                  >
                    <motion.span 
                      className="text-white text-lg font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Interactive Demo Preview
                    </motion.span>
                  </motion.div>
                </motion.div>
                <h4 className="text-xl font-semibold mb-4">
                  {features[activeFeature].title}
                </h4>
                <p className="text-gray-600">
                  See how our {features[activeFeature].title.toLowerCase()} feature 
                  transforms your recruitment process.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover="hover"
              custom={benefit}
              onHoverStart={() => setHoveredBenefit(index)}
              onHoverEnd={() => setHoveredBenefit(null)}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className="p-3 bg-indigo-100 rounded-lg w-fit mb-4"
                animate={{
                  rotate: hoveredBenefit === index ? [0, 10, -10, 0] : 0,
                  scale: hoveredBenefit === index ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 0.6 }}
              >
                <benefit.icon className="w-6 h-6 text-indigo-600" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;