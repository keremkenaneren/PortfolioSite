import network from "../assets/network.png";
import dev from "../assets/dev-dot-to (1).png";
import cube from "../assets/cube.png";

function Skills() {

    return (
        <div className="text-center">
            <div className="mt-20">
                <h1 className="text-white text-5xl font-bold my-10">My Skills</h1>
            </div>
            <div className="mx-10 p-10 my-auto bg-Gray " >
                <div className="md:flex flex-wrap justify-center">
                    <div className="text-white px-10 py-5 md:mx-10 mx-auto mb-4 w-64">
                        <p className="text-6xl font-bold opacity-50">50%</p>
                        <p className="text-orange-400 font-bold my-3" >HTML</p>
                    </div>
                    <div className="text-white px-10 py-5 md:mx-10 mx-auto mb-4 w-64">
                        <p className="text-6xl font-bold opacity-50">20%</p>
                        <p className="text-orange-400 font-bold my-3" >CSS</p>
                    </div>
                    <div className="text-white px-10 py-5 md:mx-10 mx-auto mb-4 w-64">
                        <p className="text-6xl font-bold opacity-50">10%</p>
                        <p className="text-orange-400 font-bold my-3" >JAVASCRİPT</p>
                    </div>
                    <div className="text-white px-10 py-5 md:mx-10 mx-auto mb-4 w-64">
                        <p className="text-6xl font-bold opacity-50">2%</p>
                        <p className="text-orange-400 font-bold my-3" >PHP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills ;
