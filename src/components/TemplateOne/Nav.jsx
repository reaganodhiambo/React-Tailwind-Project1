import menuList from "../../assets/data/menuList";
const Nav = () => {
    return (
        <div className="bg-black py-4">
            <div className='container flex justify-between items-center mx-auto'>
                <div className="logo text-white font-bold text-3xl">
                    HAW<span className="text-green-500">KS</span>
                </div>
                <div className="nav-items text-white flex gap-9 text-xl cursor-pointer ">
                    {menuList.map((item) => (
                        <h2 key={item.id} className='transition-all ease-in-out duration-300 hover:text-green-500'>
                            {item.title}
                        </h2>
                    ))}
                </div>
                <div className="call-to-action text-white">
                    <a href="#" className='border border-green-400 rounded-lg px-4 py-2 text-xl font-bold  hover:border-green-600 '>Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default Nav