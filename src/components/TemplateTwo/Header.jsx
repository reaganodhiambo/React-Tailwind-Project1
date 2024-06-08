import { useState } from "react";
import MenuOverlay from "./MenuOverlay";


const Header = () => {
    const [toggle, setToggle] = useState(false);

    const menuList = [
        {
            id: 1,
            title: 'Home'
        },
        {
            id: 2,
            title: 'About'
        },
        {
            id: 3,
            title: 'Services'
        },
        {
            id: 4,
            title: 'Portfolio'
        },
        {
            id: 5,
            title: 'Contact'
        },
    ];
    return (
        <>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-5xl text-teal-600">Mr<span className="text-red-500">Dev</span></h2>
                </div>
                <div className="hidden lg:flex gap-6 items-center">
                    {menuList.map((item) => (
                        <h2 key={item.id} className="text-2xl text-teal-400 hover:border border-teal-600 rounded-full px-3 py-1 cursor-pointer">
                            {item.title}
                        </h2>
                    ))}
                </div>
                <div className="lg:hidden">
                    {!toggle ? <p onClick={() => setToggle(!toggle)} className="text-white font-bold text-3xl cursor-pointer">Menu</p>
                        : <p onClick={() => setToggle(!toggle)} className="text-white font-bold text-3xl cursor-pointer">X</p>}
                    {toggle ? <MenuOverlay menuList = {menuList} /> :null}
                </div>
            </div>
        </>
    );
}

export default Header