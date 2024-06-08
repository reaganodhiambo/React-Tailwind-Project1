const Register = () => {
    return (
        <div className="min-h-screen main">
            <div className="container mx-auto py-40">
                <div className=" flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className="image w-full lg:w-1/2 flex flex-col items-center p-12 bg-no-repeat bg-cover ">
                        <h1 className='text-white text-3xl mb-3'>Welcome</h1>
                        <div>
                            <p className="text-white">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eos molestiae ex ipsum perferendis molestias.
                            </p>
                        </div>
                    </div>
                    <div className="content w-full lg:w-1/2 py-16 px-12">
                        <h1 className='text-3xl mb-4'>Register</h1>
                        <p className="mb-4">
                            Create your free account here, takes less than a minute.
                        </p>
                        <form action="#" method="post">
                            <div className='grid lg:grid-cols-2 gap-5'>
                                <input type="text" name="First Name" placeholder='First Name' id="fName" className='border border-gray-400 py-2 px-2' />
                                <input type="text" name="Last Name" placeholder='Last Name' id="lName" className='border border-gray-400 py-2 px-2' />
                            </div>
                            <div className="mt-5">
                                <input type='email' name="Email" placeholder='Email' id="email" className=' w-full border border-gray-400 py-2 px-2' />
                            </div>
                            <div className="mt-5">
                                <input type='password' name="Password" placeholder='Password' id="password" className=' w-full border border-gray-400 py-2 px-2' />
                            </div>
                            <div className="mt-5">
                                <input type='password' name="confirmPassword" placeholder='Confirm Password' id="confirmPassword" className=' w-full border border-gray-400 py-2 px-2' />
                            </div>
                            <div className="mt-5">
                                <input type="checkbox" name="tlc" className='border border-gray-400 mr-2	' />
                                <span>
                                    I accept the <a className='text-purple-500 font-semibold'>Terms of Use</a>  & <a className='text-purple-500 font-semibold' href="#">Privacy Policy</a>
                                </span>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className='w-full bg-purple-500 py-3 text-center text-white'>Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register