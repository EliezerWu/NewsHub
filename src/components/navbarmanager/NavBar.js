/**
 * Created by w on 2017/3/20.
 */
import React from "react";
import styles from "./styles/navbarmanager.css"
export default  class NavBar extends React.Component {
    render() {
        var ListStyle = {
            listStyle: 'none',
            width: '100%',
            textAlign: 'center',
            fontWeight: '700',
            margin: '0 0 2px 0',
            padding: '15px 0'
        };
        return (
            <div className={(this.props.visible ? styles.visibleNavList : styles.navList)}>
                <ul style={{width: '100%'}}>
                    <li style={ListStyle}>首页</li>
                    <li style={ListStyle}>简历</li>
                    <li style={ListStyle}>技术</li>
                    <li style={ListStyle}>生活</li>
                    <li style={ListStyle}>demo</li>
                </ul>
            </div>
        );
    }
}