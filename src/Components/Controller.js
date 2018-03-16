import React, { Component } from 'react';
import ButtonDisplay from './ButtonDisplay';

class Controller extends Component{
    constructor(props){
        super(props);

        this.state = ({
            lastInputNumber: true,
            //will check if last input is a number, eg: "5+" -> lastInputNumber: false
            //or "5+5" -> lastInputNumber: true

            expression: "",
            //expression will be a string so we can just add more strings later on

            isNegative: false
            //if user clicks on plus or minus button, expressions will be negative
        });

    }
    remove = () => {
        console.log("REMOVIGN");
    };
    render(){
        return(
            <div>
                <ButtonDisplay
                remove={this.remove}
                />
            </div>
        )
    }
}

export default Controller;