import React from 'react'
import TimeCards from '../componets/TimeCards'
import TimeFooter from '../componets/TimeFooter'
import TimeHeader from '../componets/TimeHeader'
import { StylesTimerDiv } from '../styles/StylesGlobal'

const Timer = () => {
    return (
        <StylesTimerDiv>
            <TimeHeader />
            <TimeCards/>
            <TimeFooter />
        </StylesTimerDiv>
    )
}

export default Timer