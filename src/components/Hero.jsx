/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
            <div className="pb-10 gap-6 grid">
                <p className="text-white text-2xl ">Hello There, Welcome to My Site</p>
                <h2 className="text-white text-5xl font-bold">I'm Fadhelah,</h2>
                <p className="text-red-500 text-5xl font-bold">A Full Stack Developer</p>
                <p className="text-white text-5xl font-bold">& A rollball player</p>
                <div className="mt-4 flex gap-4 pt-10">
                    <button className="text-white text-2xl px-3 pb-2 py-2 bg-red-500 rounded-full hover:border-white border-[1px]">
                        PORTFOLIO
                    </button>
                    <button className="text-white text-2xl px-3 pb-2 py-2 bg-red-500 rounded-full">
                        CONTACT ME
                    </button>
                </div>
            </div>
            <div className="lg:h-[720px] lg:w-[720px]">
                <img src="src/assets/images/eddy1.png" alt="" className="rounded-full"/>
            </div>
        </div>
    );
}

export default Hero