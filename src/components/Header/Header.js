import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Headshot from '../../images/headshot.JPG';
import Waypoint from 'react-waypoint';
import Brand from '../../images/brand.png';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import MediaQuery from 'react-responsive';
import Zoom from 'react-reveal/Zoom';
class Header extends Component {
    state = {
        nav: false,
        displayNav: false
    }
    componentDidMount(){
        configureAnchors({ offset: -100, scrollDuration: 500 })
    }
   
    testEnter = () =>{
        this.setState({nav: false})
    }

    testLeave = (props) =>{
     if(props.currentPosition !== 'below'){
        this.setState({nav: true})
     } 
    }

    displayNav = () =>{
        this.setState({displayNav: !this.state.displayNav})
    }
    render() {
        return (
            <ScrollableAnchor id={'home'}>
            <div className="header">
            <nav className={this.state.nav ? 'nav nav-fixed': 'nav nav-hidden' }>
                <div className="nav-brand">
                <a href="#home"><img src={Brand} alt=""/></a>
                </div>
                <div className="hamburger-menu">
                    <i onClick={this.displayNav} className="fa fa-bars"></i>
                </div>
              <div className="nav-links">
                <a className="nav-link" href="#skills">Skills</a>
                <a className="nav-link" href="#projects">Projects</a>
                <a className="nav-link" href="#contact">Contact</a>
              </div>
              <div className={this.state.displayNav ? "mobile-links": "none" } >
                <a className="nav-link" href="#skills">Skills</a>
                <a className="nav-link" href="#projects">Projects</a>
                <a className="nav-link" href="#contact">Contact</a>
              </div>
            </nav>

                <Zoom duration={2000}>
                <div className="header-container">
                <MediaQuery query="(min-device-width: 769px)">
                <Grid className="grid" container>
                        <Grid className="grid-item animated bounce faster" item sm={6} md={7}>
                            <div className="  header-title">
                                <h1>Alan Ibarra</h1>
                                <h3>Full Stack Web Developer</h3>
                            </div>
                        </Grid>
                        <Grid className="grid-item 
                        about-info" item sm={6} md={5}>
                            <div className="header-image">
                                <img src={Headshot} alt="headshot" />
                            </div>
                            <div className="header-about">
                                <p className="about-text">
                                    Web development for me is not a hobby, but a passion.  Being able to take ideas and bring
                                    them to life is one of the most rewarding feelings.  
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    </MediaQuery >  
                </div>
                </Zoom>
               <MediaQuery query="(max-device-width: 768px)">
                <div className="header-responsive">
                <div className="header-responsive-title">
                        <h1>Alan Ibarra</h1>
                        <h3>Full Stack Web Developer</h3>
                    </div>
                    <div className="header-responsive-about">
                        <p>Web development for me is not a hobby, but a passion.  Being able to take ideas and bring
                                    them to life is one of the most rewarding feelings.  </p>
                    </div>
                    <div className="header-responsive-headshot">
                        <img src={Headshot} alt="heashto"/>
                    </div> 
                </div>
                </MediaQuery > 
                <Waypoint className="border" topOffset='60%'
                            onEnter={this.testEnter}
                            onLeave={this.testLeave}
                        />  
            </div>
            </ScrollableAnchor>
        )
    }

}

export default Header;