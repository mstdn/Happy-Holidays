import { Float, Text } from "@react-three/drei"
import { isMobile, isDesktop } from 'react-device-detect'
import { Snow } from "./models/Snow"
import { Snowman } from "./models/Snowman"
import Environment from "./Environment"
import Platform from "./Platform"
import Forest from "./Forest"
import { Cat } from "./models/Cat"

export default function World()
{
    return(
    <>
        <group>
            <Snow 
                position={ [ 0, - 3, - 1 ] }
            />
            <group
                position={ [ 1.5, 0, - 5 ] }
                rotation-y={ - Math.PI * 0.05 }
            >
                <Snowman
                    position={ [ - 2, - 3.2, 0 ] }
                    rotation-y={ Math.PI * 0.1 }
                    scale={ 0.05 }
                />
                <Float
                    position={ [ 1, - 1, 0 ] }
                >
                    <Text
                        font="./assets/fonts/xmas-1.otf"
                        fontSize={ 1 }
                        color={ "red" }
                    >
                        Happy Holidays
                    </Text>
                    <Text
                        position={ [ 0, - 0.4, 0 ] }
                        font="./assets/fonts/xmas-1.otf"
                        fontSize={ 0.5 }
                        color={ "red" }
                    >
                        and a wonderful new year!
                    </Text>
                </Float>
            </group>

            <Cat 
                position={ [ 15, - 2.2, - 3.8 ] }
                rotation-y={ - Math.PI * 0.5 }
            />
            
            <Forest />
            <Platform />
        </group>
        <Environment />
        {/* <Ocean /> */}
    </>)
}