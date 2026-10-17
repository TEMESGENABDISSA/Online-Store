export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <main className="text-center px-4">
        <h1 className="text-5xl font-bold text-amber-900 mb-4">
          Ethiopian Coffee Store
        </h1>
        <p className="text-xl text-amber-800 mb-8">
          Premium Ethiopian coffee delivered to your door
        </p>
        <a
          href="/products"
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
        >
          Browse Products
        </a>
      </main>
    </div>
  );
}
