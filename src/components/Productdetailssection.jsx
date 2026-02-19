const ProductDetailsSection = () => {
  const sections = [
    {
      icon: "🌿",
      title: "Product Highlights",
      color: "from-blue-600 to-blue-700",
      bgLight: "bg-blue-50",
      border: "border-blue-100",
      dot: "bg-blue-500",
      items: [
        "Natural Litchi Flavor",
        "Refreshing & Delicious Taste",
        "Hygienically Packed",
        "Premium Quality Ingredients",
        "Convenient 175ml Bottle",
      ],
    },
    {
      icon: "🥤",
      title: "Perfect For",
      color: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
      border: "border-blue-100",
      dot: "bg-blue-400",
      items: [
        "Daily Refreshment",
        "Family Gatherings",
        "Parties & Events",
        "Retail & Distribution Supply",
      ],
    },
    {
      icon: "📦",
      title: "Packaging Information",
      color: "from-blue-700 to-blue-800",
      bgLight: "bg-blue-50",
      border: "border-blue-100",
      dot: "bg-blue-600",
      items: [
        "Net Volume: 175ml",
        "Secure & Easy-to-Carry Bottle",
        "Attractive & Eye-Catching Design",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-8 font-sans">
      <div className="max-w-3xl w-full">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            Product Details
          </span>
          <h2 className="text-3xl font-bold text-blue-900">
            Everything You Need to Know
          </h2>
          <p className="text-blue-400 text-sm mt-2">HS-BLUE Litchi Fruit Drink — 175ml</p>
          <div className="mt-4 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-blue-100"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${section.color} px-5 py-4 flex items-center gap-3`}>
                <div className="w-9 h-9 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-xl">
                  {section.icon}
                </div>
                <h3 className="text-white font-bold text-base leading-tight">
                  {section.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1.5 w-2 h-2 rounded-full ${section.dot} flex-shrink-0`} />
                      <span className="text-slate-600 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer accent */}
              <div className={`mx-5 mb-4 h-0.5 rounded-full bg-gradient-to-r ${section.color} opacity-20`} />
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-blue-400 text-xs italic mt-8 tracking-wide">
          "HS-BLUE – Real Taste, Real Refreshment"
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsSection;