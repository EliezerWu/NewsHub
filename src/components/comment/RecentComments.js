/**
 * Created by w on 2017/3/24.
 */
import React from "react";
import styles from '../blogcontent/styles/blogsidebar.css'
export default class RecentComments extends React.Component {
    render() {
        return (
            <div className={styles.section}>
                <h4 className={styles.title}><span className={styles.description}>近期评论</span></h4>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div>
                            <div className={styles.commentHeader}><a className={styles.commentAuthor}>Thomas Wu</a>发表于<a className={styles.titleCommented}>hello world</a></div>
                            <a className={styles.commentBody}><b>“</b><span className={styles.commentContent}>Hello!</span><b>”</b></a>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <a><span className="recent-comment-content">Hello!</span></a>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <a><span className="recent-comment-content">Hello!</span></a>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <a><span className="recent-comment-content">Hello!</span></a>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <a><span className="recent-comment-content">Hello!</span></a>
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}