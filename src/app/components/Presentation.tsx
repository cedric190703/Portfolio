import LinkedinLogo from '../../../public/icons/linkedin.png';
import GithubLogo from '../../../public/icons/github.png';
import ProfilePicture from '../../../public/icons/profil.jpg';
import Image from "next/image";

const Presentation = () => {
    return (
        <div
            className="absolute w-64 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bottom-4 right-4">
            <div className="flex flex-col items-center pb-10">
                <Image className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg" src={ProfilePicture}
                     alt="Profile image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Cédric Brzyski</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://github.com/cedric190703" target="_blank" rel="noopener noreferrer">
                        <Image src={GithubLogo} alt="GitHub" className="w-10 h-10"/>
                    </a>
                    <a href="https://www.linkedin.com/in/cedric-brzyski/" target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinLogo} alt="LinkedIn" className="w-10 h-10"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Presentation;