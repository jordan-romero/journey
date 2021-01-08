import React from 'react'
import Sprite from "./components";

const Actor = ({sprite, data, step = 0, dir = 0}) => {
    const { h, w } = data
    return (
        <Sprite 
            image={sprite} 
            data={{
                x: 0,
                y: 0, 
                h: 32,
                w: 32
            }
        }/>
    )
}

export default Actor
