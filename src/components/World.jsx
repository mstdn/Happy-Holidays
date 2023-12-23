import { Float, Text } from "@react-three/drei"
import { isMobile, isDesktop } from 'react-device-detect'
import { Snow } from "./models/Snow"
import { Snowman } from "./models/Snowman"
import Environment from "./Environment"
import Platform from "./Platform"
import Forest from "./Forest"
import { Cat } from "./models/Cat"
import { Spaceship } from "./models/Spaceship"
import { Present } from "./models/Present"
import { Stag } from "./models/Stag"

function mobilePositions()
{
    if(isMobile)
    {
        return [ 0.5, 0, - 6 ]
    } else if(isDesktop)
    {
        return [ 1.5, 0, - 5 ]
    }
}
export default function World()
{
    return(
    <>
        <group>
            <Snow 
                position={ [ 0, - 3, - 1 ] }
            />
            <group
                position={ mobilePositions() }
                rotation-y={ - Math.PI * 0.05 }
            >
                { isMobile && (
                    <Snowman
                        position={ [ - 2, - 3.2, - 2 ] }
                        rotation-y={ Math.PI * 0.1 }
                        scale={ 0.05 }
                    />
                ) }
                { isDesktop && (
                    <Snowman
                        position={ [ - 2, - 3.2, 0 ] }
                        rotation-y={ Math.PI * 0.1 }
                        scale={ 0.05 }
                    />
                )}

                { isDesktop && (
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
                            and a meowful new year!
                        </Text>
                    </Float>
                ) }
                { isMobile && (
                    <Float
                        position={ [ 0, - 1, 3.7 ] }
                    >
                        <Text
                            font="./assets/fonts/xmas-1.otf"
                            fontSize={ 0.8 }
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
                            and a meowful new year!
                        </Text>
                    </Float>
                ) }
            </group>

            <Cat 
                position={ [ 15, - 2.2, - 3.8 ] }
                rotation-y={ - Math.PI * 0.5 }
            />
            <group>
                <Spaceship 
                    position={ [ 0, 8, - 35 ] }
                    scale={ 2 }
                />
                { isDesktop && (
                    <Present 
                        position={ [ 2, - 2, 0 ] }
                        rotation-y={ - Math.PI * 0.2 }
                        scale={ 0.05 }
                    />
                ) }
                { isMobile && (
                    <Present 
                        position={ [ 0.8, - 2, 0.2 ] }
                        rotation-y={ - Math.PI * 0.2 }
                        scale={ 0.04 }
                    />
                ) }
            </group>
            <group>
                <Stag 
                    position={ [ 4, - 2, - 20 ] }
                    rotation-y={ - Math.PI * 0.1 }
                    scale={ 0.8 }
                />
            </group>
            <Forest />
            <Platform />
        </group>
        <Environment />
        {/* <Ocean /> */}
    </>)
}