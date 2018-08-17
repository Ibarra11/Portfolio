import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ReactIcon from '../../images/react-icon.png';
import jsIcon from '../../images/js-icon.png';
import nodeIcon from '../../images/node-icon.png';
import postgresIcon from '../../images/postgresIcon.png';
import sassIcon from '../../images/sass-icon.png';
import reduxIcon from '../../images/redux-icon.png';
import expressIcon from '../../images/express-icon.png';
import bootstrapIcon from '../../images/bootstrap-icon.png';
import truckingManagerHeader from '../../images/header.png';
// import Carousel from 'nuka-carousel';
import Slider from 'react-slick';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const Projects = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
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
                            <h5>Personally Developed</h5>
                        </div>
                        <div className="project-description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aliquid dolorum nam optio minima maxime.</p>
                        </div>
                        <div className="project-tech">
                            <h5>Technoligies Used</h5>
                            <Grid container>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={ReactIcon} alt="react icon" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={reduxIcon} alt="redux icon" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={jsIcon} alt="JavaScript Icon" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={bootstrapIcon} alt="Sass Icon" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={sassIcon} alt="Sass Icon" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={nodeIcon} alt="Node Icon" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={postgresIcon} alt="PostgreSQL Icon" />
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className="icon-container">
                                        <img src={expressIcon} alt="PostgreSQL Icon" />
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
                        <Slider  {...settings} >
                            <div className="slider-img">
                                <img src={truckingManagerHeader} alt="" />
                            </div>
                            <div className="slider-img">
                                <img src={truckingManagerHeader} alt="" />
                            </div>
                            <div className="slider-img">
                                <img src={truckingManagerHeader} alt="" />
                            </div>
                        </Slider>
                    </div>
                </Grid>
                <Grid className="grid-item" item xs={12} md={5}>
                    <div className="project-info">
                        <div className="project-title">
                            <h3>Clonepen</h3>
                            <h5>Group Project</h5>
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
                        <Slider  {...settings} >
                            <div className="slider-img">
                                <img src={truckingManagerHeader} alt="" />
                            </div>
                            <div className="slider-img">
                                <img src={truckingManagerHeader} alt="" />
                            </div>
                            <div className="slider-img">
                                <img src={truckingManagerHeader} alt="" />
                            </div>
                        </Slider>
                    </div>
                </Grid>

            </Grid>
        </section>
    )

}

export default Projects;