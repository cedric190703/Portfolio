import React from 'react';
import { useGLTF, Stars } from '@react-three/drei';
import * as THREE from 'three';
import {Mesh} from "three";

// Vertex Shader
const vertexShader = `
  varying vec3 vColor;
  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 1.3; // Adjust point size as needed
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Fragment Shader
const fragmentShader = `
  varying vec3 vColor;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5, 0.5));
    if (dist > 0.5) {
      discard;
    }
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

export function SpaceModel(props: any) {
    const { nodes, materials } = useGLTF('/models/need_some_space.glb');

    // Create a custom shader material for the gradient points
    const gradientMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        vertexColors: true, // Enable vertex colors
    });

    const object2 = nodes.Object_2 as Mesh;

    // Create an array of colors for the gradient effect
    const colors = [];
    const geometry = object2.geometry;
    const position = geometry.attributes.position;

    // Calculate the center of the geometry
    const center = new THREE.Vector3();
    geometry.computeBoundingBox();
    if (geometry.boundingBox) {
        geometry.boundingBox.getCenter(center);
    }

    for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const z = position.getZ(i);

        // Calculate the distance from the center
        const distance = new THREE.Vector3(x, y, z).distanceTo(center);

        // Normalize the distance to a range of 0 to 1
        if (geometry.boundingBox) {
            const maxDistance = geometry.boundingBox.getSize(new THREE.Vector3()).length() / 2;
            const normalizedDistance = Math.min(distance / maxDistance, 1.0);

            // Calculate the hue value based on the normalized distance
            const hue = 0.77 - normalizedDistance * 0.35;
            const color = new THREE.Color().setHSL(hue, 1.2, 0.55);
            colors.push(color.r, color.g, color.b);
        }
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

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

            {/* 3D space model with gradient points */}
            <group {...props} dispose={null}>
                <points
                    geometry={geometry}
                    material={gradientMaterial}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.013}
                />
            </group>
        </>
    );
}

useGLTF.preload('/models/need_some_space.glb');
