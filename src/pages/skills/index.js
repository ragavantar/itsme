import React, { useEffect, useState } from 'react';
import getFillerText from '../../services/lorem';

const Skills = () => {

    let [paragraphs, setParagraphs] = useState([])
    let [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getFillerText()
            .then(val => {
                setParagraphs(val);
                setLoading(false);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {
                loading && <h2>Loading...</h2>
            }
            {
                paragraphs.map(text => <p>{text}</p>)
            }
        </div>
    );
}

export default Skills;