import {
  FaHeart,
  FaCreditCard,
  FaBook,
  FaShoppingCart,
  FaBuilding,
  FaPlane,
  FaHotdog,
  FaMicrochip,
} from "react-icons/fa";
export default function Services() {
  const services = [
    { name: "Healthcare", icon: FaHeart, color: "from-red-500 to-pink-500" },
    { name: "Finance", icon: FaCreditCard, color: "from-blue-500 to-cyan-500" },
    { name: "Education", icon: FaBook, color: "from-purple-500 to-pink-500" },
    {
      name: "E-commerce",
      icon: FaShoppingCart,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Real Estate",
      icon: FaBuilding,
      color: "from-orange-500 to-red-500",
    },
    { name: "Travel", icon: FaPlane, color: "from-sky-500 to-blue-500" },
    {
      name: "Entertainment",
      icon: FaHotdog,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Technology",
      icon: FaMicrochip,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver innovative solutions across diverse industries, helping
            businesses transform their digital presence and achieve their goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group h-full rounded-xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon Container */}
                <div
                  className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={32} stroke={2} />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.name}
                </h3>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-transparent mb-3 group-hover:from-blue-500 transition-colors duration-300"></div>

                {/* Description Placeholder */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  Custom solutions tailored to your industry needs and business
                  objectives.
                </p>

                {/* Arrow Icon */}
                <div className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
