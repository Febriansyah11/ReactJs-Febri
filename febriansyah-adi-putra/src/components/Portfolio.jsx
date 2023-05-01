import React, { Component, Fragment } from 'react'
import "video-react/dist/video-react.css"
import { Card } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import '../assets/style/component.css'
import Jajaid from '../assets/image/Jajaid.jpg'
import JajaidSeller from '../assets/image/JajaidSeller.jpg'
import Promgirl from '../assets/image/Promgirl.png'
import Averyaustin from '../assets/image/Averyaustin.png'
import Healthyline from '../assets/image/Healthyline.png'


export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
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
