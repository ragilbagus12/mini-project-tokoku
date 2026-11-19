import Link from "next/link";
import { formatRupiah, products } from "@/data/product";

export const metadata = {
  title: "Dashboard",
  description: "Ringkasan data produk pada halaman dashboard.",
};

export default function DashboardPage() {
  const categories = new Set(products.map((product) => product.category));
  const averagePrice = Math.round(
    products.reduce((total, product) => total + product.price, 0) /
      products.length
  );

  const stats = [
    { label: "Total Produk", value: products.length },
    { label: "Kategori", value: categories.size },
    { label: "Harga Rata-rata", value: formatRupiah(averagePrice) },
  ];

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900">Ringkasan</h1>
      <p className="mt-2 text-slate-600">
        Halaman ini berada di dalam layout dashboard yang sama dengan halaman
        laporan.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-extrabold text-slate-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-lg text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3 font-semibold">Produk</th>
              <th className="px-5 py-3 font-semibold">Kategori</th>
              <th className="px-5 py-3 text-right font-semibold">Harga</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.slug} className="hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-slate-900">
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-indigo-600"
                  >
                    {product.name}
                  </Link>
                </td>
                <td className="px-5 py-4 text-slate-600">{product.category}</td>
                <td className="px-5 py-4 text-right text-slate-600">
                  {formatRupiah(product.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
