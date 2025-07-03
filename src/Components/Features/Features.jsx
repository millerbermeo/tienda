import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {
    const features = [
        {
            title: "Setup Gamer Trust",
            status: "Nuevo",
            price: "$250",
            currentPrice: "$200",
            image: "https://www.hd-tecnologia.com/imagenes/articulos/2020/03/Complementa-tu-experiencia-gamer-con-los-productos-de-Trust-Gaming.jpg",
        },
        {
            title: "combo 2 mouses gamer",
            status: "Oferta",
            price: "$320",
            image: "https://media.falabella.com/sodimacCO/637971/public",
        },
        {
            title: "combo mouse y teclado",
            price: "$120",
            image: "https://http2.mlstatic.com/D_NQ_NP_759037-MCO79200968363_092024-O.webp",
        },
        {
            title: "Teclado Mecánico Retroiluminado",
            status: "Nuevo",
            price: "$150",
            currentPrice: "$130",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7VK2cOE9-YK9LM8HeuhIc8DDaJ-k6jngqg&s",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Móviles
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto px-4">
            <SectionTitle title="Productos Destacados" mb="mb-8" />

            <div className="slider-container w-[350px]">
                <Slider {...settings}>
                    {features.map((feature, index) => (
                        <div key={index} className="p-3">
                            <div className="bg-white rounded-xl shadow-md p-4 h-full">
                                {/* Imagen del producto */}
                                <div className="relative mb-4">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-48 object-contain rounded-lg"
                                    />
                                    {feature.status && (
                                        <div className="absolute top-2 left-2 bg-[#007580] text-white text-xs px-2 py-1 rounded-lg">
                                            {feature.status}
                                        </div>
                                    )}
                                </div>

                                {/* Contenido */}
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-[#007580] text-base font-medium">
                                        {feature.title}
                                    </h4>
                                    <span className="bg-sky-600 h-10 w-10 rounded-lg flex items-center justify-center">
                                        <ShoppingCart size="1.3rem" color="#fff" />
                                    </span>
                                </div>

                                <div className="text-[#272343] text-lg font-semibold">
                                    {feature.price}
                                    {feature.currentPrice && (
                                        <span className="ml-2 text-sm text-[#9a9caa] line-through font-normal">
                                            {feature.currentPrice}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Features;
