import {faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () => {
    return (
        <div className="min-h-screen w-full md:py-12 py-6">
            <div className="container flex flex-col md:flex-row mx-auto justify-between items-center">
                <div className="features md:w-1/2">
                    <h2 className="text-2xl md:text-3xl text-green-500 pb-10">
                        FEATURES
                    </h2>
                    <h1 className="font-bold text-3xl md:text-6xl pb-10">
                        You Do the Business, <br />
                        Well Handle the Money.
                    </h1>
                    <p className="md:text-xl pb-10">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id est labore accusantium nesciunt dicta iste cumque! Rem minus, magni eius ullam beatae consequatur earum dolores! Amet hic sint obcaecati quia.
                    </p>
                    <a href="#" className="text-green-500 md:text-xl">
                        Learn more about monitoring <FontAwesomeIcon icon={faArrowRightLong} className="pl-2"/>
                    </a>
                </div>
                <div className="imgs w-full md:w-1/2">
                    <img src="src/assets/images/makereign-24-04-2023-0001.jpg" alt="" className="border rounded-xl" />
                </div>
            </div>
        </div>
    );
}

export default Features