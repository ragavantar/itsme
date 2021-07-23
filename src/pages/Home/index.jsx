import { Education, ProficientSkills, FamiliarSkills, Experience, NavigationRight } from '../../constants';
import ReadProgress from '../../components/ReadProgress';
import "./styles.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        // animate on view
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate")
                    // stop observing this element
                    observer.unobserve(entry.target)
                }
            })
        }
        const myObserver = new IntersectionObserver(callback, { threshold: 0.4 });
        const itemlist = document.querySelectorAll(".skills")
        itemlist.forEach(img => {
            myObserver.observe(img)
        })


    }, [])

    return (
        <div>
            <ReadProgress />
            <h2>Experience</h2>
            <div className="experience">
                {
                    Experience.map((val, index) => <div key={index} className="item obs">
                        <div className="title">{val.title}</div>
                        <div className="description">{val.description}</div>
                        <div className="text">{val.text}</div>
                        {
                            val.link.map(url =>
                                <><a href={url}>{url}</a><br /></>
                            )
                        }
                    </div>)
                }
            </div>
            <h2>Skills</h2>
            <div className="skills">
                <h3>Proficient With</h3>
                {
                    ProficientSkills.map((val, index) =>
                        <div
                            key={index}
                            className="item"
                            style={{ animationDelay: `${index + 0.2}s` }}>
                            {/* <img src={val.img} /> */}
                            <div className="title">
                                {val.name}
                            </div>
                        </div>
                    )
                }
                <h3>Familiar With</h3>
                {
                    FamiliarSkills.map((val, index) =>
                        <div
                            key={index}
                            className="item"
                            style={{ animationDelay: `${index + 0.2}s` }}
                        >
                            {/* <img src={val.img} /> */}
                            <div className="title">
                                {val.name}
                            </div>
                        </div>
                    )
                }
            </div>
            <h2>Education Qualification</h2>
            <div className="education">
                {
                    Education.map((val, index) =>
                        <div key={index} className="item">
                            <div className="title">{val.title}</div>
                            <div className="description">{val.description}</div>
                            <div className="text">{val.text}</div>
                        </div>
                    )
                }
            </div>
            <h2>Others</h2>
            <div className="others">
                {
                    NavigationRight.map(val => <div className="card">
                        <Link key={val.name} to={val.link}>{val.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Home;