import React, { Component, Fragment } from 'react'
import "video-react/dist/video-react.css"
import { Card } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import '../assets/style/component.css'
import { Modal } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import FutsalBg from '../assets/image/futsalBg1.png'
import futsal0 from '../assets/image/futsal0.png'
import futsal1 from '../assets/image/futsal1.png'
import futsal2 from '../assets/image/futsal2.png'
import blog from '../assets/image/bgblg.png'
import Github from '../assets/image/Github.svg'
import { Player } from 'video-react'
import Video from '../assets/video/blogger.mp4'

function Modal1(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Carousel>
                <Carousel.Item className="py-5 bg-dark">
                    <img
                        className="d-block w-100"
                        src={futsal0}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>As user</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="py-5 bg-dark">
                    <img
                        className="d-block w-100"
                        src={futsal1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>As user</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="py-5 bg-dark">
                    <img
                        className="d-block w-100"
                        src={futsal2}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>As admin</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Modal>
    )
}
function Modal2(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Player
                playsInline
                poster="/assets/poster.png"
                src={Video}
            />
        </Modal>
    )
}

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false
        }
    }


    render() {
        console.log(this.state.showModal1, "modall 1");

        return (
            <Fragment>
                <Card className="card-port flex-grow-1 shadow" >
                    <Card.Header>Futsal Booking App</Card.Header>
                    <Card.Body className="mb-5 ">
                        <Card.Text>
                            <Card.Img className="card-image" src={FutsalBg} variant="top" />
                        </Card.Text>
                        <Card.Body>
                            <Button variant="primary" onClick={() => this.setState({ showModal1: true })}><p className="btn-card"
                                className="btn-card">Show more</p></Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
                <Card className="card-port flex-grow-1 shadow ">
                    <Card.Header>My Blog</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Card.Img className="card-image" src={blog} variant="top" />
                        </Card.Text>
                        <Card.Body>

                            <Button variant="primary" onClick={() => this.setState({ showModal2: true })}><p className="btn-card"
                                className="btn-card">Show more</p></Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
                <Card className="card-port flex-grow-1 shadow">
                    <Card.Header>Another project on my github</Card.Header>
                    <Card.Body>
                        <Card.Img className="card-image" src={Github} variant="top" />
                        <Card.Body className="m-auto">
                            <Button variant="primary" className="btn-card mt-3" onClick={e => window.location.href = 'https://github.com/Febriansyah11'} ><p className="btn-card"
                                className="btn-card">Show more</p></Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
                <Modal1
                    show={this.state.showModal1}
                    onHide={() => this.setState({ showModal1: false })}
                />
                <Modal2
                    show={this.state.showModal2}
                    onHide={() => this.setState({ showModal2: false })}
                />
            </Fragment>
        )
    }
}
