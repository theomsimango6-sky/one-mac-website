export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-10 py-20">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-6">Our Brands</h1>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          ONE M.A.C operates a growing portfolio of brands across media,
          entertainment, and digital innovation. Each brand is built with
          purpose, strategy, and scalability in mind.
        </p>

        {/* BRANDS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Brand One</h2>
            <p className="text-gray-600 text-sm">
              A creative media brand focused on storytelling, content creation,
              and digital influence.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Brand Two</h2>
            <p className="text-gray-600 text-sm">
              A business-driven platform designed to connect entrepreneurs
              and opportunities.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Brand Three</h2>
            <p className="text-gray-600 text-sm">
              A technology-focused brand delivering innovative digital solutions.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}