export default function Footer() {
  return (
    <footer className="p-6 bg-gray-100 text-center text-gray-500">
      © {new Date().getFullYear()} My SaaS. All rights reserved.
    </footer>
  );
}
