import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactIcon from '../../images/react-icon.png';
import jsIcon from '../../images/js-icon.png';
import nodeIcon from '../../images/node-icon.png';
import postgresIcon from '../../images/postgresIcon.png';
import html5Icon from '../../images/html-icon.png';
import cssIcon from '../../images/css-icon.png';
import sassIcon from '../../images/sass-icon.png';
import jestIcon from '../../images/jest-icon.png';
import postmanIcon from '../../images/postman-icon.png';
import reduxIcon from '../../images/redux-icon.png';
import gitIcon from '../../images/git-icon.png';
import expressIcon from '../../images/express-icon.png';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Slide from 'react-reveal/Slide';
const Skills = () => {
    configureAnchors({ offset: -100, scrollDuration: 500 })
    return (
        <section className="section skills">
            <ScrollableAnchor id={'skills'}>
                <div className="section-header">
                    <h2>Skills</h2>
                </div>
            </ScrollableAnchor>
            <Slide left cascade>
                <div className="skills-content">
                    <Grid className="grid-container" container spacing={16} >
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={jsIcon} alt="Javascript icon" />
                                <h5>JavaScript</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={ReactIcon} alt="React icon" />
                                <h5>React</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={reduxIcon} alt="Redux icon" />
                                <h5>Redux</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={nodeIcon} alt="Node icon" />
                                <h5>Node</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={expressIcon} alt="Express Icon" />
                                <h5>Express</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={postgresIcon} alt="PostgreSQL icon" />
                                <h5>PostgreSQL</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={html5Icon} alt="HTML Icon" />
                                <h5>HTML</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={cssIcon} alt="CSS Icon" />
                                <h5>CSS</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={sassIcon} alt="SASS Icon" />
                                <h5>SASS</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={jestIcon} alt="Jest Icon" />
                                <h5>Jest</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={postmanIcon} alt="Postman Icon" />
                                <h5>Postman</h5>
                            </div>
                        </Grid>
                        <Grid className="grid-item" item xs={4} sm={3} md={2}>
                            <div className="icon-container">
                                <img src={gitIcon} alt="Git Icon" />
                                <h5>Git</h5>
                            </div>
                        </Grid>
                    </Grid>
            </div>
            </Slide>
        </section>
    )
}

export default Skills;