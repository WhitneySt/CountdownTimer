import React from "react";
import { StylesCard, StylesCardSection1, StylesCardSection3, StylesContainerCard } from '../styles/StylesGlobal'

const Card = ({ title = "", value }) => {
    return (
        <StylesContainerCard>
            <StylesCard>
                <StylesCardSection1>
                </StylesCardSection1>
                <StylesCardSection3><span>{value}</span></StylesCardSection3>
            </StylesCard>
            <p>{title.toUpperCase()}</p>
        </StylesContainerCard>
    )
}

export default Card;