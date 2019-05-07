import React, { Component } from 'react';
import DadsPic from '../assets/dad.jpeg';

class Bio extends Component {

    render() {
        return (
            <div style={bioStyle}>
                <h1>Chris W. Hobbs</h1>
                <img src={DadsPic} alt="" style={imageStyle} />
                <p style={paragraphStyle}>A native of Tallahassee, FL, Chris is an entrepreneur
                    who currently resides in Marietta, GA. A married father
                    of two, his interest and love for writing began at an
                    early age. After a standout football career at the
                    University of Miami (FL) and a brief stint in the NFL,
                    he has taken his passion for writing short stories and
                    poems to creating 'The Test', his debut as a novelist.
                </p>
            </div>
        )
    }
}

const imageStyle = {
    width: '30%'
}

const bioStyle = {
    margin: 30
}

const paragraphStyle = {
    margin: 35
}

export default Bio;