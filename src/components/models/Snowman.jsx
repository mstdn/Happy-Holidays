import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import useSound from "use-sound"

export function Snowman(props) 
{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/snowman.glb")
  const { actions } = useAnimations(animations, group)
  const [ playHoHo ] = useSound('./assets/audio/xmas.mp3', { volume: 0.8, interrupt: true })
  useEffect(() =>
  {
    actions["GltfAnimation 0"].play()
  })
  return (
    <group onClick={ playHoHo } ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="GLTF_created_0">
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                  castShadow
                  receiveShadow
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.pet_l_2snowman_snowman05_mat}
                  skeleton={nodes.Object_7.skeleton}
                />
                <group name="pet_l_2snowman_snowman05_15">
                  <group name="pet_l_2snowman_snowman05_16" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/snowman.glb");