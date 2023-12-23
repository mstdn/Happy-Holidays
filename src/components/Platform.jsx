import React from "react"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

/**
 *  Base platform
 */
const Snow = (props) => 
{
    const [ colorMap, displacementMap, normalMap, roughnessMap, aoMap ] = useTexture(
        [
            './assets/textures/snow/basecolor.jpg',
            './assets/textures/snow/height.png',
            './assets/textures/snow/normal.jpg',
            './assets/textures/snow/roughness.jpg',
            './assets/textures/snow/occlusion.jpg',
        ]
    )

    const repeatMap = [ 512, 512 ]

    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping
    colorMap.repeat.set( repeatMap[0], repeatMap[1] )
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
    normalMap.repeat.set( repeatMap[0], repeatMap[1] )
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping
    roughnessMap.repeat.set( repeatMap[0], repeatMap[1] )
    aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping
    aoMap.repeat.set( repeatMap[0], repeatMap[1] )
    displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping
    displacementMap.repeat.set( repeatMap[0], repeatMap[1] )
      
    return (
        <mesh {...props} receiveShadow rotation-x={ - Math.PI / 2 }>
            <boxGeometry args={ [ 2000, 2000, 2 ] } />
            <meshStandardMaterial
                displacementScale={ 0.2 }
                map={ colorMap }
                displacementMap={ displacementMap }
                normalMap={ normalMap }
                roughnessMap={ roughnessMap }
                aoMap={ aoMap }            
                // map-repeat={ [ 1024, 1024  ] } 
                color="white" 
            />
        </mesh>
    )
}

export default function Platform()
{
    return(
        <>
            <Snow position={ [ 0, - 4.2, - 4 ] } />
        </>
    )
}

useTexture.preload('./assets/textures/snow/basecolor.jpg')
useTexture.preload('./assets/textures/snow/height.png')
useTexture.preload('./assets/textures/snow/roughness.jpg')
useTexture.preload('./assets/textures/snow/occlusion.jpg')
useTexture.preload('./assets/textures/snow/normal.jpg')