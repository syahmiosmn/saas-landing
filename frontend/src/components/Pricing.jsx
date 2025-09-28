export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9/mo",
      features: ["Basic features", "Up to 3 projects", "Email support"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: ["Everything in Starter", "Unlimited projects", "Priority support"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Advanced features", "Dedicated account manager", "24/7 support"],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Pricing Plans</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 border rounded-lg shadow-sm hover:shadow-md transition ${
              plan.highlighted ? "border-blue-600 shadow-lg" : ""
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                plan.highlighted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
