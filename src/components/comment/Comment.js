/**
 * Created by w on 2017/3/25.
 */
import React from "react";
import styles from "./styles/commentitem.css"
export default class Comment extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <a className={styles.avatar}/>
                <div className={styles.commentBody}>
                    <div className={styles.commentHeader}>
                        <a className={styles.author}>匿名</a>
                        <time dateTime="">2017-1-30</time>
                    </div>
                    <div className="comment-content">
                        <p>女神下凡！</p>
                    </div>
                </div>
            </div>
        )
    }
}