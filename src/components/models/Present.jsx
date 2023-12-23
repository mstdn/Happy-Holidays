import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Present(props) 
{
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("./assets/models/present.glb");
    const { actions } = useAnimations(animations, group)

    const setClick = () =>
    {
      // clicked = true
        const action = actions["Take 001"];
        action.setLoop(THREE.LoopOnce); // Set the animation to play only once
        action.setDuration(action.getClip().duration * 2); // Set the duration to play slower (multiply by a factor)
        action.play()

        setTimeout(() => {
            group.current.visible = false
        }, 1500)
    }
    
    // useEffect(() => {
    //     const action = actions["Take 001"];
    //     action.setLoop(THREE.LoopOnce); // Set the animation to play only once
    //     action.setDuration(action.getClip().duration * 2); // Set the duration to play slower (multiply by a factor)
    //     action.play()

    //     setTimeout(() => {
    //         group.current.visible = false
    //     }, 1500)
    // }, [])

  return (
    <group onClick={ setClick } ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="f204f95b317f4ab685462247d5555622fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="gift" />
                <group name="giftJnts" rotation={[0, -Math.PI / 2, 0]}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      castShadow
                      receiveShadow
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.blinn1}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group name="Object_8" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/present.glb");