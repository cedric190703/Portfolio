"use client";

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Loader from '@/app/components/Loader';
import { SpaceModel } from '@/app/components/models/SpaceModel';
import { Endurance } from '@/app/components/models/Endurance';
import { AudioLoader, AudioListener, Audio } from 'three';
import Presentation from "@/app/components/Presentation";
import InteractionsExplanations from "@/app/components/InteractionsExplanations";
import Link from "next/link";

export default function Home() {
    const cameraRef = useRef();
    const [cameraPosition, setCameraPosition] = useState([1.1, 1.9, 5]);
    const [cameraRotation, setCameraRotation] = useState([-0.3, 0, 0]);
    const [axis, setAxis] = useState('z');
    const [endurancePosition, setEndurancePosition] = useState([1, 1.8, 1]);
    const [enduranceRotation, setEnduranceRotation] = useState([2, 3, 3]);
    const rotationRef = useRef(0);
    const rotationRefYAxis = useRef(0);

    const minZ = 0;
    const maxZ = 5;
    const center = [-1, -1, 2];
    const radius = 2;

    const [userActive, setUserActive] = useState(false);
    const [audioInitialized, setAudioInitialized] = useState(false);
    const [pause, setPause] = useState(false);
    const [hideCard, setHideCard] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            setHideCard(true);
            setUserActive(true);
            let newPosition = [...cameraPosition];
            let newEndurancePosition = [...endurancePosition];
            let newCameraRotation = [...cameraRotation];

            if (event.key === 'ArrowDown') {
                if (axis === 'z' && newPosition[2] < maxZ) {
                    newPosition[2] += 0.01;
                    newEndurancePosition = [
                        endurancePosition[0] + 0.0012,
                        endurancePosition[1] + 0.0012,
                        endurancePosition[2] + 0.0012,
                    ];
                    newCameraRotation = [
                        cameraRotation[0] - 0.0002,
                        cameraRotation[1] - 0.0012,
                        cameraRotation[2] - 0.0002,
                    ];
                } else if (axis === 'y') {
                    // Rotate around the center
                    rotationRefYAxis.current += 0.004; // Decrease the angle decrement for faster rotation
                    const angle = rotationRefYAxis.current;
                    // Ensure angle wraps around after 2π radians
                    const wrappedAngle = angle % (2 * Math.PI);
                    newEndurancePosition = [
                        center[0] + 1.5 + radius * Math.cos(wrappedAngle),
                        endurancePosition[1], // Keep the y position constant for simplicity
                        center[2] - 1.5 + radius * Math.sin(wrappedAngle),
                    ];
                    // Calculate circular position
                    const cameraX = newEndurancePosition[0] + 0.8 * Math.cos(wrappedAngle);
                    const cameraZ = newEndurancePosition[2] + 0.8 * Math.sin(wrappedAngle);
                    const cameraY = newEndurancePosition[1] + 1.3; // Adjust camera height if needed

                    // Update the camera position
                    newPosition = [cameraX, cameraY, cameraZ];
                    newCameraRotation = [
                        0, // Pitch (optional adjustment)
                        Math.atan2(cameraX - newEndurancePosition[0], cameraZ - newEndurancePosition[2]), // Yaw
                        0  // Roll (optional adjustment)
                    ];
                }
            } else if (event.key === 'ArrowUp') {
                if (axis === 'z' && newPosition[2] > minZ) {
                    newPosition[2] -= 0.01;
                    newEndurancePosition = [
                        endurancePosition[0] - 0.0012,
                        endurancePosition[1] - 0.0012,
                        endurancePosition[2] - 0.0012,
                    ];
                    newCameraRotation = [
                        cameraRotation[0] + 0.0009,
                        cameraRotation[1] + 0.0012,
                        cameraRotation[2] + 0.0002,
                    ];
                } else if (axis === 'y') {
                    // Rotate around the center
                    rotationRefYAxis.current -= 0.004;
                    const angle = rotationRefYAxis.current;
                    // Ensure angle wraps around after 2π radians
                    const wrappedAngle = angle % (2 * Math.PI);
                    newEndurancePosition = [
                        center[0] + 1.5 + radius * Math.cos(wrappedAngle),
                        endurancePosition[1],
                        center[2] - 1.5 + radius * Math.sin(wrappedAngle),
                    ];
                    // Calculate circular position
                    const cameraX = newEndurancePosition[0] + 0.8 * Math.cos(wrappedAngle);
                    const cameraZ = newEndurancePosition[2] + 0.8 * Math.sin(wrappedAngle);
                    const cameraY = newEndurancePosition[1] + 1.3; // Adjust camera height if needed

                    // Update the camera position
                    newPosition = [cameraX, cameraY, cameraZ];
                    newCameraRotation = [
                        0, // Pitch (optional adjustment)
                        Math.atan2(cameraX - newEndurancePosition[0], cameraZ - newEndurancePosition[2]), // Yaw
                        0  // Roll (optional adjustment)
                    ];
                }
            }

            // Change axis when the camera reaches a certain position
            if (newPosition[2] <= 2.32) {
                setAxis('y');
            } else if (newPosition[1] <= 2.72) {
                setAxis('z');
            }

            setEndurancePosition(newEndurancePosition);
            setCameraPosition(newPosition);
            setCameraRotation(newCameraRotation);
        };

        const handleKeyUp = () => {
            setHideCard(false); // Show the card when no key is pressed
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [cameraPosition, endurancePosition, axis]);

    // Animation loop for rotating the Endurance component
    useEffect(() => {
        const animate = () => {
            // For the speed
            rotationRef.current += 0.0025;

            // Calculate the new rotation angles
            const angle = rotationRef.current;
            const xRotation = angle;
            const yRotation = Math.sin(angle) * 0.5;
            const zRotation = Math.cos(angle) * 0.5;

            // Apply the updated rotation to Endurance
            setEnduranceRotation([xRotation, yRotation, zRotation]);

            requestAnimationFrame(animate);
        };

        // Start the animation
        animate();

        // Clean up the animation loop on component unmount
        return () => cancelAnimationFrame(animate);
    }, []);

    const listenerRef = useRef();
    const soundRef = useRef();

    const initializeAudio = () => {
        if (audioInitialized) return;
        const listener = new AudioListener();
        listenerRef.current = listener;
        cameraRef.current.add(listener);

        const sound = new Audio(listener);
        soundRef.current = sound;

        const audioLoader = new AudioLoader();
        audioLoader.load('/music/universe.mp3', (buffer) => {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            sound.play();
        });

        setAudioInitialized(true);
    };

    const stopAudio = () => {
        if (soundRef.current) {
            soundRef.current.stop();
            setPause(false);
        }
        setAudioInitialized(false);
    }

    const pauseAudio = () => {
        if (soundRef.current && audioInitialized) {
            if (pause) {
                soundRef.current.play();
            } else {
                soundRef.current.pause();
            }
            setPause(!pause);
        }
    }

    const handleShowInstructions = () => {
        setUserActive(!userActive);
    }

    return (
        <main className="w-full h-screen relative overflow-hidden">
            <Canvas
                className="w-full h-screen bg-transparent"
                style={{background: 'black'}}
                camera={{position: [0, 0, 0], near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[10, 10, 5]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <SpaceModel scale={[1, 1, 1]} position={center}/>
                    <Endurance
                        position={endurancePosition}
                        rotation={enduranceRotation}
                        scale={0.3}
                    />
                    <OrbitControls/>
                    <PerspectiveCamera
                        ref={cameraRef}
                        position={cameraPosition}
                        rotation={cameraRotation}
                        near={0.1}
                        far={1000}
                        makeDefault
                    />
                </Suspense>
            </Canvas>
            { !hideCard &&
                <>
                    <button
                        onClick={() => {
                            if (!audioInitialized) initializeAudio();
                        }}
                        className="absolute w-32 top-4 left-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
                    >
                        Start Audio
                    </button>

                    <button
                        onClick={pauseAudio}
                        className="absolute w-32 top-16 left-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
                    >
                        {pause ? 'Play Audio' : 'Pause Audio'}
                    </button>

                    <button
                        onClick={stopAudio}
                        className="absolute w-32 top-28 left-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
                    >
                        Stop Audio
                    </button>

                    <button
                        onClick={handleShowInstructions}
                        className="absolute w-32 top-40 left-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
                    >
                        { userActive ? 'Show instructions' : 'Hide instructions' }
                    </button>

                    <Presentation/>
                    <Link href="/about" passHref legacyBehavior>
                        <a href="#" className="cursor-pointer" onClick={stopAudio}>
                            <button className="absolute w-32 top-4 right-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
                            >
                                About me
                            </button>
                        </a>
                    </Link>
                    <Link href="/projects" passHref legacyBehavior>
                        <a href="#" className="cursor-pointer" onClick={stopAudio}>
                            <button className="absolute w-32 top-16 right-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
                            >
                                Projects
                            </button>
                        </a>
                    </Link>
                </>
            }
            { !userActive && <InteractionsExplanations/> }
        </main>
    );
}