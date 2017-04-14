/**
 * Created by w on 2017/3/25.
 */
import React from "react";
import Comment from "./Comment";
import styles from "./styles/commentlist.css"
export default class CommentList extends React.Component {
    render() {
        return (
            <div className={styles.list}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        )
    }
}