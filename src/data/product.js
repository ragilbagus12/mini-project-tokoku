export const products = [
    {
        slug: "kopi-arabika",
        name: "Kopi Arabika Gayo",
        category: "Minuman",
        price: 45000,
        description: "Biji kopi arabika dari dataran tinggi Gayo dengan aroma kuat dan rasa yang seimbang.",
        gradient: "from-amber-400 to-orange-600",
    },
    {
        slug: "teh-melati",
        name: "Teh Melati Premium",
        category: "Minuman",
        price: 25000,
        description:
        "Teh hijau dengan campuran bunga melati pilihan, cocok diseduh hangat maupun dingin.",
        gradient: "from-emerald-400 to-teal-600",
    },
    {
        slug: "roti-gandum",
        name: "Roti Gandum Utuh",
        category: "Makanan",
        price: 30000,
        description:
        "Roti tawar berbahan gandum utuh tanpa pengawet, cocok untuk sarapan sehari-hari.",
        gradient: "from-yellow-400 to-amber-600",
    },  
    {
        slug: "madu-hutan",
        name: "Madu Hutan Murni",
        category: "Makanan",
        price: 85000,
        description:
        "Madu alami dari hutan tropis tanpa campuran gula, dikemas dalam botol kaca 500 ml.",
        gradient: "from-orange-400 to-red-500",
    },  
    {
        slug: "sabun-organik",
        name: "Sabun Organik Lavender",
        category: "Perawatan",
        price: 35000,
        description:
        "Sabun batang berbahan minyak kelapa dan lavender, lembut untuk kulit sensitif.",
        gradient: "from-sky-400 to-indigo-500",
    },  
    {
        slug: "tas-kanvas",
        name: "Tas Kanvas Serbaguna",
        category: "Aksesori",
        price: 120000,
        description:
        "Tas kanvas tebal dengan jahitan kuat, muat laptop 14 inci dan perlengkapan harian.",
        gradient: "from-slate-400 to-slate-600",
    },  
];

export function getProduct(slug) {
    return products.find((product) => product.slug === slug);
}

export function formatRupiah(value) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(value);
}