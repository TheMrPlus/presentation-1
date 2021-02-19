import React from 'react'
import {Wrapper} from '../../AppComponents'
import {StyledH2, StyledDiv} from './Components'

const SectionTwo = () => {
    const arrOfReasons = [
        "Por que me gusta crear conceptos nuevos y dar solucion a problemas cotidianos",
        "Para aprender como es que funcionan las tecnologias digitales que conectan al mundo",
        "Por que los sistemas informaticos simplifican y mejorar la calidad de vida del ser humano",
        "Creo firmemente que el desarrollo de sistemas informaticos esta creando un mundo de poder intimo y personal, el poder del individuo para llevar a cabo su propia educacion,encontrar su propia inspiracion, forjar su propio entorno y compartir su aventura con todo aquel que este interesado",
        "Por que estamos en el inicio de la cuarta revolucion industrial impulsada por las tecnologias digitales",
        "Por que mas de la mitad del planeta esta conectado a internet, lo que significa que a traves de tecnologias digitales puedes llegar a impactar de forma positiva a mas de la mitad de la especie humana",
        "Por que creo firmemente que el desarrollo de software es un arte",
        "Por que la ingenieria es el nivel mas importante a alcanzar en el mundo, algo que lleva a la sociedad a un nuevo nivel",
        "Para desarrollar tecnologias digitales innovadoras con el objetivo de aportar algo positivo a la sociedad",
        "Por que desde mi punto de vista el desarrollo de sistemas va a terminar por automatizar el mundo entero"
    ];
    return (
        <Wrapper>
            <StyledH2>¿Por qué escogiste la carrera de Ingeniería de Sistemas Informáticos?</StyledH2>
            <StyledDiv>
            <ol>
                {arrOfReasons.map((el, i) => <li key={i}>{el}</li>)}
            </ol>
            </StyledDiv>
        </Wrapper>
    )
}

export default SectionTwo
