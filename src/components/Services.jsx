import dev from "../assets/dev-dot-to (1).png"
import network from "../assets/network.png"
import cube from "../assets/cube.png"
function Services() {

    return (
        <div id="service">
            <div className="mt-20 text-center">
                <h1 className="text-white text-5xl font-bold my-10">What i do</h1>
            </div>
            <div className="md:flex flex-wrap justify-center">
                <div className="hover:border-b-4 hover:border-orange-400 text-white text-2xl font-bold opacity-75 bg-Gray px-10 py-5 md:mx-10 mx-auto mb-4 w-64">
                    <div className="text-blue-900"><img src={network} alt=""/></div>
                    <br/> Software <br/> Development
                </div>
                <div className="border-b-4 border-orange-400 text-white text-2xl font-bold opacity-75 bg-Gray px-10 py-5 md:mx-10 mx-auto mb-4 w-64">
                    <div className="text-blue-900"><img src={dev} alt=""/></div>
                    <br/> Web <br/> Development
                </div>
                <div className="hover:border-b-4 hover:border-orange-400 text-white text-2xl font-bold opacity-75 bg-Gray px-10 py-5 md:mx-10 mx-auto mb-4 w-64">
                    <div className="text-blue-900"><img src={cube} alt=""/></div>
                    <br/> Web <br/> Design
                </div>
            </div>
        </div>

    );
}

export default Services ;
