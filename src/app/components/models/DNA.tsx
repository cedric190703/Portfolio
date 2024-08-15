import { useGLTF } from '@react-three/drei';
import {Mesh} from "three";

export function DNA(props: any) {
    const { nodes, materials } = useGLTF('/models/a-dna_stick_model.glb');

    // Cast each node to Mesh
    const object_2 = nodes.Object_2 as Mesh;
    const object_3 = nodes.Object_3 as Mesh;
    const object_4 = nodes.Object_4 as Mesh;
    const object_5 = nodes.Object_5 as Mesh;
    const object_6 = nodes.Object_6 as Mesh;
    const object_7 = nodes.Object_6 as Mesh;
    const object_8 = nodes.Object_6 as Mesh;
    const object_9 = nodes.Object_6 as Mesh;
    const object_10 = nodes.Object_6 as Mesh;
    const object_11 = nodes.Object_6 as Mesh;
    const object_12 = nodes.Object_6 as Mesh;
    const object_13 = nodes.Object_6 as Mesh;
    const object_14 = nodes.Object_6 as Mesh;
    const object_15 = nodes.Object_6 as Mesh;
    const object_16 = nodes.Object_6 as Mesh;
    const object_17 = nodes.Object_6 as Mesh;
    const object_18 = nodes.Object_6 as Mesh;
    const object_19 = nodes.Object_6 as Mesh;
    const object_20 = nodes.Object_6 as Mesh;

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_2.geometry}
                    material={materials.vmd_mat_cindex_0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_3.geometry}
                    material={materials.vmd_mat_cindex_0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_4.geometry}
                    material={materials.vmd_mat_cindex_0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_5.geometry}
                    material={materials.vmd_mat_cindex_0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_6.geometry}
                    material={materials.vmd_mat_cindex_0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_7.geometry}
                    material={materials.vmd_mat_cindex_1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_8.geometry}
                    material={materials.vmd_mat_cindex_1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_9.geometry}
                    material={materials.vmd_mat_cindex_1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_10.geometry}
                    material={materials.vmd_mat_cindex_1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_11.geometry}
                    material={materials.vmd_mat_cindex_10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_12.geometry}
                    material={materials.vmd_mat_cindex_10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_13.geometry}
                    material={materials.vmd_mat_cindex_10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_14.geometry}
                    material={materials.vmd_mat_cindex_10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_15.geometry}
                    material={materials.vmd_mat_cindex_10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_16.geometry}
                    material={materials.vmd_mat_cindex_10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_17.geometry}
                    material={materials.vmd_mat_cindex_4}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_18.geometry}
                    material={materials.vmd_mat_cindex_5}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_19.geometry}
                    material={materials.vmd_mat_cindex_8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={object_20.geometry}
                    material={materials.vmd_mat_cindex_8}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/a-dna_stick_model.glb');