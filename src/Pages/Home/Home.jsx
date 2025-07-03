import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Categories from "../../Components/Categories/Categories";
import Client from "../../Components/Client/Client";
import Product from "../../Components/Product/Product";
import Recent from "../../Components/Recent/Recent";
import Delivery from './../../Components/Delivery/Delivery';
import Features from './../../Components/Features/Features';

const Home = () => {
    return (
        <div className="w-full overflow-x-hidden">



            {/* banner component  */}
            <div className="w-full  bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">

                <Banner></Banner>
            </div>

            {/* delivery component */}
            <div className="delivery_component w-full min-h-[#150px]">
                <Delivery></Delivery>
            </div>


            {/* brand component 
            <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
                <Brand></Brand>
            </div> */}

            {/* features component */}
            <div className="w-full flex mt-10 items-center justify-center mb-[80px]">
                <Features></Features>
            </div>

            {/* features component */}
            <div className="w-full flex items-center justify-center mb-[80px]">
                <Categories></Categories>
            </div>

            {/* product component  */}
            <div className="w-full flex items-center justify-center pb-[80px]">
                <Product></Product>
            </div>





        </div>
    );
};

export default Home;