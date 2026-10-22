
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-green-50 px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg sm:p-12">
        <div className="mb-5 text-7xl" aria-hidden="true">
          🔍
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-700">
          Error 404
        </p>

        <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          পেজটি পাওয়া যায়নি
        </h1>

        <p className="mb-8 leading-7 text-gray-600">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
          পেজটি সরানো হয়েছে অথবা ঠিকানাটি ভুল হতে পারে।
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}
