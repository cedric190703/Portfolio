"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Computer } from '@/app/components/models/Computer';
import { ETH } from '@/app/components/models/Eth';
import Loader from "@/app/components/Loader";
import { SpaceModel } from "@/app/components/models/SpaceModel";

const About = () => {
    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-50 p-8 lg:p-16">
            {/* Section 1: About Me */}
            <div
                className="w-full h-[300px] flex flex-col lg:flex-row transition-all duration-500 ease-in-out mb-8 lg:mb-16">
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800">About Me</h1>
                    <p className="text-lg mb-6 text-gray-700">
                        Hello! I am a passionate individual with a background in [Your Background].
                        I specialize in [Your Specializations] and have experience in [Your Experience].
                    </p>
                </div>
                <div className="w-full lg:w-1/2 h-full">
                    <Canvas
                        className="w-full h-full"
                        camera={{position: [0, 0, 5], near: 0.1, far: 1000}}
                        style={{background: 'black'}}
                    >
                        <Suspense fallback={<Loader/>}>
                            <ambientLight intensity={0.5}/>
                            <directionalLight position={[10, 10, 5]} intensity={1}/>
                            {/* Add your 3D models here */}
                            <SpaceModel scale={[1, 1, 1]} position={[0, 0, 0]}/>
                            <OrbitControls/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            {/* Section 2: Hobbies */}
            <div
                className="w-full h-[300px] flex flex-col lg:flex-row-reverse transition-all duration-500 ease-in-out mt-8 mb-8 lg:mb-16">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800">My Hobbies</h1>
                    <p className="text-lg mb-6 text-gray-700">
                        In my free time, I enjoy various hobbies such as [Hobbies]. Here’s a little more about them.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 h-full bg-gray-50">
                    <Canvas
                        className="w-full h-full"
                        camera={{position: [0, 0.5, 2.3], near: 0.1, far: 1000}}
                    >
                        <Suspense fallback={<Loader/>}>
                            <directionalLight position={[10, 10, 5]} intensity={2}/>
                            <directionalLight position={[4, -8, 2]} intensity={1}/>
                            <ambientLight intensity={0.5}/>
                            <pointLight position={[5, 5, 5]} intensity={1.5}/>
                            <ETH scale={[1, 1, 1]} position={[0, 0, 0]}/>
                            <OrbitControls enableZoom={false}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            {/* Section 3: Projects */}
            <div className="w-full h-[400px] flex flex-col lg:flex-row transition-all duration-500 ease-in-out mb-8 mt-8 lg:mb-16">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800">My Projects</h1>
                    <p className="text-lg mb-6 text-gray-700">
                        I have worked on various projects that showcase my skills and expertise. Here are some highlights.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 h-full bg-gray-50">
                    <Canvas
                        className="w-full h-full"
                        camera={{position: [0, 1.2, 3.5], near: 0.1, far: 1000}}
                    >
                        <Suspense fallback={<Loader/>}>
                            <directionalLight position={[10, 10, 5]} intensity={2}/>
                            <ambientLight intensity={0.5}/>
                            <Computer scale={[1, 1, 1]} position={[0, 0, 0]}/>
                            <OrbitControls enableZoom={false}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default About;
