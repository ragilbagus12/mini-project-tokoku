"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">Nilai saat ini</p>
            <p className="mt-1 text-4xl font-extrabold text-slate-900">
                {count}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => setCount(count - 1)}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                    Kurangi
                    </button>
                <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                    Tambah
                </button>
                <button
                    type="button"
                    onClick={() => setCount(0)}
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-200"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}