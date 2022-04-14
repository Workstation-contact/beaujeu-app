import * as THREE from 'three'
import React, { Suspense, useEffect, useRef } from 'react'
import { useGLTF, useAnimations, OrbitControls, Environment, ContactShadows, Plane, useProgress, Html } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { proxy, useSnapshot } from 'valtio'
// import Obj3D from './app'
import { Canvas } from '@react-three/fiber'
import Timer from '../Timer'
import Lottie from "lottie-react";
import loading from "../lottie/loading.json";


type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Plane: THREE.Mesh
    Sphere_cell006: THREE.Mesh
    Sphere_cell008: THREE.Mesh
    Sphere_cell034: THREE.Mesh
    Sphere_cell035: THREE.Mesh
    Sphere_cell037: THREE.Mesh
    Sphere_cell038: THREE.Mesh
    Sphere_cell041: THREE.Mesh
    Sphere_cell048: THREE.Mesh
    Sphere_cell056: THREE.Mesh
    Sphere_cell060: THREE.Mesh
    Sphere_cell062: THREE.Mesh
    Sphere_cell065: THREE.Mesh
    Sphere_cell070: THREE.Mesh
    Sphere_cell078: THREE.Mesh
    Sphere_cell084: THREE.Mesh
    Sphere_cell092: THREE.Mesh
    Sphere_cell094: THREE.Mesh
    Sphere_cell102: THREE.Mesh
    Sphere_cell104: THREE.Mesh
    Sphere_cell105: THREE.Mesh
    Sphere_cell106: THREE.Mesh
    Sphere_cell107: THREE.Mesh
    Sphere_cell111: THREE.Mesh
    Sphere_cell115: THREE.Mesh
    Sphere_cell117: THREE.Mesh
    Sphere_cell120: THREE.Mesh
    Sphere_cell123: THREE.Mesh
    Sphere_cell127: THREE.Mesh
    Sphere_cell154: THREE.Mesh
    Sphere_cell155: THREE.Mesh
    Sphere_cell153_cell: THREE.Mesh
    Sphere_cell153_cell001: THREE.Mesh
    Sphere_cell153_cell004: THREE.Mesh
    Sphere_cell136_cell003: THREE.Mesh
    Sphere_cell096_cell: THREE.Mesh
    Sphere_cell096_cell001: THREE.Mesh
    Sphere_cell096_cell004: THREE.Mesh
    Sphere_cell096_cell006: THREE.Mesh
    Sphere_cell096_cell007: THREE.Mesh
    Sphere_cell089_cell: THREE.Mesh
    Sphere_cell089_cell001: THREE.Mesh
    Sphere_cell089_cell003: THREE.Mesh
    Sphere_cell089_cell006: THREE.Mesh
    Sphere_cell039_cell: THREE.Mesh
    Sphere_cell039_cell001: THREE.Mesh
    Sphere_cell039_cell002: THREE.Mesh
    Sphere_cell039_cell004: THREE.Mesh
    Sphere_cell039_cell005: THREE.Mesh
    Sphere_cell039_cell006: THREE.Mesh
    Sphere_cell017_cell001: THREE.Mesh
    Sphere_cell017_cell002: THREE.Mesh
    Sphere_cell017_cell004: THREE.Mesh
    Sphere_cell017_cell005: THREE.Mesh
    Sphere_cell017_cell006: THREE.Mesh
    Sphere_cell017_cell007: THREE.Mesh
    Sphere_cell012_cell: THREE.Mesh
    Sphere_cell012_cell001: THREE.Mesh
    Sphere_cell012_cell002: THREE.Mesh
    Sphere_cell012_cell003: THREE.Mesh
    Sphere_cell012_cell004: THREE.Mesh
    Sphere_cell012_cell006: THREE.Mesh
    Sphere_cell005_cell: THREE.Mesh
    Sphere_cell005_cell002: THREE.Mesh
    Sphere_cell005_cell003: THREE.Mesh
    Sphere_cell005_cell005: THREE.Mesh
    Sphere_cell005_cell006: THREE.Mesh
    Sphere_cell005_cell001_cell: THREE.Mesh
    Sphere_cell005_cell001_cell001: THREE.Mesh
    Sphere_cell005_cell001_cell002: THREE.Mesh
    Sphere_cell009_cell007_cell001: THREE.Mesh
    Sphere_cell009_cell007_cell002: THREE.Mesh
    Sphere_cell009_cell007_cell003: THREE.Mesh
    Sphere_cell009_cell007_cell004: THREE.Mesh
    Sphere_cell009_cell007_cell006: THREE.Mesh
    Sphere_cell009_cell007_cell007: THREE.Mesh
    Sphere_cell009_cell005_cell: THREE.Mesh
    Sphere_cell009_cell005_cell001: THREE.Mesh
    Sphere_cell009_cell005_cell002: THREE.Mesh
    Sphere_cell009_cell005_cell004: THREE.Mesh
    Sphere_cell009_cell005_cell005: THREE.Mesh
    Sphere_cell009_cell005_cell006: THREE.Mesh
    Sphere_cell009_cell005_cell007: THREE.Mesh
    Sphere_cell009_cell004_cell002: THREE.Mesh
    Sphere_cell009_cell004_cell004: THREE.Mesh
    Sphere_cell009_cell004_cell005: THREE.Mesh
    Sphere_cell009_cell004_cell006: THREE.Mesh
    Sphere_cell009_cell004_cell007: THREE.Mesh
    Sphere_cell009_cell003_cell: THREE.Mesh
    Sphere_cell009_cell003_cell001: THREE.Mesh
    Sphere_cell009_cell003_cell002: THREE.Mesh
    Sphere_cell009_cell003_cell003: THREE.Mesh
    Sphere_cell009_cell003_cell005: THREE.Mesh
    Sphere_cell009_cell003_cell006: THREE.Mesh
    Sphere_cell009_cell003_cell007: THREE.Mesh
    Sphere_cell009_cell001_cell: THREE.Mesh
    Sphere_cell009_cell001_cell002: THREE.Mesh
    Sphere_cell009_cell001_cell004: THREE.Mesh
    Sphere_cell009_cell001_cell005: THREE.Mesh
    Sphere_cell009_cell001_cell006: THREE.Mesh
    Sphere_cell009_cell_cell: THREE.Mesh
    Sphere_cell009_cell_cell002: THREE.Mesh
    Sphere_cell009_cell_cell003: THREE.Mesh
    Sphere_cell009_cell_cell005: THREE.Mesh
    Sphere_cell009_cell_cell006: THREE.Mesh
    Sphere_cell009_cell_cell007: THREE.Mesh
    Sphere_cell031_cell006_cell001: THREE.Mesh
    Sphere_cell031_cell006_cell004: THREE.Mesh
    Sphere_cell031_cell006_cell005: THREE.Mesh
    Sphere_cell031_cell006_cell006: THREE.Mesh
    Sphere_cell031_cell006_cell007: THREE.Mesh
    Sphere_cell031_cell005_cell: THREE.Mesh
    Sphere_cell031_cell005_cell001: THREE.Mesh
    Sphere_cell031_cell005_cell003: THREE.Mesh
    Sphere_cell031_cell005_cell004: THREE.Mesh
    Sphere_cell031_cell005_cell007: THREE.Mesh
    Sphere_cell031_cell003_cell: THREE.Mesh
    Sphere_cell031_cell003_cell002: THREE.Mesh
    Sphere_cell031_cell003_cell003: THREE.Mesh
    Sphere_cell031_cell003_cell004: THREE.Mesh
    Sphere_cell031_cell003_cell006: THREE.Mesh
    Sphere_cell031_cell002_cell: THREE.Mesh
    Sphere_cell031_cell002_cell002: THREE.Mesh
    Sphere_cell031_cell002_cell003: THREE.Mesh
    Sphere_cell031_cell002_cell004: THREE.Mesh
    Sphere_cell031_cell002_cell006: THREE.Mesh
    Sphere_cell031_cell002_cell007: THREE.Mesh
    Sphere_cell031_cell_cell002: THREE.Mesh
    Sphere_cell031_cell_cell003: THREE.Mesh
    Sphere_cell031_cell_cell004: THREE.Mesh
    Sphere_cell031_cell_cell005: THREE.Mesh
    Sphere_cell089_cell004_cell002: THREE.Mesh
    Sphere_cell089_cell004_cell003: THREE.Mesh
    Sphere_cell089_cell004_cell005: THREE.Mesh
    Sphere_cell089_cell004_cell007: THREE.Mesh
    Sphere_cell089_cell002_cell: THREE.Mesh
    Sphere_cell089_cell002_cell002: THREE.Mesh
    Sphere_cell089_cell002_cell003: THREE.Mesh
    Sphere_cell089_cell002_cell004: THREE.Mesh
    Sphere_cell089_cell002_cell005: THREE.Mesh
    Sphere_cell089_cell002_cell007: THREE.Mesh
    Sphere_cell096_cell002_cell002: THREE.Mesh
    Sphere_cell096_cell002_cell003: THREE.Mesh
    Sphere_cell096_cell002_cell004: THREE.Mesh
    Sphere_cell096_cell002_cell005: THREE.Mesh
    Sphere_cell136_cell005_cell: THREE.Mesh
    Sphere_cell136_cell005_cell002: THREE.Mesh
    Sphere_cell136_cell005_cell003: THREE.Mesh
    Sphere_cell136_cell005_cell004: THREE.Mesh
    Sphere_cell136_cell005_cell005: THREE.Mesh
    Sphere_cell136_cell005_cell006: THREE.Mesh
    Sphere_cell136_cell004_cell: THREE.Mesh
    Sphere_cell136_cell004_cell002: THREE.Mesh
    Sphere_cell136_cell004_cell003: THREE.Mesh
    Sphere_cell136_cell004_cell005: THREE.Mesh
    Sphere_cell136_cell004_cell006: THREE.Mesh
    Sphere_cell136_cell004_cell007: THREE.Mesh
    Sphere_cell136_cell001_cell: THREE.Mesh
    Sphere_cell136_cell001_cell001: THREE.Mesh
    Sphere_cell136_cell001_cell003: THREE.Mesh
    Sphere_cell136_cell001_cell004: THREE.Mesh
    Sphere_cell136_cell001_cell005: THREE.Mesh
    Sphere_cell136_cell001_cell007: THREE.Mesh
    Sphere_cell153_cell007_cell: THREE.Mesh
    Sphere_cell153_cell007_cell002: THREE.Mesh
    Sphere_cell153_cell007_cell003: THREE.Mesh
    Sphere_cell153_cell007_cell004: THREE.Mesh
    Sphere_cell153_cell007_cell005: THREE.Mesh
    Sphere_cell153_cell007_cell006: THREE.Mesh
    Sphere_cell153_cell003_cell001: THREE.Mesh
    Sphere_cell153_cell003_cell002: THREE.Mesh
    Sphere_cell153_cell003_cell004: THREE.Mesh
    Sphere_cell153_cell003_cell005: THREE.Mesh
    Sphere_cell153_cell003_cell006: THREE.Mesh
    Sphere_cell153_cell003_cell007: THREE.Mesh
    Sphere_cell153_cell002_cell: THREE.Mesh
    Sphere_cell153_cell002_cell001: THREE.Mesh
    Sphere_cell153_cell002_cell002: THREE.Mesh
    Sphere_cell153_cell002_cell003: THREE.Mesh
    Sphere_cell153_cell002_cell004: THREE.Mesh
    Sphere_cell153_cell002_cell005: THREE.Mesh
    Sphere_cell153_cell002_cell007: THREE.Mesh
  }
  materials: {
    Mat: THREE.MeshStandardMaterial
    Material: THREE.MeshPhysicalMaterial
  }
}

