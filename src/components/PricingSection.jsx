import { FaBicycle, FaCheck, FaTimes } from "react-icons/fa";

const PricingCard = ({ plan, price, description, features, isRecommended }) => {
  const color = isRecommended
    ? "bg-indigo-500 text-white"
    : "bg-gray-100 text-gray-900";
  const icon = isRecommended ? (
    <FaCheck className="h-6 w-6 text-white" />
  ) : (
    <FaTimes className="h-6 w-6 text-gray-500" />
  );

  return (
    <div
      className={`max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg ${color}`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{plan}</div>
        <div className="text-3xl font-bold mb-4">{price}</div>
        <p className="text-gray-900 leading-tight mb-6">{description}</p>
        <ul className="text-gray-900 leading-tight mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {icon}
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="bg-white text-gray-900 py-2 px-4 rounded-full font-bold hover:bg-gray-200">
          Select Plan
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      plan: "Basic",
      price: "$9.99",
      description: "Get access to all basic features of Bike Mart.",
      features: [
        "Free shipping on all orders",
        "24/7 customer support",
        "10% off on first order",
      ],
      isRecommended: false,
    },
    {
      plan: "Pro",
      price: "$19.99",
      description: "Get access to all pro features of Bike Mart.",
      features: [
        "Free shipping on all orders",
        "24/7 customer support",
        "20% off on first order",
      ],
      isRecommended: true,
    },
    {
      plan: "Premium",
      price: "$29.99",
      description: "Get access to all premium features of Bike Mart.",
      features: [
        "Free shipping on all orders",
        "24/7 customer support",
        "30% off on first order",
      ],
      isRecommended: false,
    },
  ];

  return (
    <section className="p-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose a plan that fits your needs.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
