import React, { Component } from 'react';
import '../App.css';

class ButtonDisplay extends Component{
    render(){
        return(
            <div>
                <table cellPadding="0" cellSpacing="0" className="tbl">
                    <tbody className="buttonDisplay">
                        <tr className="tr">
                            <td className="btn" onClick={this.props.remove}>C</td>
                            <td className="btn" onClick={this.props.timesNegative}>+-</td>
                            <td className="btn sqrt" onClick={this.props.sqrt}>√</td>
                        </tr>
                    </tbody>
                    <tbody className="buttonDisplay">
                        <tr className="tr">
                            <td className="btn" onClick={this.props.seven}>7</td>
                            <td className="btn" onClick={this.props.eight}>8</td>
                            <td className="btn" onClick={this.props.nine}>9</td>
                            <td className="btn" onClick={this.props.divide}>/</td>
                        </tr>
                    </tbody>
                    <tbody className="buttonDisplay">
                        <tr className="tr">
                            <td className="btn" onClick={this.props.four}>4</td>
                            <td className="btn" onClick={this.props.five}>5</td>
                            <td className="btn" onClick={this.props.six}>6</td>
                            <td className="btn" onClick={this.props.times}>*</td>
                        </tr>
                    </tbody>
                    <tbody className="buttonDisplay">
                        <tr className="tr">
                            <td className="btn" onClick={this.props.one}>1</td>
                            <td className="btn" onClick={this.props.two}>2</td>
                            <td className="btn" onClick={this.props.three}>3</td>
                            <td className="btn" onClick={this.props.minus}>-</td>
                        </tr>
                    </tbody>
                    <tbody className="buttonDisplay">
                        <tr className="tr">
                            <th className="btn" onClick={this.props.zero}>0</th>
                            <th className="btn" onClick={this.props.dec}>.</th>
                            <th className="btn" onClick={this.props.plus}>+</th>
                            <th className="btn" onClick={this.props.equals}>=</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ButtonDisplay;