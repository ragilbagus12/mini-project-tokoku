import { products } from "@/data/product";

export const metadata = {
  title: "Laporan",
  description: "Rekap jumlah produk per kategori.",
};

export default function LaporanPage() {
  const counts = products.reduce((result, product) => {
    result[product.category] = (result[product.category] ?? 0) + 1;
    return result;
  }, {});

  const rows = Object.entries(counts).map(([category, count]) => ({
    category,
    count,
  }));

  const max = Math.max(...rows.map((row) => row.count));

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900">
        Laporan Kategori
      </h1>
      <p className="mt-2 text-slate-600">
        Perhatikan sidebar: layout dashboard tidak dimuat ulang saat kamu
        berpindah dari Ringkasan ke halaman ini.
      </p>

      <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {rows.map((row) => (
          <div key={row.category}>
            <div className="flex items-center justify-between text-sm font-medium text-slate-700">
              <span>{row.category}</span>
              <span>{row.count} produk</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-indigo-500"
                style={{ width: `${(row.count / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
