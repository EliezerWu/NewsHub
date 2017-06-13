/**
 * Created by w on 2017/5/26.
 */
import React from "react";
import styles from "./styles/cattitle.css"
export default class CatTitle extends React.Component {
    getTitle() {

    }
    render() {
        return (
            <div className={styles.title}>
                <h2>{this.props.title=='/mobile'?"移动":"无"}</h2>
            </div>
        )
    }
}
