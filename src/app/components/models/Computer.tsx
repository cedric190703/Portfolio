import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {Mesh} from "three";

export function Computer(props: any) {
    const { nodes, materials } = useGLTF('/models/sci_-_fi_computer_game_ready.glb');
    const comp = nodes.Plane002_digital_displays_0 as Mesh;
    const comp2 = nodes.Plane002_digital_display_sides_0 as Mesh;
    const comp3 = nodes.Plane001_digital_displays_0 as Mesh;
    const comp4 = nodes.Plane001_digital_display_sides_0 as Mesh;
    const comp5 = nodes.Circle_metal_2_0 as Mesh;
    const comp6 = nodes.Circle_metal_1_0 as Mesh;

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group position={[0, 28.869, 312.193]} rotation={[-1.469, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={comp.geometry}
                        material={materials.digital_displays}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={comp2.geometry}
                        material={materials.digital_display_sides}
                    />
                </group>
                <group position={[0, 381.812, -82.657]} rotation={[-0.229, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={comp3.geometry}
                        material={materials.digital_displays}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={comp4.geometry}
                        material={materials.digital_display_sides}
                    />
                </group>
                <group position={[0, 0, -94.762]} rotation={[0, Math.PI / 2, 0]} scale={123.801}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={comp5.geometry}
                        material={materials.metal_2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={comp6.geometry}
                        material={materials.metal_1}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/sci_-_fi_computer_game_ready.glb');