import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavigationLeft, NavigationRight } from '../../constants';

import './styles.css';


const Header = () => {
    let [showMenu, setShowMenu] = useState(false);
    return (
        <nav className={showMenu ? 'show' : 'hide'}>
            <div className="mobTop"><Link to={'/'}>Home</Link>
                <span className="icon"
                    onClick={() => setShowMenu(!showMenu)}
                >&#9776;</span>
            </div>
            <div className="left">
                <div className="sub">
                    Skills
                </div>
                {
                    NavigationLeft.map(val => <Link key={val.name} to={val.link}>{val.name}</Link>)
                }
            </div>
            <div className="right">
                {
                    NavigationRight.map(val =>
                        <Link  key={val.name} to={val.link}>{val.name}</Link>)
                }
            </div>
        </nav>
    );
}

export default Header;