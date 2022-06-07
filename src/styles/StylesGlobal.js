import { createGlobalStyle } from "styled-components";
import bgstars from '../images/bgstars.svg'
import styled from 'styled-components'
import hills from '../images/patternhills.svg'
import { FadeTime } from "./StylesAnimation";


export const GlobalStyles = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        font-family: 'Red Hat Text';
        font-size: 25px;
        box-sizing: border-box;        
        background: hsl(235, 16%, 14%);
        background-image: url(${bgstars});
        background-size: contain;
        color: hsl(0, 0%, 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: space-around;
        @media screen and (max-width: 700px){
            font-size: 15px;
        }
        @media screen and (max-width: 400px){
            font-size: 10px;
        }
    }
`
export const Title = styled.header`
    display:flex;
    justify-content: center;
    padding: 0 2em;
    margin:5rem auto;
    h1{
        text-align:center;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        font-size: 2em;        
        margin:0;
    }
`
export const StylesFooter = styled.footer`
    background-image: url(${hills});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3em 0;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    div{
        display:flex;
        gap: 1.5em;
        i{
            color: hsl(237, 18%, 59%);
            &:hover{
                color: hsl(345, 95%, 68%);
            }
        }
    }
`
export const StylesCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4em;
`
export const StylesContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        color: hsl(237, 18%, 59%);
        font-size: 0.6em;
        font-weight: bold;
        letter-spacing: 0.15em;
        text-align: center;
    }
`
export const StylesCard = styled.div`
    width: 5.5em;
    height: 5em;
    background-color: hsl(236, 21%, 26%);
    border-radius: 0.4em;
    box-shadow: 0 0.4em hsl(234, 17%, 12%);
`
export const StylesCardSection1 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
    background-color: hsl(236, 21%, 20%);
    border-radius: 0.4em 0.4em 0 0;
    border-bottom: 1px solid hsl(235, 16%, 14%);
    &::after{
        content: "";
        position: relative;
        top: 2.3em;
        left: 2.33em;
        background-color: hsl(234, 17%, 12%);
        height: 0.3em;
        width: 0.6em;
        border-radius: 0.45em 0.45em 0 0;
        transform: rotateZ(270deg);
        z-index: 20;   
    }
    &::before{
        content: "";
        position: relative;
        top: 2.3em;
        left: -2.34em;
        background-color: hsl(234, 17%, 12%);
        height: 0.3em;
        width: 0.6em;
        border-radius: 0.45em 0.45em 0 0;
        transform: rotateZ(90deg);
        z-index: 20;   
    }
    span{
        color: hsl(345, 95%, 68%);
        font-size: 4em;
        font-weight: 700;
        text-align: center;
        align-items: flex-end;
        overflow: hidden;
        animation: ${FadeTime} 0.5s 1.2s forwards;
        position: relative;
        left: 0.3em
    }
`

export const StylesCardSection3 = styled.div`
    display: flex;
    justify-content: center;
    height: 50%;
    border-radius: 0 0 0.4em 0.4em;
    transform-style: preserve-3d;
    span{
        color: hsl(345, 95%, 68%);
        font-size: 3em;
        font-weight: 700;
        text-align: center;
        align-items: flex-end;
        position: relative;
        top: -0.65em;
        left: -.03em;
        animation: ${FadeTime} 0.5s 1.2s forwards;        
    }
`
export const StylesTimerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`