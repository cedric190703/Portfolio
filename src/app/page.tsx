"use client";

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Loader from '@/app/components/Loader';
import { SpaceModel } from '@/app/components/models/SpaceModel';
import { Endurance } from '@/app/components/models/Endurance';
import { AudioLoader, AudioListener, Audio } from 'three';
import {log} from "node:util";

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

    useEffect(() => {
        const handleKeyDown = (event) => {
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
                    rotationRefYAxis.current += 0.01; // Decrease the angle decrement for faster rotation
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
                    rotationRefYAxis.current -= 0.01;
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

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [cameraPosition, endurancePosition, axis]);

    // Animation loop for rotating the Endurance component
    useEffect(() => {
        const animate = () => {
            rotationRef.current += 0.0015; // Adjust the rotation speed as needed

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
    const [audioInitialized, setAudioInitialized] = useState(false);

    // Add the music to the website
    const initializeAudio = () => {
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
        }
    }

    const [pause, setPause] = useState(false);

    const pauseAudio = () => {
        if (soundRef.current) {
            if (pause) {
                soundRef.current.play();
            } else {
                soundRef.current.pause();
            }
            setPause(!pause);
        }
    }

    useEffect(() => {
        if (audioInitialized) return;

        const handleUserInteraction = () => {
            initializeAudio();
            window.removeEventListener('click', handleUserInteraction);
        };

        window.addEventListener('click', handleUserInteraction);

        return () => {
            window.removeEventListener('click', handleUserInteraction);
        };
    }, [audioInitialized]);

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
            <button
                onClick={initializeAudio}
                className="absolute w-32 top-4 left-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
            >
                Start Audio
            </button>

            <button
                onClick={pauseAudio}
                className="absolute w-32 top-16 left-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
            >
                Pause Audio
            </button>

            <button
                onClick={stopAudio}
                className="absolute w-32 top-28 left-4 z-10 cursor-pointer p-2 rounded bg-black text-white border-solid border-2 border-amber-50"
            >
                Stop Audio
            </button>
        </main>
    );
}