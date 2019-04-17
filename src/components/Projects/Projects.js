import React from "react";
import { Grid, Button } from "@material-ui/core";
import ReactIcon from "../../images/react-icon.png";
import jsIcon from "../../images/js-icon.png";
import nodeIcon from "../../images/node-icon.png";
import postgresIcon from "../../images/postgresIcon.png";
import sassIcon from "../../images/sass-icon.png";
import reduxIcon from "../../images/redux-icon.png";
import expressIcon from "../../images/express-icon.png";
import bootstrapIcon from "../../images/bootstrap-icon.png";
import trucks from "../../images/trucks.png";
import landingPage from "../../images/header.png";
import payroll from "../../images/payroll.png";
import login from "../../images/login.png";
import dragDrop from "../../images/dragndrop2.png";
import pens from "../../images/pens.png";
import home from "../../images/home.png";
import profile from "../../images/profile.png";
import MediaQuery from "react-responsive";
import Slider from "react-slick";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  configureAnchors({ offset: -100, scrollDuration: 500 });
  return (
    <section className="section projects">
      <ScrollableAnchor id={"projects"}>
        <div className="section-header">
          <h2>Projects</h2>
        </div>
      </ScrollableAnchor>
      <Grid className=" project-grid container" container>
        <MediaQuery query="(max-device-width: 972px)">
          <div className="card">
            <div className="project-view">
              <Slider {...settings}>
                <div className="slider-img">
                  <img src={landingPage} alt="landing page" />
                </div>
                <div className="slider-img">
                  <img src={home} alt="home page for dashboard" />
                </div>
                <div className="slider-img">
                  <img src={payroll} alt="paryoll" />
                </div>
                <div className="slider-img">
                  <img src={trucks} alt="trucks" />
                </div>
              </Slider>
            </div>
            <div className="card-text">
              <div className="card-header">
                <h3>Trucking Manager</h3>
                <h5>Personal Project</h5>
              </div>
              <div className="card-body">
                <p>
                  Trucking Manager is a web application built to assist trucking
                  companies in efficiently running their business. Some features
                  of this application include charts to display metrics such as
                  expenses, income, payroll, and revenue. A dispatch system that
                  allows users to send job information to their drivers.
                </p>
              </div>
              <div className="card-buttons">
                <a
                  className="btn"
                  target="_blank"
                  href="https://github.com/Ibarra11/Trucking_Manager"
                >
                  Github
                </a>
                <a
                  className="btn"
                  target="_blank"
                  href="https://truckingmanager.live/#/"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="project-view">
              <Slider {...settings}>
                <div className="slider-img">
                  <img src={login} alt="login page" />
                </div>
                <div className="slider-img">
                  <img src={dragDrop} alt="drag and drop" />
                </div>
                <div className="slider-img">
                  <img src={pens} alt="clone pen" />
                </div>
                <div className="slider-img">
                  <img src={profile} alt="clonepen profile" />
                </div>
              </Slider>
            </div>
            <div className="card-text">
              <div className="card-header">
                <h3>Clonepen </h3>
                <h5>Group Project</h5>
              </div>
              <div className="card-body">
                <p>
                  Clonepen is a clone of the popular front end development site
                  codepen.io. This project was developed with a group of three
                  other developers. Some of the main features of this
                  application include secure authentication and registration
                  using bcrypt. A text editor where users are able to view,
                  save, and edit pens. A drag and drop feature where users can
                  customize their showcase of pens.
                </p>
              </div>
              <div className="card-buttons">
                <a
                  className="btn"
                  target="_blank"
                  href="https://github.com/ErinHales/codepen-clone"
                >
                  Github
                </a>
                <a
                  className="btn"
                  target="_blank"
                  href="https://clonepen.com/#/"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 973px)">
          <Grid className="grid-item" item xs={12}>
            <div className="project-info">
              <Grid className="project-grid" container>
                <Grid className="project-content" item xs={6}>
                  <div className="project-title">
                    <h3>Trucking Manager</h3>
                    <h5>Personal Project</h5>
                  </div>
                  <div className="project-description">
                    <p>
                      Trucking Manager is a web application built to assist
                      trucking companies in efficiently running their business.
                      Some features of this application include charts to
                      display metrics such as expenses, income, payroll, and
                      revenue. A dispatch system that allows users to send job
                      information to their drivers.
                    </p>
                  </div>
                  <div className="project-tech">
                    <Grid className="icon-grid" container>
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
                    <a
                      className="btn"
                      target="_blank"
                      href="https://github.com/Ibarra11/Trucking_Manager"
                    >
                      Github
                    </a>
                    <a
                      className="btn"
                      target="_blank"
                      href="https://truckingmanager.live/#/"
                    >
                      Live Site
                    </a>
                  </div>
                </Grid>
                <Grid className="project-img" item xs={6}>
                  <div className="project-view">
                    <Slider {...settings}>
                      <div className="slider-img">
                        <img src={landingPage} alt="landing page" />
                      </div>
                      <div className="slider-img">
                        <img src={home} alt="home page for dashboard" />
                      </div>
                      <div className="slider-img">
                        <img src={payroll} alt="paryroll" />
                      </div>
                      <div className="slider-img">
                        <img src={trucks} alt="trucks" />
                      </div>
                    </Slider>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid className="grid-item" item xs={12}>
            <div className="project-info">
              <Grid className="project-grid" container>
                <Grid className="project-content" item xs={6}>
                  <div className="project-title">
                    <h3>Clonepen</h3>
                    <h5>Group Project</h5>
                  </div>
                  <div className="project-description">
                    <p>
                      Clonepen is a clone of the popular front end development
                      site codepen.io. This project was developed with a group
                      of three other developers. Some of the main features of
                      this application include secure authentication and
                      registration using bcrypt. A text editor where users are
                      able to view, save, and edit their pens. A drag and drop
                      feature where users can customize their showcase of pens.
                    </p>
                  </div>
                  <div className="project-tech">
                    <Grid container className="icon-grid">
                      <Grid item md={4}>
                        <div className="icon-container">
                          <img src={ReactIcon} alt="react icon" />
                        </div>
                      </Grid>
                      <Grid item md={4}>
                        <div className="icon-container">
                          <img src={jsIcon} alt="JavaScript Icon" />
                        </div>
                      </Grid>
                      <Grid item md={4}>
                        <div className="icon-container">
                          <img src={sassIcon} alt="Sass Icon" />
                        </div>
                      </Grid>
                      <Grid item md={4}>
                        <div className="icon-container">
                          <img src={nodeIcon} alt="Node Icon" />
                        </div>
                      </Grid>
                      <Grid item md={4}>
                        <div className="icon-container">
                          <img src={postgresIcon} alt="PostgreSQL Icon" />
                        </div>
                      </Grid>
                      <Grid item md={4}>
                        <div className="icon-container">
                          <img src={expressIcon} alt="PostgreSQL Icon" />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="project-links">
                    <a
                      className="btn"
                      target="_blank"
                      href="https://github.com/ErinHales/codepen-clone"
                    >
                      Github
                    </a>
                    <a
                      className="btn"
                      target="_blank"
                      href="https://clonepen.com/#/"
                    >
                      Live Site
                    </a>
                  </div>
                </Grid>
                <Grid className="project-img" item xs={6}>
                  <div className="project-view">
                    <Slider {...settings}>
                      <div className="slider-img">
                        <img src={login} alt="login page" />
                      </div>
                      <div className="slider-img">
                        <img src={dragDrop} alt="drag and drop" />
                      </div>
                      <div className="slider-img">
                        <img src={pens} alt="codepen pens" />
                      </div>
                      <div className="slider-img">
                        <img src={profile} alt="codepen profile" />
                      </div>
                    </Slider>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </MediaQuery>
      </Grid>
    </section>
  );
};

export default Projects;
