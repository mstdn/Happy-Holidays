import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { Suspense, useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { Interface } from './components/Interface.jsx'

export default function App()
{
    const [ started, setStarted ] = useState(false)

    return( <>
        <LoadingScreen 
            started={ started } 
            setStarted={ setStarted }
        />
        <Canvas
            shadows
            camera={ 
                {
                    fov: 45,
                    position: [ 0, 0.5, 5.5 ],
                    near: 0.1,
                    far: 600,
                } 
            }
        >
            <fog attach="fog" args={["#ffffff", 10, 1000]} />
            <Suspense>
                {started && ( 
                    <Experience />
                )}
            </Suspense>
        </Canvas>
        { started && (
            <Interface />
        )}
    </> )
}