const C = {
    deepGreen: "#102015",
    midGreen: "#1f4f38",
    sage: "#7ca375",
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)",
    purple: "#8B5CF6",
    pink: "#EC4899",
    yellow: "#F59E0B",
    cream: "#F5EDD8",
};

const stats = [
    { num: "500+", label: "Animals Listed" },
    { num: "64", label: "Districts" },
    { num: "98%", label: "Satisfied Buyers" },
];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white text-gray-900">

            <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div className="relative z-10">
                        <span
                            className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-sm shadow-purple-200/40"
                            style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)" }}
                        >
                            Eid ul-Adha 2025 · Now Booking
                        </span>

                        <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-6xl">
                            Your <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent italic">Qurbani </span>, simplified <br className="hidden lg:block" />
                            & trusted for every family.
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                            Browse premium cows, goats, and sheep from verified sellers across Bangladesh. Transparent pricing, trusted livestock, and doorstep delivery made easy.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="/all-animals"
                                className="inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white transition hover:brightness-95 sm:w-auto"
                                style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                            >
                                Browse Animals
                            </a>
                            
                        </div>

                        <div className="mt-12 grid gap-4 sm:grid-cols-3">
                            {stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-3xl border border-gray-200 bg-gray-50 px-5 py-6 shadow-sm"
                                >
                                    <p className="text-3xl font-semibold bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">{item.num}</p>
                                    <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-500">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 mx-auto flex max-w-xl flex-col gap-6 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-lg">
                        <div className="flex items-center justify-between rounded-3xl bg-gray-50 p-4 border border-gray-300">
                            <div>
                                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Featured livestock</p>
                                <p className="mt-2 text-2xl font-semibold text-gray-900">Premium Grass-Fed Cow</p>
                            </div>
                            <div className="rounded-3xl px-4 py-2 text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}>Top seller</div>
                        </div>
                        <div className="rounded-[1.75rem] bg-gray-50 p-6 border border-gray-300">
                            <p className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">Market price</p>
                            <p className="mt-3 text-4xl font-semibold text-gray-900">৳ 85,000</p>
                            <p className="mt-4 text-sm leading-6 text-gray-600">
                                Verified cow choice with health checks included, live weight estimates, and doorstep delivery scheduling.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-gray-50 p-5 border border-gray-300">
                                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Seller</p>
                                <p className="mt-2 text-lg font-semibold text-gray-900">Bangla Livestock</p>
                            </div>
                            <div className="rounded-3xl bg-gray-50 p-5 border border-gray-300">
                                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Delivery</p>
                                <p className="mt-2 text-lg font-semibold text-gray-900">7-10 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}