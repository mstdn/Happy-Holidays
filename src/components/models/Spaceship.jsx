import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Spaceship(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./assets/models/spaceship.glb");
  const { actions } = useAnimations(animations, group)

  let clicked = false
  const setClick = () =>
  {
    clicked = true
  }

  useEffect(() =>
  {
    actions["Animation"].play()
  })

  useFrame(() =>
  {
    group.current.rotation.y += 0.005
    if(clicked)
    {
      group.current.position.y += 0.01
      setTimeout(() =>
      {
        group.current.visible = false
      }, 10000)
    }
  })

  return (
    <group onClick={ setClick } ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.667}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Section_2_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.ufo_red}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.ufo_gold}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.ufo_steel}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.ufo_light}
                />
              </group>
              <group name="Section_3_1">
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.ufo_red}
                />
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.ufo_gold}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.ufo_green}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.ufo_light}
                />
              </group>
              <group name="UFO_3" rotation={[0, 0, 0.175]}>
                <group name="Section_1_2">
                  <mesh
                    name="Object_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.ufo_steel}
                  />
                  <mesh
                    name="Object_16"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.ufo_gold}
                  />
                  <mesh
                    name="Object_17"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.ufo_green}
                  />
                  <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.ufo_light}
                  />
                  <mesh
                    name="Object_19"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.ufo_glass}
                  />
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.ufo_interior}
                  />
                  <mesh
                    name="Object_21"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.tractor_glow}
                  />
                </group>
              </group>
              <group name="Tractor_Inner_4">
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.tractor_beam}
                />
              </group>
              <group name="Tractor_Outer_5">
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.tractor_wisp}
                />
              </group>
              <group
                name="Present_1_6"
                position={[0.419, -2.379, 0]}
                scale={1.25}
              >
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials.present_white}
                />
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.present_red}
                />
              </group>
              <group
                name="Present_2_7"
                position={[0.65, -3.685, 0]}
                scale={1.25}
              >
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.present_green}
                />
                <mesh
                  name="Object_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_31.geometry}
                  material={materials.present_red}
                />
              </group>
              <group
                name="Present_3_8"
                position={[0.872, -4.944, 0]}
                scale={1.25}
              >
                <mesh
                  name="Object_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_33.geometry}
                  material={materials.present_red}
                />
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.present_white}
                />
              </group>
              <group
                name="Present_4_9"
                position={[1.101, -6.244, 0]}
                scale={1.25}
              >
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.present_blue}
                />
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials.present_white}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/spaceship.glb");