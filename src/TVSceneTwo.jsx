
import React, { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import * as THREE from 'three'

export function TVSceneTwo(props) {
  const { nodes, materials } = useGLTF('/tv-scene.glb')
  const videoTexture = useVideoTexture('/vid.mp4')
  videoTexture.flipY = true

  const newMaterial = new THREE.MeshBasicMaterial({
		map:videoTexture
	})
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tv.geometry}
        material={materials.Default}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        material={newMaterial}
        scale={0.005}
      />
    </group>
  )
}

useGLTF.preload('/tv-scene.glb')