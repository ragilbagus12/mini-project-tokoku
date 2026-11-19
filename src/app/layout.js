import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "TokoKita - Katalog Produk Sederhana",
    template: "%s | TokoKita",
  },
  description: "Proyek latihan Bab 3.7 Next.js Dasar: App Router, pages, layouts, dynamic routes, Server dan Client Components, serta Metadata API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row">
            <p>Latihan Next.js Dasar</p>
            <p>Next.js App Router & Tailwind CSS</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