type ActionName =
  | 'Sphere_cell.006Action'
  | 'Sphere_cell.008Action'
  | 'Sphere_cell.034Action'
  | 'Sphere_cell.035Action'
  | 'Sphere_cell.037Action'
  | 'Sphere_cell.038Action'
  | 'Sphere_cell.041Action'
  | 'Sphere_cell.048Action'
  | 'Sphere_cell.056Action'
  | 'Sphere_cell.060Action'
  | 'Sphere_cell.062Action'
  | 'Sphere_cell.065Action'
  | 'Sphere_cell.070Action'
  | 'Sphere_cell.078Action'
  | 'Sphere_cell.084Action'
  | 'Sphere_cell.092Action'
  | 'Sphere_cell.094Action'
  | 'Sphere_cell.102Action'
  | 'Sphere_cell.104Action'
  | 'Sphere_cell.105Action'
  | 'Sphere_cell.106Action'
  | 'Sphere_cell.107Action'
  | 'Sphere_cell.111Action'
  | 'Sphere_cell.115Action'
  | 'Sphere_cell.117Action'
  | 'Sphere_cell.120Action'
  | 'Sphere_cell.123Action'
  | 'Sphere_cell.127Action'
  | 'Sphere_cell.154Action'
  | 'Sphere_cell.155Action'
  | 'Sphere_cell.153_cellAction'
  | 'Sphere_cell.153_cell.001Action'
  | 'Sphere_cell.153_cell.004Action'
  | 'Sphere_cell.136_cell.003Action'
  | 'Sphere_cell.096_cellAction'
  | 'Sphere_cell.096_cell.001Action'
  | 'Sphere_cell.096_cell.004Action'
  | 'Sphere_cell.096_cell.006Action'
  | 'Sphere_cell.096_cell.007Action'
  | 'Sphere_cell.089_cellAction'
  | 'Sphere_cell.089_cell.001Action'
  | 'Sphere_cell.089_cell.003Action'
  | 'Sphere_cell.089_cell.006Action'
  | 'Sphere_cell.039_cellAction'
  | 'Sphere_cell.039_cell.001Action'
  | 'Sphere_cell.039_cell.002Action'
  | 'Sphere_cell.039_cell.004Action'
  | 'Sphere_cell.039_cell.005Action'
  | 'Sphere_cell.039_cell.006Action'
  | 'Sphere_cell.017_cell.001Action'
  | 'Sphere_cell.017_cell.002Action'
  | 'Sphere_cell.017_cell.004Action'
  | 'Sphere_cell.017_cell.005Action'
  | 'Sphere_cell.017_cell.006Action'
  | 'Sphere_cell.017_cell.007Action'
  | 'Sphere_cell.012_cellAction'
  | 'Sphere_cell.012_cell.001Action'
  | 'Sphere_cell.012_cell.002Action'
  | 'Sphere_cell.012_cell.003Action'
  | 'Sphere_cell.012_cell.004Action'
  | 'Sphere_cell.012_cell.006Action'
  | 'Sphere_cell.005_cellAction'
  | 'Sphere_cell.005_cell.002Action'
  | 'Sphere_cell.005_cell.003Action'
  | 'Sphere_cell.005_cell.005Action'
  | 'Sphere_cell.005_cell.006Action'
  | 'Sphere_cell.005_cell.001_cellAction'
  | 'Sphere_cell.005_cell.001_cell.001Action'
  | 'Sphere_cell.005_cell.001_cell.002Action'
  | 'Sphere_cell.005_cell.001_cell.003Action'
  | 'Sphere_cell.009_cell.007_cell.001Action'
  | 'Sphere_cell.009_cell.007_cell.002Action'
  | 'Sphere_cell.009_cell.007_cell.003Action'
  | 'Sphere_cell.009_cell.007_cell.004Action'
  | 'Sphere_cell.009_cell.007_cell.006Action'
  | 'Sphere_cell.009_cell.007_cell.007Action'
  | 'Sphere_cell.009_cell.005_cellAction'
  | 'Sphere_cell.009_cell.005_cell.001Action'
  | 'Sphere_cell.009_cell.005_cell.002Action'
  | 'Sphere_cell.009_cell.005_cell.004Action'
  | 'Sphere_cell.009_cell.005_cell.005Action'
  | 'Sphere_cell.009_cell.005_cell.006Action'
  | 'Sphere_cell.009_cell.005_cell.007Action'
  | 'Sphere_cell.009_cell.004_cell.002Action'
  | 'Sphere_cell.009_cell.004_cell.004Action'
  | 'Sphere_cell.009_cell.004_cell.005Action'
  | 'Sphere_cell.009_cell.004_cell.006Action'
  | 'Sphere_cell.009_cell.004_cell.007Action'
  | 'Sphere_cell.009_cell.003_cellAction'
  | 'Sphere_cell.009_cell.003_cell.001Action'
  | 'Sphere_cell.009_cell.003_cell.002Action'
  | 'Sphere_cell.009_cell.003_cell.003Action'
  | 'Sphere_cell.009_cell.003_cell.005Action'
  | 'Sphere_cell.009_cell.003_cell.006Action'
  | 'Sphere_cell.009_cell.003_cell.007Action'
  | 'Sphere_cell.009_cell.001_cellAction'
  | 'Sphere_cell.009_cell.001_cell.002Action'
  | 'Sphere_cell.009_cell.001_cell.004Action'
  | 'Sphere_cell.009_cell.001_cell.005Action'
  | 'Sphere_cell.009_cell.001_cell.006Action'
  | 'Sphere_cell.009_cell.001_cell.007Action'
  | 'Sphere_cell.009_cell_cellAction'
  | 'Sphere_cell.009_cell_cell.002Action'
  | 'Sphere_cell.009_cell_cell.003Action'
  | 'Sphere_cell.009_cell_cell.005Action'
  | 'Sphere_cell.009_cell_cell.006Action'
  | 'Sphere_cell.009_cell_cell.007Action'
  | 'Sphere_cell.031_cell.006_cell.001Action'
  | 'Sphere_cell.031_cell.006_cell.004Action'
  | 'Sphere_cell.031_cell.006_cell.005Action'
  | 'Sphere_cell.031_cell.006_cell.006Action'
  | 'Sphere_cell.031_cell.006_cell.007Action'
  | 'Sphere_cell.031_cell.005_cellAction'
  | 'Sphere_cell.031_cell.005_cell.001Action'
  | 'Sphere_cell.031_cell.005_cell.003Action'
  | 'Sphere_cell.031_cell.005_cell.004Action'
  | 'Sphere_cell.031_cell.005_cell.007Action'
  | 'Sphere_cell.031_cell.003_cellAction'
  | 'Sphere_cell.031_cell.003_cell.002Action'
  | 'Sphere_cell.031_cell.003_cell.003Action'
  | 'Sphere_cell.031_cell.003_cell.004Action'
  | 'Sphere_cell.031_cell.003_cell.006Action'
  | 'Sphere_cell.031_cell.002_cellAction'
  | 'Sphere_cell.031_cell.002_cell.002Action'
  | 'Sphere_cell.031_cell.002_cell.003Action'
  | 'Sphere_cell.031_cell.002_cell.004Action'
  | 'Sphere_cell.031_cell.002_cell.006Action'
  | 'Sphere_cell.031_cell.002_cell.007Action'
  | 'Sphere_cell.031_cell_cell.001Action'
  | 'Sphere_cell.031_cell_cell.002Action'
  | 'Sphere_cell.031_cell_cell.003Action'
  | 'Sphere_cell.031_cell_cell.004Action'
  | 'Sphere_cell.031_cell_cell.005Action'
  | 'Sphere_cell.089_cell.004_cell.002Action'
  | 'Sphere_cell.089_cell.004_cell.003Action'
  | 'Sphere_cell.089_cell.004_cell.005Action'
  | 'Sphere_cell.089_cell.004_cell.007Action'
  | 'Sphere_cell.089_cell.002_cellAction'
  | 'Sphere_cell.089_cell.002_cell.002Action'
  | 'Sphere_cell.089_cell.002_cell.003Action'
  | 'Sphere_cell.089_cell.002_cell.004Action'
  | 'Sphere_cell.089_cell.002_cell.005Action'
  | 'Sphere_cell.089_cell.002_cell.007Action'
  | 'Sphere_cell.096_cell.002_cell.002Action'
  | 'Sphere_cell.096_cell.002_cell.003Action'
  | 'Sphere_cell.096_cell.002_cell.004Action'
  | 'Sphere_cell.096_cell.002_cell.005Action'
  | 'Sphere_cell.136_cell.005_cellAction'
  | 'Sphere_cell.136_cell.005_cell.002Action'
  | 'Sphere_cell.136_cell.005_cell.003Action'
  | 'Sphere_cell.136_cell.005_cell.004Action'
  | 'Sphere_cell.136_cell.005_cell.005Action'
  | 'Sphere_cell.136_cell.005_cell.006Action'
  | 'Sphere_cell.136_cell.004_cellAction'
  | 'Sphere_cell.136_cell.004_cell.002Action'
  | 'Sphere_cell.136_cell.004_cell.003Action'
  | 'Sphere_cell.136_cell.004_cell.005Action'
  | 'Sphere_cell.136_cell.004_cell.006Action'
  | 'Sphere_cell.136_cell.004_cell.007Action'
  | 'Sphere_cell.136_cell.001_cellAction'
  | 'Sphere_cell.136_cell.001_cell.001Action'
  | 'Sphere_cell.136_cell.001_cell.003Action'
  | 'Sphere_cell.136_cell.001_cell.004Action'
  | 'Sphere_cell.136_cell.001_cell.005Action'
  | 'Sphere_cell.136_cell.001_cell.007Action'
  | 'Sphere_cell.153_cell.007_cellAction'
  | 'Sphere_cell.153_cell.007_cell.002Action'
  | 'Sphere_cell.153_cell.007_cell.003Action'
  | 'Sphere_cell.153_cell.007_cell.004Action'
  | 'Sphere_cell.153_cell.007_cell.005Action'
  | 'Sphere_cell.153_cell.007_cell.006Action'
  | 'Sphere_cell.153_cell.003_cell.001Action'
  | 'Sphere_cell.153_cell.003_cell.002Action'
  | 'Sphere_cell.153_cell.003_cell.004Action'
  | 'Sphere_cell.153_cell.003_cell.005Action'
  | 'Sphere_cell.153_cell.003_cell.006Action'
  | 'Sphere_cell.153_cell.003_cell.007Action'
  | 'Sphere_cell.153_cell.002_cellAction'
  | 'Sphere_cell.153_cell.002_cell.001Action'
  | 'Sphere_cell.153_cell.002_cell.002Action'
  | 'Sphere_cell.153_cell.002_cell.003Action'
  | 'Sphere_cell.153_cell.002_cell.004Action'
  | 'Sphere_cell.153_cell.002_cell.005Action'
  | 'Sphere_cell.153_cell.002_cell.007Action'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

