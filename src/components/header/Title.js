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
                <h2>My Blog</h2>
                <h3>A Blog</h3>
            </div>
        )
    }
}
