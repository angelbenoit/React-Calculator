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

            decimal: false,
            //can only have one decimal per number, if user adds a decimal, it is now true
            symbol: "",
            pressedSymbol: false,
            eq1: 0
        });
        this.equals = this.equals.bind(this);
        this.numInput = this.numInput.bind(this);
    }

    remove = () => {
        this.setState({
            expression: "",
            isNegative: false,
            lastInputNumber: false,
            decimal: false,
            currentSymbol: "",
            pressedSymbol: false,
            eq1: 0
        });
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
    turnNeg = () => {
        this.setState({isNegative: true});
    };

    equals = () => {
        let num = this.evalNum();
        this.setState({expression: num, pressedSymbol: false, symbol: ""});
    };

    sqrt = () => {
            let num = Math.sqrt(Number(this.state.expression));
            this.setState({expression: num});
    };

    evalNum = () => {
        let num;
        if(this.state.pressedSymbol === true){
            num = Math.round(eval(`${this.state.eq1.toString()} ${this.state.symbol} ${this.state.expression}`))
        }
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
        let num = this.state.expression;
        if(!this.state.pressedSymbol){
            this.setState({
                expression: "",
                eq1: Number(num),
                symbol: sym,
                pressedSymbol: true
            })
        }
    };

    one = () => {
        this.numInput("1");
    };
    two = () => {
        this.numInput("2");
    };
    three = () => {
        this.numInput("3");
    };
    four = () => {
        this.numInput("4");
    };
    five = () => {
        this.numInput("5");
    };
    six = () => {
        this.numInput("6");
    };
    seven = () => {
        this.numInput("7");
    };
    eight = () => {
        this.numInput("8");
    };
    nine = () => {
        this.numInput("9");
    };
    zero = () => {
        this.numInput("0");
    };

    numInput = (num) => {
            this.setState({expression: this.state.expression + num});
    };



    render(){
        return(
            <div>
                <Display
                    expression={this.state.expression}
                    isNegative={this.state.isNegative}
                    symbol={this.state.symbol}
                />
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
                timesNegative={this.turnNeg}
                />
            </div>
        )
    }
}

export default Controller;

