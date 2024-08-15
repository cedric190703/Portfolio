"use client";

import React, {Suspense, useEffect, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Computer } from '@/app/components/models/Computer';
import { ETH } from '@/app/components/models/Eth';
import Loader from "@/app/components/Loader";
import {DNA} from "@/app/components/models/DNA";
import {Body} from "@/app/components/models/Body";
import Header from "@/app/components/Header";

const About = () => {
    const [bodyRotation, setBodyRotation] = useState([0,0,0]);
    const [EthRotation, setEthRotation] = useState([0,0,0]);
    const [computerRotation, setComputerRotation] = useState([0,0,0]);
    const [dnaRotation, setDNARotation] = useState([0,0,0]);

    const bodyRef = useRef(0);

    // Updating the rotation of the objects
    useEffect(() => {
        const animate = () => {
            // For the speed
            bodyRef.current += 0.005;

            // Set the objects rotation
            setBodyRotation([bodyRotation[0], bodyRef.current, bodyRotation[2]]);
            setEthRotation([EthRotation[0], -bodyRef.current, EthRotation[2]]);
            setComputerRotation([computerRotation[0], bodyRef.current, computerRotation[2]]);
            setDNARotation([dnaRotation[0], -bodyRef.current, dnaRotation[2]]);

            requestAnimationFrame(animate);
        };

        // Start the animation
        animate();

        // Clean up the animation loop on component unmount
        return () => cancelAnimationFrame(animate);
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-50 p-8 lg:p-16">
            <Header/>
            <div
                className="w-full h-[300px] flex flex-col lg:flex-row transition-all duration-500 ease-in-out lg:mb-20 md:mb-35 sm:mb-80">
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800">About Me</h1>
                    <h1 className="text-2xl mb-1">Hello! I'm a Cédric Brzyski.</h1>
                    <p className="text-lg mb-1 text-gray-800">
                        I'm a student at EPITA, a french computer engineering school.
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        I'm a French, and I live near Paris.
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        You can contact me via
                        <a href="https://github.com/cedric190703" className="text-blue-500 hover:underline"> GitHub</a>,
                        <a href="https://www.linkedin.com/in/cedric-brzyski/"
                           className="text-blue-500 hover:underline"> LinkedIn</a>.
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        you can read my blogs on
                        <a href="https://medium.com/@cbrzyski2"
                           className="text-blue-500 hover:underline"> Medium</a>.
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        You can also reach me via email at
                        <a href="mailto:your-email@example.com"
                           className="text-blue-500 hover:underline"> your-email@example.com
                        </a>.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 h-full">
                    <Canvas
                        className="w-full h-full"
                        camera={{position: [0, 0.4, 1.69], near: 0.1, far: 1000}}
                    >
                        <ambientLight intensity={0.5}/>
                        <directionalLight position={[10, 10, 5]} intensity={1}/>
                        <Suspense fallback={<Loader/>}>
                            <Body scale={[0.1, 0.1, 0.1]} position={[0, -1, 0]} rotation={bodyRotation}/>
                            <OrbitControls enableZoom={false}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <div
                className="w-full h-[300px] flex flex-col lg:flex-row-reverse transition-all duration-500 ease-in-out lg:mb-20 md:mb-25 sm:mb-72">
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800">My Hobbies</h1>
                    <p className="text-lg mb-1 text-gray-800">
                        In my free time, I play sports like tennis (I was ranked 4/6 in the French rankings), swimming
                        and running.
                    </p>
                    <p className="text-lg mb-1 text-gray-800">
                        I love to watch sports like football and basketball.
                    </p>
                    <p className="text-lg mb-1 text-gray-800">
                        I'm passionate about computer science and I'm interested in Blockchain 🔗
                        and AI 🤖.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 h-full bg-gray-50">
                    <Canvas
                        className="w-full h-full"
                        camera={{position: [0, 0.5, 2.38], near: 0.1, far: 1000}}
                    >
                        <Suspense fallback={<Loader/>}>
                            <directionalLight position={[10, 10, 5]} intensity={2}/>
                            <directionalLight position={[4, -8, 2]} intensity={1}/>
                            <ambientLight intensity={0.5}/>
                            <pointLight position={[5, 5, 5]} intensity={1.5}/>
                            <ETH scale={[1, 1, 1]} position={[0, 0, 0]} rotation={EthRotation}/>
                            <OrbitControls enableZoom={false}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <div
                className="w-full h-[400px] flex flex-col lg:flex-row transition-all duration-500 ease-in-out lg:mb-20 md:mb-25 sm:mb-72">
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800">What I'm studying</h1>
                    <p className="text-lg mb-6 text-gray-800">
                        I am currently in my fourth year at EPITA and I study computer science and I want to specialize
                        in health informatics.
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
                            <Computer scale={[1, 1, 1]} position={[0, 0, 0]} rotation={computerRotation}/>
                            <OrbitControls enableZoom={false}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <div
                className="w-full h-[300px] flex flex-col lg:flex-row-reverse transition-all duration-500 ease-in-out lg:mb-20 md:mb-25 sm:mb-72">
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800">What I want to do</h1>
                    <p className="text-lg mb-6 text-gray-800">
                        My dream is to create a startup in the healthcare industry with AI and Blockchain.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center">
                    <Canvas
                        className="w-full h-full"
                        camera={{position: [0, 0.5, 2.38], near: 0.1, far: 1000}}
                    >
                        <Suspense fallback={<Loader/>}>
                            <directionalLight position={[10, 10, 5]} intensity={2}/>
                            <ambientLight intensity={0.5}/>
                            <DNA scale={[1, 1, 1]} position={[0, 0, 0]} rotation={dnaRotation}/>
                            <OrbitControls enableZoom={false}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default About;
