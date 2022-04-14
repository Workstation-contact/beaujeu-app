import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, extend, ReactThreeFiber, useFrame, useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";
import { Bounds, useBounds, OrbitControls, ContactShadows, useGLTF, PerspectiveCamera, Center, Plane, Box, Sky, Environment, useProgress, Html } from '@react-three/drei'
import ClickityClick from '../Button'
import Rock from './Obj6'
type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    Mat: THREE.MeshStandardMaterial
  }
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


export default class Obj3D extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }
  render() {
  return (<Rock/>
    // <div>
    // <Canvas shadows camera={{position:[15,7,0]}} >
    //   <fog attach="fog" args={["white",10,30]}/>
    //   <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} zoomSpeed={.3} />
    //   <hemisphereLight
    //       groundColor={new THREE.Color(0xffffff)}
    //       intensity={0.1}
    //       position={[0, 50, 0]}
    //   />
    //   <directionalLight
    //       color={new THREE.Color(0xffffff)}
    //       intensity={0.4}
    //       position={[-8, 12, 8]}
    //       castShadow
    //   />
    //   <Environment preset="city" />
    //   <Suspense fallback={<Loader />} >
    //     <Rock />
    //     <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={1} width={10} height={10} blur={1.5} far={8} />
    //   </Suspense>
    //   <Plane
    //     receiveShadow
    //     rotation={[-Math.PI / 2, 0, 0]}
    //     position={[0, -1, 0]}
    //     args={[5000, 5000,1,1]}
    //   >
    //     {/* <axesHelper /> */}
    //     <meshStandardMaterial attach="material" color="white" />
    //   </Plane>
    // </Canvas>
    // <ClickityClick/>
    // </div>
  )
  }
}
