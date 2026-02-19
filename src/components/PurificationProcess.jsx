import React, { useState } from 'react';
import { FaFilter, FaFlask, FaShieldAlt, FaCheckCircle, FaAward, FaCertificate } from 'react-icons/fa';

function PurificationProcess() {
  const [activeStage, setActiveStage] = useState(0);

  const purificationStages = [
    {
      stage: 1,
      icon: <FaFilter />,
      title: "Pre-Filtration",
      description: "Removes large particles, sediments, and visible impurities from raw water",
      color: "from-blue-400 to-cyan-500",
      detail: "Multi-media filter removes suspended solids"
    },
    {
      stage: 2,
      icon: <FaFlask />,
      title: "Activated Carbon",
      description: "Eliminates chlorine, odor, color, and organic compounds",
      color: "from-cyan-400 to-blue-500",
      detail: "Improves taste and removes chemical impurities"
    },
    {
      stage: 3,
      icon: <FaFilter />,
      title: "Micro Filtration",
      description: "Removes bacteria, cysts, and microscopic particles",
      color: "from-blue-500 to-cyan-600",
      detail: "0.1 micron filter ensures crystal clear water"
    },
    {
      stage: 4,
      icon: <FaFlask />,
      title: "Reverse Osmosis",
      description: "Core purification removes dissolved salts, heavy metals, and TDS",
      color: "from-cyan-500 to-blue-600",
      detail: "Semi-permeable membrane technology"
    },
    {
      stage: 5,
      icon: <FaShieldAlt />,
      title: "UV Treatment",
      description: "Kills 99.9% of harmful microorganisms and bacteria",
      color: "from-blue-600 to-cyan-700",
      detail: "Ultraviolet disinfection without chemicals"
    },
    {
      stage: 6,
      icon: <FaFlask />,
      title: "Mineralizer",
      description: "Adds essential minerals for health and taste enhancement",
      color: "from-cyan-600 to-blue-700",
      detail: "Calcium, Magnesium, and other vital minerals"
    },
    {
      stage: 7,
      icon: <FaCheckCircle />,
      title: "Ozonation",
      description: "Final disinfection and oxygen enrichment for freshness",
      color: "from-blue-700 to-cyan-800",
      detail: "Keeps water fresh in sealed bottles"
    }
  ];

  const certifications = [
    {
      icon: <FaCertificate />,
      name: "FSSAI Certified",
      license: "Lic. No. 12625006000401",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <FaAward />,
      name: "ISO Certified",
      license: "Certification No. UCSPL8024101629",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="purification" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Effects - Removed */}

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              7-Stage Purification Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your trust deserves purity — every drop of Adplus.aqua passes through 7 advanced stages of purification before it's bottled
            </p>
            
            {/* Quality Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full border border-cyan-300 shadow-sm">
              <FaShieldAlt className="text-cyan-600 text-xl" />
              <span className="text-gray-700 font-semibold">99.9% Pure & Safe</span>
            </div>
          </div>

          {/* Purification Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {purificationStages.map((stage, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveStage(index)}
                className={`bg-gray-50 rounded-2xl p-6 border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                  activeStage === index 
                    ? 'border-cyan-400 transform scale-105' 
                    : 'border-gray-200 hover:border-cyan-400'
                }`}
              >
                {/* Stage Number */}
                <div className={`inline-flex bg-gradient-to-r ${stage.color} w-12 h-12 rounded-full items-center justify-center font-bold text-white text-lg mb-4 shadow-md`}>
                  {stage.stage}
                </div>

                {/* Icon */}
                <div className={`bg-gradient-to-r ${stage.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl shadow-md`}>
                  {stage.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{stage.title}</h3>
                <p className="text-gray-600 text-sm mb-3 text-center leading-relaxed">{stage.description}</p>
                
                {/* Detail Badge */}
                <div className="bg-cyan-50 rounded-lg p-2 text-center border border-cyan-200">
                  <p className="text-cyan-700 text-xs font-semibold">{stage.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flow Diagram - Visual Representation */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Purification Flow
            </h3>
            
            <div className="flex flex-wrap justify-center items-top gap-4">
              {purificationStages.map((stage, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div className={`bg-gradient-to-r ${stage.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                      {stage.stage}
                    </div>
                    <span className="text-gray-700 text-xs mt-2 max-w-[80px] text-center font-medium">{stage.title}</span>
                  </div>
                  {index < purificationStages.length - 1 && (
                    <div className="text-cyan-500 text-2xl hidden sm:block">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-sm"
              >
                <div className={`bg-gradient-to-r ${cert.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-md`}>
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">{cert.name}</h3>
                <p className="text-cyan-700 text-center font-semibold">{cert.license}</p>
              </div>
            ))}
          </div>

          

        </div>
      </div>
    </section>
  );
}

export default PurificationProcess;