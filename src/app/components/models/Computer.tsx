import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Computer(props) {
    const { nodes, materials } = useGLTF('/models/apple_ii_computer.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={[37.084, 36.308, 36.308]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_BLACK_0.geometry}
                        material={materials.BLACK}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_Misk_0.geometry}
                        material={materials.Misk}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_WpalsicC_0.geometry}
                        material={materials.WpalsicC}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_Key_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_Mk_0.geometry}
                        material={materials.material_4}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_WPlasticM_0.geometry}
                        material={materials.WPlasticM}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_BCover_0.geometry}
                        material={materials.BCover}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_Monitor_0.geometry}
                        material={materials.Monitor}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_BplasticC_0.geometry}
                        material={materials.BplasticC}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_RED_0.geometry}
                        material={materials.material_9}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_WplasicD_0.geometry}
                        material={materials.WplasicD}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_Batton11_0.geometry}
                        material={materials['Batton1.1']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_Wire_0.geometry}
                        material={materials.Wire}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/apple_ii_computer.glb');