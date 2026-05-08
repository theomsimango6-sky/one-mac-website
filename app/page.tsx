import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">ONE M.A.C</h1>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-8 py-24 md:px-20 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Building Brands.
            <br />
            Empowering Talent.
            <br />
            Connecting Markets.
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl leading-8 mb-10">
            ONE M.A.C is a multimedia enterprise focused on creators,
            entrepreneurs, entertainment innovation, strategy, branding,
            and digital experiences for modern audiences.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/services"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-12">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Media Production</h3>
            <p className="text-gray-400 leading-7">
              Professional multimedia production for digital platforms,
              campaigns, and branded storytelling.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Brand Development</h3>
            <p className="text-gray-400 leading-7">
              Strategic branding, identity design, and market positioning for
              modern businesses.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Talent Management</h3>
            <p className="text-gray-400 leading-7">
              Empowering creators, artists, and entrepreneurs through
              development and visibility.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-8 md:px-20 py-10 text-gray-400">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">ONE M.A.C</h3>
            <p>Multimedia. Strategy. Innovation.</p>
          </div>

          <div className="flex gap-6">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}