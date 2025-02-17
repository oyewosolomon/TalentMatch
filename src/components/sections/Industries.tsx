import React, { useState } from "react";
import { motion } from "framer-motion";
import { Factory, Cpu, ChevronDown, ChevronUp } from "lucide-react";

// Define the shape of an industry item
interface Industry {
  name: string;
  description: string;
  icon: JSX.Element;
  details: string;
  stats: { label: string; value: string }[];
}

const Industries: React.FC = () => {
  const [expandedIndustry, setExpandedIndustry] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndustry(expandedIndustry === index ? null : index);
  };

  const industries: Industry[] = [
    {
      name: "Automotive",
      description: "Streamline production lines and enhance precision.",
      icon: <Factory className="h-8 w-8 text-primary" />,
      details:
        "Our collaborative robots are designed to handle complex assembly tasks, reduce downtime, and improve efficiency in automotive manufacturing. From welding to painting, our solutions ensure precision and consistency.",
      stats: [
        { label: "Productivity Increase", value: "30%" },
        { label: "Defect Reduction", value: "25%" },
      ],
    },
    {
      name: "Electronics",
      description: "Ensure high-quality production with our advanced solutions.",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      details:
        "In the electronics industry, our robots excel in precision tasks such as PCB assembly, soldering, and quality inspection. Our AI-powered systems ensure zero defects and high throughput.",
      stats: [
        { label: "Throughput Increase", value: "40%" },
        { label: "Error Reduction", value: "50%" },
      ],
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Industries We Serve
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {industry.icon}
                  <h3 className="text-2xl font-semibold">{industry.name}</h3>
                </div>
                <button className="text-gray-600 hover:text-primary">
                  {expandedIndustry === index ? (
                    <ChevronUp className="h-6 w-6" />
                  ) : (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </button>
              </div>
              <p className="text-gray-700 mt-4">{industry.description}</p>

              {expandedIndustry === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <p className="text-gray-700 mb-4">{industry.details}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {industry.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-white p-4 rounded-lg shadow-sm text-center"
                      >
                        <h4 className="text-xl font-bold">{stat.value}</h4>
                        <p className="text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
