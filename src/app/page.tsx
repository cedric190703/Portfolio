"use client";

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Loader from '@/app/components/Loader';
import { SpaceModel } from '@/app/components/SpaceModel';
import { Endurance } from '@/app/components/Endurance';

export default function Home() {
    const cameraRef = useRef();
    const [mouseY, setMouseY] = useState(0);
    const [axis, setAxis] = useState('y');

    // Handle mouse move event
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMouseY(event.clientY);

            if (event.clientY <= 61) {
                setAxis('z');
            } else {
                setAxis('y');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Calculate new positions based on mouse movement
    const cameraPosition = [1, 2, 2 + mouseY * 0.01];
    const endurancePosition = [0.8 + mouseY * 0.001, 1.85, 1.97 + mouseY * 0.001];

    return (
        <main className="w-full h-screen relative overflow-hidden">
            <Canvas
                className="w-full h-screen bg-transparent"
                style={{ background: 'black' }}
                camera={{ position: [0, 0, 0], near: 0.1, far: 1000 }} // Disable the default camera
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <SpaceModel scale={[1, 1, 1]} position={[-1, -1, 2]} />
                    <Endurance position={endurancePosition} rotation={[1, 1, 1]} scale={0.3} />
                    <PerspectiveCamera
                        ref={cameraRef}
                        position={cameraPosition}
                        near={0.1}
                        far={1000}
                        makeDefault // Make this the default camera
                    />
                </Suspense>
            </Canvas>
        </main>
    );
}
