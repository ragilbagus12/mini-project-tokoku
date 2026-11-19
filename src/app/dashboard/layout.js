import DashboardNav from "@/components/DashboardNav";

export default function DashboardLayout({ children }) {
    return (
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row">
            <DashboardNav />
            <section className="min-w-0 flex-1">{children}</section>
        </div>
    );
}