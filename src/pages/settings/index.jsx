

import React, { useState, useEffect } from "react";
import "./styles.css";

const Settings = (props) => {
    let [primaryColor, setPrimaryColor] = useState(props["--primary-color"]);
    let [secondaryColor, setSecondaryColor] = useState(props["--secondary-color"]);
    
    useEffect(() => {
        setPrimaryColor(props["--primary-color"]);
    }, [props["--primary-color"]])

    useEffect(() => {
        setSecondaryColor(props["--secondary-color"]);
    }, [props["--secondary-color"]])
    
    const save = () => {
        const data = {
            "--primary-color": primaryColor,
            "--secondary-color": secondaryColor
        }
        props.saveStyle(data);
    }
    return (
        <div className="settings">
            <h2>Settings</h2>
            <label for="primary">Primary Color</label><br />
            <input type="color" placeholder="Enter primary color" name="primary" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} /><br />

            <label for="secondary">Secondary Color</label><br />
            <input type="color" placeholder="Enter secondary color" name="secondary" value={secondaryColor} onChange={e => setSecondaryColor(e.target.value)} /><br />

            <button onClick={() => save()}>Save</button> <br />
            <button onClick={() => props.reset()}>Reset Preferences</button>
            <p>Your Preferences will be saved into local storage. So even on refreshing the page, the settings will remain same.</p>
        </div>
    );
}

export default Settings;