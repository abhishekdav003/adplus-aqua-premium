import React, { useState, useEffect } from 'react';
import { FaClipboardCheck, FaPalette, FaPrint, FaFlask, FaShippingFast, FaCheckCircle } from 'react-icons/fa';

function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      step: 1,
      icon: <FaClipboardCheck className="text-xl" />,
      title: "Consultation & Quote",
      description: "Share your requirements and get a custom quote within 24 hours",
      duration: "1-2 Days",
      color: "from-cyan-400 to-blue-500"
    },
    {
      step: 2,
      icon: <FaPalette className="text-xl" />,
      title: "Design Approval",
      description: "Our designers create your custom label design for approval",
      duration: "2-3 Days",
      color: "from-blue-400 to-cyan-500"
    },
    {
      step: 3,
      icon: <FaPrint className="text-xl" />,
      title: "Label Printing",
      description: "High-quality waterproof label printing with your brand design",
      duration: "1-2 Days",
      color: "from-cyan-500 to-blue-600"
    },
    {
      step: 4,
      icon: <FaFlask className="text-xl" />,
      title: "7-Stage Purification",
      description: "Water undergoes advanced 7-stage purification process",
      duration: "1 Day",
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: 5,
      icon: <FaShippingFast className="text-xl" />,
      title: "Bottling & Packaging",
      description: "Automated bottling with quality checks and secure packaging",
      duration: "1-2 Days",
      color: "from-cyan-600 to-blue-700"
    },
    {
      step: 6,
      icon: <FaCheckCircle className="text-xl" />,
      title: "Delivery",
      description: "Safe and timely delivery to your location",
      duration: "1-3 Days",
      color: "from-blue-600 to-cyan-700"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-12 bg-blue-50 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Simple 6-step process to get your custom branded water bottles delivered in just 3–5 days
          </p>
        </div>

        {/* Horizontal Stepper Row */}
        <div className="relative flex items-start justify-between">

          {/* Background connector line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-cyan-200 z-0"></div>
          {/* Active progress line */}
          <div
            className="absolute top-8 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 z-0 transition-all duration-700"
            style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
          ></div>

          {processSteps.map((step, index) => (
            <div
              key={step.step}
              onClick={() => setActiveStep(index)}
              className="relative z-10 flex flex-col items-center cursor-pointer group"
              style={{ width: `${100 / processSteps.length}%` }}
            >
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md bg-gradient-to-br ${step.color} transition-all duration-300 ${
                  activeStep === index
                    ? 'ring-4 ring-cyan-300 ring-offset-2 ring-offset-blue-50 scale-110'
                    : index < activeStep
                    ? 'opacity-80'
                    : 'opacity-50 group-hover:opacity-80 group-hover:scale-105'
                }`}
              >
                {step.icon}
              </div>

              {/* Step Info below icon */}
              <div className="mt-3 text-center px-1">
                <p className={`text-xs font-bold leading-tight transition-colors duration-300 ${
                  activeStep === index ? 'text-cyan-600' : 'text-gray-700'
                }`}>
                  {step.title}
                </p>
                <span className="text-xs text-gray-400 font-medium">{step.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Detail Card */}
        <div className="mt-6 bg-white rounded-2xl border border-cyan-200 shadow-md p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-300">
          <div
            className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-white shadow-md bg-gradient-to-br ${processSteps[activeStep].color}`}
          >
            {processSteps[activeStep].icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Step {processSteps[activeStep].step}</span>
              <span className="text-xs bg-cyan-50 text-cyan-600 border border-cyan-200 rounded-full px-2 py-0.5 font-semibold">{processSteps[activeStep].duration}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">{processSteps[activeStep].title}</h3>
            <p className="text-gray-500 text-sm mt-0.5">{processSteps[activeStep].description}</p>
          </div>
          <div className="flex items-center gap-1 text-green-500 shrink-0">
            <FaCheckCircle />
            <span className="text-sm font-semibold">Active</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-1">Ready to Start Your Order?</h3>
          <p className="text-gray-500 text-sm mb-4">Complete process takes 3–5 days. Minimum order 500 bottles.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition duration-300 flex items-center justify-center gap-2 shadow-md">
              <FaClipboardCheck />
              Get Started Now
            </button>
            <button className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-6 py-2.5 rounded-lg font-semibold text-sm transition duration-300">
              Download Brochure
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowWeWork;