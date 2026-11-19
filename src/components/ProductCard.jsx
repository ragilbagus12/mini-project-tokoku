import Link from "next/link";
import { formatRupiah } from "@/data/product";

export default function ProductCard({ product }) {
    return (
        <Link
            href={`/products/${product.slug}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
            <div className={`flex h-40 items-center justify-center bg-linear-to-br ${product.gradient}`}>
                <span className="text-5xl font-black text-white/80">
                    {product.name.charAt(0)}
                </span>
            </div>
            <div className="space-y-2 p-5">
                <span className="inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {product.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
                    {product.name}
                </h3>
                <p className="line-clamp-2 text-sm  leading-relaxed text-slate-500">
                    {product.description}
                </p>
                <p className="pt-1 text-base font-bold text-slate-900">
                    {formatRupiah(product.price)}
                </p>
            </div>
        </Link>
    );
}