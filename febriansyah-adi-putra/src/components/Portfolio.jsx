import React, { Component, Fragment } from 'react'
import "video-react/dist/video-react.css"
import { Card } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import '../assets/style/component.css'
import { Modal } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Jajaid from '../assets/image/Jajaid.jpg'
import JajaidSeller from '../assets/image/JajaidSeller.jpg'
import Promgirl from '../assets/image/Promgirl.png'
import Averyaustin from '../assets/image/Averyaustin.png'
import Healthyline from '../assets/image/Healthyline.png'



import futsal0 from '../assets/image/futsal0.png'
import futsal1 from '../assets/image/futsal1.png'
import futsal2 from '../assets/image/futsal2.png'
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
                        src={Promgirl}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>As user</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="py-5 bg-dark">
                    <img
                        className="d-block w-100"
                        src={Averyaustin}
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
                <Card className="card-port shadow" >
                    <Card.Header>PROMGIRL</Card.Header>
                    <Card.Body className='d-flex flex-column'>
                        <Card.Img className="card-image" src={Promgirl} variant="top" />
                        <Button variant="text" className="btn-card mt-3" onClick={e => window.open('https://www.promgirl.com/')} >Show more</Button>
                    </Card.Body>
                </Card>
                <Card className="card-port shadow" >
                    <Card.Header>Avery Austin</Card.Header>
                    <Card.Body className='d-flex flex-column'>
                        <Card.Img className="card-image" src={Averyaustin} varsiant="top" />
                        <Button variant="text" className="btn-card mt-3" onClick={e => window.open('https://www.averyaustin.com/')} >Show more</Button>
                    </Card.Body>
                </Card>
                <Card className="card-port shadow" >
                    <Card.Header>Healthy Line</Card.Header>
                    <Card.Body className='d-flex flex-column'>
                        <Card.Img className="card-image" src={Healthyline} variant="top" />
                        <Button variant="text" className="btn-card mt-3" onClick={e => window.open('https://healthyline.com/')} >Show more</Button>
                    </Card.Body>
                </Card>
                <Card className="card-port shadow" >
                    <Card.Header>RPJPN</Card.Header>
                    <Card.Body className='d-flex flex-column line-height-small'>
                        <p className="card-image d-flex align-items-center" variant="top">RPJPN | Kementerian PPN/Bappenas</p>
                        <Button variant="text" className="btn-card mt-3" onClick={e => window.open('https://www.google.com/search?q=rpjpn')} >Show more</Button>
                    </Card.Body>
                </Card>
                <Card className="card-port shadow" >
                    <Card.Header>Jaja.Id</Card.Header>
                    <Card.Body className='d-flex flex-column'>
                        <Card.Img className="card-image" src={Jajaid} variant="top" />
                        <div className='d-flex flex-row justify-content-around'>
                            <Button variant="text" className="btn-card mt-3" onClick={e => window.open('https://play.google.com/store/apps/details?id=com.jajaidbuyer')} >Play Store</Button>
                            <Button variant="text" className="btn-card mt-3" onClick={e => window.open('https://apps.apple.com/id/app/jaja-id-marketplace-hobbies/id1547981332?l=id')} >App Store</Button>
                        </div>                    
                    </Card.Body>
                </Card>
                <Card className="card-port shadow" >
                    <Card.Header>Jaja.Id Seller</Card.Header>
                    <Card.Body className='d-flex flex-column'>
                        <Card.Img className="card-image" src={JajaidSeller} variant="top" />
                        <div className='d-flex flex-row justify-content-around'>
                            <Button variant="text" className="btn-card mt-3" onClick={e => window.open('https://play.google.com/store/apps/details?id=com.seller.jaja')} >Play Store</Button>
                            <Button variant="text" className="btn-card mt-3" onClick={e => window.open('https://apps.apple.com/id/app/jaja-id-seller-center/id1586593289?l=id')} >App Store</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}
