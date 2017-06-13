/**
 * Created by w on 2017/3/23.
 */
import React from "react";
import Article from "./Article"
import CommentBox from "../comment/CommentBox";
import ShareBox from "./sharebox"
import styles from "./styles/blogPost.css";
export default class BlogPost extends React.Component {
    render() {
        return (
            <div>
                <Article/>
                <div className="interactions">
                    <div className={styles.readMoreBox}><a className={styles.readMore}>继续阅读</a></div>
                    <div className={styles.postBoxMeta}>
                        <ShareBox/>
                        <div className={styles.boxMeta}>
                        <span className={styles.readCounter}>阅读次数(521)</span><a href=""><span>521</span>条评论</a>
                            </div>
                    </div>
                </div>
                <CommentBox/>
            </div>
        )
    }
}