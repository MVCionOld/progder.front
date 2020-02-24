import React, {Component} from "react";
import './SubmitButton.css';


export class SubmitButton extends Component {

    render() {
        return (
            <input type="submit" name="" value={this.props.value}/>
        );
    }
}