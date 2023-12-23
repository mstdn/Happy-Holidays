import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import useSound from "use-sound"

export function Cat(props) 
{
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("./assets/models/cat.glb")
    const { actions } = useAnimations(animations, group)
    const [ playMeow ] = useSound('./assets/audio/meow.wav', { volume: 1, interrupt: true })

    useEffect(() =>
    {
        actions["Walking"].play()
    })

    useFrame((state, delta) => 
    {
      // Move the cat to the left
      group.current.position.x -= 1.8 * delta

      // Check if the cat is off-screen on the right side
      if (group.current.position.x < - 15) 
      {
        // Reset the cat's position to the right side of the screen
        group.current.position.x = 15
      }
    })


    return (
      <group onClick={ playMeow } ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Root">
              <group
                name="Lamp"
                position={[4.076, 1.005, 5.904]}
                rotation={[-0.268, 0.602, 1.931]}
              >
                <group name="Lamp_1" />
              </group>
              <group name="Armature">
                <primitive object={nodes.Armature_rootJoint} />
                <skinnedMesh
                castShadow
                receiveShadow
                  name="Mesh002_0"
                  geometry={nodes.Mesh002_0.geometry}
                  material={materials["mat_0-GatoTextura.jpg"]}
                  skeleton={nodes.Mesh002_0.skeleton}
                />
                <group
                  name="Mesh002"
                  position={[-0.004, -0.439, -0.243]}
                  rotation={[Math.PI / 2, 0, 0]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    )
}

useGLTF.preload("./assets/models/cat.glb")