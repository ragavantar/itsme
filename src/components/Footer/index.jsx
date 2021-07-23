import { Link } from 'react-router-dom';
import { NavigationLeft, NavigationRight } from '../../constants';

import "./styles.css";

const Footer = () => {
    return (
        <footer>
            <div className="sections">
                <div>
                    <h3>Skills</h3>
                    <ul>
                        {
                            NavigationLeft.map(val => <li key={val.name}><Link to={val.link}>{val.name}</Link></li>)
                        }
                    </ul>
                </div>
                <div>
                    <h3>Other Links</h3>
                    <ul>
                        {
                            NavigationRight.map(val => <li key={val.name}><Link to={val.link}>{val.name}</Link></li>)
                        }
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Email : <a href={'mailto:ragavantar@gmail.com'}>ragavantar@gmail.com</a></li>
                        <li>Phone : <a href={'tel:+919841126378'}>+91 9841126378</a></li>
                        <li>Linkedin : <a href={'https://www.linkedin.com/in/hariraagavanthar-c-r/'}>/hariraagavanthar-c-r</a></li>
                    </ul>
                </div>
            </div>
            <div className="designedBy">
                Designed By <a>HariRaagavanthar C R</a>
            </div>
        </footer>
    );
}


export default Footer;