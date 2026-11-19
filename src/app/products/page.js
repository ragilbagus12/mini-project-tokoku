import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

export const metadata = {
    title: "Daftar Produk",
    description: "Katalog produk contoh yang dirender oleh Server Component."
};

export default function ProductsPage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-12">
            <h1 className="text-3xl font-extrabold text-slate-900">Daftar Produk</h1>
            <p className="mt-2 text-slate-600">
                {products.length} produk dari data lokal.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                ))}
            </div>
        </div>
    );
}