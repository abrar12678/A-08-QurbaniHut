const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-slate-50 text-gray-700">
            <div className="container mx-auto px-6 py-12 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-3">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">About QurbaniHut</p>
                        <h2 className="mt-4 text-2xl font-semibold text-gray-900">Trusted Livestock Booking</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            QurbaniHut connects families with verified livestock sellers across Bangladesh for a smooth and transparent Eid-ul-Adha booking experience.
                            Discover healthy cows, goats, and more with clear pricing, seller details, and reliable delivery support.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Contact Info</p>
                        <div className="mt-4 space-y-3 text-sm text-gray-700">
                            <p>
                                <span className="font-semibold text-gray-900">Email:</span> support@qurbanihut.com
                            </p>
                            <p>
                                <span className="font-semibold text-gray-900">Phone:</span> +880 1234 567890
                            </p>
                            <p>
                                <span className="font-semibold text-gray-900">Address:</span> 42 Market Road, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Social Links</p>
                        <div className="mt-4 space-y-4">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-transparent hover:shadow-sm hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:via-[#EC4899] hover:to-[#F59E0B] hover:text-white"
                            >
                                <span>📘</span>
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-transparent hover:shadow-sm hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:via-[#EC4899] hover:to-[#F59E0B] hover:text-white"
                            >
                                <span>📸</span>
                                Instagram
                            </a>
                            <a
                                href="https://wa.me/8801234567890"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-transparent hover:shadow-sm hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:via-[#EC4899] hover:to-[#F59E0B] hover:text-white"
                            >
                                <span>💬</span>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} QurbaniHut. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
