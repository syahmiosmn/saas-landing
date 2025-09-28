export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Lee",
      role: "Startup Founder",
      quote:
        "This SaaS transformed the way our team collaborates. We ship faster and stay organized.",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "David Kim",
      role: "Project Manager",
      quote:
        "The analytics dashboard is a game changer. We now make decisions based on real data.",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Maria Gonzalez",
      role: "Freelancer",
      quote:
        "Simple, powerful, and affordable. It’s the best tool I’ve added to my workflow.",
      avatar: "https://i.pravatar.cc/100?img=20",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Users Say</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
