    "use client";

import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[var(--werent-green-1)] text-white h-[80vh] md:h-[50vh]">
            <div className="container mx-auto px-6 py-12 bg-[var(--werent-green-1)]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className="relative w-[150px] md:w-[200px]">
                            <Image
                                src="/werent-logo.png"
                                alt="WeRent Logo"
                                width={200}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-center md:text-left text-sm font-medium max-w-xs">
                            We Rent. We Return. We Repeat.
                        </p>
                    </div>

                    {/* Help Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Help</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm hover:text-[var(--werent-figma-page)] transition-colors duration-200 hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm hover:text-[var(--werent-figma-page)] transition-colors duration-200 hover:underline"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Payment Methods */}
                    <div className="text-center bg-[var(--werent-green-1)]">
                        <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                        <div className="flex justify-center space-x-3">
                            <img
                                src="/gopaywhite.png"
                                alt="GoPay"
                                className="w-8 h-8 shadow-md md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                            <img
                                src="/ovowhite.png"
                                alt="OVO"
                                className="w-8 h-8 shadow-md md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                            <img
                                src="/danawhite.png"
                                alt="Dana"
                                className="w-8 h-8 shadow-md md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                            <img
                                src="/visawhite.png"
                                alt="Visa"
                                className="w-8 h-8 shadow-md md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                            <img
                                src="/mastercardwhite.png"
                                alt="Mastercard"
                                className="w-8 h-8 shadow-md md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Connect With Us */}
                    <div className="text-center bg-[var(--werent-green-1)]">
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex justify-center space-x-3">
                            <img
                                src="/facebookwhite.png"
                                alt="Facebook"
                                className="w-8 h-8 shadow-md md:w-8 md:h-8 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                            <img
                                src="/instagramwhite.png"
                                alt="Instagram"
                                className="w-8 h-8 shadow-md md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                            <img
                                src="/tiktokwhite.png"
                                alt="TikTok"
                                className="w-8 h-8 shadow-md md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                            <img
                                src="/xwhite.png"
                                alt="X (Twitter)"
                                className="w-8 h-8 shadow-md md:w-8 md:h-8 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[var(--werent-green-1)] py-4">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-[var(--werent-figma-surface)]">
                        <span>© {year} WeRent. All rights reserved.</span>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="hover:text-[var(--werent-figma-page)] transition-colors duration-200 hover:underline"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="hover:text-[var(--werent-figma-page)] transition-colors duration-200 hover:underline"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-[var(--werent-figma-page)] transition-colors duration-200 hover:underline"
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}