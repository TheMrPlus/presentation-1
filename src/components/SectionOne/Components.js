import { motion } from 'framer-motion'
import styled from 'styled-components'


const StyledHeaderWrapper = styled.div`
    font-size: 6vw;
    letter-spacing: 5px;
    line-height: 0;
    display: flex;
    flex-flow: column wrap;
    z-index: 100;
    @media(max-width: 768px){
        font-size: 13vw;
    }
`

const StyledDiv = styled.div`
    width: 40%;
    text-align: center;
    margin: 5vh 0;
    @media(max-width: 768px){
        width: 80%;
    }

`

const StyledLine = styled.div`
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;

`
const StyledHeader = ({children, delay}) => {
    return <motion.p animate={{ opacity: [0,1], translateY: [-100, 0]}} transition={{type:"spring", delay: delay,damping: 1, duration: 1, stiffness: 10}}>{children}</motion.p>
}

export const Title = ({children}) => {

    children = children.split(" ").map(
        (el,i) => {return <StyledLine key={i}>{el.split("").map((element, index) => <StyledHeader key={index} delay={((+(i+2)/10) * index+1)}>{element}</StyledHeader>)}</StyledLine>}
    )


    return <StyledDiv>
        <StyledHeaderWrapper>{children}</StyledHeaderWrapper>
    </StyledDiv>
}

const PictureFrame= styled(motion.div)`
    width: 40%;
    @media (max-width: 768px){
        width: 90%;
    }
`

const Picture = styled.img`
    width: 100%;
    margin: 0 auto;
`

export const Image = ({src, alt}) => {
    return <PictureFrame animate={{ opacity: [0,1], translateY: [100, 0]}} transition={{type:"spring", delay: 3,damping: 1, duration: 1, stiffness: 10}}>
        <Picture src={src} alt={alt}/>
    </PictureFrame>
}



