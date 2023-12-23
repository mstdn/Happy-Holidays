import { useGLTF } from "@react-three/drei"
import { treePositions } from "./positions/TreePositions"

const Trees = () =>
{
    const treePositionsCount = treePositions.length
    const { nodes, materials } = useGLTF("./assets/models/world/trees/tree-1.glb")
    const tree = [...Array(treePositionsCount)].map((value, index) =>
    <group
        key={ index }
        position={ treePositions[index] }
        scale={ 10 + Math.random() * 0.5 }
        rotation-y={ Math.PI * Math.random() }
    >
        <mesh
            castShadow
            receiveShadow
            geometry={nodes["Node-Mesh"].geometry}
            material={materials.mat21}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes["Node-Mesh_1"].geometry}
            material={materials.mat20}
        />
    </group>
    )

    return(
        <>
            { tree }
        </>
    )
}

export default function Forest()
{
    return(
        <>
            <Trees position={ [ 0, 0, 0 ] } />
        </>
    )
}

useGLTF.preload("./assets/models/world/trees/tree-1.glb")