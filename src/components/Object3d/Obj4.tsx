import * as THREE from 'three'
import React, { Suspense, useEffect, useRef } from 'react'
import { useGLTF, useAnimations, OrbitControls, Environment, ContactShadows, Plane, useProgress, Html } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { proxy, useSnapshot } from 'valtio'
import Obj3D from './app'
import { Canvas } from '@react-three/fiber'
import Timer from '../Timer'
import Lottie from "lottie-react";
import loading from "../lottie/loading.json";

interface GLTFAction extends THREE.AnimationClip {
   name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Plane: THREE.Mesh
    Sphere_cell: THREE.Mesh
    Sphere_cell001: THREE.Mesh
    Sphere_cell002: THREE.Mesh
    Sphere_cell003: THREE.Mesh
    Sphere_cell004: THREE.Mesh
    Sphere_cell007: THREE.Mesh
    Sphere_cell010: THREE.Mesh
    Sphere_cell011: THREE.Mesh
    Sphere_cell013: THREE.Mesh
    Sphere_cell014: THREE.Mesh
    Sphere_cell015: THREE.Mesh
    Sphere_cell016: THREE.Mesh
    Sphere_cell018: THREE.Mesh
    Sphere_cell020: THREE.Mesh
    Sphere_cell021: THREE.Mesh
    Sphere_cell022: THREE.Mesh
    Sphere_cell023: THREE.Mesh
    Sphere_cell024: THREE.Mesh
    Sphere_cell025: THREE.Mesh
    Sphere_cell026: THREE.Mesh
    Sphere_cell027: THREE.Mesh
    Sphere_cell029: THREE.Mesh
    Sphere_cell030: THREE.Mesh
    Sphere_cell032: THREE.Mesh
    Sphere_cell033: THREE.Mesh
    Sphere_cell036: THREE.Mesh
    Sphere_cell040: THREE.Mesh
    Sphere_cell042: THREE.Mesh
    Sphere_cell043: THREE.Mesh
    Sphere_cell044: THREE.Mesh
    Sphere_cell046: THREE.Mesh
    Sphere_cell047: THREE.Mesh
    Sphere_cell049: THREE.Mesh
    Sphere_cell050: THREE.Mesh
    Sphere_cell051: THREE.Mesh
    Sphere_cell053: THREE.Mesh
    Sphere_cell054: THREE.Mesh
    Sphere_cell055: THREE.Mesh
    Sphere_cell057: THREE.Mesh
    Sphere_cell058: THREE.Mesh
    Sphere_cell059: THREE.Mesh
    Sphere_cell061: THREE.Mesh
    Sphere_cell063: THREE.Mesh
    Sphere_cell064: THREE.Mesh
    Sphere_cell066: THREE.Mesh
    Sphere_cell067: THREE.Mesh
    Sphere_cell068: THREE.Mesh
    Sphere_cell069: THREE.Mesh
    Sphere_cell071: THREE.Mesh
    Sphere_cell073: THREE.Mesh
    Sphere_cell074: THREE.Mesh
    Sphere_cell075: THREE.Mesh
    Sphere_cell076: THREE.Mesh
    Sphere_cell077: THREE.Mesh
    Sphere_cell079: THREE.Mesh
    Sphere_cell080: THREE.Mesh
    Sphere_cell081: THREE.Mesh
    Sphere_cell083: THREE.Mesh
    Sphere_cell085: THREE.Mesh
    Sphere_cell086: THREE.Mesh
    Sphere_cell087: THREE.Mesh
    Sphere_cell088: THREE.Mesh
    Sphere_cell090: THREE.Mesh
    Sphere_cell091: THREE.Mesh
    Sphere_cell093: THREE.Mesh
    Sphere_cell095: THREE.Mesh
    Sphere_cell097: THREE.Mesh
    Sphere_cell098: THREE.Mesh
    Sphere_cell100: THREE.Mesh
    Sphere_cell101: THREE.Mesh
    Sphere_cell103: THREE.Mesh
    Sphere_cell108: THREE.Mesh
    Sphere_cell109: THREE.Mesh
    Sphere_cell110: THREE.Mesh
    Sphere_cell112: THREE.Mesh
    Sphere_cell113: THREE.Mesh
    Sphere_cell114: THREE.Mesh
    Sphere_cell116: THREE.Mesh
    Sphere_cell118: THREE.Mesh
    Sphere_cell119: THREE.Mesh
    Sphere_cell121: THREE.Mesh
    Sphere_cell122: THREE.Mesh
    Sphere_cell124: THREE.Mesh
    Sphere_cell125: THREE.Mesh
    Sphere_cell126: THREE.Mesh
    Sphere_cell128: THREE.Mesh
    Sphere_cell129: THREE.Mesh
    Sphere_cell130: THREE.Mesh
    Sphere_cell131: THREE.Mesh
    Sphere_cell132: THREE.Mesh
    Sphere_cell133: THREE.Mesh
    Sphere_cell134: THREE.Mesh
    Sphere_cell135: THREE.Mesh
    Sphere_cell137: THREE.Mesh
    Sphere_cell138: THREE.Mesh
    Sphere_cell139: THREE.Mesh
    Sphere_cell140: THREE.Mesh
    Sphere_cell141: THREE.Mesh
    Sphere_cell142: THREE.Mesh
    Sphere_cell144: THREE.Mesh
    Sphere_cell145: THREE.Mesh
    Sphere_cell146: THREE.Mesh
    Sphere_cell147: THREE.Mesh
    Sphere_cell149: THREE.Mesh
    Sphere_cell150: THREE.Mesh
    Sphere_cell151: THREE.Mesh
    Sphere_cell152: THREE.Mesh
    Sphere_cell156: THREE.Mesh
    Sphere_cell157: THREE.Mesh
    Sphere_cell158: THREE.Mesh
    Sphere_cell159: THREE.Mesh
    Sphere_cell160: THREE.Mesh
    Sphere_cell161: THREE.Mesh
    Sphere_cell162: THREE.Mesh
    Sphere_cell163: THREE.Mesh
    Sphere_cell164: THREE.Mesh
    Sphere_cell165: THREE.Mesh
    Sphere_cell168: THREE.Mesh
    Sphere_cell170: THREE.Mesh
    Sphere_cell171: THREE.Mesh
    Sphere_cell172: THREE.Mesh
    Sphere_cell173: THREE.Mesh
    Sphere_cell175: THREE.Mesh
    Sphere_cell176: THREE.Mesh
    Sphere_cell177: THREE.Mesh
    Sphere_cell179: THREE.Mesh
    Sphere_cell183: THREE.Mesh
    Sphere_cell185: THREE.Mesh
    Sphere_cell186: THREE.Mesh
    Sphere_cell188: THREE.Mesh
    Sphere_cell190: THREE.Mesh
    Sphere_cell191: THREE.Mesh
    Sphere_cell192: THREE.Mesh
    Sphere_cell193: THREE.Mesh
    Sphere_cell194: THREE.Mesh
    Sphere_cell196: THREE.Mesh
    Sphere_cell199: THREE.Mesh
    Sphere_cell202: THREE.Mesh
    Sphere_cell203: THREE.Mesh
    Sphere_cell204: THREE.Mesh
    Sphere_cell208: THREE.Mesh
    Sphere_cell210: THREE.Mesh
    Sphere_cell212: THREE.Mesh
    Sphere_cell214: THREE.Mesh
    Sphere_cell215: THREE.Mesh
    Sphere_cell216: THREE.Mesh
    Sphere_cell220: THREE.Mesh
    Sphere_cell221: THREE.Mesh
    Sphere_cell222: THREE.Mesh
    Sphere_cell223: THREE.Mesh
    Sphere_cell224: THREE.Mesh
    Sphere_cell225: THREE.Mesh
    Sphere_cell230: THREE.Mesh
    Sphere_cell231: THREE.Mesh
    Sphere_cell233: THREE.Mesh
    Sphere_cell237: THREE.Mesh
    Sphere_cell238: THREE.Mesh
    Sphere_cell240: THREE.Mesh
    Sphere_cell241: THREE.Mesh
    Sphere_cell242: THREE.Mesh
    Sphere_cell243: THREE.Mesh
    Sphere_cell247: THREE.Mesh
    Sphere_cell253: THREE.Mesh
    Sphere_cell256: THREE.Mesh
    Sphere_cell257: THREE.Mesh
    Sphere_cell258: THREE.Mesh
    Sphere_cell259: THREE.Mesh
    Sphere_cell262: THREE.Mesh
    Sphere_cell267: THREE.Mesh
    Sphere_cell275: THREE.Mesh
    Sphere_cell278: THREE.Mesh
    Sphere_cell280: THREE.Mesh
    Sphere_cell283: THREE.Mesh
    Sphere_cell284: THREE.Mesh
    Sphere_cell286: THREE.Mesh
    Sphere_cell282_cell: THREE.Mesh
    Sphere_cell282_cell001: THREE.Mesh
    Sphere_cell282_cell002: THREE.Mesh
    Sphere_cell282_cell003: THREE.Mesh
    Sphere_cell282_cell004: THREE.Mesh
    Sphere_cell282_cell005: THREE.Mesh
    Sphere_cell282_cell006: THREE.Mesh
    Sphere_cell282_cell007: THREE.Mesh
    Sphere_cell281_cell: THREE.Mesh
    Sphere_cell281_cell001: THREE.Mesh
    Sphere_cell281_cell002: THREE.Mesh
    Sphere_cell281_cell003: THREE.Mesh
    Sphere_cell281_cell004: THREE.Mesh
    Sphere_cell281_cell006: THREE.Mesh
    Sphere_cell279_cell: THREE.Mesh
    Sphere_cell279_cell001: THREE.Mesh
    Sphere_cell279_cell002: THREE.Mesh
    Sphere_cell279_cell003: THREE.Mesh
    Sphere_cell279_cell004: THREE.Mesh
    Sphere_cell279_cell005: THREE.Mesh
    Sphere_cell279_cell007: THREE.Mesh
    Sphere_cell255_cell: THREE.Mesh
    Sphere_cell255_cell001: THREE.Mesh
    Sphere_cell255_cell004: THREE.Mesh
    Sphere_cell255_cell005: THREE.Mesh
    Sphere_cell255_cell007: THREE.Mesh
    Sphere_cell254_cell001: THREE.Mesh
    Sphere_cell254_cell002: THREE.Mesh
    Sphere_cell254_cell003: THREE.Mesh
    Sphere_cell254_cell004: THREE.Mesh
    Sphere_cell254_cell005: THREE.Mesh
    Sphere_cell254_cell007: THREE.Mesh
    Sphere_cell250_cell: THREE.Mesh
    Sphere_cell250_cell001: THREE.Mesh
    Sphere_cell250_cell002: THREE.Mesh
    Sphere_cell250_cell003: THREE.Mesh
    Sphere_cell250_cell004: THREE.Mesh
    Sphere_cell250_cell005: THREE.Mesh
    Sphere_cell250_cell006: THREE.Mesh
    Sphere_cell246_cell: THREE.Mesh
    Sphere_cell246_cell002: THREE.Mesh
    Sphere_cell246_cell003: THREE.Mesh
    Sphere_cell246_cell005: THREE.Mesh
    Sphere_cell246_cell006: THREE.Mesh
    Sphere_cell244_cell001: THREE.Mesh
    Sphere_cell244_cell002: THREE.Mesh
    Sphere_cell244_cell003: THREE.Mesh
    Sphere_cell244_cell004: THREE.Mesh
    Sphere_cell244_cell005: THREE.Mesh
    Sphere_cell244_cell006: THREE.Mesh
    Sphere_cell244_cell007: THREE.Mesh
    Sphere_cell232_cell001: THREE.Mesh
    Sphere_cell232_cell003: THREE.Mesh
    Sphere_cell232_cell005: THREE.Mesh
    Sphere_cell232_cell006: THREE.Mesh
    Sphere_cell232_cell007: THREE.Mesh
    Sphere_cell227_cell: THREE.Mesh
    Sphere_cell227_cell001: THREE.Mesh
    Sphere_cell227_cell002: THREE.Mesh
    Sphere_cell227_cell003: THREE.Mesh
    Sphere_cell227_cell005: THREE.Mesh
    Sphere_cell227_cell006: THREE.Mesh
    Sphere_cell206_cell001: THREE.Mesh
    Sphere_cell206_cell002: THREE.Mesh
    Sphere_cell206_cell003: THREE.Mesh
    Sphere_cell206_cell004: THREE.Mesh
    Sphere_cell206_cell005: THREE.Mesh
    Sphere_cell206_cell006: THREE.Mesh
    Sphere_cell206_cell007: THREE.Mesh
    Sphere_cell201_cell: THREE.Mesh
    Sphere_cell201_cell001: THREE.Mesh
    Sphere_cell201_cell002: THREE.Mesh
    Sphere_cell201_cell004: THREE.Mesh
    Sphere_cell201_cell005: THREE.Mesh
    Sphere_cell201_cell006: THREE.Mesh
    Sphere_cell201_cell007: THREE.Mesh
  }
  materials: {
    Mat: THREE.MeshLambertMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[];
}

