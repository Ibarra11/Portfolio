import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import swal from 'sweetalert2';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    componentDidMount() {
        configureAnchors({ offset: -100, scrollDuration: 500 })
    }

    onInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    sendEmail = event => {
        event.preventDefault();
        let { name, email, message } = this.state;
        axios.post('/api/send', { name, email, message })
            .then(() => {
                this.setState({ name: '', email: '', message: '' })
                swal({
                    position: 'center',
                    type: 'success',
                    title: 'Email successfully sent',
                    showConfirmButton: false,
                    timer: 2000
                })

            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <section className="section contact">
                <ScrollableAnchor id={'contact'}>
                    <div className="section-header">
                        <h2>Contact</h2>
                    </div>
                </ScrollableAnchor>
                <form onSubmit={this.sendEmail} className="form">
                    <div className="form-inputs">
                        <div className="form-group">
                            <h5>Name</h5>
                            <input value={this.state.name} onChange={this.onInputChange} name="name" type="text" />
                        </div>
                        <div className="form-group">
                            <h5>Email</h5>
                            <input value={this.state.email} onChange={this.onInputChange} name="email" type="text" />
                        </div>
                        <div className="form-group">
                            <h5>Message</h5>
                            <textarea value={this.state.message} onChange={this.onInputChange} name="message"></textarea>
                        </div>
                        <div className="form-submit">
                            <button className="btn" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Contact;