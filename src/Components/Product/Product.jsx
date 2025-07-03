import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        product: 'newest'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all'
        },
        {
            id: 1,
            title: "1",
            product: 'newest'
        },
        {
            id: 2,
            title: "2",
            product: 'trending'
        },
        {
            id: 3,
            title: "3",
            product: 'best_seller'
        },
    ];


    const products = [
        {
            title: 'Silla Gamer Pro',
            status: 'Nuevo',
            price: '$250',
            currentPrice: '$200',
            image: 'https://http2.mlstatic.com/D_NQ_NP_759037-MCO79200968363_092024-O.webp',
            product: 'newest',
        },
        {
            title: 'Auriculares Trust Gaming',
            status: 'Oferta',
            price: '$180',
            image: 'https://www.hd-tecnologia.com/imagenes/articulos/2020/03/Complementa-tu-experiencia-gamer-con-los-productos-de-Trust-Gaming.jpg',
            product: 'newest',
        },
        {
            title: 'Monitor 27" 4K',
            status: 'Nuevo',
            price: '$300',
            currentPrice: '$250',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7VK2cOE9-YK9LM8HeuhIc8DDaJ-k6jngqg&s',
            product: 'newest',
        },
        {
            title: 'Teclado Mecánico RGB',
            status: 'Oferta',
            price: '$120',
            image: 'https://media.falabella.com/sodimacCO/637971/public',
            product: 'newest',
        },
        // Puedes duplicar los productos o cambiar su categoría como desees:
        {
            title: 'Auriculares Trust Gaming',
            status: 'Oferta',
            price: '$180',
            image: 'https://www.hd-tecnologia.com/imagenes/articulos/2020/03/Complementa-tu-experiencia-gamer-con-los-productos-de-Trust-Gaming.jpg',
            product: 'trending',
        },
        {
            title: 'Silla Gamer Pro',
            status: 'Nuevo',
            price: '$250',
            currentPrice: '$200',
            image: 'https://http2.mlstatic.com/D_NQ_NP_759037-MCO79200968363_092024-O.webp',
            product: 'trending',
        },
        {
            title: 'Teclado Mecánico RGB',
            status: 'Oferta',
            price: '$120',
            image: 'https://media.falabella.com/sodimacCO/637971/public',
            product: 'best_seller',
        },
        {
            title: 'Monitor 27" 4K',
            status: 'Nuevo',
            price: '$300',
            currentPrice: '$250',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7VK2cOE9-YK9LM8HeuhIc8DDaJ-k6jngqg&s',
            product: 'featured',
        },
        // Puedes seguir agregando más productos con estas URLs
    ];


    const productFilter = products.filter(product => product.product === active?.product);
    console.log(productFilter);


    return (
        <div className="lg:container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'Nuestros Productos'} textAlign={'center'} mb={'mb-5'}></SectionTitle>


                <div className="flex items-center justify-center gap-6 mb-11">
                    {
                        productTitle?.map((title, indx) => (
                            <button key={title?.id}

                                onClick={() => setActive({
                                    id: title?.id,
                                    product: title?.product
                                })}
                                className={`text-base font-black uppercase font-inter cursor-pointer ${active?.id === indx ? 'text-[#272343]' : 'text-[#9a9caa]'
                                    }`}>
                                {title?.title}
                            </button>
                        ))
                    }
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6">
                {

                    productFilter?.map((product, index) => (
                        <div key={index} className="p-4">
                            <div className="feature_image mb-4 relative">
                                <img className="w-full max-h-[312px] rounded-lg object-cover" src={product?.image} alt={product?.title} />
                                {
                                    product?.status && (
                                        <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                            <button className="text-sm font-inter font-normal">{product?.status}</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="feature_content">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{product?.title}</h4>
                                    <span className="bg-sky-500 h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff" /></span>
                                </div>
                                <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                                    {product?.price}
                                    {
                                        product?.currentPrice && (
                                            <span className="text-sm text-[#9a9caa] font-inter font-normal">{product?.currentPrice}</span>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;