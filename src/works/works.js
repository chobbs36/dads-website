import React, { Component } from 'react';
import WORKS from '../data/works';

class Works extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                        WORKS.map(WORK => {
                            return (
                                <div style={worksStyle}>
                                    {/* <div key={WORK.id}>{WORK.title}</div> */}
                                    <img alt="" src={WORK.image} style={imageStyle} />
                                    <div style={descriptionStyle}>{WORK.description}</div>
                                    <hr />
                                    <div>{WORK.summary}</div>
                                    <hr />
                                    <div>{WORK.summary2}</div>
                                </div>

                            )
                        })
                    }
                    <button style={buttonStyle}>Buy Now</button>
                </div>
            </div>
        )
    }
}


const worksStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
}
const imageStyle = {
    display: 'flex',
    width: 200,
    marginBottom: 30
}

const buttonStyle = {
    margin: 20,
    width: 100,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#008000',
    color: '#FFFFFF',
    borderRadius: 5,
    border: 'none'
}

const descriptionStyle = {
    fontStyle: 'italic'
}

export default Works;