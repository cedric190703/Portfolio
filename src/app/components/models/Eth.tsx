import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {Mesh} from "three";

export function ETH(props: any) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/ethereum_logo.glb');

    const cont = nodes.Pyramid_3_lambert3_0 as Mesh;
    const cont2 = nodes.Pyramid_3_lambert4_0 as Mesh;
    const cont3 = nodes.Pyramid_3_lambert2_0 as Mesh;
    const cont4 = nodes.Pyramid_Default_Material_0 as Mesh;
    const cont5 = nodes.Pyramid_lambert4_0 as Mesh;
    const cont6 = nodes.Pyramid_lambert3_0 as Mesh;

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.107}>
                    <group
                        name="161ee2e266e94c7791940d78a5a83d04fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="eth" rotation={[-Math.PI, -1.556, -Math.PI]} scale={[1, 1, 1.145]}>
                                    <group
                                        name="Pyramid_3"
                                        position={[0.217, 73.807, 0.929]}
                                        rotation={[0, Math.PI / 4, 0]}>
                                        <mesh
                                            name="Pyramid_3_lambert3_0"
                                            castShadow
                                            receiveShadow
                                            geometry={cont.geometry}
                                            material={materials.lambert3}
                                        />
                                        <mesh
                                            name="Pyramid_3_lambert4_0"
                                            castShadow
                                            receiveShadow
                                            geometry={cont2.geometry}
                                            material={materials.lambert4}
                                        />
                                        <mesh
                                            name="Pyramid_3_lambert2_0"
                                            castShadow
                                            receiveShadow
                                            geometry={cont3.geometry}
                                            material={materials.lambert2}
                                        />
                                    </group>
                                    <group
                                        name="Pyramid_1"
                                        position={[-0.108, -36.302, 32.916]}
                                        rotation={[-Math.PI / 2, 0, -Math.PI]}>
                                        <group name="transform1" />
                                    </group>
                                    <group
                                        name="Pyramid"
                                        position={[-0.108, -36.302, -33.845]}
                                        rotation={[-Math.PI / 2, 0, 0]}>
                                        <group name="transform2" />
                                    </group>
                                </group>
                                <group name="Pyramid_1">
                                    <mesh
                                        name="Pyramid_Default_Material_0"
                                        castShadow
                                        receiveShadow
                                        geometry={cont4.geometry}
                                        material={materials.Default_Material}
                                    />
                                    <mesh
                                        name="Pyramid_lambert4_0"
                                        castShadow
                                        receiveShadow
                                        geometry={cont5.geometry}
                                        material={materials.lambert4}
                                    />
                                    <mesh
                                        name="Pyramid_lambert3_0"
                                        castShadow
                                        receiveShadow
                                        geometry={cont6.geometry}
                                        material={materials.lambert3}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/ethereum_logo.glb');