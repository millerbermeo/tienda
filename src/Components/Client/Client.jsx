import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { User } from "lucide-react";

const Client = () => {
    const testimoniosTech = [
        {
            id: 1,
            description: 'El equipo entendió perfectamente nuestras necesidades técnicas y entregó un producto escalable y robusto.',
            name: 'Laura Fernández',
            position: 'CTO, TechNova',
        },
        {
            id: 2,
            description: 'Gracias a su solución, mejoramos nuestra velocidad de desarrollo en un 40%. Altamente recomendados.',
            name: 'Carlos Méndez',
            position: 'Líder de Desarrollo, DevSolutions',
        },
        {
            id: 3,
            description: 'Integraron IA en nuestra plataforma sin fricciones. El equipo es ágil y con profundo conocimiento técnico.',
            name: 'Andrea López',
            position: 'CEO, NeuralBit',
        },
        {
            id: 4,
            description: 'Transformaron nuestra arquitectura monolítica a microservicios en tiempo récord.',
            name: 'David Ríos',
            position: 'Arquitecto de Software, CodeSmart',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="lg:container mx-auto px-4">
            <SectionTitle title="Lo que dicen nuestros clientes tecnológicos" mb="mb-11" />

            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {testimoniosTech.map((cliente) => (
                        <div key={cliente.id} className="p-6 sm:p-8 md:p-10 border border-[#e1e1e3] rounded-lg bg-white shadow-sm">
                            <p className="text-lg sm:text-xl text-[#636270] font-inter font-normal mb-4">
                                {cliente.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <User size="3rem" className="min-w-[48px]" />
                                <div>
                                    <h4 className="text-xl text-[#272343] font-inter font-semibold">{cliente.name}</h4>
                                    <p className="text-base text-[#9a9caa] font-inter">{cliente.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Client;
