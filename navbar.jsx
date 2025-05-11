import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 mb-8 flex justify-center space-x-6 rounded-b-xl shadow">
      <Link href="/" className="font-semibold text-[#2C4251] hover:underline">Home</Link>
      <Link href="/contatti" className="font-semibold text-[#2C4251] hover:underline">Contatti</Link>
      <Link href="/questionario" className="font-semibold text-[#2C4251] hover:underline">Questionario AI</Link>
    </nav>
  );
}