/**
 * Created by w on 2017/3/20.
 */
import React from "react";
export default class MenuButton extends React.Component {
    render() {
        var ButtonStyle = {
            position: 'fixed',
            top: '50px',
            left: '50px',
            zIndex: 999
        };
        return (
            <button onClick={this.props.menuToggle} style={ButtonStyle}>...</button>
        )
    }
}