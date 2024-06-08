const Newsletter = () => {
    return (
        <div>
            <div className="container text-center w-1/2 mx-auto min-h-[400px] flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl text-center py-6">
                    Subscribe to our Newsletter
                </h1>
                <p className="text-xl py-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias labore repudiandae fuga maxime cupiditate. Nostrum sunt rerum maiores totam reprehenderit ullam neque facilis in necessitatibus dolor laudantium, vel aperiam voluptatibus.
                </p>
                <div className="flex py-6">
                <input type="email" name="email" id="email" placeholder="blackhawks@gmail.com" className="text-xl border border-green-500 outline-1 py-2 px-6"/>
                <button type="submit" className="bg-green-500 text-white px-4 text-xl hover:bg-green-700">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter