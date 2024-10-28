import { useState, useEffect } from "react";
import "../styles/timer.css"

export default function Timer ({isRunning}) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (!isRunning) {
            return;
        }
        let interval = setInterval(() => {
            setTime(time + 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [time, isRunning])

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minutesToShow = (minutes < 10) ? `0${minutes}` : minutes;
    const secondsToShow = (seconds < 10) ? `0${seconds}` : seconds;

    return (
        <div className="timer">{`${minutesToShow}:${secondsToShow}`}</div>
    );
}