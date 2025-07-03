import { Gamepad2, Banknote, CreditCard, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="footer_top w-full border-t border-b border-[#e1e3e5] pt-20 pb-16">
                <div className="lg:container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div>
                            {/* Logo wrapper */}
                            <div className="logo_wrapper mb-7">
                                <Link to='/' className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2">
                                    <Gamepad2 size='2rem' color="#029fae" /> GamerZone
                                </Link>
                            </div>

                            <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-md">
                                Tu tienda gamer de confianza: sillas, teclados, auriculares y más. ¡Todo para llevar tu setup al siguiente nivel!
                            </p>

                            <div className="footer_social flex items-center gap-3">
                                <Link className="p-3 rounded-full border border-[#007580] inline-block">
                                    <Facebook size='1.5rem' color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Twitter size='1.5rem' color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Instagram size='1.5rem' color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Youtube size='1.5rem' color="#007580" />
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
