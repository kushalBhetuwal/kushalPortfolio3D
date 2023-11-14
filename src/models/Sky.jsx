/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei"
import SkyScene from '../assets/3d/sky.glb';
import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
// eslint-disable-next-line react/prop-types
const Sky = ({isRotating}) => {
    const sky = useGLTF(SkyScene)
    const skyref = useRef();
    useFrame((_, delta)=>{
      if(isRotating){
        skyref.current.rotation.y+=0.1*delta;
      }
    })
  return (
    <mesh ref={skyref}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky