import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

export function Body(props: any) {
    const { nodes, materials } = useGLTF('/models/human_cube_hologram.glb');

    const object2 = nodes.Object_2 as Mesh;

    return (
        <group {...props} dispose={null}>
            <pointLight position={[0, 4, 6]} color="#41adfa" intensity={5} />

            <mesh
                castShadow
                receiveShadow
                geometry={object2.geometry}
                material={materials['Material.001']}
                rotation={[-Math.PI / 2, 0, 182]}
            />
        </group>
    )
}

useGLTF.preload('/models/human_cube_hologram.glb');