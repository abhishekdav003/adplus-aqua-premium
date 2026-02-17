import React from 'react';
import { FaHeart, FaUsers, FaShieldAlt, FaAward, FaStar } from 'react-icons/fa';

function WhoWeAre() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      
      {/* Background Effects - Very Light */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-cyan-600">Adplus.aqua</span> brings style and identity to every sip. 
              We design and deliver custom-labeled bottled water for hotels, restaurants, 
              events, and campaigns — because every bottle can speak your brand's story.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-sm">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To deliver purity with personality - combining premium quality water 
                with custom branding that tells your unique story.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-sm">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To be the most trusted partner for custom branded water solutions 
                across hospitality, corporate, and events industry.
              </p>
            </div>

            {/* Promise */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105 shadow-sm">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Promise</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                7-stage purified water with FSSAI & ISO certification for 
                uncompromised quality and safety standards.
              </p>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-blue-100 rounded-3xl p-8 border border-blue-200 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Custom Solutions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Hotel & Cafes */}
              <div className="text-center group">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaStar className="text-white text-xl" />
                </div>
                <h4 className="text-gray-800 font-semibold mb-2">Hotels & Cafes</h4>
                <p className="text-gray-600 text-sm">Luxury branded experience</p>
              </div>

              {/* Events & Weddings */}
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaHeart className="text-white text-xl" />
                </div>
                <h4 className="text-gray-800 font-semibold mb-2">Events & Weddings</h4>
                <p className="text-gray-600 text-sm">Personalized celebrations</p>
              </div>

              {/* Campaigns */}
              <div className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-white text-xl" />
                </div>
                <h4 className="text-gray-800 font-semibold mb-2">Campaigns</h4>
                <p className="text-gray-600 text-sm">Brand messaging</p>
              </div>

              {/* Corporate */}
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaAward className="text-white text-xl" />
                </div>
                <h4 className="text-gray-800 font-semibold mb-2">Corporate</h4>
                <p className="text-gray-600 text-sm">Professional branding</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm inline-block">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Why Choose Adplus.aqua?</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">7+</div>
                  <div className="text-gray-600 font-semibold text-sm">Purification Stages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">500+</div>
                  <div className="text-gray-600 font-semibold text-sm">Min Order</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">2</div>
                  <div className="text-gray-600 font-semibold text-sm">Bottle Sizes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">24/7</div>
                  <div className="text-gray-600 font-semibold text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;