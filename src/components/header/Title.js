/**
 * Created by w on 2017/3/21.
 */
import React from "react";
export default class Title extends React.Component {
    render() {
        var styles = {
            display: 'table-cell',
            verticalAlign: 'bottom',
            zIndex: 3,
            padding: '3em',
            position: 'relative'//z-index not working if without
        };
        return (
            <div style={styles}>
                <h2>李小聪大事记</h2>
                <br/>
                <h3>李小聪的日记</h3>
            </div>
        )
    }
}
