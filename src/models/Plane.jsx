/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';
import { useEffect, useRef } from 'react';
// eslint-disable-next-line react/prop-types
const Plane = ({isRotating, ...props}) => {
  const ref = useRef();
  const{scene,animations} = useGLTF(planeScene);
  const {actions} = useAnimations(animations,ref);

  useEffect(()=>{
    if(isRotating){
      actions['Take 001'].play();
      
    }else{
      actions['Take 001'].stop();
    }
  }, [actions,isRotating])
  return (
    <mesh {...props} ref={ref} position ={[1,-1.4,1]} scale={[2,0.8, 1.2]}>
    <primitive object={scene}/>
    </mesh>
  )
}

export default Plane