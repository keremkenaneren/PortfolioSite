import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function About() {

    return (
        <div className="mt-10 text-center" id="about">
            <div>
                <h1 className="text-white text-5xl font-bold my-10">About</h1>
                <p className="md:px-80 p-5 my-7 text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident</p>
            </div>
            <div className="">
                <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium  text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mx-4 hover:opacity-50 md:mr-6 "><LinkedInIcon/></a>
                    </li>
                    <li>
                        <a href="#" className="mx-4 hover:opacity-50 md:mr-6"><GitHubIcon/></a>
                    </li>
                    <li>
                        <a href="#" className="mx-4 hover:opacity-50 md:mr-6"><InstagramIcon/></a>
                    </li>
                    <li>
                        <a href="#" className="mx-4 hover:opacity-50 md:mr-6"><TwitterIcon/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About ;
