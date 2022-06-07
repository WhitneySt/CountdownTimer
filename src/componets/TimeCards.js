import React, { useState, useEffect, useRef } from 'react'
import Card from "./Card";
import { StylesCards } from '../styles/StylesGlobal'

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

const TimeCards = () => {
    const currentTime = new Date().getTime();
    const fechaInicial = new Date();
    const fechaFinal = new Date("07/05/2022");

    fechaInicial.setTime(currentTime);

    const millisecondsDifference = fechaFinal - fechaInicial; // milliseconds between now & fechaFinal
    const remainingDays = Math.floor(millisecondsDifference / 86400000); // days
    const remainingHours = Math.floor((millisecondsDifference % 86400000) / 3600000); // hours
    const remainingMinutes = Math.round(((millisecondsDifference % 86400000) % 3600000) / 60000); // minutes
    const remainingSeconds = ((millisecondsDifference % 60000) / 1000).toFixed(0); // seconds

    const [days, setDays] = useState(remainingDays);
    const [hours, setHours] = useState(remainingHours);
    const [minutes, setMinutes] = useState(remainingMinutes);
    const [seconds, setSeconds] = useState(remainingSeconds);

    useInterval(() => {
        updateTime();
    }, 1000);

    const updateTime = () => {
        if (seconds > 0) {
            const newSeconds = seconds - 1;
            setSeconds(newSeconds);
            return;
        } else {
            setSeconds(59);
            if (minutes > 0) {
                const newMinutes = minutes - 1;
                setMinutes(newMinutes);
                return;
            } else {
                setMinutes(59);
                if (hours > 0) {
                    const newHours = hours - 1;
                    setHours(newHours);
                    return;
                } else {
                    setHours(23);
                    if (days > 0) {
                        const newDays = days - 1;
                        setDays(newDays);
                        return;
                    } else {
                        alert("Terminado!");
                    }
                }
            }
        }
    }


    return (
        <StylesCards>
            <Card title='days' value={days > 9 ? days : `0${days}`} />
            <Card title='hours' value={hours > 9 ? hours : `0${hours}`} />
            <Card title='minutes' value={minutes > 9 ? minutes : `0${minutes}`} />
            <Card title='seconds' value={seconds > 9 ? seconds : `0${seconds}`} />
        </StylesCards>
    )
}

export default TimeCards