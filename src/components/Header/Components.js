import styled from 'styled-components';
import {motion} from "framer-motion"

export const Nav = styled(motion.header)`
    background: transparent;
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    border-bottom: 2px solid var(--font-color);
    font-size: 1vw;
    @media (max-width: 768px){
        font-size: 3vw;
        flex-flow: column nowrap;
    }
`

export const ColoredH2 = styled.h2`
    color: var(--accent-color);
`

export const AnimatedH2 = ({children}) => {
    return (
        <motion.h2 animate={{ opacity: [0,1], translateX: [-100, 0]}}
        transition={{
            type: "spring",
            damping: 1,
            // mass
            duration: 1.5,
            stiffness: 100,
        }} >{children}</motion.h2>
    )
}