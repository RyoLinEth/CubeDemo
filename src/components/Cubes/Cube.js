import React, { useState, useEffect } from 'react';
import './Cube.css'; // import your CSS file

const Cube = () => {
    const [activeSide, setActiveSide] = useState('front');
    const [activeNum, setActiveNum] = useState(0);

    const activeList = [
        'front', 'right', 'back', 'left', 'top', 'bottom'
    ]
    const clickOnSide = () => {
        if (activeNum ==5) {
            setActiveSide(activeList[0])
            setActiveNum(0)
        }
        if (activeNum < 5) {
            setActiveSide(activeList[activeNum+1]);
            setActiveNum(prev => prev + 1)
        }
    };


    return (
        <main>
            {/* <div className="menu df fd-c">
                <button className="btn" onClick={() => clickOnSide('front')}>Mechanism</button>
                <button className="btn" onClick={() => clickOnSide('right')}>Work</button>
                <button className="btn" onClick={() => clickOnSide('back')}>Education</button>
                <button className="btn" onClick={() => clickOnSide('left')}>Certificates</button>
                <button className="btn" onClick={() => clickOnSide('top')}>Projects</button>
                <button className="btn" onClick={() => clickOnSide('bottom')}>Contacts</button>
            </div> */}
            <section className="scene" onClick={() => clickOnSide()}>
                <div className={`cube show-${activeSide}`} id="cube" data-side={activeSide}>

                    <div className="cube-face cube-face-front">
                        <div className="intro-wrapper df fd-r">
                            <div className="intro">
                                <h1 className="intro-heading">
                                    Auto <span>Burn</span> Mechanism
                                </h1>
                                <h3 className="intro-heading">
                                    <span>2%</span> Marketing<br />
                                    <span>2%</span> Liquidity<br />
                                    <span>6%</span> Reward
                                </h3>
                            </div>
                            <div className="image df fd-r">
                                <div className="image-wrapper">
                                    {/* <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cube-face cube-face-back">
                        <p className="intro-heading">Educa<span>tion</span></p>
                        <div className="work-edu-section df fd-r">
                            <h4 className="work-edu-heading date">2020-2022</h4>
                            <div className="work-edu-info">
                                <h4 className="work-edu-heading company">Some university</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Ipsam odio repudiandae, enim unde eveniet blanditiis facilis.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="work-edu-section df fd-r">
                            <h4 className="work-edu-heading date">2016-2020</h4>
                            <div className="work-edu-info">
                                <h4 className="work-edu-heading company">Some other uni</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Ipsam odio repudiandae, enim unde eveniet blanditiis facilis.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="cube-face cube-face-right">
                        <p className="intro-heading">Wo<span>rk</span></p>
                        <div className="work-edu-section df fd-r">
                            <h4 className="work-edu-heading date">2020-2022</h4>
                            <div className="work-edu-info">
                                <h4 className="work-edu-heading company">Some company</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Ipsam odio repudiandae, enim unde eveniet blanditiis facilis.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="work-edu-section df fd-r">
                            <h4 className="work-edu-heading date">2016-2020</h4>
                            <div className="work-edu-info">
                                <h4 className="work-edu-heading company">Some other company</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Ipsam odio repudiandae, enim unde eveniet blanditiis facilis.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="cube-face cube-face-left">
                        <p className="intro-heading">Certi<span>fi</span>cates</p>
                        <div className="certificate-section df fd-r">
                            <h4 className="certificate-date">2022</h4>
                            <h4 className="certificate-heading">Some certificate #1</h4>
                        </div>
                        <div className="certificate-section df fd-r">
                            <h4 className="certificate-date">2020</h4>
                            <h4 className="certificate-heading">Some other certificate #2</h4>
                        </div>
                        <div className="certificate-section df fd-r">
                            <h4 className="certificate-date">2020</h4>
                            <h4 className="certificate-heading">Certificate #3</h4>
                        </div>
                        <div className="certificate-section df fd-r">
                            <h4 className="certificate-date">2018</h4>
                            <h4 className="certificate-heading">Older certificate #4</h4>
                        </div>
                        <div className="certificate-section df fd-r">
                            <h4 className="certificate-date">2018</h4>
                            <h4 className="certificate-heading">Certificate BBB #5</h4>
                        </div>
                    </div>

                    <div className="cube-face cube-face-top">
                        <p className="intro-heading"><span>Pro</span>jects</p>
                        <div className="projects">
                            <div className="project-border">
                                <div className="project-wrapper">
                                    <div className="visit-wrapper">
                                        <p className="app-title">#1 App</p>
                                        <a className="visit-app" href="">Visit app <i className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-border">
                                <div className="project-wrapper">
                                    <div className="visit-wrapper">
                                        <p className="app-title">#2 App</p>
                                        <a className="visit-app" href="">Visit app <i className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-border">
                                <div className="project-wrapper">
                                    <div className="visit-wrapper">
                                        <p className="app-title">#3 App</p>
                                        <a className="visit-app" href="">Visit app <i className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-border">
                                <div className="project-wrapper">
                                    <div className="visit-wrapper">
                                        <p className="app-title">#4 App</p>
                                        <a className="visit-app" href="">Visit app <i className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-border">
                                <div className="project-wrapper">
                                    <div className="visit-wrapper">
                                        <p className="app-title">#5 App</p>
                                        <a className="visit-app" href="">Visit app <i className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-border">
                                <div className="project-wrapper">
                                    <div className="visit-wrapper">
                                        <p className="app-title">#6 App</p>
                                        <a className="visit-app" href="">Visit app <i className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cube-face cube-face-bottom">
                        <p className="intro-heading">Con<span>tacts</span></p>
                        <h4 className="work-edu-heading"><i className="fas fa-location-arrow"></i> Lucknow,India</h4>
                        <h4 className="work-edu-heading"><i className="far fa-envelope"></i> some.persons.email@gmail.com</h4>
                        <h4 className="work-edu-heading"><i className="fas fa-phone"></i> +11111111111</h4>
                        <div className="social-media-btns">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-github"></i>
                            <i className="fab fa-codepen"></i>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Cube;