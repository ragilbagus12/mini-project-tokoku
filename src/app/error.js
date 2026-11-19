"use client";

import { useEffect } from "react";

export default function Error({ error, retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
        Terjadi Kesalahan
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
        Ada yang tidak beres
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-slate-600">
        {error?.message || "Silakan coba lagi."}
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-8 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Coba Lagi
      </button>
    </div>
  );
}
