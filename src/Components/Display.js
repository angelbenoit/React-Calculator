import React, { Component } from 'react';
import '../App.css';

class Display extends Component{
    render(){
        return(
            <div className="display">
                <p>
                    {this.props.expression}
                </p>
                <p>
                    {this.props.symbol}
                </p>
            </div>
        )
    }
}

export default Display;