const state = proxy({
  break: false,
  timerEnd: false,
})

function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/obj6.glb') as GLTFResult
  const { actions, names } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group position={[0.1, 4.95, 0]} rotation={[0.18, -0.25, -0.13]}>
          <mesh geometry={nodes.Cube.geometry} material={materials.Mat} position={[0, 0, 0]} rotation={[2.89, -0.26, 2.95]} scale={0.002} />
        </group>
        
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={0} />

        <group name="Sphere_cell005_cell001_cell003" position={[0.95, 7.19, -0.2]} scale={0.97} />
        <group name="Sphere_cell009_cell001_cell007" position={[-1.71, 3.08, -0.1]} scale={0.97} />
        <group name="Sphere_cell031_cell_cell001" position={[-1.06, 4.1, 2.55]} scale={0.97} />

        <group onClick={(e) => {    
        for(let i =0; i<names.length;i++){
          actions[names[i]]?.setLoop(THREE.LoopOnce,1);
          actions[names[i]]!.clampWhenFinished = true;
          actions[names[i]]?.play();
          state.break = true;          
        }}}>
        <mesh name="Sphere_cell006" geometry={nodes.Sphere_cell006.geometry} material={materials.Material} position={[0.44, 5.97, 2.33]} scale={0.97} />
        <mesh name="Sphere_cell008" geometry={nodes.Sphere_cell008.geometry} material={materials.Material} position={[0.71, 3.68, 0.18]} scale={0.97} />
        <mesh name="Sphere_cell034" geometry={nodes.Sphere_cell034.geometry} material={materials.Material} position={[-1.6, 3.36, 1.02]} scale={0.97} />
        <mesh name="Sphere_cell035" geometry={nodes.Sphere_cell035.geometry} material={materials.Material} position={[-1.41, 7.04, 0.49]} scale={0.97} />
        <mesh name="Sphere_cell037" geometry={nodes.Sphere_cell037.geometry} material={materials.Material} position={[-0.91, 3.34, -1.27]} scale={0.97} />
        <mesh name="Sphere_cell038" geometry={nodes.Sphere_cell038.geometry} material={materials.Material} position={[-1.85, 6.05, 1.94]} scale={0.97} />
        <mesh name="Sphere_cell041" geometry={nodes.Sphere_cell041.geometry} material={materials.Material} position={[-0.43, 2.81, -0.32]} scale={0.97} />
        <mesh name="Sphere_cell048" geometry={nodes.Sphere_cell048.geometry} material={materials.Material} position={[1.82, 5.04, 1.73]} scale={0.97} />
        <mesh name="Sphere_cell056" geometry={nodes.Sphere_cell056.geometry} material={materials.Material} position={[1.83, 3.38, 0.52]} scale={0.97} />
        <mesh name="Sphere_cell060" geometry={nodes.Sphere_cell060.geometry} material={materials.Material} position={[2.17, 4.43, -0.5]} scale={0.97} />
        <mesh name="Sphere_cell062" geometry={nodes.Sphere_cell062.geometry} material={materials.Material} position={[0.04, 7.33, 0.72]} scale={0.97} />
        <mesh name="Sphere_cell065" geometry={nodes.Sphere_cell065.geometry} material={materials.Material} position={[0.15, 3.86, 2.29]} scale={0.97} />
        <mesh name="Sphere_cell070" geometry={nodes.Sphere_cell070.geometry} material={materials.Material} position={[0.45, 5.53, -0.03]} scale={0.97} />
        <mesh name="Sphere_cell078" geometry={nodes.Sphere_cell078.geometry} material={materials.Material} position={[-0.31, 4.78, 2.67]} scale={0.97} />
        <mesh name="Sphere_cell084" geometry={nodes.Sphere_cell084.geometry} material={materials.Material} position={[-1.85, 5.61, -1.32]} scale={0.97} />
        <mesh name="Sphere_cell092" geometry={nodes.Sphere_cell092.geometry} material={materials.Material} position={[-2.11, 4.1, -0.74]} scale={0.97} />
        <mesh name="Sphere_cell094" geometry={nodes.Sphere_cell094.geometry} material={materials.Material} position={[-0.56, 7.17, -0.64]} scale={0.97} />
        <mesh name="Sphere_cell102" geometry={nodes.Sphere_cell102.geometry} material={materials.Material} position={[-1.7, 4.31, 2.16]} scale={0.97} />
        <mesh name="Sphere_cell104" geometry={nodes.Sphere_cell104.geometry} material={materials.Material} position={[0.82, 3.86, -1.86]} scale={0.97} />
        <mesh name="Sphere_cell105" geometry={nodes.Sphere_cell105.geometry} material={materials.Material} position={[1.84, 6.55, -0.24]} scale={0.97} />
        <mesh name="Sphere_cell106" geometry={nodes.Sphere_cell106.geometry} material={materials.Material} position={[0, 5.14, -2.21]} scale={0.97} />
        <mesh name="Sphere_cell107" geometry={nodes.Sphere_cell107.geometry} material={materials.Material} position={[0.44, 6.87, -1.25]} scale={0.97} />
        <mesh name="Sphere_cell111" geometry={nodes.Sphere_cell111.geometry} material={materials.Material} position={[-1.05, 5.34, -2.26]} scale={0.97} />
        <mesh name="Sphere_cell115" geometry={nodes.Sphere_cell115.geometry} material={materials.Material} position={[1.4, 5.41, -1.94]} scale={0.97} />
        <mesh name="Sphere_cell117" geometry={nodes.Sphere_cell117.geometry} material={materials.Material} position={[1.9, 5.83, -1.39]} scale={0.97} />
        <mesh name="Sphere_cell120" geometry={nodes.Sphere_cell120.geometry} material={materials.Material} position={[-0.91, 6.29, -0.63]} scale={0.97} />
        <mesh name="Sphere_cell123" geometry={nodes.Sphere_cell123.geometry} material={materials.Material} position={[0.42, 3.38, 1.57]} scale={0.97} />
        <mesh name="Sphere_cell127" geometry={nodes.Sphere_cell127.geometry} material={materials.Material} position={[-2.81, 5.27, 0.47]} scale={0.97} />
        <mesh name="Sphere_cell154" geometry={nodes.Sphere_cell154.geometry} material={materials.Material} position={[2.49, 4.89, 0.58]} scale={0.97} />
        <mesh name="Sphere_cell155" geometry={nodes.Sphere_cell155.geometry} material={materials.Material} position={[-1.15, 5.01, 0.6]} scale={0.97} />
        <mesh name="Sphere_cell153_cell" geometry={nodes.Sphere_cell153_cell.geometry} material={materials.Material} position={[1.2, 2.92, 0.15]} scale={0.97} />
        <mesh name="Sphere_cell153_cell001" geometry={nodes.Sphere_cell153_cell001.geometry} material={materials.Material} position={[0.69, 2.95, -0.44]} scale={0.97} />
        <mesh name="Sphere_cell153_cell004" geometry={nodes.Sphere_cell153_cell004.geometry} material={materials.Material} position={[0.74, 2.65, -0.11]} scale={0.97} />
        <mesh name="Sphere_cell136_cell003" geometry={nodes.Sphere_cell136_cell003.geometry} material={materials.Material} position={[-0.78, 3.88, -2.44]} scale={0.97} />
        <mesh name="Sphere_cell096_cell" geometry={nodes.Sphere_cell096_cell.geometry} material={materials.Material} position={[0.68, 2.66, -0.72]} scale={0.97} />
        <mesh name="Sphere_cell096_cell001" geometry={nodes.Sphere_cell096_cell001.geometry} material={materials.Material} position={[1.29, 3.63, -0.54]} scale={0.97} />
        <mesh name="Sphere_cell096_cell004" geometry={nodes.Sphere_cell096_cell004.geometry} material={materials.Material} position={[0.74, 2.92, -1.1]} scale={0.97} />
        <mesh name="Sphere_cell096_cell006" geometry={nodes.Sphere_cell096_cell006.geometry} material={materials.Material} position={[1.26, 3.14, -0.89]} scale={0.97} />
        <mesh name="Sphere_cell096_cell007" geometry={nodes.Sphere_cell096_cell007.geometry} material={materials.Material} position={[1.67, 3.21, -0.53]} scale={0.97} />
        <mesh name="Sphere_cell089_cell" geometry={nodes.Sphere_cell089_cell.geometry} material={materials.Material} position={[-0.51, 2.63, 0.61]} scale={0.97} />
        <mesh name="Sphere_cell089_cell001" geometry={nodes.Sphere_cell089_cell001.geometry} material={materials.Material} position={[-0.68, 2.75, 0.87]} scale={0.97} />
        <mesh name="Sphere_cell089_cell003" geometry={nodes.Sphere_cell089_cell003.geometry} material={materials.Material} position={[0.22, 2.48, -0.1]} scale={0.97} />
        <mesh name="Sphere_cell089_cell006" geometry={nodes.Sphere_cell089_cell006.geometry} material={materials.Material} position={[-0.1, 2.5, 0.21]} scale={0.97} />
        <mesh name="Sphere_cell039_cell" geometry={nodes.Sphere_cell039_cell.geometry} material={materials.Material} position={[-2.37, 6.43, 0.07]} scale={0.97} />
        <mesh name="Sphere_cell039_cell001" geometry={nodes.Sphere_cell039_cell001.geometry} material={materials.Material} position={[-2.28, 6.3, 0.51]} scale={0.97} />
        <mesh name="Sphere_cell039_cell002" geometry={nodes.Sphere_cell039_cell002.geometry} material={materials.Material} position={[-2.2, 6.89, 1.1]} scale={0.97} />
        <mesh name="Sphere_cell039_cell004" geometry={nodes.Sphere_cell039_cell004.geometry} material={materials.Material} position={[-2.64, 6.41, 0.33]} scale={0.97} />
        <mesh name="Sphere_cell039_cell005" geometry={nodes.Sphere_cell039_cell005.geometry} material={materials.Material} position={[-2.55, 6.55, 0.71]} scale={0.97} />
        <mesh name="Sphere_cell039_cell006" geometry={nodes.Sphere_cell039_cell006.geometry} material={materials.Material} position={[-2.21, 6.82, 0.55]} scale={0.97} />
        <mesh name="Sphere_cell017_cell001" geometry={nodes.Sphere_cell017_cell001.geometry} material={materials.Material} position={[-0.89, 6.58, -1.56]} scale={0.97} />
        <mesh name="Sphere_cell017_cell002" geometry={nodes.Sphere_cell017_cell002.geometry} material={materials.Material} position={[-0.46, 6.53, -1.69]} scale={0.97} />
        <mesh name="Sphere_cell017_cell004" geometry={nodes.Sphere_cell017_cell004.geometry} material={materials.Material} position={[-0.89, 6.8, -1.54]} scale={0.97} />
        <mesh name="Sphere_cell017_cell005" geometry={nodes.Sphere_cell017_cell005.geometry} material={materials.Material} position={[-0.62, 6.53, -1.84]} scale={0.97} />
        <mesh name="Sphere_cell017_cell006" geometry={nodes.Sphere_cell017_cell006.geometry} material={materials.Material} position={[-0.44, 6.77, -1.73]} scale={0.97} />
        <mesh name="Sphere_cell017_cell007" geometry={nodes.Sphere_cell017_cell007.geometry} material={materials.Material} position={[-1.16, 6.54, -1.71]} scale={0.97} />
        <mesh name="Sphere_cell012_cell" geometry={nodes.Sphere_cell012_cell.geometry} material={materials.Material} position={[0.75, 2.88, 1.19]} scale={0.97} />
        <mesh name="Sphere_cell012_cell001" geometry={nodes.Sphere_cell012_cell001.geometry} material={materials.Material} position={[0.02, 2.77, 1.19]} scale={0.97} />
        <mesh name="Sphere_cell012_cell002" geometry={nodes.Sphere_cell012_cell002.geometry} material={materials.Material} position={[-0.4, 2.78, 0.91]} scale={0.97} />
        <mesh name="Sphere_cell012_cell003" geometry={nodes.Sphere_cell012_cell003.geometry} material={materials.Material} position={[0.49, 2.73, 0.77]} scale={0.97} />
        <mesh name="Sphere_cell012_cell004" geometry={nodes.Sphere_cell012_cell004.geometry} material={materials.Material} position={[1.17, 2.93, 1.02]} scale={0.97} />
        <mesh name="Sphere_cell012_cell006" geometry={nodes.Sphere_cell012_cell006.geometry} material={materials.Material} position={[0.52, 2.56, 0.42]} scale={0.97} />
        <mesh name="Sphere_cell005_cell" geometry={nodes.Sphere_cell005_cell.geometry} material={materials.Material} position={[1.79, 6.75, 0.95]} scale={0.97} />
        <mesh name="Sphere_cell005_cell002" geometry={nodes.Sphere_cell005_cell002.geometry} material={materials.Material} position={[1.15, 7.04, 1.08]} scale={0.97} />
        <mesh name="Sphere_cell005_cell003" geometry={nodes.Sphere_cell005_cell003.geometry} material={materials.Material} position={[1.78, 6.74, 1.32]} scale={0.97} />
        <mesh name="Sphere_cell005_cell005" geometry={nodes.Sphere_cell005_cell005.geometry} material={materials.Material} position={[0.9, 7.3, 0.29]} scale={0.97} />
        <mesh name="Sphere_cell005_cell006" geometry={nodes.Sphere_cell005_cell006.geometry} material={materials.Material} position={[1.3, 7.09, 0.19]} scale={0.97} />
        <mesh name="Sphere_cell005_cell001_cell" geometry={nodes.Sphere_cell005_cell001_cell.geometry} material={materials.Material} position={[0.95, 7.19, -0.18]} scale={0.97} />
        <mesh name="Sphere_cell005_cell001_cell001" geometry={nodes.Sphere_cell005_cell001_cell001.geometry} material={materials.Material} position={[0.96, 7.19, -0.2]} scale={0.97} />
        <mesh name="Sphere_cell005_cell001_cell002" geometry={nodes.Sphere_cell005_cell001_cell002.geometry} material={materials.Material} position={[0.95, 7.18, -0.15]} scale={0.97} />
        <mesh name="Sphere_cell009_cell007_cell001" geometry={nodes.Sphere_cell009_cell007_cell001.geometry} material={materials.Material} position={[-1.72, 3.13, 0.09]} scale={0.97} />
        <mesh name="Sphere_cell009_cell007_cell002" geometry={nodes.Sphere_cell009_cell007_cell002.geometry} material={materials.Material} position={[-1.64, 3.06, 0.14]} scale={0.97} />
        <mesh name="Sphere_cell009_cell007_cell003" geometry={nodes.Sphere_cell009_cell007_cell003.geometry} material={materials.Material} position={[-1.7, 3.15, 0.16]} scale={0.97} />
        <mesh name="Sphere_cell009_cell007_cell004" geometry={nodes.Sphere_cell009_cell007_cell004.geometry} material={materials.Material} position={[-1.67, 3.1, 0.1]} scale={0.97} />
        <mesh name="Sphere_cell009_cell007_cell006" geometry={nodes.Sphere_cell009_cell007_cell006.geometry} material={materials.Material} position={[-1.73, 3.2, 0.14]} scale={0.97} />
        <mesh name="Sphere_cell009_cell007_cell007" geometry={nodes.Sphere_cell009_cell007_cell007.geometry} material={materials.Material} position={[-1.65, 3.09, 0.17]} scale={0.97} />
        <mesh name="Sphere_cell009_cell005_cell" geometry={nodes.Sphere_cell009_cell005_cell.geometry} material={materials.Material} position={[-1.69, 3.07, 0.25]} scale={0.97} />
        <mesh name="Sphere_cell009_cell005_cell001" geometry={nodes.Sphere_cell009_cell005_cell001.geometry} material={materials.Material} position={[-1.87, 3.24, 0.17]} scale={0.97} />
        <mesh name="Sphere_cell009_cell005_cell002" geometry={nodes.Sphere_cell009_cell005_cell002.geometry} material={materials.Material} position={[-1.76, 3.1, 0.13]} scale={0.97} />
        <mesh name="Sphere_cell009_cell005_cell004" geometry={nodes.Sphere_cell009_cell005_cell004.geometry} material={materials.Material} position={[-1.69, 3.04, 0.21]} scale={0.97} />
        <mesh name="Sphere_cell009_cell005_cell005" geometry={nodes.Sphere_cell009_cell005_cell005.geometry} material={materials.Material} position={[-1.7, 3.03, 0.26]} scale={0.97} />
        <mesh name="Sphere_cell009_cell005_cell006" geometry={nodes.Sphere_cell009_cell005_cell006.geometry} material={materials.Material} position={[-1.84, 3.19, 0.11]} scale={0.97} />
        <mesh name="Sphere_cell009_cell005_cell007" geometry={nodes.Sphere_cell009_cell005_cell007.geometry} material={materials.Material} position={[-1.79, 3.18, 0.15]} scale={0.97} />
        <mesh name="Sphere_cell009_cell004_cell002" geometry={nodes.Sphere_cell009_cell004_cell002.geometry} material={materials.Material} position={[-1.74, 3.09, -0.08]} scale={0.97} />
        <mesh name="Sphere_cell009_cell004_cell004" geometry={nodes.Sphere_cell009_cell004_cell004.geometry} material={materials.Material} position={[-1.84, 3.17, 0.07]} scale={0.97} />
        <mesh name="Sphere_cell009_cell004_cell005" geometry={nodes.Sphere_cell009_cell004_cell005.geometry} material={materials.Material} position={[-1.79, 3.14, -0.14]} scale={0.97} />
        <mesh name="Sphere_cell009_cell004_cell006" geometry={nodes.Sphere_cell009_cell004_cell006.geometry} material={materials.Material} position={[-1.82, 3.17, -0.02]} scale={0.97} />
        <mesh name="Sphere_cell009_cell004_cell007" geometry={nodes.Sphere_cell009_cell004_cell007.geometry} material={materials.Material} position={[-1.84, 3.24, 0.03]} scale={0.97} />
        <mesh name="Sphere_cell009_cell003_cell" geometry={nodes.Sphere_cell009_cell003_cell.geometry} material={materials.Material} position={[-1.63, 3.05, 0.28]} scale={0.97} />
        <mesh name="Sphere_cell009_cell003_cell001" geometry={nodes.Sphere_cell009_cell003_cell001.geometry} material={materials.Material} position={[-1.62, 3.05, 0.24]} scale={0.97} />
        <mesh name="Sphere_cell009_cell003_cell002" geometry={nodes.Sphere_cell009_cell003_cell002.geometry} material={materials.Material} position={[-1.62, 2.99, 0.32]} scale={0.97} />
        <mesh name="Sphere_cell009_cell003_cell003" geometry={nodes.Sphere_cell009_cell003_cell003.geometry} material={materials.Material} position={[-1.62, 3.03, 0.31]} scale={0.97} />
        <mesh name="Sphere_cell009_cell003_cell005" geometry={nodes.Sphere_cell009_cell003_cell005.geometry} material={materials.Material} position={[-1.57, 2.95, 0.33]} scale={0.97} />
        <mesh name="Sphere_cell009_cell003_cell006" geometry={nodes.Sphere_cell009_cell003_cell006.geometry} material={materials.Material} position={[-1.59, 2.99, 0.26]} scale={0.97} />
        <mesh name="Sphere_cell009_cell003_cell007" geometry={nodes.Sphere_cell009_cell003_cell007.geometry} material={materials.Material} position={[-1.64, 3.02, 0.24]} scale={0.97} />
        <mesh name="Sphere_cell009_cell001_cell" geometry={nodes.Sphere_cell009_cell001_cell.geometry} material={materials.Material} position={[-1.79, 3.23, 0.08]} scale={0.97} />
        <mesh name="Sphere_cell009_cell001_cell002" geometry={nodes.Sphere_cell009_cell001_cell002.geometry} material={materials.Material} position={[-1.75, 3.15, -0.01]} scale={0.97} />
        <mesh name="Sphere_cell009_cell001_cell004" geometry={nodes.Sphere_cell009_cell001_cell004.geometry} material={materials.Material} position={[-1.78, 3.26, 0.12]} scale={0.97} />
        <mesh name="Sphere_cell009_cell001_cell005" geometry={nodes.Sphere_cell009_cell001_cell005.geometry} material={materials.Material} position={[-1.83, 3.26, 0.11]} scale={0.97} />
        <mesh name="Sphere_cell009_cell001_cell006" geometry={nodes.Sphere_cell009_cell001_cell006.geometry} material={materials.Material} position={[-1.75, 3.14, 0.04]} scale={0.97} />
        <mesh name="Sphere_cell009_cell_cell" geometry={nodes.Sphere_cell009_cell_cell.geometry} material={materials.Material} position={[-1.67, 3.03, 0.17]} scale={0.97} />
        <mesh name="Sphere_cell009_cell_cell002" geometry={nodes.Sphere_cell009_cell_cell002.geometry} material={materials.Material} position={[-1.69, 3.06, 0.01]} scale={0.97} />
        <mesh name="Sphere_cell009_cell_cell003" geometry={nodes.Sphere_cell009_cell_cell003.geometry} material={materials.Material} position={[-1.59, 2.98, 0.08]} scale={0.97} />
        <mesh name="Sphere_cell009_cell_cell005" geometry={nodes.Sphere_cell009_cell_cell005.geometry} material={materials.Material} position={[-1.62, 3, 0.19]} scale={0.97} />
        <mesh name="Sphere_cell009_cell_cell006" geometry={nodes.Sphere_cell009_cell_cell006.geometry} material={materials.Material} position={[-1.71, 3.07, 0.08]} scale={0.97} />
        <mesh name="Sphere_cell009_cell_cell007" geometry={nodes.Sphere_cell009_cell_cell007.geometry} material={materials.Material} position={[-1.64, 3.04, 0.11]} scale={0.97} />
        <mesh name="Sphere_cell031_cell006_cell001" geometry={nodes.Sphere_cell031_cell006_cell001.geometry} material={materials.Material} position={[-1.42, 4.65, 2.62]} scale={0.97} />
        <mesh name="Sphere_cell031_cell006_cell004" geometry={nodes.Sphere_cell031_cell006_cell004.geometry} material={materials.Material} position={[-1.42, 4.73, 2.62]} scale={0.97} />
        <mesh name="Sphere_cell031_cell006_cell005" geometry={nodes.Sphere_cell031_cell006_cell005.geometry} material={materials.Material} position={[-1.41, 4.78, 2.63]} scale={0.97} />
        <mesh name="Sphere_cell031_cell006_cell006" geometry={nodes.Sphere_cell031_cell006_cell006.geometry} material={materials.Material} position={[-1.39, 4.66, 2.61]} scale={0.97} />
        <mesh name="Sphere_cell031_cell006_cell007" geometry={nodes.Sphere_cell031_cell006_cell007.geometry} material={materials.Material} position={[-1.38, 4.69, 2.64]} scale={0.97} />
        <mesh name="Sphere_cell031_cell005_cell" geometry={nodes.Sphere_cell031_cell005_cell.geometry} material={materials.Material} position={[-1.42, 4.83, 2.64]} scale={0.97} />
        <mesh name="Sphere_cell031_cell005_cell001" geometry={nodes.Sphere_cell031_cell005_cell001.geometry} material={materials.Material} position={[-1.37, 4.72, 2.68]} scale={0.97} />
        <mesh name="Sphere_cell031_cell005_cell003" geometry={nodes.Sphere_cell031_cell005_cell003.geometry} material={materials.Material} position={[-1.42, 4.79, 2.66]} scale={0.97} />
        <mesh name="Sphere_cell031_cell005_cell004" geometry={nodes.Sphere_cell031_cell005_cell004.geometry} material={materials.Material} position={[-1.54, 4.69, 2.65]} scale={0.97} />
        <mesh name="Sphere_cell031_cell005_cell007" geometry={nodes.Sphere_cell031_cell005_cell007.geometry} material={materials.Material} position={[-1.46, 4.86, 2.64]} scale={0.97} />
        <mesh name="Sphere_cell031_cell003_cell" geometry={nodes.Sphere_cell031_cell003_cell.geometry} material={materials.Material} position={[-1.23, 4.41, 2.64]} scale={0.97} />
        <mesh name="Sphere_cell031_cell003_cell002" geometry={nodes.Sphere_cell031_cell003_cell002.geometry} material={materials.Material} position={[-1.35, 4.64, 2.65]} scale={0.97} />
        <mesh name="Sphere_cell031_cell003_cell003" geometry={nodes.Sphere_cell031_cell003_cell003.geometry} material={materials.Material} position={[-1.27, 4.55, 2.68]} scale={0.97} />
        <mesh name="Sphere_cell031_cell003_cell004" geometry={nodes.Sphere_cell031_cell003_cell004.geometry} material={materials.Material} position={[-1.32, 4.56, 2.64]} scale={0.97} />
        <mesh name="Sphere_cell031_cell003_cell006" geometry={nodes.Sphere_cell031_cell003_cell006.geometry} material={materials.Material} position={[-1.18, 4.31, 2.57]} scale={0.97} />
        <mesh name="Sphere_cell031_cell002_cell" geometry={nodes.Sphere_cell031_cell002_cell.geometry} material={materials.Material} position={[-1.14, 4.24, 2.6]} scale={0.97} />
        <mesh name="Sphere_cell031_cell002_cell002" geometry={nodes.Sphere_cell031_cell002_cell002.geometry} material={materials.Material} position={[-1.15, 4.29, 2.63]} scale={0.97} />
        <mesh name="Sphere_cell031_cell002_cell003" geometry={nodes.Sphere_cell031_cell002_cell003.geometry} material={materials.Material} position={[-1.11, 4.2, 2.59]} scale={0.97} />
        <mesh name="Sphere_cell031_cell002_cell004" geometry={nodes.Sphere_cell031_cell002_cell004.geometry} material={materials.Material} position={[-1.15, 4.33, 2.68]} scale={0.97} />
        <mesh name="Sphere_cell031_cell002_cell006" geometry={nodes.Sphere_cell031_cell002_cell006.geometry} material={materials.Material} position={[-1.12, 4.24, 2.63]} scale={0.97} />
        <mesh name="Sphere_cell031_cell002_cell007" geometry={nodes.Sphere_cell031_cell002_cell007.geometry} material={materials.Material} position={[-1.09, 4.17, 2.59]} scale={0.97} />
        <mesh name="Sphere_cell031_cell_cell002" geometry={nodes.Sphere_cell031_cell_cell002.geometry} material={materials.Material} position={[-1.15, 4.19, 2.57]} scale={0.97} />
        <mesh name="Sphere_cell031_cell_cell003" geometry={nodes.Sphere_cell031_cell_cell003.geometry} material={materials.Material} position={[-1.1, 4.17, 2.57]} scale={0.97} />
        <mesh name="Sphere_cell031_cell_cell004" geometry={nodes.Sphere_cell031_cell_cell004.geometry} material={materials.Material} position={[-1.12, 4.17, 2.57]} scale={0.97} />
        <mesh name="Sphere_cell031_cell_cell005" geometry={nodes.Sphere_cell031_cell_cell005.geometry} material={materials.Material} position={[-1.09, 4.14, 2.56]} scale={0.97} />
        <mesh name="Sphere_cell089_cell004_cell002" geometry={nodes.Sphere_cell089_cell004_cell002.geometry} material={materials.Material} position={[-0.91, 2.76, 0.81]} scale={0.97} />
        <mesh name="Sphere_cell089_cell004_cell003" geometry={nodes.Sphere_cell089_cell004_cell003.geometry} material={materials.Material} position={[-1.02, 2.7, 0.66]} scale={0.97} />
        <mesh name="Sphere_cell089_cell004_cell005" geometry={nodes.Sphere_cell089_cell004_cell005.geometry} material={materials.Material} position={[-0.95, 2.79, 0.9]} scale={0.97} />
        <mesh name="Sphere_cell089_cell004_cell007" geometry={nodes.Sphere_cell089_cell004_cell007.geometry} material={materials.Material} position={[-0.9, 2.77, 0.86]} scale={0.97} />
        <mesh name="Sphere_cell089_cell002_cell" geometry={nodes.Sphere_cell089_cell002_cell.geometry} material={materials.Material} position={[0.07, 2.47, 0.52]} scale={0.97} />
        <mesh name="Sphere_cell089_cell002_cell002" geometry={nodes.Sphere_cell089_cell002_cell002.geometry} material={materials.Material} position={[0.31, 2.46, 0.22]} scale={0.97} />
        <mesh name="Sphere_cell089_cell002_cell003" geometry={nodes.Sphere_cell089_cell002_cell003.geometry} material={materials.Material} position={[0.3, 2.54, 0.21]} scale={0.97} />
        <mesh name="Sphere_cell089_cell002_cell004" geometry={nodes.Sphere_cell089_cell002_cell004.geometry} material={materials.Material} position={[0.17, 2.48, 0.37]} scale={0.97} />
        <mesh name="Sphere_cell089_cell002_cell005" geometry={nodes.Sphere_cell089_cell002_cell005.geometry} material={materials.Material} position={[0.22, 2.51, 0.19]} scale={0.97} />
        <mesh name="Sphere_cell089_cell002_cell007" geometry={nodes.Sphere_cell089_cell002_cell007.geometry} material={materials.Material} position={[0.4, 2.51, 0.17]} scale={0.97} />
        <mesh name="Sphere_cell096_cell002_cell002" geometry={nodes.Sphere_cell096_cell002_cell002.geometry} material={materials.Material} position={[1.04, 2.68, -0.36]} scale={0.97} />
        <mesh name="Sphere_cell096_cell002_cell003" geometry={nodes.Sphere_cell096_cell002_cell003.geometry} material={materials.Material} position={[0.9, 2.63, -0.45]} scale={0.97} />
        <mesh name="Sphere_cell096_cell002_cell004" geometry={nodes.Sphere_cell096_cell002_cell004.geometry} material={materials.Material} position={[0.95, 2.65, -0.42]} scale={0.97} />
        <mesh name="Sphere_cell096_cell002_cell005" geometry={nodes.Sphere_cell096_cell002_cell005.geometry} material={materials.Material} position={[1.13, 2.72, -0.29]} scale={0.97} />
        <mesh name="Sphere_cell136_cell005_cell" geometry={nodes.Sphere_cell136_cell005_cell.geometry} material={materials.Material} position={[-1.09, 4.24, -2.61]} scale={0.97} />
        <mesh name="Sphere_cell136_cell005_cell002" geometry={nodes.Sphere_cell136_cell005_cell002.geometry} material={materials.Material} position={[-1.08, 4.16, -2.48]} scale={0.97} />
        <mesh name="Sphere_cell136_cell005_cell003" geometry={nodes.Sphere_cell136_cell005_cell003.geometry} material={materials.Material} position={[-1.14, 4.08, -2.35]} scale={0.97} />
        <mesh name="Sphere_cell136_cell005_cell004" geometry={nodes.Sphere_cell136_cell005_cell004.geometry} material={materials.Material} position={[-1.01, 4.04, -2.33]} scale={0.97} />
        <mesh name="Sphere_cell136_cell005_cell005" geometry={nodes.Sphere_cell136_cell005_cell005.geometry} material={materials.Material} position={[-1.07, 3.91, -2.32]} scale={0.97} />
        <mesh name="Sphere_cell136_cell005_cell006" geometry={nodes.Sphere_cell136_cell005_cell006.geometry} material={materials.Material} position={[-1.28, 4.11, -2.27]} scale={0.97} />
        <mesh name="Sphere_cell136_cell004_cell" geometry={nodes.Sphere_cell136_cell004_cell.geometry} material={materials.Material} position={[-0.55, 3.51, -2.28]} scale={0.97} />
        <mesh name="Sphere_cell136_cell004_cell002" geometry={nodes.Sphere_cell136_cell004_cell002.geometry} material={materials.Material} position={[-0.72, 3.61, -2.29]} scale={0.97} />
        <mesh name="Sphere_cell136_cell004_cell003" geometry={nodes.Sphere_cell136_cell004_cell003.geometry} material={materials.Material} position={[-0.4, 3.46, -2.29]} scale={0.97} />
        <mesh name="Sphere_cell136_cell004_cell005" geometry={nodes.Sphere_cell136_cell004_cell005.geometry} material={materials.Material} position={[-0.45, 3.57, -2.37]} scale={0.97} />
        <mesh name="Sphere_cell136_cell004_cell006" geometry={nodes.Sphere_cell136_cell004_cell006.geometry} material={materials.Material} position={[-0.68, 3.69, -2.26]} scale={0.97} />
        <mesh name="Sphere_cell136_cell004_cell007" geometry={nodes.Sphere_cell136_cell004_cell007.geometry} material={materials.Material} position={[-0.56, 3.66, -2.36]} scale={0.97} />
        <mesh name="Sphere_cell136_cell001_cell" geometry={nodes.Sphere_cell136_cell001_cell.geometry} material={materials.Material} position={[-0.85, 3.62, -2.26]} scale={0.97} />
        <mesh name="Sphere_cell136_cell001_cell001" geometry={nodes.Sphere_cell136_cell001_cell001.geometry} material={materials.Material} position={[-0.89, 3.75, -2.28]} scale={0.97} />
        <mesh name="Sphere_cell136_cell001_cell003" geometry={nodes.Sphere_cell136_cell001_cell003.geometry} material={materials.Material} position={[-1.01, 3.83, -2.29]} scale={0.97} />
        <mesh name="Sphere_cell136_cell001_cell004" geometry={nodes.Sphere_cell136_cell001_cell004.geometry} material={materials.Material} position={[-1.06, 3.77, -2.27]} scale={0.97} />
        <mesh name="Sphere_cell136_cell001_cell005" geometry={nodes.Sphere_cell136_cell001_cell005.geometry} material={materials.Material} position={[-0.84, 3.62, -2.28]} scale={0.97} />
        <mesh name="Sphere_cell136_cell001_cell007" geometry={nodes.Sphere_cell136_cell001_cell007.geometry} material={materials.Material} position={[-0.94, 3.71, -2.29]} scale={0.97} />
        <mesh name="Sphere_cell153_cell007_cell" geometry={nodes.Sphere_cell153_cell007_cell.geometry} material={materials.Material} position={[0.61, 3.01, -0.23]} scale={0.97} />
        <mesh name="Sphere_cell153_cell007_cell002" geometry={nodes.Sphere_cell153_cell007_cell002.geometry} material={materials.Material} position={[0.68, 3, -0.13]} scale={0.97} />
        <mesh name="Sphere_cell153_cell007_cell003" geometry={nodes.Sphere_cell153_cell007_cell003.geometry} material={materials.Material} position={[0.81, 3.09, -0.13]} scale={0.97} />
        <mesh name="Sphere_cell153_cell007_cell004" geometry={nodes.Sphere_cell153_cell007_cell004.geometry} material={materials.Material} position={[0.72, 3.1, -0.25]} scale={0.97} />
        <mesh name="Sphere_cell153_cell007_cell005" geometry={nodes.Sphere_cell153_cell007_cell005.geometry} material={materials.Material} position={[0.61, 2.97, -0.15]} scale={0.97} />
        <mesh name="Sphere_cell153_cell007_cell006" geometry={nodes.Sphere_cell153_cell007_cell006.geometry} material={materials.Material} position={[0.84, 3.17, -0.22]} scale={0.97} />
        <mesh name="Sphere_cell153_cell003_cell001" geometry={nodes.Sphere_cell153_cell003_cell001.geometry} material={materials.Material} position={[1.2, 2.74, 0.03]} scale={0.97} />
        <mesh name="Sphere_cell153_cell003_cell002" geometry={nodes.Sphere_cell153_cell003_cell002.geometry} material={materials.Material} position={[1.12, 2.71, -0.09]} scale={0.97} />
        <mesh name="Sphere_cell153_cell003_cell004" geometry={nodes.Sphere_cell153_cell003_cell004.geometry} material={materials.Material} position={[1.11, 2.79, -0.28]} scale={0.97} />
        <mesh name="Sphere_cell153_cell003_cell005" geometry={nodes.Sphere_cell153_cell003_cell005.geometry} material={materials.Material} position={[1.1, 2.72, -0.24]} scale={0.97} />
        <mesh name="Sphere_cell153_cell003_cell006" geometry={nodes.Sphere_cell153_cell003_cell006.geometry} material={materials.Material} position={[1.17, 2.79, -0.16]} scale={0.97} />
        <mesh name="Sphere_cell153_cell003_cell007" geometry={nodes.Sphere_cell153_cell003_cell007.geometry} material={materials.Material} position={[1.32, 2.8, -0.05]} scale={0.97} />
        <mesh name="Sphere_cell153_cell002_cell" geometry={nodes.Sphere_cell153_cell002_cell.geometry} material={materials.Material} position={[0.5, 2.59, -0.67]} scale={0.97} />
        <mesh name="Sphere_cell153_cell002_cell001" geometry={nodes.Sphere_cell153_cell002_cell001.geometry} material={materials.Material} position={[0.56, 2.6, -0.6]} scale={0.97} />
        <mesh name="Sphere_cell153_cell002_cell002" geometry={nodes.Sphere_cell153_cell002_cell002.geometry} material={materials.Material} position={[0.49, 2.55, -0.57]} scale={0.97} />
        <mesh name="Sphere_cell153_cell002_cell003" geometry={nodes.Sphere_cell153_cell002_cell003.geometry} material={materials.Material} position={[0.56, 2.64, -0.65]} scale={0.97} />
        <mesh name="Sphere_cell153_cell002_cell004" geometry={nodes.Sphere_cell153_cell002_cell004.geometry} material={materials.Material} position={[0.63, 2.64, -0.59]} scale={0.97} />
        <mesh name="Sphere_cell153_cell002_cell005" geometry={nodes.Sphere_cell153_cell002_cell005.geometry} material={materials.Material} position={[0.43, 2.5, -0.51]} scale={0.97} />
        <mesh name="Sphere_cell153_cell002_cell007" geometry={nodes.Sphere_cell153_cell002_cell007.geometry} material={materials.Material} position={[0.62, 2.57, -0.58]} scale={0.97} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/obj6.glb')


