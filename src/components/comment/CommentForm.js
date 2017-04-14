/**
 * Created by w on 2017/3/29.
 */
import React from "react";
import styles from "./styles/commentform.css"
export default class CommentForm extends React.Component {
    render() {
        return (
            <form className={styles.container}>
                <div contentEditable="true" className={styles.inputBox} name="textarea-comment" placeholder="请发表你的看法"/>
                <input className={styles.emailInputBox} type="text" name="input-e-mail" placeholder="请输入你的邮箱"/>
               <div className="clearfix"> <input className={styles.commentButton} type="submit" value="评论"/></div>
            </form>
        )
    }
}
