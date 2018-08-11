import React, { Component } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';

class Contact extends Component {
    render() {
        return (
            <section className="section contact">
                <div className="section-header">
                    <h2>Contact</h2>
                </div>
                <form className="form">
                    <div className="form-inputs">
                        <div className="form-group">
                            <h5>Name</h5>
                            <input  type="text" />
                        </div>
                        <div className="form-group">
                            <h5>Email</h5>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <h5>Message</h5>
                            <textarea></textarea>
                        </div>
                        <div className="form-submit">
                            <Button variant='contained'>
                                Send Message
                            </Button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Contact;