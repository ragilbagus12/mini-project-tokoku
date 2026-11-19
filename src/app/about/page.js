export const metadata = {
    title: "Tentang",
    description: "Tujuan dan cakupan proyek latihan Next.js Dasar pada Learning Plant Front-end",
};

const highlights = [
    {
        title: "App Router",
        text: "Routing berbasis folder app/ dengan page.js dan layout.js",
    },
    {
        title: "Server dan Client Components",
        text: "Render data di server, tambahkan interaktivitas hanya saat diperlukan",
    },
    {
        title: " Metadata API",
        text: "Judul dan deskripsi halaman diatur dari Server Component."
    },
];

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Tentang
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Mini Project Latihan Next.js
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                TokoKita dibuat sebagai latihan penerapan Next.js Dasar. Semua data produk disimpan secara lokal agar fokus pembelajaran tetap pada routing, layout, komponen, dan metadata.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {highlights.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                            <h2 className="font-semibold text-slate-900">{item.title}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}