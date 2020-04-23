import React, { Component, Fragment } from 'react'
import ReactSpinner from '../logo.svg'
import Portfolio from './Portfolio';
import About from './About';
import Flower from '@material-ui/icons/LocalFlorist';
import Footer from './Footer';
import febri from '../assets/image/febri1.png'
import { Facebook, Instagram, GitHub } from '@material-ui/icons';


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            time: 1,
            loading: true,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: this.state.time += 1 }), 1000);
        let time = localStorage.getItem("f121212")
        parseInt(time) === 3 ? localStorage.setItem("f121212", 3) : localStorage.setItem("f121212", 7)
    }

    handleClickHref = () => {
        window.location.href('https://blkbekasi.kemnaker.go.id/')
    }

    render() {
        let time = localStorage.getItem("f121212")
        if (this.state.time === parseInt(time)) {
            clearInterval(this.interval)
            this.setState({
                loading: false,
                time: 0,
            })
            localStorage.setItem("f121212", 3)
        }
        return (
            <Fragment>
                {this.state.loading === true ?
                    <div className="row justify-content-center align-content-center vh-100">
                        <img className="App-logo" src={ReactSpinner} alt="react-loading" />
                    </div>
                    :
                    <div className="d-flex flex-column">
                        <div id="dashboard" className="dashboard d-flex justify-content-center align-items-center p-5 p-xs-1 p-sm-2">
                            <div className="d-flex flex-column justify-content-center align-items-center dash-febri">
                                <img className="potoprofil" src={febri} alt="febriansyah adi putra" />
                                <p className="m-1 text-raleway-febri text-center">Febriansyah Adi Putra</p>
                                <p className="m-1 text-raleway-febri text-center">Web Developer & Backend Developer</p>
                                <div className="d-flex flex-row align-items-center flex-grow-0">
                                    <a href="https://www.facebook.com/febriansyah.adiputra.3"><Facebook fontSize="large" className="navbar-icon-social m-1" style={{ color: 'white', textDecoration: 'dark' }} /></a>
                                    <a href="https://www.instagram.com/febriansz_/"><GitHub fontSize="large" className="navbar-icon-social m-1" style={{ color: 'white', textDecoration: 'dark' }} /></a>
                                    <a href="https://github.com/Febriansyah11"><Instagram fontSize="large" className="navbar-icon-social m-1" style={{ color: 'white', textDecoration: 'dark' }} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard bg-white p-5 h-auto" >
                            <div id="portfolio" className="d-flex flex-column align-items-center  justify-content-center pb-5">
                                <p className="mb-xl-5 mb-lg-5 text-raleway-dashboard"><Flower />&nbsp;PORTFOLIO&nbsp;<Flower /></p>
                                <div className="d-flex flex-row flex-wrap text-raleway-about text-dark pb-5">
                                    <Portfolio />
                                </div>
                            </div>
                        </div>
                        <div className="dashboard d-flex justify-content-center align-items-start p-5">
                            <div id="about" className="dash-about d-flex flex-column align-items-center justify-content-center">
                                <p className="mb-xl-5 mb-lg-5 text-raleway-dashboard mb-xl-5 mb-lg-5"><Flower />&nbsp;ABOUT&nbsp;<Flower /></p>
                                <About />
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            </Fragment>
        )
    }
}


export default Dashboard