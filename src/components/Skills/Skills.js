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
import bootstrapIcon from '../../images/bootstrap-icon.png';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
const Skills = () => {
    configureAnchors({ offset: -100, scrollDuration: 500 })
    return (
        <section className="section skills">
            <ScrollableAnchor id={'skills'}>
                <div className="section-header">
                    <h2>Skills</h2>
                </div>
            </ScrollableAnchor>
            <div className="skills-content">
                <Grid className="grid-container" container spacing={16} >
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={jsIcon} alt="" />
                            <h5>JavaScript</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={ReactIcon} alt="" />
                            <h5>React</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={reduxIcon} alt="" />
                            <h5>Redux</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={nodeIcon} alt="" />
                            <h5>React</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={postgresIcon} alt="" />
                            <h5>React</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={html5Icon} alt="" />
                            <h5>HTML</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={cssIcon} alt="" />
                            <h5>CSS</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={sassIcon} alt="" />
                            <h5>SASS</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={jestIcon} alt="" />
                            <h5>Jest</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={postmanIcon} alt="" />
                            <h5>Postman</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={gitIcon} alt="" />
                            <h5>GIT</h5>
                        </div>
                    </Grid>
                    <Grid className="grid-item" item xs={12} md={2}>
                        <div className="icon-container">
                            <img src={bootstrapIcon} alt="" />
                            <h5>Bootstrap</h5>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </section>
    )
}

export default Skills;