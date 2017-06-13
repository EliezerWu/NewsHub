/**
 * Created by w on 2017/5/26.
 */
import React from "react";
import CatBackgroundMedia from "../components/catheader/catbackgroundMedia";
import CatTitle from "../components/catheader/cattitle";
export default class CatHeader extends React.Component {
    render() {
        var styles = {
            height: '30vh',
            width: '100%',
            display: 'table',
            position: 'relative',
            top: 0,
            left: 0
        };
        return (
            <CatHeader className="header" style={styles}>
                <CatBackgroundMedia/>
                <CatTitle title={this.props.title}/>
            </CatHeader>
        )
    }
}