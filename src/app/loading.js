export default function Loading() {
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-24">
      <div className="flex items-center gap-3 text-slate-500">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-indigo-600" />
        <span>Memuat halaman...</span>
      </div>
    </div>
  );
}
