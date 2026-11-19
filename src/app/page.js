import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Counter from "@/components/Counter";
import { products } from "@/data/product";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-600">
            Next.js Dasar - TokoKita
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Mini Project Next.js TokoKita
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            Proyek ini memakai App Router, layout bersarang, dynamic route. Server dan Client Components, Link, serta Metadata API.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Lihat Produk
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Tentang Proyek
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Produk Pilihan</h2>
            <p className="mt-1 text-sm text-slate-500">
              Tiga produk pertama dari data lokal.
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Lihat semua produk
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-6 rounded-3xl border border-slate-200 p-6 shadow-sm bg-white sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Server Component + Client Component
            </h2>
            <p className="mt-2 leading-relaxed text-slate-600">
              Halaman ini adalah Server Component. Komponen penghitung di samping
              adalah Client Component karena memakai state dan event handler.
            </p>
          </div>
          <Counter />
        </div>
      </section>
    </div>
  );
}