import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
    return (
        <div className="container mx-auto mt-24 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Descuento */}
                <div className="flex items-start gap-4">
                    <Percent size="2.5rem" className="text-sky-600" />
                    <div>
                        <h4 className="text-base text-[#272343] font-semibold mb-1">
                            Descuentos Semanales
                        </h4>
                        <p className="text-sm text-[#9a9caa]">
                            Ofertas tecnológicas cada semana
                        </p>
                    </div>
                </div>

                {/* Envío gratis */}
                <div className="flex items-start gap-4">
                    <Truck size="2.5rem" className="text-sky-600" />
                    <div>
                        <h4 className="text-base text-[#272343] font-semibold mb-1">
                            Envío Gratis
                        </h4>
                        <p className="text-sm text-[#9a9caa]">
                            Sin costo en todos los pedidos
                        </p>
                    </div>
                </div>

                {/* Soporte 24/7 */}
                <div className="flex items-start gap-4">
                    <Clock3 size="2.5rem" className="text-sky-600" />
                    <div>
                        <h4 className="text-base text-[#272343] font-semibold mb-1">
                            Soporte 24/7
                        </h4>
                        <p className="text-sm text-[#9a9caa]">
                            Atención técnica en todo momento
                        </p>
                    </div>
                </div>

                {/* Pago seguro */}
                <div className="flex items-start gap-4">
                    <ShieldCheck size="2.5rem" className="text-sky-600" />
                    <div>
                        <h4 className="text-base text-[#272343] font-semibold mb-1">
                            Pago Seguro
                        </h4>
                        <p className="text-sm text-[#9a9caa]">
                            Transacciones 100% protegidas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
