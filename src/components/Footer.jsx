import menuList from "../assets/data/menuList";
const Footer = () => {

    return (
        <div className="bg-black">
            <div className="container flex justify-between mx-auto min-h-96 pt-10">
                <div className="logo text-white font-bold text-3xl w-1/4 ">
                    <h1>
                        HAW<span className="text-green-500">KS</span>
                    </h1>
                    <p className="text-xl pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio alias animi, enim expedita deleniti.
                    </p>
                    <p className="text-xl pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio alias animi, enim expedita deleniti.
                    </p>
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-white">
                        QuickLinks
                    </h1>
                    <ul className="ml-4">
                        {menuList.map((item) => (
                            <li key={item.id} className="text-white text-xl py-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-green-500">
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/4 items-center">
                    <h1 className="text-3xl font-bold text-white">
                        Resources
                    </h1>
                    <ul className="ml-2">
                        {menuList.map((item) => (
                            <li key={item.id} className="text-white text-xl py-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-green-500">
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-white">
                        About
                    </h1>
                    <ul className="ml-2">
                        {menuList.map((item) => (
                            <li key={item.id} className="text-white text-xl py-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-green-500">
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="copy text-gray-300 text-center py-4 text-lg">
                add copyright later @ 2024
            </div>
        </div>
    );
}

export default Footer