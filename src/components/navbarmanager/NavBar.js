/**
 * Created by w on 2017/3/20.
 */
import React from "react";
import styles from "./styles/navbarmanager.css"
import {
    Link
} from 'react-router-dom'
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
                    <li style={ListStyle}><Link to="/">首页</Link></li>
                    <li style={ListStyle}><Link to="/mobile">移动</Link></li>
                    <li style={ListStyle}><Link to="/enterprise">企业</Link></li>
                    <li style={ListStyle}><Link to="/life">生活</Link></li>
                    <li style={ListStyle}><Link to="/digital">数码</Link></li>
                </ul>
            </div>
        );
    }
}