import { useState, useEffect, useRef } from "react";

const Clock = function () {
    const [ date, setDate ] = useState (new Date ());
    const timerId = useRef();

    useEffect(() => {
        console.log('componentDidMount');
        timerId.current = setInterval(() => tick(), 1000);
        return () => {
            console.log('componentWillUnmount');
            clearInterval(timerId.current);
        };
    }, []);
    
    useEffect(() => console.log('componentDidUpdate'));

    const tick = () => {
        setDate(new Date());
    };

    return(
        <div>
            <h2>Hello Word</h2>
            <h2>It's {date.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Clock