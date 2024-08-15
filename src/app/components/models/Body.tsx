import { useGLTF } from '@react-three/drei';

export function Body(props) {
    const { nodes, materials } = useGLTF('/models/human_cube_hologram.glb');
    return (
        <group {...props} dispose={null}>
            <pointLight position={[0, 4, 6]} color="#41adfa" intensity={5} />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials['Material.001']}
                rotation={[-Math.PI / 2, 0, 182]}
            />
        </group>
    )
}

useGLTF.preload('/models/human_cube_hologram.glb');