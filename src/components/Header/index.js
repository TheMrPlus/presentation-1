import React from 'react'
import {Nav, ColoredH2, AnimatedH2} from './Components'
const Header = () => {
    return (
        <Nav  animate={{ opacity: [0,1]}}
        transition={{
            type: "spring",
            damping: 1,
            // mass
            delay: .3,
            duration: 3,
            // stiffness: 100,
        }}>
            <AnimatedH2>por: Santiago Sarabia</AnimatedH2>
            <ColoredH2>presentacion</ColoredH2>
            <AnimatedH2>Cochabamba, Bolivia - 2021</AnimatedH2>
        </Nav>
    )
}

export default Header