type ActionName =
  | 'Sphere_cellAction'
  | 'Sphere_cell.001Action'
  | 'Sphere_cell.002Action'
  | 'Sphere_cell.003Action'
  | 'Sphere_cell.004Action'
  | 'Sphere_cell.007Action'
  | 'Sphere_cell.010Action'
  | 'Sphere_cell.011Action'
  | 'Sphere_cell.013Action'
  | 'Sphere_cell.014Action'
  | 'Sphere_cell.015Action'
  | 'Sphere_cell.016Action'
  | 'Sphere_cell.018Action'
  | 'Sphere_cell.020Action'
  | 'Sphere_cell.021Action'
  | 'Sphere_cell.022Action'
  | 'Sphere_cell.023Action'
  | 'Sphere_cell.024Action'
  | 'Sphere_cell.025Action'
  | 'Sphere_cell.026Action'
  | 'Sphere_cell.027Action'
  | 'Sphere_cell.029Action'
  | 'Sphere_cell.030Action'
  | 'Sphere_cell.032Action'
  | 'Sphere_cell.033Action'
  | 'Sphere_cell.036Action'
  | 'Sphere_cell.040Action'
  | 'Sphere_cell.042Action'
  | 'Sphere_cell.043Action'
  | 'Sphere_cell.044Action'
  | 'Sphere_cell.046Action'
  | 'Sphere_cell.047Action'
  | 'Sphere_cell.049Action'
  | 'Sphere_cell.050Action'
  | 'Sphere_cell.051Action'
  | 'Sphere_cell.053Action'
  | 'Sphere_cell.054Action'
  | 'Sphere_cell.055Action'
  | 'Sphere_cell.057Action'
  | 'Sphere_cell.058Action'
  | 'Sphere_cell.059Action'
  | 'Sphere_cell.061Action'
  | 'Sphere_cell.063Action'
  | 'Sphere_cell.064Action'
  | 'Sphere_cell.066Action'
  | 'Sphere_cell.067Action'
  | 'Sphere_cell.068Action'
  | 'Sphere_cell.069Action'
  | 'Sphere_cell.071Action'
  | 'Sphere_cell.073Action'
  | 'Sphere_cell.074Action'
  | 'Sphere_cell.075Action'
  | 'Sphere_cell.076Action'
  | 'Sphere_cell.077Action'
  | 'Sphere_cell.079Action'
  | 'Sphere_cell.080Action'
  | 'Sphere_cell.081Action'
  | 'Sphere_cell.083Action'
  | 'Sphere_cell.085Action'
  | 'Sphere_cell.086Action'
  | 'Sphere_cell.087Action'
  | 'Sphere_cell.088Action'
  | 'Sphere_cell.090Action'
  | 'Sphere_cell.091Action'
  | 'Sphere_cell.093Action'
  | 'Sphere_cell.095Action'
  | 'Sphere_cell.097Action'
  | 'Sphere_cell.098Action'
  | 'Sphere_cell.100Action'
  | 'Sphere_cell.101Action'
  | 'Sphere_cell.103Action'
  | 'Sphere_cell.108Action'
  | 'Sphere_cell.109Action'
  | 'Sphere_cell.110Action'
  | 'Sphere_cell.112Action'
  | 'Sphere_cell.113Action'
  | 'Sphere_cell.114Action'
  | 'Sphere_cell.116Action'
  | 'Sphere_cell.118Action'
  | 'Sphere_cell.119Action'
  | 'Sphere_cell.121Action'
  | 'Sphere_cell.122Action'
  | 'Sphere_cell.124Action'
  | 'Sphere_cell.125Action'
  | 'Sphere_cell.126Action'
  | 'Sphere_cell.128Action'
  | 'Sphere_cell.129Action'
  | 'Sphere_cell.130Action'
  | 'Sphere_cell.131Action'
  | 'Sphere_cell.132Action'
  | 'Sphere_cell.133Action'
  | 'Sphere_cell.134Action'
  | 'Sphere_cell.135Action'
  | 'Sphere_cell.137Action'
  | 'Sphere_cell.138Action'
  | 'Sphere_cell.139Action'
  | 'Sphere_cell.140Action'
  | 'Sphere_cell.141Action'
  | 'Sphere_cell.142Action'
  | 'Sphere_cell.144Action'
  | 'Sphere_cell.145Action'
  | 'Sphere_cell.146Action'
  | 'Sphere_cell.147Action'
  | 'Sphere_cell.149Action'
  | 'Sphere_cell.150Action'
  | 'Sphere_cell.151Action'
  | 'Sphere_cell.152Action'
  | 'Sphere_cell.156Action'
  | 'Sphere_cell.157Action'
  | 'Sphere_cell.158Action'
  | 'Sphere_cell.159Action'
  | 'Sphere_cell.160Action'
  | 'Sphere_cell.161Action'
  | 'Sphere_cell.162Action'
  | 'Sphere_cell.163Action'
  | 'Sphere_cell.164Action'
  | 'Sphere_cell.165Action'
  | 'Sphere_cell.168Action'
  | 'Sphere_cell.170Action'
  | 'Sphere_cell.171Action'
  | 'Sphere_cell.172Action'
  | 'Sphere_cell.173Action'
  | 'Sphere_cell.175Action'
  | 'Sphere_cell.176Action'
  | 'Sphere_cell.177Action'
  | 'Sphere_cell.179Action'
  | 'Sphere_cell.183Action'
  | 'Sphere_cell.185Action'
  | 'Sphere_cell.186Action'
  | 'Sphere_cell.188Action'
  | 'Sphere_cell.190Action'
  | 'Sphere_cell.191Action'
  | 'Sphere_cell.192Action'
  | 'Sphere_cell.193Action'
  | 'Sphere_cell.194Action'
  | 'Sphere_cell.196Action'
  | 'Sphere_cell.199Action'
  | 'Sphere_cell.202Action'
  | 'Sphere_cell.203Action'
  | 'Sphere_cell.204Action'
  | 'Sphere_cell.208Action'
  | 'Sphere_cell.210Action'
  | 'Sphere_cell.212Action'
  | 'Sphere_cell.214Action'
  | 'Sphere_cell.215Action'
  | 'Sphere_cell.216Action'
  | 'Sphere_cell.220Action'
  | 'Sphere_cell.221Action'
  | 'Sphere_cell.222Action'
  | 'Sphere_cell.223Action'
  | 'Sphere_cell.224Action'
  | 'Sphere_cell.225Action'
  | 'Sphere_cell.230Action'
  | 'Sphere_cell.231Action'
  | 'Sphere_cell.233Action'
  | 'Sphere_cell.237Action'
  | 'Sphere_cell.238Action'
  | 'Sphere_cell.240Action'
  | 'Sphere_cell.241Action'
  | 'Sphere_cell.242Action'
  | 'Sphere_cell.243Action'
  | 'Sphere_cell.247Action'
  | 'Sphere_cell.253Action'
  | 'Sphere_cell.256Action'
  | 'Sphere_cell.257Action'
  | 'Sphere_cell.258Action'
  | 'Sphere_cell.259Action'
  | 'Sphere_cell.262Action'
  | 'Sphere_cell.267Action'
  | 'Sphere_cell.275Action'
  | 'Sphere_cell.278Action'
  | 'Sphere_cell.280Action'
  | 'Sphere_cell.283Action'
  | 'Sphere_cell.284Action'
  | 'Sphere_cell.286Action'
  | 'Sphere_cell.282_cellAction'
  | 'Sphere_cell.282_cell.001Action'
  | 'Sphere_cell.282_cell.002Action'
  | 'Sphere_cell.282_cell.003Action'
  | 'Sphere_cell.282_cell.004Action'
  | 'Sphere_cell.282_cell.005Action'
  | 'Sphere_cell.282_cell.006Action'
  | 'Sphere_cell.282_cell.007Action'
  | 'Sphere_cell.281_cellAction'
  | 'Sphere_cell.281_cell.001Action'
  | 'Sphere_cell.281_cell.002Action'
  | 'Sphere_cell.281_cell.003Action'
  | 'Sphere_cell.281_cell.004Action'
  | 'Sphere_cell.281_cell.006Action'
  | 'Sphere_cell.279_cellAction'
  | 'Sphere_cell.279_cell.001Action'
  | 'Sphere_cell.279_cell.002Action'
  | 'Sphere_cell.279_cell.003Action'
  | 'Sphere_cell.279_cell.004Action'
  | 'Sphere_cell.279_cell.005Action'
  | 'Sphere_cell.279_cell.007Action'
  | 'Sphere_cell.255_cellAction'
  | 'Sphere_cell.255_cell.001Action'
  | 'Sphere_cell.255_cell.004Action'
  | 'Sphere_cell.255_cell.005Action'
  | 'Sphere_cell.255_cell.007Action'
  | 'Sphere_cell.254_cell.001Action'
  | 'Sphere_cell.254_cell.002Action'
  | 'Sphere_cell.254_cell.003Action'
  | 'Sphere_cell.254_cell.004Action'
  | 'Sphere_cell.254_cell.005Action'
  | 'Sphere_cell.254_cell.007Action'
  | 'Sphere_cell.250_cellAction'
  | 'Sphere_cell.250_cell.001Action'
  | 'Sphere_cell.250_cell.002Action'
  | 'Sphere_cell.250_cell.003Action'
  | 'Sphere_cell.250_cell.004Action'
  | 'Sphere_cell.250_cell.005Action'
  | 'Sphere_cell.250_cell.006Action'
  | 'Sphere_cell.246_cellAction'
  | 'Sphere_cell.246_cell.002Action'
  | 'Sphere_cell.246_cell.003Action'
  | 'Sphere_cell.246_cell.005Action'
  | 'Sphere_cell.246_cell.006Action'
  | 'Sphere_cell.244_cell.001Action'
  | 'Sphere_cell.244_cell.002Action'
  | 'Sphere_cell.244_cell.003Action'
  | 'Sphere_cell.244_cell.004Action'
  | 'Sphere_cell.244_cell.005Action'
  | 'Sphere_cell.244_cell.006Action'
  | 'Sphere_cell.244_cell.007Action'
  | 'Sphere_cell.232_cell.001Action'
  | 'Sphere_cell.232_cell.003Action'
  | 'Sphere_cell.232_cell.005Action'
  | 'Sphere_cell.232_cell.006Action'
  | 'Sphere_cell.232_cell.007Action'
  | 'Sphere_cell.227_cellAction'
  | 'Sphere_cell.227_cell.001Action'
  | 'Sphere_cell.227_cell.002Action'
  | 'Sphere_cell.227_cell.003Action'
  | 'Sphere_cell.227_cell.005Action'
  | 'Sphere_cell.227_cell.006Action'
  | 'Sphere_cell.206_cell.001Action'
  | 'Sphere_cell.206_cell.002Action'
  | 'Sphere_cell.206_cell.003Action'
  | 'Sphere_cell.206_cell.004Action'
  | 'Sphere_cell.206_cell.005Action'
  | 'Sphere_cell.206_cell.006Action'
  | 'Sphere_cell.206_cell.007Action'
  | 'Sphere_cell.201_cellAction'
  | 'Sphere_cell.201_cell.001Action'
  | 'Sphere_cell.201_cell.002Action'
  | 'Sphere_cell.201_cell.004Action'
  | 'Sphere_cell.201_cell.005Action'
  | 'Sphere_cell.201_cell.006Action'
  | 'Sphere_cell.201_cell.007Action'
