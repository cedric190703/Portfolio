import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

// Helper function to cast nodes to Mesh
const getMesh = (node: any): Mesh => node as Mesh;

export function Endurance(props: any) {
    const { nodes, materials } = useGLTF('/models/interstellar__endurance.glb');

    // Cast each node to Mesh
    const connector001_Non_Metal_0 = getMesh(nodes.Connector001_Non_Metal_0);
    const connector001_Glass_0 = getMesh(nodes.Connector001_Glass_0);
    const connector003_Non_Metal_0 = getMesh(nodes.Connector003_Non_Metal_0);
    const connector003_Glass_0 = getMesh(nodes.Connector003_Glass_0);
    const connector004_Non_Metal_0 = getMesh(nodes.Connector004_Non_Metal_0);
    const connector004_Glass_0 = getMesh(nodes.Connector004_Glass_0);
    const connector007_Non_Metal_0 = getMesh(nodes.Connector007_Non_Metal_0);
    const connector007_Glass_0 = getMesh(nodes.Connector007_Glass_0);
    const connector0010_Non_Metal_0 = getMesh(nodes.Connector0010_Non_Metal_0);
    const connector0010_Glass_0 = getMesh(nodes.Connector0010_Glass_0);
    const connector009_Non_Metal_0 = getMesh(nodes.Connector009_Non_Metal_0);
    const connector009_Glass_0 = getMesh(nodes.Connector009_Glass_0);
    const dockingPortT2003_Non_Metal_0 = getMesh(nodes.DockingPortT2003_Non_Metal_0);
    const dockingPortT2003_Glass_0 = getMesh(nodes.DockingPortT2003_Glass_0);
    const dockingPortT2001_Non_Metal_0 = getMesh(nodes.DockingPortT2001_Non_Metal_0);
    const dockingPortT2001_Glass_0 = getMesh(nodes.DockingPortT2001_Glass_0);
    const dockingPortT2004_Non_Metal_0 = getMesh(nodes.DockingPortT2004_Non_Metal_0);
    const dockingPortT2004_Glass_0 = getMesh(nodes.DockingPortT2004_Glass_0);
    const dockingPortT2002_Non_Metal_0 = getMesh(nodes.DockingPortT2002_Non_Metal_0);
    const dockingPortT2002_Glass_0 = getMesh(nodes.DockingPortT2002_Glass_0);
    const dockingPortT2_Non_Metal_0 = getMesh(nodes.DockingPortT2_Non_Metal_0);
    const dockingPortT2_Glass_0 = getMesh(nodes.DockingPortT2_Glass_0);
    const dockingPortT1_Non_Metal_0 = getMesh(nodes.DockingPortT1_Non_Metal_0);
    const dockingPortT1_Glass_0 = getMesh(nodes.DockingPortT1_Glass_0);
    const dockingPortT1001_Non_Metal_0 = getMesh(nodes.DockingPortT1001_Non_Metal_0);
    const dockingPortT1001_Glass_0 = getMesh(nodes.DockingPortT1001_Glass_0);
    const dockingPortT1002_Non_Metal_0 = getMesh(nodes.DockingPortT1002_Non_Metal_0);
    const dockingPortT1002_Glass_0 = getMesh(nodes.DockingPortT1002_Glass_0);
    const dockingPortT1003_Non_Metal_0 = getMesh(nodes.DockingPortT1003_Non_Metal_0);
    const dockingPortT1003_Glass_0 = getMesh(nodes.DockingPortT1003_Glass_0);
    const dockingPortT1004_Non_Metal_0 = getMesh(nodes.DockingPortT1004_Non_Metal_0);
    const dockingPortT1004_Glass_0 = getMesh(nodes.DockingPortT1004_Glass_0);
    const dockingPortT1005_Non_Metal_0 = getMesh(nodes.DockingPortT1005_Non_Metal_0);
    const dockingPortT1005_Glass_0 = getMesh(nodes.DockingPortT1005_Glass_0);
    const connector_Non_Metal_0 = getMesh(nodes.Connector_Non_Metal_0);
    const connector002_Non_Metal_0 = getMesh(nodes.Connector002_Non_Metal_0);
    const connector006_Non_Metal_0 = getMesh(nodes.Connector006_Non_Metal_0);
    const connector008_Non_Metal_0 = getMesh(nodes.Connector008_Non_Metal_0);
    const enduranceShip_Non_Metal_0 = getMesh(nodes.EnduranceShip_Non_Metal_0);
    const connector005_Non_Metal_0 = getMesh(nodes.Connector005_Non_Metal_0);
    const connector0011_Non_Metal_0 = getMesh(nodes.Connector0011_Non_Metal_0);
    const doors001_Non_Metal_0 = getMesh(nodes.Doors001_Non_Metal_0);
    const doors002_Non_Metal_0 = getMesh(nodes.Doors002_Non_Metal_0);
    const doors003_Non_Metal_0 = getMesh(nodes.Doors003_Non_Metal_0);
    const doors004_Non_Metal_0 = getMesh(nodes.Doors004_Non_Metal_0);
    const doors005_Non_Metal_0 = getMesh(nodes.Doors005_Non_Metal_0);
    const doors006_Non_Metal_0 = getMesh(nodes.Doors006_Non_Metal_0);
    const doors007_Non_Metal_0 = getMesh(nodes.Doors007_Non_Metal_0);
    const enduranceShip001_Non_Metal_0 = getMesh(nodes.EnduranceShip001_Non_Metal_0);
    const enduranceShip002_Non_Metal_0 = getMesh(nodes.EnduranceShip002_Non_Metal_0);

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group position={[0, -520, -1936.003]} rotation={[0, -Math.PI / 2, 0]} scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector001_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector001_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[0, -1936.004, -518.749]} rotation={[Math.PI, 0, 0]} scale={1.18}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector003_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector003_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group
                    position={[0, -1936.003, 518.752]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={1.847}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector004_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector004_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group
                    position={[0, 518.752, 1936.003]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={1.847}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector007_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector007_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group
                    position={[0, 1936.002, -518.752]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={1.847}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector0010_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector0010_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[0, 1936.004, 518.749]} scale={1.18}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector009_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={connector009_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[-1080, 0, 0]} rotation={[Math.PI, Math.PI / 2, 0]} scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2003_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2003_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[520, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2001_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2001_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[0, 0, 680]} rotation={[-Math.PI / 2, -0.49, -1.571]} scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2004_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2004_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[0, -520, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2002_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2002_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[0, 520, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT2_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[310.068, 0, 292.187]} rotation={[Math.PI, -Math.PI / 9, 0]} scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[310.068, 0, -292.187]} rotation={[Math.PI, Math.PI / 9, 0]} scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1001_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1001_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group
                    position={[0.001, 573.943, -2238.813]}
                    rotation={[-1.658, -0.005, Math.PI / 2]}
                    scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1002_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1002_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group
                    position={[0.001, -1651.895, -1616.456]}
                    rotation={[-2.705, -0.005, Math.PI / 2]}
                    scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1003_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1003_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group
                    position={[0, -573.944, 2238.811]}
                    rotation={[1.484, -0.005, Math.PI / 2]}
                    scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1004_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1004_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group
                    position={[0.001, 1651.895, 1616.455]}
                    rotation={[0.436, -0.005, Math.PI / 2]}
                    scale={1}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1005_Non_Metal_0.geometry}
                        material={materials.Non_Metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={dockingPortT1005_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={connector_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0, 518.749, -1936]}
                    rotation={[Math.PI / 6, -Math.PI / 2, 0]}
                    scale={1.54}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={connector002_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0, -1417.254, -1417.252]}
                    rotation={[-Math.PI / 6, -Math.PI / 2, 0]}
                    scale={1.54}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={connector006_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0, -518.749, 1936.004]}
                    rotation={[-2.618, -Math.PI / 2, 0]}
                    scale={1.54}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={connector008_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0, 1417.254, 1417.252]}
                    rotation={[2.618, -Math.PI / 2, 0]}
                    scale={1.54}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={enduranceShip_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={connector005_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0, -1417.252, 1417.254]}
                    rotation={[2.094, 0, 0]}
                    scale={1.18}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={connector0011_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0, 1417.252, -1417.254]}
                    rotation={[-Math.PI / 3, 0, 0]}
                    scale={1.18}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={doors001_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[327.178, 0, 285.959]}
                    rotation={[Math.PI, -Math.PI / 9, 0]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={doors002_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[327.178, 0, -285.959]}
                    rotation={[-2.068, 0.172, -0.305]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={doors003_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[-1098.208, 0, 0]}
                    rotation={[0, 0, Math.PI]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={doors004_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0.001, 572.356, -2256.949]}
                    rotation={[-1.658, 1.042, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={doors005_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0.001, -1668.397, -1624.151]}
                    rotation={[-2.705, 1.042, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={doors006_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0, -572.358, 2256.949]}
                    rotation={[1.484, 1.042, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={doors007_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    position={[0.001, 1668.397, 1624.151]}
                    rotation={[0.436, 1.042, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={enduranceShip001_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={enduranceShip002_Non_Metal_0.geometry}
                    material={materials.Non_Metal}
                    rotation={[Math.PI, 0, 0]}
                    scale={1}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/interstellar__endurance.glb');