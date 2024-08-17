"use client";

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Computer } from '@/app/components/models/Computer';
import { ETH } from '@/app/components/models/Eth';
import Loader from "@/app/components/Loader";
import { DNA } from "@/app/components/models/DNA";
import { Body } from "@/app/components/models/Body";
import Header from "@/app/components/Header";

const About = () => {
    const [bodyRotation, setBodyRotation] = useState([0, 0, 0]);
    const [ethRotation, setEthRotation] = useState([0, 0, 0]);
    const [computerRotation, setComputerRotation] = useState([0, 0, 0]);
    const [dnaRotation, setDnaRotation] = useState([0, 0, 0]);

    const rotationRef = useRef(0);

    useEffect(() => {
        const animate = () => {
            rotationRef.current += 0.003;

            setBodyRotation([0, rotationRef.current, 0]);
            setEthRotation([0, -rotationRef.current, 0]);
            setComputerRotation([0, rotationRef.current, 0]);
            setDnaRotation([0, -rotationRef.current, 0]);

            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const renderSection = (title:string , content: any, component: any, cameraProps: any, additionalClasses = "", canvasStyle = {}) => (
        <div className={`w-full flex flex-col lg:flex-row ${additionalClasses} mb-20 lg:mb-32`}>
            <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
                <h1 className="text-5xl font-bold mb-4 text-gray-800">{title}</h1>
                {content}
            </div>
            <div className="w-full lg:w-1/2">
                <Canvas
                    className="w-full h-full"
                    camera={cameraProps}
                    style={canvasStyle}
                >
                    <Suspense fallback={<Loader />}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1.5} />
                        {component}
                        <OrbitControls enableZoom={false} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );

    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-50 p-4 lg:p-16">
            <Header />
            {renderSection(
                "About Me",
                <>
                    <h1 className="text-2xl mb-1">Hello! I'm Cédric Brzyski.</h1>
                    <p className="text-lg mb-1 text-gray-800">
                        I'm a student at EPITA, a French computer engineering school.
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        I'm French and live near Paris.
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        You can contact me via
                        <a href="https://github.com/cedric190703" className="text-blue-500 hover:underline"> GitHub</a>,
                        <a href="https://www.linkedin.com/in/cedric-brzyski/" className="text-blue-500 hover:underline"> LinkedIn</a>,
                        or
                        <a href="mailto:cbrzyski2@gmail.com" className="text-blue-500 hover:underline"> email</a>.
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        You can also read my posts on
                        <a href="https://medium.com/@cbrzyski2" className="text-blue-500 hover:underline"> Medium</a>.
                    </p>
                </>,
                <Body scale={[0.1, 0.1, 0.1]} position={[0, -1, 0]} rotation={bodyRotation} />,
                { position: [0, 0.4, 1.69], near: 0.1, far: 1000 },
                "",
                { width: '100%', height: '35vh' }
            )}
            {renderSection(
                "My Hobbies",
                <>
                    <p className="text-lg mb-1 text-gray-800">
                        In my free time, I enjoy playing sports like tennis (I was ranked 4/6 in the French rankings), swimming, and running.
                    </p>
                    <p className="text-lg mb-1 text-gray-800">I love watching sports like football and basketball.</p>
                    <p className="text-lg mb-8 text-gray-800">
                        I'm passionate about computer science and am interested in Blockchain 🔗 and AI 🤖.
                    </p>
                </>,
                <ETH scale={[1.23, 1.23, 1.23]} position={[0, 0, 0]} rotation={ethRotation} />,
                { position: [0, -0.4, 4.33], near: 0.1, far: 1000 },
                "lg:flex-row-reverse",
                { width: '100%', height: '35vh' }
            )}
            {renderSection(
                "What I'm Studying",
                <>
                    <p className="text-lg mb-6 text-gray-800">
                        I am currently in my fourth year at EPITA, studying computer science with plans to specialize in health informatics.
                    </p>
                </>,
                <Computer scale={[0.2, 0.2, 0.2]} position={[0, 0, 0]} rotation={computerRotation} />,
                { position: [0, 0.7, 1.35], near: 0.1, far: 1000 },
                "",
                { width: '100%', height: '35vh' }
            )}
            {renderSection(
                "What I Want to Do",
                <>
                    <p className="text-lg mb-6 text-gray-800">
                        My dream is to create a startup in the healthcare industry, leveraging AI and Blockchain.
                    </p>
                </>,
                <DNA scale={[1, 1, 1]} position={[0, 0, 0]} rotation={dnaRotation} />,
                { position: [0, 0.5, 2.6], near: 0.1, far: 1000 },
                "lg:flex-row-reverse",
                { width: '100%', height: '35vh' }
            )}
        </div>
    );
};

export default About;