type GLTFActions = Record<ActionName, THREE.AnimationAction>


const state = proxy({
  break: false,
  timerEnd: false,
})




function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/obj4.glb') as GLTFResult
  const { actions, names } = useAnimations(animations, group)
  return (
    <group ref={group}  dispose={null}>
      <group >
        <group position={[0.1, 4.95, 0]} rotation={[0.18, -0.25, -0.13]}>
          <mesh geometry={nodes.Cube.geometry} material={materials.Mat} position={[0, 0, 0]} rotation={[2.89, -0.26, 2.95]} scale={0.002} />
        </group>
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={0} />
        <group onClick={(e) => {    
        for(let i =0; i<names.length;i++){
          actions[names[i]]?.setLoop(THREE.LoopOnce,1);
          actions[names[i]]!.clampWhenFinished = true;
          actions[names[i]]?.play();
          state.break = true;          
        }}}>
        <mesh name="Sphere_cell" geometry={nodes.Sphere_cell.geometry} material={materials['Material.001']} position={[0.01, 6.66, 0.81]} scale={0.95} />
        <mesh name="Sphere_cell001" geometry={nodes.Sphere_cell001.geometry} material={materials['Material.001']} position={[1.2, 6.61, -0.08]} scale={0.95} />
        <mesh name="Sphere_cell002" geometry={nodes.Sphere_cell002.geometry} material={materials['Material.001']} position={[0.37, 4.36, 1.96]} scale={0.95} />
        <mesh name="Sphere_cell003" geometry={nodes.Sphere_cell003.geometry} material={materials['Material.001']} position={[-0.35, 2.73, 0.06]} scale={0.95} />
        <mesh name="Sphere_cell004" geometry={nodes.Sphere_cell004.geometry} material={materials['Material.001']} position={[0.37, 3.83, -1.87]} scale={0.95} />
        <mesh name="Sphere_cell007" geometry={nodes.Sphere_cell007.geometry} material={materials['Material.001']} position={[1.06, 2.91, -0.52]} scale={0.95} />
        <mesh name="Sphere_cell010" geometry={nodes.Sphere_cell010.geometry} material={materials['Material.001']} position={[0.41, 6.84, -0.2]} scale={0.95} />
        <mesh name="Sphere_cell011" geometry={nodes.Sphere_cell011.geometry} material={materials['Material.001']} position={[0.05, 2.79, 0.36]} scale={0.95} />
        <mesh name="Sphere_cell013" geometry={nodes.Sphere_cell013.geometry} material={materials['Material.001']} position={[0.02, 3.63, 0.91]} scale={0.95} />
        <mesh name="Sphere_cell014" geometry={nodes.Sphere_cell014.geometry} material={materials['Material.001']} position={[-1.23, 2.93, 0.28]} scale={0.95} />
        <mesh name="Sphere_cell015" geometry={nodes.Sphere_cell015.geometry} material={materials['Material.001']} position={[-1.16, 3.72, 1.32]} scale={0.95} />
        <mesh name="Sphere_cell016" geometry={nodes.Sphere_cell016.geometry} material={materials['Material.001']} position={[1.58, 3.24, -0.53]} scale={0.95} />
        <mesh name="Sphere_cell018" geometry={nodes.Sphere_cell018.geometry} material={materials['Material.001']} position={[-1.07, 3.17, -0.12]} scale={0.95} />
        <mesh name="Sphere_cell020" geometry={nodes.Sphere_cell020.geometry} material={materials['Material.001']} position={[0.7, 5.69, -1.6]} scale={0.95} />
        <mesh name="Sphere_cell021" geometry={nodes.Sphere_cell021.geometry} material={materials['Material.001']} position={[1.57, 6.24, -0.57]} scale={0.95} />
        <mesh name="Sphere_cell022" geometry={nodes.Sphere_cell022.geometry} material={materials['Material.001']} position={[-1.05, 6.05, 0.53]} scale={0.95} />
        <mesh name="Sphere_cell023" geometry={nodes.Sphere_cell023.geometry} material={materials['Material.001']} position={[0.18, 6.52, -0.98]} scale={0.95} />
        <mesh name="Sphere_cell024" geometry={nodes.Sphere_cell024.geometry} material={materials['Material.001']} position={[-0.86, 5.84, 1.09]} scale={0.95} />
        <mesh name="Sphere_cell025" geometry={nodes.Sphere_cell025.geometry} material={materials['Material.001']} position={[-1.61, 5.21, 1.66]} scale={0.95} />
        <mesh name="Sphere_cell026" geometry={nodes.Sphere_cell026.geometry} material={materials['Material.001']} position={[-1.35, 5.08, 0.94]} scale={0.95} />
        <mesh name="Sphere_cell027" geometry={nodes.Sphere_cell027.geometry} material={materials['Material.001']} position={[-0.14, 6.18, -1.15]} scale={0.95} />
        <mesh name="Sphere_cell029" geometry={nodes.Sphere_cell029.geometry} material={materials['Material.001']} position={[0.66, 6.44, 0.9]} scale={0.95} />
        <mesh name="Sphere_cell030" geometry={nodes.Sphere_cell030.geometry} material={materials['Material.001']} position={[-0.65, 4.47, -1.84]} scale={0.95} />
        <mesh name="Sphere_cell032" geometry={nodes.Sphere_cell032.geometry} material={materials['Material.001']} position={[-1.52, 5.31, 1.32]} scale={0.95} />
        <mesh name="Sphere_cell033" geometry={nodes.Sphere_cell033.geometry} material={materials['Material.001']} position={[-0.41, 6.11, 0.9]} scale={0.95} />
        <mesh name="Sphere_cell036" geometry={nodes.Sphere_cell036.geometry} material={materials['Material.001']} position={[-0.63, 2.82, 0.51]} scale={0.95} />
        <mesh name="Sphere_cell040" geometry={nodes.Sphere_cell040.geometry} material={materials['Material.001']} position={[2.44, 3.77, -0.4]} scale={0.95} />
        <mesh name="Sphere_cell042" geometry={nodes.Sphere_cell042.geometry} material={materials['Material.001']} position={[-0.91, 5.21, -0.71]} scale={0.95} />
        <mesh name="Sphere_cell043" geometry={nodes.Sphere_cell043.geometry} material={materials['Material.001']} position={[-1.94, 3.91, 0.73]} scale={0.95} />
        <mesh name="Sphere_cell044" geometry={nodes.Sphere_cell044.geometry} material={materials['Material.001']} position={[1.07, 4.53, 1.73]} scale={0.95} />
        <mesh name="Sphere_cell046" geometry={nodes.Sphere_cell046.geometry} material={materials['Material.001']} position={[-2.05, 5.11, 1.1]} scale={0.95} />
        <mesh name="Sphere_cell047" geometry={nodes.Sphere_cell047.geometry} material={materials['Material.001']} position={[-1.47, 3.4, 0.52]} scale={0.95} />
        <mesh name="Sphere_cell049" geometry={nodes.Sphere_cell049.geometry} material={materials['Material.001']} position={[0.64, 6.59, 0.36]} scale={0.95} />
        <mesh name="Sphere_cell050" geometry={nodes.Sphere_cell050.geometry} material={materials['Material.001']} position={[0.16, 5.78, 1.45]} scale={0.95} />
        <mesh name="Sphere_cell051" geometry={nodes.Sphere_cell051.geometry} material={materials['Material.001']} position={[-1.57, 5.4, -1.22]} scale={0.95} />
        <mesh name="Sphere_cell053" geometry={nodes.Sphere_cell053.geometry} material={materials['Material.001']} position={[2.32, 4.85, 0.28]} scale={0.95} />
        <mesh name="Sphere_cell054" geometry={nodes.Sphere_cell054.geometry} material={materials['Material.001']} position={[-1.11, 6.01, -0.98]} scale={0.95} />
        <mesh name="Sphere_cell055" geometry={nodes.Sphere_cell055.geometry} material={materials['Material.001']} position={[2.63, 4.2, -1.11]} scale={0.95} />
        <mesh name="Sphere_cell057" geometry={nodes.Sphere_cell057.geometry} material={materials['Material.001']} position={[1.36, 4.04, 1.41]} scale={0.95} />
        <mesh name="Sphere_cell058" geometry={nodes.Sphere_cell058.geometry} material={materials['Material.001']} position={[2.17, 4.99, 0.87]} scale={0.95} />
        <mesh name="Sphere_cell059" geometry={nodes.Sphere_cell059.geometry} material={materials['Material.001']} position={[-1.54, 6.2, -0.46]} scale={0.95} />
        <mesh name="Sphere_cell061" geometry={nodes.Sphere_cell061.geometry} material={materials['Material.001']} position={[-0.09, 4.2, -0.48]} scale={0.95} />
        <mesh name="Sphere_cell063" geometry={nodes.Sphere_cell063.geometry} material={materials['Material.001']} position={[-0.9, 3.05, 0.99]} scale={0.95} />
        <mesh name="Sphere_cell064" geometry={nodes.Sphere_cell064.geometry} material={materials['Material.001']} position={[0.47, 6.78, -0.49]} scale={0.95} />
        <mesh name="Sphere_cell066" geometry={nodes.Sphere_cell066.geometry} material={materials['Material.001']} position={[1.95, 5.4, 0.75]} scale={0.95} />
        <mesh name="Sphere_cell067" geometry={nodes.Sphere_cell067.geometry} material={materials['Material.001']} position={[-2.08, 3.89, -0.22]} scale={0.95} />
        <mesh name="Sphere_cell068" geometry={nodes.Sphere_cell068.geometry} material={materials['Material.001']} position={[-1.39, 5.79, 0.86]} scale={0.95} />
        <mesh name="Sphere_cell069" geometry={nodes.Sphere_cell069.geometry} material={materials['Material.001']} position={[-0.73, 5.24, 1.78]} scale={0.95} />
        <mesh name="Sphere_cell071" geometry={nodes.Sphere_cell071.geometry} material={materials['Material.001']} position={[-1.16, 5.65, -0.34]} scale={0.95} />
        <mesh name="Sphere_cell073" geometry={nodes.Sphere_cell073.geometry} material={materials['Material.001']} position={[0.54, 3.45, 0.96]} scale={0.95} />
        <mesh name="Sphere_cell074" geometry={nodes.Sphere_cell074.geometry} material={materials['Material.001']} position={[-1.12, 3.26, -0.63]} scale={0.95} />
        <mesh name="Sphere_cell075" geometry={nodes.Sphere_cell075.geometry} material={materials['Material.001']} position={[2.31, 5.42, -1.29]} scale={0.95} />
        <mesh name="Sphere_cell076" geometry={nodes.Sphere_cell076.geometry} material={materials['Material.001']} position={[1.4, 4.73, 1.19]} scale={0.95} />
        <mesh name="Sphere_cell077" geometry={nodes.Sphere_cell077.geometry} material={materials['Material.001']} position={[-0.59, 4.42, -0.17]} scale={0.95} />
        <mesh name="Sphere_cell079" geometry={nodes.Sphere_cell079.geometry} material={materials['Material.001']} position={[-0.84, 2.94, -0.51]} scale={0.95} />
        <mesh name="Sphere_cell080" geometry={nodes.Sphere_cell080.geometry} material={materials['Material.001']} position={[-0.04, 4.17, 2.29]} scale={0.95} />
        <mesh name="Sphere_cell081" geometry={nodes.Sphere_cell081.geometry} material={materials['Material.001']} position={[-0.96, 5.97, -1.31]} scale={0.95} />
        <mesh name="Sphere_cell083" geometry={nodes.Sphere_cell083.geometry} material={materials['Material.001']} position={[1.14, 5.34, -1.88]} scale={0.95} />
        <mesh name="Sphere_cell085" geometry={nodes.Sphere_cell085.geometry} material={materials['Material.001']} position={[-2.21, 4.73, 0.31]} scale={0.95} />
        <mesh name="Sphere_cell086" geometry={nodes.Sphere_cell086.geometry} material={materials['Material.001']} position={[1.14, 3.24, -1.13]} scale={0.95} />
        <mesh name="Sphere_cell087" geometry={nodes.Sphere_cell087.geometry} material={materials['Material.001']} position={[0.08, 3.13, -0.99]} scale={0.95} />
        <mesh name="Sphere_cell088" geometry={nodes.Sphere_cell088.geometry} material={materials['Material.001']} position={[1.45, 5.97, 0.7]} scale={0.95} />
        <mesh name="Sphere_cell090" geometry={nodes.Sphere_cell090.geometry} material={materials['Material.001']} position={[0.93, 5.56, 1.42]} scale={0.95} />
        <mesh name="Sphere_cell091" geometry={nodes.Sphere_cell091.geometry} material={materials['Material.001']} position={[-0.53, 5.4, -0.85]} scale={0.95} />
        <mesh name="Sphere_cell093" geometry={nodes.Sphere_cell093.geometry} material={materials['Material.001']} position={[0.55, 3.88, -1]} scale={0.95} />
        <mesh name="Sphere_cell095" geometry={nodes.Sphere_cell095.geometry} material={materials['Material.001']} position={[1.54, 5.61, -1.2]} scale={0.95} />
        <mesh name="Sphere_cell097" geometry={nodes.Sphere_cell097.geometry} material={materials['Material.001']} position={[2.17, 4.69, -1.73]} scale={0.95} />
        <mesh name="Sphere_cell098" geometry={nodes.Sphere_cell098.geometry} material={materials['Material.001']} position={[-0.38, 3.98, 2.02]} scale={0.95} />
        <mesh name="Sphere_cell100" geometry={nodes.Sphere_cell100.geometry} material={materials['Material.001']} position={[-1.87, 5.01, -0.97]} scale={0.95} />
        <mesh name="Sphere_cell101" geometry={nodes.Sphere_cell101.geometry} material={materials['Material.001']} position={[-0.53, 2.84, -0.26]} scale={0.95} />
        <mesh name="Sphere_cell103" geometry={nodes.Sphere_cell103.geometry} material={materials['Material.001']} position={[1.06, 4.13, 1.59]} scale={0.95} />
        <mesh name="Sphere_cell108" geometry={nodes.Sphere_cell108.geometry} material={materials['Material.001']} position={[0.6, 2.89, 0.28]} scale={0.95} />
        <mesh name="Sphere_cell109" geometry={nodes.Sphere_cell109.geometry} material={materials['Material.001']} position={[0.31, 2.8, -0.15]} scale={0.95} />
        <mesh name="Sphere_cell110" geometry={nodes.Sphere_cell110.geometry} material={materials['Material.001']} position={[2.4, 4, 0.17]} scale={0.95} />
        <mesh name="Sphere_cell112" geometry={nodes.Sphere_cell112.geometry} material={materials['Material.001']} position={[1.45, 6.42, 0.11]} scale={0.95} />
        <mesh name="Sphere_cell113" geometry={nodes.Sphere_cell113.geometry} material={materials['Material.001']} position={[2.28, 4.48, 0.18]} scale={0.95} />
        <mesh name="Sphere_cell114" geometry={nodes.Sphere_cell114.geometry} material={materials['Material.001']} position={[-1.93, 5.62, -0.52]} scale={0.95} />
        <mesh name="Sphere_cell116" geometry={nodes.Sphere_cell116.geometry} material={materials['Material.001']} position={[0.24, 6.56, -0.78]} scale={0.95} />
        <mesh name="Sphere_cell118" geometry={nodes.Sphere_cell118.geometry} material={materials['Material.001']} position={[-0.31, 3.46, -1.4]} scale={0.95} />
        <mesh name="Sphere_cell119" geometry={nodes.Sphere_cell119.geometry} material={materials['Material.001']} position={[-0.45, 2.97, -0.59]} scale={0.95} />
        <mesh name="Sphere_cell121" geometry={nodes.Sphere_cell121.geometry} material={materials['Material.001']} position={[-0.4, 3.45, 1.41]} scale={0.95} />
        <mesh name="Sphere_cell122" geometry={nodes.Sphere_cell122.geometry} material={materials['Material.001']} position={[0.2, 6.87, 0.1]} scale={0.95} />
        <mesh name="Sphere_cell124" geometry={nodes.Sphere_cell124.geometry} material={materials['Material.001']} position={[1.93, 4.3, 0.81]} scale={0.95} />
        <mesh name="Sphere_cell125" geometry={nodes.Sphere_cell125.geometry} material={materials['Material.001']} position={[-0.31, 6.15, 1.33]} scale={0.95} />
        <mesh name="Sphere_cell126" geometry={nodes.Sphere_cell126.geometry} material={materials['Material.001']} position={[-2.17, 5.02, -0.57]} scale={0.95} />
        <mesh name="Sphere_cell128" geometry={nodes.Sphere_cell128.geometry} material={materials['Material.001']} position={[1, 4.96, 1.71]} scale={0.95} />
        <mesh name="Sphere_cell129" geometry={nodes.Sphere_cell129.geometry} material={materials['Material.001']} position={[0.87, 4.37, -1.78]} scale={0.95} />
        <mesh name="Sphere_cell130" geometry={nodes.Sphere_cell130.geometry} material={materials['Material.001']} position={[2.26, 5.82, -0.87]} scale={0.95} />
        <mesh name="Sphere_cell131" geometry={nodes.Sphere_cell131.geometry} material={materials['Material.001']} position={[0.97, 6.44, -0.57]} scale={0.95} />
        <mesh name="Sphere_cell132" geometry={nodes.Sphere_cell132.geometry} material={materials['Material.001']} position={[-1.96, 5.57, 0.87]} scale={0.95} />
        <mesh name="Sphere_cell133" geometry={nodes.Sphere_cell133.geometry} material={materials['Material.001']} position={[0.62, 4.88, 1.02]} scale={0.95} />
        <mesh name="Sphere_cell134" geometry={nodes.Sphere_cell134.geometry} material={materials['Material.001']} position={[2.08, 5.66, -0.13]} scale={0.95} />
        <mesh name="Sphere_cell135" geometry={nodes.Sphere_cell135.geometry} material={materials['Material.001']} position={[-1.05, 4.2, 1.64]} scale={0.95} />
        <mesh name="Sphere_cell137" geometry={nodes.Sphere_cell137.geometry} material={materials['Material.001']} position={[0.1, 2.69, 0.04]} scale={0.95} />
        <mesh name="Sphere_cell138" geometry={nodes.Sphere_cell138.geometry} material={materials['Material.001']} position={[-1.66, 3.93, -0.73]} scale={0.95} />
        <mesh name="Sphere_cell139" geometry={nodes.Sphere_cell139.geometry} material={materials['Material.001']} position={[2.61, 4.9, -1.36]} scale={0.95} />
        <mesh name="Sphere_cell140" geometry={nodes.Sphere_cell140.geometry} material={materials['Material.001']} position={[0.03, 3.77, 1.9]} scale={0.95} />
        <mesh name="Sphere_cell141" geometry={nodes.Sphere_cell141.geometry} material={materials['Material.001']} position={[-0.83, 6.47, -0.41]} scale={0.95} />
        <mesh name="Sphere_cell142" geometry={nodes.Sphere_cell142.geometry} material={materials['Material.001']} position={[-0.19, 4.35, -1.08]} scale={0.95} />
        <mesh name="Sphere_cell144" geometry={nodes.Sphere_cell144.geometry} material={materials['Material.001']} position={[0.1, 6.32, -1.31]} scale={0.95} />
        <mesh name="Sphere_cell145" geometry={nodes.Sphere_cell145.geometry} material={materials['Material.001']} position={[2.67, 5.07, -0.46]} scale={0.95} />
        <mesh name="Sphere_cell146" geometry={nodes.Sphere_cell146.geometry} material={materials['Material.001']} position={[-1.79, 4.43, 1.06]} scale={0.95} />
        <mesh name="Sphere_cell147" geometry={nodes.Sphere_cell147.geometry} material={materials['Material.001']} position={[0.56, 3.78, 1.56]} scale={0.95} />
        <mesh name="Sphere_cell149" geometry={nodes.Sphere_cell149.geometry} material={materials['Material.001']} position={[-0.06, 3.07, -0.49]} scale={0.95} />
        <mesh name="Sphere_cell150" geometry={nodes.Sphere_cell150.geometry} material={materials['Material.001']} position={[0.55, 4.35, 0.16]} scale={0.95} />
        <mesh name="Sphere_cell151" geometry={nodes.Sphere_cell151.geometry} material={materials['Material.001']} position={[-0.68, 6.12, -1.33]} scale={0.95} />
        <mesh name="Sphere_cell152" geometry={nodes.Sphere_cell152.geometry} material={materials['Material.001']} position={[0.16, 6.23, -0.31]} scale={0.95} />
        <mesh name="Sphere_cell156" geometry={nodes.Sphere_cell156.geometry} material={materials['Material.001']} position={[1.05, 5.22, -0.02]} scale={0.95} />
        <mesh name="Sphere_cell157" geometry={nodes.Sphere_cell157.geometry} material={materials['Material.001']} position={[0.28, 5.19, -0.88]} scale={0.95} />
        <mesh name="Sphere_cell158" geometry={nodes.Sphere_cell158.geometry} material={materials['Material.001']} position={[-2.16, 4.23, -0.16]} scale={0.95} />
        <mesh name="Sphere_cell159" geometry={nodes.Sphere_cell159.geometry} material={materials['Material.001']} position={[-0.01, 2.73, -0.27]} scale={0.95} />
        <mesh name="Sphere_cell160" geometry={nodes.Sphere_cell160.geometry} material={materials['Material.001']} position={[0.63, 5.92, 0.53]} scale={0.95} />
        <mesh name="Sphere_cell161" geometry={nodes.Sphere_cell161.geometry} material={materials['Material.001']} position={[1.19, 3.04, 0.22]} scale={0.95} />
        <mesh name="Sphere_cell162" geometry={nodes.Sphere_cell162.geometry} material={materials['Material.001']} position={[0.66, 3.47, -0.24]} scale={0.95} />
        <mesh name="Sphere_cell163" geometry={nodes.Sphere_cell163.geometry} material={materials['Material.001']} position={[-1.34, 6.56, -0.09]} scale={0.95} />
        <mesh name="Sphere_cell164" geometry={nodes.Sphere_cell164.geometry} material={materials['Material.001']} position={[-0.21, 6.66, -0.62]} scale={0.95} />
        <mesh name="Sphere_cell165" geometry={nodes.Sphere_cell165.geometry} material={materials['Material.001']} position={[1.74, 6.2, -1.04]} scale={0.95} />
        <mesh name="Sphere_cell168" geometry={nodes.Sphere_cell168.geometry} material={materials['Material.001']} position={[-1.02, 4.2, -1.47]} scale={0.95} />
        <mesh name="Sphere_cell170" geometry={nodes.Sphere_cell170.geometry} material={materials['Material.001']} position={[1.63, 4.66, -1.54]} scale={0.95} />
        <mesh name="Sphere_cell171" geometry={nodes.Sphere_cell171.geometry} material={materials['Material.001']} position={[-1.39, 4.77, 0.41]} scale={0.95} />
        <mesh name="Sphere_cell172" geometry={nodes.Sphere_cell172.geometry} material={materials['Material.001']} position={[-1.76, 4.79, -0.42]} scale={0.95} />
        <mesh name="Sphere_cell173" geometry={nodes.Sphere_cell173.geometry} material={materials['Material.001']} position={[-1.36, 5.12, 1.76]} scale={0.95} />
        <mesh name="Sphere_cell175" geometry={nodes.Sphere_cell175.geometry} material={materials['Material.001']} position={[2.05, 3.62, -0.07]} scale={0.95} />
        <mesh name="Sphere_cell176" geometry={nodes.Sphere_cell176.geometry} material={materials['Material.001']} position={[-0.99, 5.39, 1.58]} scale={0.95} />
        <mesh name="Sphere_cell177" geometry={nodes.Sphere_cell177.geometry} material={materials['Material.001']} position={[0.7, 6.08, -1.19]} scale={0.95} />
        <mesh name="Sphere_cell179" geometry={nodes.Sphere_cell179.geometry} material={materials['Material.001']} position={[-1.34, 5.01, -1.56]} scale={0.95} />
        <mesh name="Sphere_cell183" geometry={nodes.Sphere_cell183.geometry} material={materials['Material.001']} position={[-1.62, 4.7, -1.16]} scale={0.95} />
        <mesh name="Sphere_cell185" geometry={nodes.Sphere_cell185.geometry} material={materials['Material.001']} position={[-0.34, 6.17, -1.51]} scale={0.95} />
        <mesh name="Sphere_cell186" geometry={nodes.Sphere_cell186.geometry} material={materials['Material.001']} position={[-0.31, 4.42, 1.08]} scale={0.95} />
        <mesh name="Sphere_cell188" geometry={nodes.Sphere_cell188.geometry} material={materials['Material.001']} position={[0.05, 5, -1.98]} scale={0.95} />
        <mesh name="Sphere_cell190" geometry={nodes.Sphere_cell190.geometry} material={materials['Material.001']} position={[-0.24, 6.48, -0.88]} scale={0.95} />
        <mesh name="Sphere_cell191" geometry={nodes.Sphere_cell191.geometry} material={materials['Material.001']} position={[-0.04, 6.76, 0.55]} scale={0.95} />
        <mesh name="Sphere_cell192" geometry={nodes.Sphere_cell192.geometry} material={materials['Material.001']} position={[-2.16, 5.52, -0.11]} scale={0.95} />
        <mesh name="Sphere_cell193" geometry={nodes.Sphere_cell193.geometry} material={materials['Material.001']} position={[-0.21, 5.29, 1.74]} scale={0.95} />
        <mesh name="Sphere_cell194" geometry={nodes.Sphere_cell194.geometry} material={materials['Material.001']} position={[0.53, 2.9, -0.72]} scale={0.95} />
        <mesh name="Sphere_cell196" geometry={nodes.Sphere_cell196.geometry} material={materials['Material.001']} position={[1.24, 3.69, -1.62]} scale={0.95} />
        <mesh name="Sphere_cell199" geometry={nodes.Sphere_cell199.geometry} material={materials['Material.001']} position={[-1.82, 3.57, -0.26]} scale={0.95} />
        <mesh name="Sphere_cell202" geometry={nodes.Sphere_cell202.geometry} material={materials['Material.001']} position={[-0.52, 5.31, 1.52]} scale={0.95} />
        <mesh name="Sphere_cell203" geometry={nodes.Sphere_cell203.geometry} material={materials['Material.001']} position={[1.72, 3.28, 0.41]} scale={0.95} />
        <mesh name="Sphere_cell204" geometry={nodes.Sphere_cell204.geometry} material={materials['Material.001']} position={[-0.28, 5.5, 0.43]} scale={0.95} />
        <mesh name="Sphere_cell208" geometry={nodes.Sphere_cell208.geometry} material={materials['Material.001']} position={[-0.16, 2.94, 0.36]} scale={0.95} />
        <mesh name="Sphere_cell210" geometry={nodes.Sphere_cell210.geometry} material={materials['Material.001']} position={[-0.6, 5.72, 1.29]} scale={0.95} />
        <mesh name="Sphere_cell212" geometry={nodes.Sphere_cell212.geometry} material={materials['Material.001']} position={[-1.16, 5.21, 0.33]} scale={0.95} />
        <mesh name="Sphere_cell214" geometry={nodes.Sphere_cell214.geometry} material={materials['Material.001']} position={[0.08, 3.29, 1.46]} scale={0.95} />
        <mesh name="Sphere_cell215" geometry={nodes.Sphere_cell215.geometry} material={materials['Material.001']} position={[-1.87, 5.61, 0.35]} scale={0.95} />
        <mesh name="Sphere_cell216" geometry={nodes.Sphere_cell216.geometry} material={materials['Material.001']} position={[0.03, 3.8, -1.69]} scale={0.95} />
        <mesh name="Sphere_cell220" geometry={nodes.Sphere_cell220.geometry} material={materials['Material.001']} position={[-0.12, 6.42, 1.05]} scale={0.95} />
        <mesh name="Sphere_cell221" geometry={nodes.Sphere_cell221.geometry} material={materials['Material.001']} position={[2.34, 4.41, -0.55]} scale={0.95} />
        <mesh name="Sphere_cell222" geometry={nodes.Sphere_cell222.geometry} material={materials['Material.001']} position={[-0.36, 3.56, 0.21]} scale={0.95} />
        <mesh name="Sphere_cell223" geometry={nodes.Sphere_cell223.geometry} material={materials['Material.001']} position={[-0.83, 4.68, 1.89]} scale={0.95} />
        <mesh name="Sphere_cell224" geometry={nodes.Sphere_cell224.geometry} material={materials['Material.001']} position={[0.76, 6.71, -0.27]} scale={0.95} />
        <mesh name="Sphere_cell225" geometry={nodes.Sphere_cell225.geometry} material={materials['Material.001']} position={[0.07, 5.28, 1.58]} scale={0.95} />
        <mesh name="Sphere_cell230" geometry={nodes.Sphere_cell230.geometry} material={materials['Material.001']} position={[-1.54, 4.06, -1.4]} scale={0.95} />
        <mesh name="Sphere_cell231" geometry={nodes.Sphere_cell231.geometry} material={materials['Material.001']} position={[-0.67, 5.52, -1.6]} scale={0.95} />
        <mesh name="Sphere_cell233" geometry={nodes.Sphere_cell233.geometry} material={materials['Material.001']} position={[0.57, 4.91, -0.56]} scale={0.95} />
        <mesh name="Sphere_cell237" geometry={nodes.Sphere_cell237.geometry} material={materials['Material.001']} position={[0.08, 5.11, 0.61]} scale={0.95} />
        <mesh name="Sphere_cell238" geometry={nodes.Sphere_cell238.geometry} material={materials['Material.001']} position={[-0.29, 6.59, -0.24]} scale={0.95} />
        <mesh name="Sphere_cell240" geometry={nodes.Sphere_cell240.geometry} material={materials['Material.001']} position={[-0.62, 6.6, 0.33]} scale={0.95} />
        <mesh name="Sphere_cell241" geometry={nodes.Sphere_cell241.geometry} material={materials['Material.001']} position={[-1.22, 5.58, 1.38]} scale={0.95} />
        <mesh name="Sphere_cell242" geometry={nodes.Sphere_cell242.geometry} material={materials['Material.001']} position={[-1.53, 4.63, 1.59]} scale={0.95} />
        <mesh name="Sphere_cell243" geometry={nodes.Sphere_cell243.geometry} material={materials['Material.001']} position={[0.52, 2.99, 0.84]} scale={0.95} />
        <mesh name="Sphere_cell247" geometry={nodes.Sphere_cell247.geometry} material={materials['Material.001']} position={[0.41, 3.21, -1.36]} scale={0.95} />
        <mesh name="Sphere_cell253" geometry={nodes.Sphere_cell253.geometry} material={materials['Material.001']} position={[0.12, 5.04, 1.82]} scale={0.95} />
        <mesh name="Sphere_cell256" geometry={nodes.Sphere_cell256.geometry} material={materials['Material.001']} position={[-1.75, 4.29, 0.19]} scale={0.95} />
        <mesh name="Sphere_cell257" geometry={nodes.Sphere_cell257.geometry} material={materials['Material.001']} position={[-0.26, 4.72, 2.05]} scale={0.95} />
        <mesh name="Sphere_cell258" geometry={nodes.Sphere_cell258.geometry} material={materials['Material.001']} position={[-2.17, 5.45, 0.44]} scale={0.95} />
        <mesh name="Sphere_cell259" geometry={nodes.Sphere_cell259.geometry} material={materials['Material.001']} position={[-0.79, 3.53, -1]} scale={0.95} />
        <mesh name="Sphere_cell262" geometry={nodes.Sphere_cell262.geometry} material={materials['Material.001']} position={[1.3, 3.74, 0.83]} scale={0.95} />
        <mesh name="Sphere_cell267" geometry={nodes.Sphere_cell267.geometry} material={materials['Material.001']} position={[1.25, 4.95, -2.06]} scale={0.95} />
        <mesh name="Sphere_cell275" geometry={nodes.Sphere_cell275.geometry} material={materials['Material.001']} position={[1.83, 4.09, -0.93]} scale={0.95} />
        <mesh name="Sphere_cell278" geometry={nodes.Sphere_cell278.geometry} material={materials['Material.001']} position={[-0.21, 2.93, 0.95]} scale={0.95} />
        <mesh name="Sphere_cell280" geometry={nodes.Sphere_cell280.geometry} material={materials['Material.001']} position={[-1.39, 5.65, -1.25]} scale={0.95} />
        <mesh name="Sphere_cell283" geometry={nodes.Sphere_cell283.geometry} material={materials['Material.001']} position={[0.47, 6.36, -1.11]} scale={0.95} />
        <mesh name="Sphere_cell284" geometry={nodes.Sphere_cell284.geometry} material={materials['Material.001']} position={[-0.15, 6.32, 0.42]} scale={0.95} />
        <mesh name="Sphere_cell286" geometry={nodes.Sphere_cell286.geometry} material={materials['Material.001']} position={[-1.56, 6.21, 0.18]} scale={0.95} />
        <mesh name="Sphere_cell282_cell" geometry={nodes.Sphere_cell282_cell.geometry} material={materials['Material.001']} position={[-0.85, 6.24, 0.87]} scale={0.95} />
        <mesh name="Sphere_cell282_cell001" geometry={nodes.Sphere_cell282_cell001.geometry} material={materials['Material.001']} position={[-0.4, 6.57, 0.74]} scale={0.95} />
        <mesh name="Sphere_cell282_cell002" geometry={nodes.Sphere_cell282_cell002.geometry} material={materials['Material.001']} position={[-0.47, 6.48, 0.72]} scale={0.95} />
        <mesh name="Sphere_cell282_cell003" geometry={nodes.Sphere_cell282_cell003.geometry} material={materials['Material.001']} position={[-0.72, 6.34, 0.81]} scale={0.95} />
        <mesh name="Sphere_cell282_cell004" geometry={nodes.Sphere_cell282_cell004.geometry} material={materials['Material.001']} position={[-0.74, 6.44, 0.62]} scale={0.95} />
        <mesh name="Sphere_cell282_cell005" geometry={nodes.Sphere_cell282_cell005.geometry} material={materials['Material.001']} position={[-0.43, 6.43, 0.83]} scale={0.95} />
        <mesh name="Sphere_cell282_cell006" geometry={nodes.Sphere_cell282_cell006.geometry} material={materials['Material.001']} position={[-0.52, 6.36, 0.83]} scale={0.95} />
        <mesh name="Sphere_cell282_cell007" geometry={nodes.Sphere_cell282_cell007.geometry} material={materials['Material.001']} position={[-0.52, 6.37, 0.95]} scale={0.95} />
        <mesh name="Sphere_cell281_cell" geometry={nodes.Sphere_cell281_cell.geometry} material={materials['Material.001']} position={[-0.7, 3.34, 1.44]} scale={0.95} />
        <mesh name="Sphere_cell281_cell001" geometry={nodes.Sphere_cell281_cell001.geometry} material={materials['Material.001']} position={[-0.82, 3.25, 1.33]} scale={0.95} />
        <mesh name="Sphere_cell281_cell002" geometry={nodes.Sphere_cell281_cell002.geometry} material={materials['Material.001']} position={[-0.62, 3.15, 1.35]} scale={0.95} />
        <mesh name="Sphere_cell281_cell003" geometry={nodes.Sphere_cell281_cell003.geometry} material={materials['Material.001']} position={[-0.53, 3.33, 1.56]} scale={0.95} />
        <mesh name="Sphere_cell281_cell004" geometry={nodes.Sphere_cell281_cell004.geometry} material={materials['Material.001']} position={[-0.62, 3.49, 1.67]} scale={0.95} />
        <mesh name="Sphere_cell281_cell006" geometry={nodes.Sphere_cell281_cell006.geometry} material={materials['Material.001']} position={[-0.73, 3.29, 1.29]} scale={0.95} />
        <mesh name="Sphere_cell279_cell" geometry={nodes.Sphere_cell279_cell.geometry} material={materials['Material.001']} position={[-0.95, 5.1, 1.85]} scale={0.95} />
        <mesh name="Sphere_cell279_cell001" geometry={nodes.Sphere_cell279_cell001.geometry} material={materials['Material.001']} position={[-1.15, 5.04, 1.91]} scale={0.95} />
        <mesh name="Sphere_cell279_cell002" geometry={nodes.Sphere_cell279_cell002.geometry} material={materials['Material.001']} position={[-0.97, 5.18, 1.81]} scale={0.95} />
        <mesh name="Sphere_cell279_cell003" geometry={nodes.Sphere_cell279_cell003.geometry} material={materials['Material.001']} position={[-1.15, 5.2, 1.75]} scale={0.95} />
        <mesh name="Sphere_cell279_cell004" geometry={nodes.Sphere_cell279_cell004.geometry} material={materials['Material.001']} position={[-1.13, 5.06, 1.64]} scale={0.95} />
        <mesh name="Sphere_cell279_cell005" geometry={nodes.Sphere_cell279_cell005.geometry} material={materials['Material.001']} position={[-1.1, 5.17, 1.85]} scale={0.95} />
        <mesh name="Sphere_cell279_cell007" geometry={nodes.Sphere_cell279_cell007.geometry} material={materials['Material.001']} position={[-1.07, 5.04, 1.75]} scale={0.95} />
        <mesh name="Sphere_cell255_cell" geometry={nodes.Sphere_cell255_cell.geometry} material={materials['Material.001']} position={[1.24, 6.32, -1.11]} scale={0.95} />
        <mesh name="Sphere_cell255_cell001" geometry={nodes.Sphere_cell255_cell001.geometry} material={materials['Material.001']} position={[1.24, 6.35, -1.07]} scale={0.95} />
        <mesh name="Sphere_cell255_cell004" geometry={nodes.Sphere_cell255_cell004.geometry} material={materials['Material.001']} position={[1.23, 6.31, -1.16]} scale={0.95} />
        <mesh name="Sphere_cell255_cell005" geometry={nodes.Sphere_cell255_cell005.geometry} material={materials['Material.001']} position={[1.29, 6.34, -1.09]} scale={0.95} />
        <mesh name="Sphere_cell255_cell007" geometry={nodes.Sphere_cell255_cell007.geometry} material={materials['Material.001']} position={[1.22, 6.33, -1.1]} scale={0.95} />
        <mesh name="Sphere_cell254_cell001" geometry={nodes.Sphere_cell254_cell001.geometry} material={materials['Material.001']} position={[-0.61, 6.24, -0.99]} scale={0.95} />
        <mesh name="Sphere_cell254_cell002" geometry={nodes.Sphere_cell254_cell002.geometry} material={materials['Material.001']} position={[-0.66, 6.31, -1.04]} scale={0.95} />
        <mesh name="Sphere_cell254_cell003" geometry={nodes.Sphere_cell254_cell003.geometry} material={materials['Material.001']} position={[-0.66, 6.17, -1.11]} scale={0.95} />
        <mesh name="Sphere_cell254_cell004" geometry={nodes.Sphere_cell254_cell004.geometry} material={materials['Material.001']} position={[-0.35, 6.39, -1.17]} scale={0.95} />
        <mesh name="Sphere_cell254_cell005" geometry={nodes.Sphere_cell254_cell005.geometry} material={materials['Material.001']} position={[-0.47, 6.31, -1.22]} scale={0.95} />
        <mesh name="Sphere_cell254_cell007" geometry={nodes.Sphere_cell254_cell007.geometry} material={materials['Material.001']} position={[-0.5, 6.41, -0.97]} scale={0.95} />
        <mesh name="Sphere_cell250_cell" geometry={nodes.Sphere_cell250_cell.geometry} material={materials['Material.001']} position={[0.08, 6.8, -0.37]} scale={0.95} />
        <mesh name="Sphere_cell250_cell001" geometry={nodes.Sphere_cell250_cell001.geometry} material={materials['Material.001']} position={[0.01, 6.78, -0.44]} scale={0.95} />
        <mesh name="Sphere_cell250_cell002" geometry={nodes.Sphere_cell250_cell002.geometry} material={materials['Material.001']} position={[0.36, 6.68, -0.75]} scale={0.95} />
        <mesh name="Sphere_cell250_cell003" geometry={nodes.Sphere_cell250_cell003.geometry} material={materials['Material.001']} position={[0.18, 6.76, -0.5]} scale={0.95} />
        <mesh name="Sphere_cell250_cell004" geometry={nodes.Sphere_cell250_cell004.geometry} material={materials['Material.001']} position={[0.5, 6.66, -0.68]} scale={0.95} />
        <mesh name="Sphere_cell250_cell005" geometry={nodes.Sphere_cell250_cell005.geometry} material={materials['Material.001']} position={[0.1, 6.71, -0.6]} scale={0.95} />
        <mesh name="Sphere_cell250_cell006" geometry={nodes.Sphere_cell250_cell006.geometry} material={materials['Material.001']} position={[0.37, 6.7, -0.61]} scale={0.95} />
        <mesh name="Sphere_cell246_cell" geometry={nodes.Sphere_cell246_cell.geometry} material={materials['Material.001']} position={[-1.92, 6.15, -0.01]} scale={0.95} />
        <mesh name="Sphere_cell246_cell002" geometry={nodes.Sphere_cell246_cell002.geometry} material={materials['Material.001']} position={[-2.01, 6.09, 0]} scale={0.95} />
        <mesh name="Sphere_cell246_cell003" geometry={nodes.Sphere_cell246_cell003.geometry} material={materials['Material.001']} position={[-1.97, 6.03, 0.09]} scale={0.95} />
        <mesh name="Sphere_cell246_cell005" geometry={nodes.Sphere_cell246_cell005.geometry} material={materials['Material.001']} position={[-2.03, 5.98, 0.15]} scale={0.95} />
        <mesh name="Sphere_cell246_cell006" geometry={nodes.Sphere_cell246_cell006.geometry} material={materials['Material.001']} position={[-1.99, 5.97, 0.21]} scale={0.95} />
        <mesh name="Sphere_cell244_cell001" geometry={nodes.Sphere_cell244_cell001.geometry} material={materials['Material.001']} position={[0.55, 2.78, -0.32]} scale={0.95} />
        <mesh name="Sphere_cell244_cell002" geometry={nodes.Sphere_cell244_cell002.geometry} material={materials['Material.001']} position={[0.58, 2.74, -0.3]} scale={0.95} />
        <mesh name="Sphere_cell244_cell003" geometry={nodes.Sphere_cell244_cell003.geometry} material={materials['Material.001']} position={[0.69, 2.8, -0.33]} scale={0.95} />
        <mesh name="Sphere_cell244_cell004" geometry={nodes.Sphere_cell244_cell004.geometry} material={materials['Material.001']} position={[0.54, 2.74, -0.23]} scale={0.95} />
        <mesh name="Sphere_cell244_cell005" geometry={nodes.Sphere_cell244_cell005.geometry} material={materials['Material.001']} position={[0.68, 2.79, -0.17]} scale={0.95} />
        <mesh name="Sphere_cell244_cell006" geometry={nodes.Sphere_cell244_cell006.geometry} material={materials['Material.001']} position={[0.86, 2.79, -0.35]} scale={0.95} />
        <mesh name="Sphere_cell244_cell007" geometry={nodes.Sphere_cell244_cell007.geometry} material={materials['Material.001']} position={[0.79, 2.85, -0.26]} scale={0.95} />
        <mesh name="Sphere_cell232_cell001" geometry={nodes.Sphere_cell232_cell001.geometry} material={materials['Material.001']} position={[-1.29, 5.31, -1.53]} scale={0.95} />
        <mesh name="Sphere_cell232_cell003" geometry={nodes.Sphere_cell232_cell003.geometry} material={materials['Material.001']} position={[-1.05, 5.12, -1.71]} scale={0.95} />
        <mesh name="Sphere_cell232_cell005" geometry={nodes.Sphere_cell232_cell005.geometry} material={materials['Material.001']} position={[-1.13, 5.27, -1.6]} scale={0.95} />
        <mesh name="Sphere_cell232_cell006" geometry={nodes.Sphere_cell232_cell006.geometry} material={materials['Material.001']} position={[-1.21, 5.31, -1.54]} scale={0.95} />
        <mesh name="Sphere_cell232_cell007" geometry={nodes.Sphere_cell232_cell007.geometry} material={materials['Material.001']} position={[-1, 5.09, -1.76]} scale={0.95} />
        <mesh name="Sphere_cell227_cell" geometry={nodes.Sphere_cell227_cell.geometry} material={materials['Material.001']} position={[-0.45, 3.19, -0.9]} scale={0.95} />
        <mesh name="Sphere_cell227_cell001" geometry={nodes.Sphere_cell227_cell001.geometry} material={materials['Material.001']} position={[-0.51, 3.15, -1.06]} scale={0.95} />
        <mesh name="Sphere_cell227_cell002" geometry={nodes.Sphere_cell227_cell002.geometry} material={materials['Material.001']} position={[-0.8, 3.04, -0.63]} scale={0.95} />
        <mesh name="Sphere_cell227_cell003" geometry={nodes.Sphere_cell227_cell003.geometry} material={materials['Material.001']} position={[-0.75, 2.98, -0.66]} scale={0.95} />
        <mesh name="Sphere_cell227_cell005" geometry={nodes.Sphere_cell227_cell005.geometry} material={materials['Material.001']} position={[-0.73, 3.1, -0.74]} scale={0.95} />
        <mesh name="Sphere_cell227_cell006" geometry={nodes.Sphere_cell227_cell006.geometry} material={materials['Material.001']} position={[-0.57, 3.02, -0.86]} scale={0.95} />
        <mesh name="Sphere_cell206_cell001" geometry={nodes.Sphere_cell206_cell001.geometry} material={materials['Material.001']} position={[-0.27, 6.73, 0.15]} scale={0.95} />
        <mesh name="Sphere_cell206_cell002" geometry={nodes.Sphere_cell206_cell002.geometry} material={materials['Material.001']} position={[-0.27, 6.81, 0.01]} scale={0.95} />
        <mesh name="Sphere_cell206_cell003" geometry={nodes.Sphere_cell206_cell003.geometry} material={materials['Material.001']} position={[0.02, 6.65, -0.03]} scale={0.95} />
        <mesh name="Sphere_cell206_cell004" geometry={nodes.Sphere_cell206_cell004.geometry} material={materials['Material.001']} position={[-0.07, 6.58, 0.04]} scale={0.95} />
        <mesh name="Sphere_cell206_cell005" geometry={nodes.Sphere_cell206_cell005.geometry} material={materials['Material.001']} position={[-0.11, 6.8, 0.02]} scale={0.95} />
        <mesh name="Sphere_cell206_cell006" geometry={nodes.Sphere_cell206_cell006.geometry} material={materials['Material.001']} position={[-0.02, 6.8, 0.06]} scale={0.95} />
        <mesh name="Sphere_cell206_cell007" geometry={nodes.Sphere_cell206_cell007.geometry} material={materials['Material.001']} position={[-0.05, 6.78, 0.17]} scale={0.95} />
        <mesh name="Sphere_cell201_cell" geometry={nodes.Sphere_cell201_cell.geometry} material={materials['Material.001']} position={[0.03, 5.7, -1.87]} scale={0.95} />
        <mesh name="Sphere_cell201_cell001" geometry={nodes.Sphere_cell201_cell001.geometry} material={materials['Material.001']} position={[-0.03, 5.57, -1.86]} scale={0.95} />
        <mesh name="Sphere_cell201_cell002" geometry={nodes.Sphere_cell201_cell002.geometry} material={materials['Material.001']} position={[0.08, 5.99, -1.66]} scale={0.95} />
        <mesh name="Sphere_cell201_cell004" geometry={nodes.Sphere_cell201_cell004.geometry} material={materials['Material.001']} position={[0.03, 5.86, -1.73]} scale={0.95} />
        <mesh name="Sphere_cell201_cell005" geometry={nodes.Sphere_cell201_cell005.geometry} material={materials['Material.001']} position={[-0.25, 5.95, -1.69]} scale={0.95} />
        <mesh name="Sphere_cell201_cell006" geometry={nodes.Sphere_cell201_cell006.geometry} material={materials['Material.001']} position={[-0.1, 5.95, -1.8]} scale={0.95} />
        <mesh name="Sphere_cell201_cell007" geometry={nodes.Sphere_cell201_cell007.geometry} material={materials['Material.001']} position={[-0.21, 5.73, -1.85]} scale={0.95} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/obj4.glb')

function ClickityClick(props:any) {
          const snap = useSnapshot(state)
          let button;
          let obj;   
          const updateName = (name: boolean):void => {
            state.timerEnd = name
            console.log(state.timerEnd)
        }
          if(state.break && !state.timerEnd){
            button = <Timer time={3} updateName={updateName}/>;
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
    <p>Cliquez sur le rocher pour commencer l'exp??rience</p>
  );
}


function Loader() {
  const { progress } = useProgress()
  return <Html center><Lottie animationData={loading}/></Html>
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
    <Suspense fallback={<Loader />} >
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