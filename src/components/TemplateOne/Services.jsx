const Services = () => {
    return (
        <div className="pt-10 min-h-screen bg-gray-50">
            <div className="container gap-6 flex flex-col md:flex-row mx-auto justify-between items-center">
                <div className="imgs w-1/2">
                    <img src="src/assets/images/dailywebdesign-23-04-2023-0001.jpg" alt="" />
                </div>
                <div className="services w-1/2">
                    <h2 className="text-green-500 text-2xl md:text-3xl pb-6 md:pb-10">
                        SERVICES
                    </h2>
                    <h1 className="text-3xl md:text-6xl font-bold pb-6 md:pb-10">
                        Easily Control Your Billing <br /> and Invoicing.
                    </h1>
                    <p className="md:text-xl pb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci nemo autem, in dicta porro dolore nisi esse. Nobis, omnis quos consequatur minus perspiciatis nulla voluptas itaque quo modi laborum.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <h3 className="text-2xl font-bold">ONe</h3>
                        <h3 className="text-2xl font-bold">Twp</h3>
                        <h3 className="text-2xl font-bold">Trhee</h3>
                        <h3 className="text-2xl font-bold">Four</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services