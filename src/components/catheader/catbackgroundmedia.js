/**
 * Created by w on 2017/5/26.
 */
import React from "react";
import Image from "../../fx/newsheader";
import styles from "../header/styles/backgroundmedia.css"
export default class CatBackgroundMedia extends React.Component {
    render() {

        return (
            <div  className={styles.backgroundMedia}>
                <div className={styles.overlay}></div>
                <div className={styles.banner}>
                    <Image/>
                </div>
            </div>
        )
    }
}