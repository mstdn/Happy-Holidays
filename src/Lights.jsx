import { Sky, Environment } from '@react-three/drei'

export default function Lights()
{
    return <>
        <Sky 
            sunPosition={ [ 0, 20, - 10 ] }
        />
        <Environment
            // preset='sunset'
            files="./assets/images/light.hdr"
        />
        <directionalLight
            castShadow
            position={ [ 0, 20, 20 ] }
            intensity={ 1 }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 500 }
            shadow-camera-top={ 500 }
            shadow-camera-right={ 500 }
            shadow-camera-bottom={ - 500 }
            shadow-camera-left={ - 500 }
            shadow-bias={ - 0.01 }
            shadow-mapSize-width={ 2048 }
            shadow-mapSize-height={ 2048 }
            // shadow-mapSize={ [ 1024, 1024 ] }
        />
        <ambientLight 
            intensity={ 0.5 } 
        />
    </>
}