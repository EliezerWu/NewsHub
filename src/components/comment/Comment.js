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
                    <div className="comment-header">
                        <a className={styles.author}>吴</a>
                        <time dateTime="">2017-1-30</time>
                    </div>
                    <div className="comment-content">
                        <p>前端，前端，前端前端前端前端前端前端</p>
                    </div>
                </div>
            </div>
        )
    }
}