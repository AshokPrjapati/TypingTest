import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useTimer = (initialTime = 0, interval = 1000) => {
    const isTyping = useSelector((store) => store.typing.isTyping);
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        let timerId;

        // if user started typing then timer will start
        if (isTyping) {
            setTime(0)
            timerId = setInterval(() => {
                setTime((prevTime) => prevTime + interval / 1000);
            }, interval);
        }
        // cleanup function
        return () => {
            clearInterval(timerId);
        };
    }, [isTyping, interval]);

    return time

};

export default useTimer;






