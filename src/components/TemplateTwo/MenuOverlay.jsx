//change menuList and use it as prop later
const MenuOverlay = () => {
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
        <div className="absolute left-0 min-h-screen backdrop-blur-lg mt-5 w-full text-center pt-20 flex flex-col">
            {menuList.map(item => (
                <h1 key={item.id} className="text-white mb-6 text-4xl font-bold justify-center scale-90 mt-10
                hover:scale-100 transition-all ease-in-out duration-300 cursor-pointer">
                    {item.title}
                </h1>
            ))}
        </div>
    );
}


export default MenuOverlay