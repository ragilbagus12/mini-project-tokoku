import Link from "next/link";
import { notFound } from "next/navigation";
import { formatRupiah, getProduct, products } from "@/data/product";

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        return { title: "Produk Tidak Ditemukan" };
    }
    return {
        title: product.name,
        description: product.description,
    };
}

export default async function ProductDetailPage({ params }) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-5xl px-4 py-12">
            <Link
                href="/products"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
                Kembali ke daftar produk
            </Link>
            <div className="mt-6 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
                <div className={`flex min-h-64 items-center justify-center rounded-2xl bg-linear-to-br ${product.gradient}`}>
                    <span className="text-7xl font-black text-white/80">
                        {product.name.charAt(0)}
                    </span>
                </div>

                <div>
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {product.category}
                    </span>
                    <h1 className="mt-4 text-3xl font-extrabold text-slate-900">
                        {product.name}
                    </h1>
                    <p className="mt-3 leading-relaxed text-slate-600">
                        {product.description}
                    </p>
                    <p className="mt-6 text-3xl font-black text-indigo-600">
                        {formatRupiah(product.price)}
                    </p>

                    <div className="mt-8 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
                        URL ini dibuat dari dynamic route{" "}
                        <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs text-slate-800">
                            [slug]
                        </code>{" "}
                        dengan nilai <strong>{slug}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}