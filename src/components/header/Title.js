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
            color: 'white',
            position: 'relative'//z-index not working if without
        };
        return (
            <div style={styles}>
                <h1>{this.props.title=='/mobile'?"移动":"无"}</h1>
                <br/>
                <h3>可能只差一段“奇葩”视频</h3>
            </div>
        )
    }
}
