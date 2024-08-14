import React from 'react';
import { useGLTF, Stars } from '@react-three/drei';

export function SpaceModel(props) {
    const { nodes, materials } = useGLTF('/models/need_some_space.glb');

    return (
        <>
            {/* Background stars */}
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0.2}
                fade
            />

            {/* 3D space model */}
            <group {...props} dispose={null}>
                <points
                    geometry={nodes.Object_2.geometry}
                    material={materials['Scene_-_Root']}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.013}
                />
            </group>
        </>
    );
}

useGLTF.preload('/models/need_some_space.glb');
