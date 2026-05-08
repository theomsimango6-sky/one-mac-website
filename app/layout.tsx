export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            ONE M.A.C
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl">
            Building Brands.
            <br />
            Empowering Talent.
            <br />
            Connecting Markets.
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-2xl leading-relaxed">
            ONE M.A.C is a multimedia enterprise operating across entertainment,
            digital media, branding, talent development, and creative strategy.
            We partner with businesses, creators, and innovators to build
            impactful experiences for modern audiences.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Explore Services
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold mb-3">Media Production</h2>

            <p className="text-gray-400 leading-relaxed">
              Professional multimedia production for digital platforms,
              entertainment brands, and commercial campaigns.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold mb-3">Brand Development</h2>

            <p className="text-gray-400 leading-relaxed">
              Strategic branding, identity design, and market positioning for
              modern businesses and creators.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold mb-3">Talent Management</h2>

            <p className="text-gray-400 leading-relaxed">
              Empowering creators, artists, and entrepreneurs through
              partnerships, strategy, and digital growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}