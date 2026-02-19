import { useState } from "react";

const LitchiDrinkProduct = () => {
  const [imgSrc] = useState("/your-product-image.png"); // ← Replace with your image path

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-8 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">

        {/* Left - Image Panel */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 flex flex-col items-center justify-center p-12 relative overflow-hidden">

          {/* Decorative background circles */}
          <div className="absolute top-[-50px] right-[-50px] w-52 h-52 rounded-full bg-white opacity-10" />
          <div className="absolute bottom-[-60px] left-[-40px] w-64 h-64 rounded-full bg-white opacity-5" />
          <div className="absolute top-1/2 left-[-30px] w-32 h-32 rounded-full bg-blue-400 opacity-20" />

          {/* Brand Badge */}
          <div className="bg-white bg-opacity-20 text-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 border border-white border-opacity-30">
            HS-BLUE Brand
          </div>

          {/* Product Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-300 opacity-30 rounded-2xl blur-2xl scale-90 group-hover:scale-105 transition-all duration-500" />
            <img
              src="./images/Hs Blue 2.png"
              alt="HS-BLUE Litchi Fruit Drink"
              className="relative z-10 w-48 h-72 object-contain drop-shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 rounded-2xl"
            />
          </div>

          {/* Tagline below image */}
          <div className="mt-8 text-center z-10">
            <p className="text-blue-200 text-xs tracking-widest uppercase">Pure Taste</p>
            <p className="text-white text-xl font-bold tracking-wide mt-1">Fresh Energy</p>
          </div>

          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-white to-blue-400 opacity-30" />
        </div>

        {/* Right - Content Panel */}
        <div className="p-10 flex flex-col justify-between bg-white">

          {/* Top Section */}
          <div>
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-blue-900 leading-tight">
                HS-BLUE
              </h1>
              <h2 className="text-xl font-semibold text-blue-600 mt-1">
                Litchi Fruit Drink
              </h2>
              <div className="mt-3 w-12 h-1 bg-blue-500 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              HS-BLUE Litchi Fruit Drink ek refreshing beverage hai jo asli litchi ke smooth aur sweet flavor se bana hai. Hygienic packaging aur premium quality ke saath yeh drink har age group ke liye perfect choice hai. Har sip me mile natural freshness aur instant cooling.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                "Rich Litchi Flavor",
                "Ready to Drink",
                "Hygienically Packed",
                "Perfect for Daily Refreshment",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-2.5 border border-blue-100"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-800 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom - Contact Card */}
          <div>
            <div className="bg-blue-700 rounded-2xl p-5 text-white">
              <p className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-3">
                Manufactured & Marketed By
              </p>
              <p className="text-white font-bold text-lg leading-tight">Star Enterprises</p>
              <p className="text-blue-200 text-xs mt-1 mb-4">
                Roorkee – 247667, Haridwar, Uttarakhand
              </p>

              <div className="space-y-2">
                {[
                  {
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.04 21 3 13.96 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                      </svg>
                    ),
                    text: "9286101180",
                  },
                  {
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    ),
                    text: "starenterprises.rk2023@gmail.com",
                  },
                  {
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93V18a1 1 0 00-2 0v1.93A8.001 8.001 0 014.07 13H6a1 1 0 000-2H4.07A8.001 8.001 0 0111 4.07V6a1 1 0 002 0V4.07A8.001 8.001 0 0119.93 11H18a1 1 0 000 2h1.93A8.001 8.001 0 0113 19.93z" />
                      </svg>
                    ),
                    text: "www.adplusaqua.com",
                  },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="text-blue-300">{c.icon}</div>
                    <span className="text-blue-100 text-xs">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <p className="text-center text-blue-400 text-xs italic mt-4 tracking-wide">
              "HS-BLUE – Real Taste, Real Refreshment"
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LitchiDrinkProduct;