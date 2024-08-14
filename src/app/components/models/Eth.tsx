import React from 'react';
import { useGLTF } from '@react-three/drei';

export function ETH(props) {
    const { nodes, materials } = useGLTF('/models/ethereum_logo.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group scale={0.379}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Ethereum_3D_logoObject_0_lambert2_0.geometry}
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