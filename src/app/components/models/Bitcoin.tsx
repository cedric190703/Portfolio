import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Bitcoin(props) {
    const { nodes, materials } = useGLTF('/models/bitcoin.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002__0.geometry}
                material={materials['Scene_-_Root']}
                position={[-3.489, 36.23, -11.294]}
            />
        </group>
    )
}

useGLTF.preload('/models/bitcoin.glb');