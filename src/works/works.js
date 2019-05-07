import React, { Component } from 'react';
import WORKS from '../data/works';

class Works extends Component {
    render() {
        return (
            <div>
                <div style={worksStyle}>
                    {
                        WORKS.map(WORK => {
                            return (
                                <div>
                                    <div key={WORK.id}>{WORK.title}</div>
                                    <img alt="" src={WORK.image} style={imageStyle} />
                                    <div>{WORK.description}</div>
                                    <hr />
                                    <div>{WORK.summary}</div>
                                    <hr />
                                    <div>{WORK.summary2}</div>
                                </div>

                            )
                        })
                    }
                    <button>Buy Now</button>
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
}
const imageStyle = {
    display: 'flex',
    width: 200,
}

export default Works;