import React from 'react';
import { useGLTF } from '@react-three/drei';
import {Mesh} from "three";

export function ETH(props: any) {
    const { nodes, materials } = useGLTF('/models/ethereum_logo.glb');
    
    const logoObject_0_lambert2_0 = nodes.Ethereum_3D_logoObject_0_lambert2_0 as Mesh;

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group scale={0.379}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={logoObject_0_lambert2_0.geometry}
                            material={materials.lambert2}
                            scale={[1, 0.655, 1]}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/ethereum_logo.glb');