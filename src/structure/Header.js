/**
 * Created by w on 2017/3/21.
 */
import React from "react";
import BackgroundMedia from "../components/header/BackgroundMedia";
import Title from "../components/header/Title";
export default class Header extends React.Component {
    render() {
        var styles = {
            height: '75vh',
            width: '100%',
            display: 'table',
            position: 'relative',
            top: 0,
            left: 0
        };
        return (
            <header className="header" style={styles}>
                <BackgroundMedia/>
                <Title />
            </header>
        )
    }
}