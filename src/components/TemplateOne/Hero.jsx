import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
    return (
        <div className="bg-white min-h-screen w-full pt-10">
            <div className="container flex mx-auto justify-between items-center">
                <div className="hero w-1/2">
                    <h2 className="text-green-500 text-3xl pb-10">
                        SMART PAYMENTS
                    </h2>
                    <h1 className="text-6xl font-bold pb-10">
                        The Next Generation <br /> Payment <span className="text-green-500">Method</span>
                    </h1>
                    <p className="pb-10 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam assumenda consectetur
                        aliquam eligendi quasi similique inventore tempore suscipit quas.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex mx-auto pt-10 gap-6">
                        <button className=" text-xl w-1/3 bg-green-500 py-5 text-center text-white font-bold rounded-lg hover:bg-green-700  transition-all ease-in-out duration-300">
                            Get Started
                        </button>
                        <button className=" text-xl w-1/3 py-5 text-center rounded-lg outline-1 border border-green-500 text-green-500 hover:text-green-700 hover:border-green-700 transition-all ease-in-out duration-300">
                            Watch Video<FontAwesomeIcon icon={faPlay} className="pl-3"/>
                        </button>
                    </div>
                </div>
                <div className="flex w-1/2 gap-2">

                <div className="lg:h-[720px] lg:w-[720px] flex flex-col gap-2">
                    <img src="src/assets/images/dailywebdesign-04-04-2023-0003.jpg" alt="" className="w-full transition-all ease-in-out duration-300 rounded-xl hover:scale-110 hover:overflow-hidden h-3/4 aspect-square" />
                    <img src="src/assets/images/dailywebdesign-23-04-2023-0001.jpg" alt="" className="transition-all ease-in-out duration-300 rounded-xl hover:scale-110 hover:overflow-hidden h-1/4 aspect-video" />
                </div>
                <div className="lg:h-[720px] lg:w-[720px] flex flex-col gap-2">
                    <img src="src/assets/images/makereign-24-04-2023-0001.jpg" alt="" className="transition-all ease-in-out duration-300 rounded-xl hover:scale-110 overflow-hidden aspect-video h-1/3 " />
                    <img src="src/assets/images/makereign-24-04-2023-0002.jpg" alt="" className="transition-all ease-in-out duration-300 rounded-xl hover:scale-110 overflow-hidden aspect-square h-2/3 " />
                </div>
    
                </div>
            </div>
        </div>
    );
}

export default Hero