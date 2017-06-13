/**
 * Created by w on 2017/5/5.
 */
import React from 'react'
export default class Newsheader extends React.Component {
    render() {
        let styles= {
            width:"100%",
            height:"100%",
            display: "block",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 0,
            backgroundImage:"url(assets/douyin3.jpg)",
            backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
        }
        ;

        return (
            <div style={styles}></div>
        )

    }
}