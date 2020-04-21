import React, { Component } from 'react'
import { Navbar, Form, FormControl, FormGroup, Button, Nav } from 'react-bootstrap'
import Flower from '@material-ui/icons/LocalFlorist';
import '../assets/style/component.css'
import Swal from 'sweetalert2'
import axios from 'axios'


export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.name === "" && this.state.name.length <= 2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your name correctly',
            })
        } else if (this.state.email === "" && this.state.email <= 3) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email correctly',
            })
        } else if (this.state.message === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your message correctly',
            })
        } else if (this.state.message <= 7) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Message at least one sentence',
            })
        } else {
            const { name, email, message } = this.state
            axios.post('/api/form', {
                name,
                email,
                message
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your message has been sent',
                showConfirmButton: false,
                timer: 1500
            })
            this.setState({
                name: '',
                email: '',
                message: ''
            })
        }

    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" sticky="bottom" bg="dark" variant="dark" className="dashboard d-flex flex-column justify-content-start align-items-center p-xl-5 p-lg-5 p-md-3 p-sm-1 p-xs-1 text-raleway-about">
                <p id="contact" className="m-5 text-raleway-dashboard text-white text-center mb-xl-5 mb-lg-5"><Flower />&nbsp;CONTACT ME&nbsp;<Flower /></p>
                <Form onSubmit={this.handleSubmit} className="row w-100 bg-dark justify-content-center align-items-center text-white px-xl-5 px-lg-5">
                    <div className="row col-12 justify-content-center px-xl-5 px-lg-5">
                        <div className="row col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 justify-content-center">
                            <FormGroup className="w-100 col-12 mb-3 p-0" controlId="formBasicText">
                                <FormControl name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Your Name" />
                            </FormGroup>

                            <FormGroup className="w-100 col-12 mt-3 p-0" controlId="formBasicEmail">
                                <FormControl name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Your@gmail.com" />
                            </FormGroup>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-xl-0 mt-lg-0 m-auto">
                            <FormGroup className="w-100" controlId="exampleForm.ControlTextarea1">
                                <FormControl as="textarea" rows="4" name="message" type="textarea" value={this.state.message} onChange={this.handleChange} placeholder="Your Message" />
                            </FormGroup>
                        </div>

                    </div>
                    <Button type="submit" className="col-xl-2 col-lg-4 col-md-11 col-sm-4 col-xs-8 col-7">Send</Button>
                </Form>
                <Nav.Link className="text-center mt-5 text-raleway-about-project ">
                    About this project, i use ReactJs and NodeJs to make this, and i don't use templates
                </Nav.Link>
            </Navbar>
        )
    }
}