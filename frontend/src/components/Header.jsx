export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      <h1 className="text-2xl font-bold text-blue-600">My SaaS</h1>
      <nav className="space-x-6">
        <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
        <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </header>
  );
}
