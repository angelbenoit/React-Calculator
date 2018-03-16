import React, { Component } from 'react';
import ButtonDisplay from './ButtonDisplay';
import Display from './Display';

class Controller extends Component{
    constructor(props){
        super(props);

        this.state = ({
            lastInputNumber: false,
            //will check if last input is a number, eg: "5+" -> lastInputNumber: false
            //or "5+5" -> lastInputNumber: true

            expression: "",
            //expression will be a string so we can just add more strings later on

            isNegative: false,
            //if user clicks on plus or minus button, expressions will be negative

            decimal: false
            //can only have one decimal per number, if user adds a decimal, it is now true
        });

    }
    remove = () => {
        this.setState({expression: "", isNegative: false, lastInputNumber: false, decimal: false});
    };

    plus = () => {
        this.symbol("+");
    };
    minus = () => {
        this.symbol("-");
    };
    times = () => {
        this.symbol("*");
    };
    divide = () => {
        this.symbol("/");
    };

    equals = () => {
        if(this.state.lastInputNumber === true){
            let num = this.evalNum();
            this.setState({expression: num});
        }
    };

    sqrt = () => {
        if(this.state.lastInputNumber === true) {
            let num = this.evalNum();
            num = Math.sqrt(Number(num));
            this.setState({expression: num});
        }
    };

    evalNum = () => {
        let num = Math.round(eval(this.state.expression));
        return num.toString();
    };

    dec = () => {
        if(this.state.decimal === false){
            this.setState({
                decimal: true,
                expression: this.state.expression + "."
            })
        }
    };

    symbol = (sym) => {
        if(this.state.lastInputNumber === true){
            this.setState({
                lastInputNumber: false,
                expression: this.state.expression + sym,
                decimal: false
            });
        }
    };

    one = () => {
        this.setState({expression: this.state.expression + "1", lastInputNumber: true})
    };
    two = () => {
        this.setState({expression: this.state.expression + "2", lastInputNumber: true})
    };
    three = () => {
        this.setState({expression: this.state.expression + "3", lastInputNumber: true})
    };
    four = () => {
        this.setState({expression: this.state.expression + "4", lastInputNumber: true})
    };
    five = () => {
        this.setState({expression: this.state.expression + "5", lastInputNumber: true})
    };
    six = () => {
        this.setState({expression: this.state.expression + "6", lastInputNumber: true})
    };
    seven = () => {
      this.setState({expression: this.state.expression + "7", lastInputNumber: true})
    };
    eight = () => {
        this.setState({expression: this.state.expression + "8", lastInputNumber: true})
    };
    nine = () => {
        this.setState({expression: this.state.expression + "9", lastInputNumber: true})
    };
    zero = () => {
        this.setState({expression: this.state.expression + "0", lastInputNumber: true})
    };

    render(){
        return(
            <div>
                <Display expression={this.state.expression}/>
                <ButtonDisplay
                remove={this.remove}
                one={this.one}
                two={this.two}
                three={this.three}
                four={this.four}
                five={this.five}
                six={this.six}
                seven={this.seven}
                eight={this.eight}
                nine={this.nine}
                zero={this.zero}
                plus={this.plus}
                minus={this.minus}
                dec={this.dec}
                times={this.times}
                divide={this.divide}
                equals={this.equals}
                sqrt={this.sqrt}
                />
            </div>
        )
    }
}

export default Controller;