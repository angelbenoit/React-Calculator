import React, { Component } from 'react';
import '../App.css';

class ButtonDisplay extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <table cellPadding="0" cellSpacing="0" className="tbl">
                    <tbody className="buttonDisplay">
                        <tr>
                            <td id="C" className="btn" onClick={this.props.remove}>C</td>
                            <td id="CE" className="btn">CE</td>
                            <td id="+-" className="btn">+-</td>
                            <td id="√" className="btn">√</td>
                        </tr>
                    </tbody>
                    <tbody className="buttonDisplay">
                        <tr>
                            <td id="7" className="btn">7</td>
                            <td id="8" className="btn">8</td>
                            <td id="9" className="btn">9</td>
                            <td id="/" className="btn">/</td>
                        </tr>
                    </tbody>
                    <tbody className="buttonDisplay">
                        <tr>
                            <td id="4" className="btn">4</td>
                            <td id="5" className="btn">5</td>
                            <td id="6" className="btn">6</td>
                            <td id="*" className="btn">*</td>
                        </tr>
                    </tbody>
                    <tbody className="buttonDisplay">
                        <tr>
                            <td id="1" className="btn">1</td>
                            <td id="2" className="btn">2</td>
                            <td id="3" className="btn">3</td>
                            <td id="-" className="btn">-</td>
                        </tr>
                    </tbody>
                    <tbody className="buttonDisplay">
                        <tr>
                            <th id="0" className="btn">0</th>
                            <th id="." className="btn">.</th>
                            <th id="+" className="btn">+</th>
                            <th id="=" className="btn">=</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ButtonDisplay;