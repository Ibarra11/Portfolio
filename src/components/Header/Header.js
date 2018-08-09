import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Headshot from '../../images/headshot.JPG';
import Waypoint from 'react-waypoint';
import Brand from '../../images/brand.png';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

class Header extends Component {
    state = {
        nav: false
    }

    componentDidMount(){
        configureAnchors({ offset: -100, scrollDuration: 500 })
    }
   
    testEnter = () =>{
        this.setState({nav: false})
    }

    testLeave = () =>{
        this.setState({nav: true})
    }
    render() {
        return (
            <div className="header">
                <nav className={this.state.nav ? 'nav nav-fixed': 'nav nav-hidden' }>
                    <AppBar >
                        <Toolbar className="main-nav">
                            <Typography className="brand-container" variant="title">
                              <a href="#home"> <img className="brand" src={Brand} alt=""/></a>
                             </Typography>
                            <div className="left-nav">
                                <Typography >
                                    <a className="link" href="#skills">Skills</a>
                                </Typography>
                                <Typography >
                                    <a className="link" href="#projects">Projects</a>
                                </Typography>
                                <Typography >
                                    <a className="link" href="#contact">Contact</a>
                                </Typography>
                            </div>
                        </Toolbar>
                    </AppBar>
                </nav>
                <div className="header-container">
                <ScrollableAnchor id={'home'}>
                    <Grid className="grid" container>
                        <Grid className="grid-item" item md={7} >
                            <div className="header-title">
                                <h1>Alan Ibarra</h1>
                                <h3>Full Stack Web Developer</h3>
                            </div>
                        </Grid>
                
                   
                        <Grid className="grid-item 
                        about-info" item md={5}>
                            <div className="header-image">
                                <img src={Headshot} alt="" />
                            </div>
                            <div className="header-about">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati laborum numquam accusantium, dignissimos cumque voluptate tenetur odio commodi id tempora temporibus asperiores vitae doloremque repudiandae eos fugiat accusamus cum?</p>
                            </div>
                        </Grid>
                        <Waypoint className="border" topOffset='60%'
                            onEnter={this.testEnter}
                            onLeave={this.testLeave}
                        />
                    </Grid>

                    </ScrollableAnchor>
                </div>
            </div>
        )
    }

}

export default Header;