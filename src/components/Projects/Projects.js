import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ReactIcon from '../../images/react-icon.png';
import jsIcon from '../../images/jsicon.png';
import nodeIcon from '../../images/node.png';
import postgresIcon from '../../images/postgresIcon.png';
import truckingManagerHeader from '../../images/header.png';
import Carousel from 'nuka-carousel';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const Projects = () => {
    configureAnchors({ offset: -100, scrollDuration: 500 })
    return (
        <section className="section projects">
            <ScrollableAnchor id={'projects'}>
                <div className="section-header">
                    <h2>Projects</h2>
                </div>
            </ScrollableAnchor>
            <Grid className="container" container>
                <Grid className="grid-item" item xs={12} md={5}>
                    <div className="project-info">
                        <div className="project-title">
                            <h3>Trucking Manager</h3>
                        </div>
                        <div className="project-description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aliquid dolorum nam optio minima maxime.</p>
                        </div>
                        <div className="project-tech">
                            <h5>Technoligies Used</h5>
                            <Grid container>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={ReactIcon} alt="" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={jsIcon} alt="" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={nodeIcon} alt="" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={postgresIcon} alt="" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="project-links">
                            <Button variant='contained'>
                                Github
                            </Button>
                            <Button variant='contained'>
                                Live Site
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid className="grid-item" item xs={12} md={7}>
                    <div className="project-view">
                        <Carousel>
                            <img className="screenshot" src={truckingManagerHeader} />
                            <img className="screenshot" src={truckingManagerHeader} />
                            <img className="screenshot" src={truckingManagerHeader} />
                            <img className="screenshot" src={truckingManagerHeader} />
                            <img className="screenshot" src={truckingManagerHeader} />
                        </Carousel>
                    </div>
                </Grid>
                <Grid className="grid-item" item xs={12} md={7}>
                    <div className="project-view">
                        <Carousel>
                            <img className="screenshot" src={truckingManagerHeader} />
                            <img className="screenshot" src={truckingManagerHeader} />
                            <img className="screenshot" src={truckingManagerHeader} />
                            <img className="screenshot" src={truckingManagerHeader} />
                            <img className="screenshot" src={truckingManagerHeader} />
                        </Carousel>
                    </div>
                </Grid>
                <Grid className="grid-item" item xs={12} md={5}>
                    <div className="project-info">
                        <div className="project-title">
                            <h3>Trucking Manager</h3>
                        </div>
                        <div className="project-description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aliquid dolorum nam optio minima maxime.</p>
                        </div>
                        <div className="project-tech">
                            <h5>Technoligies Used</h5>
                            <Grid container>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={ReactIcon} alt="" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={jsIcon} alt="" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={nodeIcon} alt="" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={postgresIcon} alt="" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="project-links">
                            <Button variant='contained'>
                                Github
                            </Button>
                            <Button variant='contained'>
                                Live Site
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </section>
    )

}

export default Projects;