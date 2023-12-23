import {  OrbitControls, PresentationControls} from '@react-three/drei'
import World from './World.jsx'
import Lights from '../Lights.jsx'

export default function Experience()
{
    return <>
        {/* <OrbitControls /> */}
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 0.5, 0.5 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Lights />
            <World />
        </PresentationControls>
    </>
}