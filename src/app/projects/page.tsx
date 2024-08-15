import Header from '@/app/components/Header';
import Image from "next/image";

import DigiitLogo from '../../../public/projects/digiit.png';
import AloaLogo from '../../../public/projects/logoAloa.jpg';
import MoleculeLogo from '../../../public/projects/MoleculeVisualization.png';
import Logo from '../../../public/icons/icon.svg';

const Projects = () => {
    const projectList = [
        {
            title: 'Digiit',
            description: 'This is an application that allows the management of purchase documents but also analysis of the latter. For this project, I used Kotlin as the programming language with Firebase for the backend and Jetpack Compose for the frontend.',
            imageUrl: DigiitLogo,
            url: 'https://github.com/cedric190703/Digiit'
        },
        {
            title: 'ALOA',
            description: 'This is a Electronic Health Record (EHR) system designed to streamline the management of patient records, appointments, and other crucial information for healthcare providers. For this project, I used the MERN stack.',
            imageUrl: AloaLogo,
            url: 'https://github.com/cedric190703/ALOA'
        },
        {
            title: 'Molecule visualization',
            description: 'This is an application to visualize molecules in 3D with Three JS and Next JS.',
            imageUrl: MoleculeLogo,
            url: 'https://github.com/cedric190703/Molecules_visualization'
        },
        {
            title: 'Portfolio',
            description: 'This is a 3D portfolio with Three JS and Next JS.',
            imageUrl: Logo,
            url: 'https://github.com/cedric190703/Portfolio'
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-50 p-8 lg:p-16">
            <Header/>
            <div className="flex flex-grow items-center justify-center">
                <div className="w-full lg:w-3/4 p-4 lg:p-8 flex flex-col bg-gray-50 items-center text-center">
                    <h1 className="text-5xl font-bold mb-8 text-gray-800">Projects</h1>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">I have worked on several projects</h2>
                    <div className="lg:w-3/4 md:w-3/4 sm:w-full space-y-14 bg-gray-50 shadow-xl">
                        {projectList.map((project, index) => (
                            <div key={index}
                                 className="bg-white mb-10 rounded-lg shadow-lg flex flex-col items-center text-center">
                                {project.imageUrl && (
                                    <div className="w-full flex justify-center mb-10 mt-6">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={150}
                                            height={150}
                                            className="rounded-2xl"
                                        />
                                    </div>
                                )}
                                <h3 className="text-3xl font-semibold mb-5 text-gray-900">{project.title}</h3>
                                <p className="text-lg px-6 mb-5 text-gray-800">{project.description}</p>
                                <a href={project.url}
                                   className="mb-5 font-semibold text-2xl text-gray-800 underline hover:text-purple-500">Github
                                    repository</a>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-xl mt-6  font-semibold text-gray-700 mr-2">You can see more projects that I've
                        done on my</h2>
                    <a href="https://github.com/cedric190703"
                       className="font-semibold text-xl text-gray-800 underline hover:text-purple-500">Github</a>.
                </div>
            </div>
        </div>
    );
}

export default Projects;
