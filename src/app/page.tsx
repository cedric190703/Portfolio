"use client";

import React, {Suspense, useEffect, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls
import Loader from '@/app/components/Loader'; // Ensure you have a loader component
import { SpaceModel } from '@/app/components/SpaceModel'; // Adjust the import path as necessary

export default function Home() {
    const cameraRef = useRef();

    useEffect(() => {
        if (cameraRef.current) {
            cameraRef.current.lookAt(0, 0, 0);
        }
    }, []);

    return (
        <main className="w-full h-screen relative">
            <Canvas
                className="w-full h-screen bg-transparent"
                camera={{ position: [1, 2, 2], near: 0.1, far: 1000 }}
                style={{ background: 'black' }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[-10, -10, 5]} intensity={0.5} />
                    <OrbitControls />
                    <SpaceModel scale={[1, 1, 1]} position={[-1, -1, 2]} />
                    <perspectiveCamera ref={cameraRef} />
                </Suspense>
            </Canvas>
        </main>
    );
}
