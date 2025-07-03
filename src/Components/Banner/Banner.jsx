
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";

const Banner = () => {

    const products = [
        {
            id: 1,
            title: "Tecnología de Última Generación",
            subTitle: "Explora nuestros productos más innovadores",
            image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/computex-2024-new-rtx-ai-laptops/asus-proart-p16.png"
        },
        {
            id: 2,
            title: "Soluciones Inteligentes para el Futuro",
            subTitle: "Potencia tu productividad con estilo",
            image: "https://tauretcomputadores.com/images/products/Product_202408091544141066502461.tarjeta-perfil-png.webp"
        },
        {
            id: 3,
            title: "Diseño y Rendimiento en Uno",
            subTitle: "Equipos que transforman tu día a día",
            image: "https://static.vecteezy.com/system/resources/previews/048/412/788/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png"
        }
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="scale- container">
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        products?.map((product) => (
                            <div key={product?.id} className="banner_slide_item flex flex-wrap gap-50 scale-90 ">

                                {/* banner text  */}
                                <div className="banner_text">
                                    <p className="text-sm font-inter text-[#272343] uppercase font-normal">{product?.subTitle}</p>
                                    <h3 className="text-6xl text-[#272343] font-inter capitalize leading-16 max-w-[631px] w-full font-bold mb-5">{product?.title}</h3>
                                    <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-sky-600 rounded-lg capitalize text-white cursor-pointer">shop now <MoveRight /></button>
                                </div>


                                {/* banner image  */}
                                <div className="  h-[200px] flex items-center justify-end  lg:w-[30%]">
                                    <img src={product?.image} alt={product?.title} />
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Banner;