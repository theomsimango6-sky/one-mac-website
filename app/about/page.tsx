export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-6">
          About ONE M.A.C
        </p>

        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-10">
          A Modern Multimedia
          <br />
          Enterprise Built For
          <br />
          The Digital Era.
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              ONE M.A.C is a multimedia enterprise focused on empowering brands,
              creators, entrepreneurs, and entertainment platforms through
              innovation, strategy, and creative execution.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              We operate at the intersection of media, branding, digital
              culture, talent development, and business growth — helping modern
              businesses establish meaningful connections with global audiences.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Our Focus</h2>

            <ul className="space-y-4 text-gray-300">
              <li>• Multimedia Production</li>
              <li>• Brand Strategy & Identity</li>
              <li>• Talent Development</li>
              <li>• Digital Marketing</li>
              <li>• Creative Partnerships</li>
              <li>• Entertainment & Media Solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
