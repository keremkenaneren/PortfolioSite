import profilePhoto from "../assets/s-220202-n9-pp_1500xx1000-1000-0-0.jpg"
function Home() {


    return (
        <div className="md:flex flex-col md:flex-row justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-20 text-center md:text-left">
                <div className="mt-20">
                    <h1 className="text-white text-5xl font-bold">Hi, I'm</h1>
                    <h1 className="text-white text-5xl font-bold mt-2">Oyindamola Bakare</h1>
                    <p className="text-white opacity-50 my-5">Frontend Developer</p>
                    <div>
                        <button className="text-opacity-90 w-32 p-2 bg-green-500 text-white hover:opacity-75">Download CV</button>
                        <button className="ml-3 w-32 p-2 border border-white text-white hover:opacity-75">Learn more</button>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <div className="flex justify-center">
                        <img className="rounded-full md:w-96 w-80 profilImage h-auto" src={profilePhoto} alt="pp" />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Home ;
