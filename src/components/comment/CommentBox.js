/**
 * Created by w on 2017/3/23.
 */
import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import styles from "./styles/commentbox.css"
export default class CommentBox extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <CommentList/>
                <CommentForm/>
            </div>
        )
    }
}