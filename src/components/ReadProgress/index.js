import { useEffect, useState } from "react";
import { throttle } from 'lodash';

import './styles.css'


const ReadProgress = () => {

    let [progress, setProgress] = useState(20);

    const onScroll = () => {
        let percent = Math.round(window.scrollY * 100 / (document.documentElement.scrollHeight - window.innerHeight))
        if (percent < 10) percent = 10;
        setProgress(percent)
    }

    useEffect(() => {
        window.addEventListener("scroll", throttle(onScroll));

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return (
        <div className="progress" style={{ width: progress + 'vw' }}></div>
    );
}

export default ReadProgress;