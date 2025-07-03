import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const Categories = () => {
    const categories = [
        {
            title: "Sillas Gamer",
            products: "3,584 productos",
            image: "https://png.pngtree.com/png-clipart/20241117/original/pngtree-blue-and-black-gaming-chair-clipart-illustration-png-image_17144920.png",
        },
        {
            title: "Auriculares con Micrófono",
            products: "157 productos",
            image: "https://i.pinimg.com/474x/84/f2/0c/84f20cef3dc27353b0ef3bcb6a056ccc.jpg",
        },
        {
            title: "Camara GoPro",
            products: "154 productos",
            image: "https://goprocol.co/wp-content/uploads/2024/09/HERO-1.png",
        },
        {
            title: "Monitores 4K",
            products: "154 productos",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_UfkYZgO3L4J-BXtXMg5jkyiGDHz5ScIvw&s",
        },
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };

    return (
        <section className="w-full py-10">
            <div className="lg:container mx-auto px-4">
                <SectionTitle title="Categorías Principales" mb="mb-8" />

                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <div key={index} className="px-2">
                            <div className="relative rounded-lg overflow-hidden h-[400px] sm:h-[350px]">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-fill rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
                                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 capitalize">
                                        {category.title}
                                    </h4>
                                    <p className="text-sm text-white">{category.products}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Categories;
