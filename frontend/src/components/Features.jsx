export default function Features() {
  const features = [
    {
      title: "Collaboration",
      description: "Work with your team in real-time with shared projects and tasks.",
      icon: "🤝",
    },
    {
      title: "Automation",
      description: "Save time with automated workflows and smart task assignments.",
      icon: "⚡",
    },
    {
      title: "Analytics",
      description: "Track progress with detailed reports and performance insights.",
      icon: "📊",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        Powerful Features for Modern Teams
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
