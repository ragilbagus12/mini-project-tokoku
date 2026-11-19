import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
        Error 404
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-slate-600">
        Alamat yang kamu buka tidak tersedia. Mungkin produk sudah dihapus atau
        URL-nya salah ketik.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