function ClickityClick(props:any) {
  const snap = useSnapshot(state)
  let button;
  let obj;   
  const updateName = (name: boolean):void => {
    state.timerEnd = name
    console.log(state.timerEnd)
}
  if(state.break && !state.timerEnd){
    button = <Timer time={30} updateName={updateName}/>;
  } else if(state.timerEnd){
    button=<LoginButton/>
  } else{
    button=<LoginButton/>
  }
  // if (isLoggedIn) {
  //   // button = <Timer time={30} updateName={updateName}/>;
  //   obj = <Obj3D/>;
  // } else if(!name){
  //     button = <p>Salut</p>
  // }
  // else {
  //   button = <LoginButton onClick={this.handleLoginClick} />;
  //   console.log(this.state.name)
  // //   updateName(true);
  // }

  return (
    <div className="Loader">
      {button}
      {/* {obj} */}
    </div>
  );

}




function LoginButton(props:any) {
  return (
  <p>Cliquez sur le rocher pour commencer l'expérience</p>
  );
}


function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <div className='load'>
    <Lottie animationData={loading}/>
    </div>
    </Html>
}


export default function Rock(){
  return(
    <div>
    <Canvas shadows camera={{position:[15,7,0]}} >
    <fog attach="fog" args={["white",10,30]}/>
    <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} zoomSpeed={.3} />
      <hemisphereLight
      groundColor={new THREE.Color(0xffffff)}
      intensity={0.1}
      position={[0, 50, 0]}
      />
      <directionalLight
      color={new THREE.Color(0xffffff)}
      intensity={0.4}
      position={[-8, 12, 8]}
      castShadow
      />
      <Environment preset="city" />
      <Suspense fallback={<Loader/>} >
        <Model />
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={1} width={10} height={10} blur={1.5} far={8} />
      </Suspense>
      
      <Plane
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      args={[5000, 5000,1,1]}
      >
    {/* <axesHelper /> */}
    <meshStandardMaterial attach="material" color="white" />
    </Plane>
    </Canvas>
    <ClickityClick/>
    </div>
  )
}