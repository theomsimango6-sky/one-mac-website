import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ONE M.A.C",
  description: "Multimedia Enterprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="border-b border-zinc-800">
          <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-black tracking-wide"
            >
              ONE M.A.C
            </Link>

            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-gray-400 transition">
                Home
              </Link>

              <Link href="/about" className="hover:text-gray-400 transition">
                About
              </Link>

              <Link href="/services" className="hover:text-gray-400 transition">
                Services
              </Link>

              <Link href="/brands" className="hover:text-gray-400 transition">
                Brands
              </Link>

              <Link href="/contact" className="hover:text-gray-400 transition">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}