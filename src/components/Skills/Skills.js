import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import ReactIcon from '../../images/react-icon.png';
import jsIcon from '../../images/jsicon.png';
import nodeIcon from '../../images/node.png';
import postgresIcon from '../../images/postgresIcon.png';
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
                </Grid>
            </div>
        </section>
    )
}

export default Skills;