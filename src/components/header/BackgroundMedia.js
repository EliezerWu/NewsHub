/**
 * Created by w on 2017/3/21.
 */
import React from "react";
import {HeartsBackground} from "../../fx/HeartsBackground";
import styles from "./styles/backgroundmedia.css"
export default class BackgroundMedia extends React.Component {
    render() {

        return (
            <div  className={styles.backgroundMedia}>
                <div className={styles.overlay}></div>
                <div className={styles.banner}>
                    <HeartsBackground/>
                </div>
            </div>
        )
    }
}