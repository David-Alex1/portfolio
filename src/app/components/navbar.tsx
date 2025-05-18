import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row gap-x-3 mt-12">
      <Link className="text-white text-lg hover:text-white/65 transition duration-200" href="/"> home </Link>
      <Link className="text-white text-lg hover:text-white/65 transition duration-200" href="/about"> about </Link>
      <Link className="text-white text-lg hover:text-white/65 transition duration-200" href="/projects"> projects </Link>
    </div>
  );
}
