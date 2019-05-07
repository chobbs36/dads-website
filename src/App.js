import React, { Component } from 'react';
import Tabs from './tabs/tabs';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 'Works',
            comments: [],
        }
    }

    addComment = (comment) => {
        this.setState({
            comments: [comment, ...this.state.comments]
        })
    }

    render() {
        return (
            <div style={mainStyles} id="bg">
                <Tabs />
            </div>
        )
    }
}

const mainStyles = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    imageRendering: 'pixelated',
    backgroundSize: 'cover',
    color: 'white'
}

export default App;