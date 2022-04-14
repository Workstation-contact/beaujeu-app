/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useHelper } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ArrowHelper, AxesHelper, BoxHelper } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    Mat: THREE.MeshLambertMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  useHelper(group, AxesHelper)
  const { nodes, materials } = useGLTF('/object3dv2.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null} >
      <group position={[0, 5, 0]} rotation={[0,0,0]}>
        <mesh receiveShadow castShadow geometry={nodes.Cube.geometry} scale={[0.01,0.01,0.01]} material={materials.Mat} position={[0, 0, 0]} rotation={[0, (Math.PI/2), 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/object3dv2.gltf')