/**
 * Created by w on 2017/3/23.
 */
import React from "react";
import CommentBox from "../comment/CommentBox";
import ShareBox from "./sharebox"
import styles from "./styles/blogPost.css";
export default class BlogPost extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.postMeta}>
                    <h2 ><a className={styles.postTitle} href="#">新闻标题</a></h2>
                    <div>
                        <time className={styles.time}>2017-1-30</time>
                        <a className={styles.author} href="#">Thomas Wu</a></div>
                </div>
                <div className={styles.standardPostImage}>
                    <a className={styles.postImagePlaceholder} href="#"/>
                </div>
                <div className={styles.excerpt}>
                    <p>前端前端前端前端前端前端前端前端前端前端前端前端 <a href="#">dis parturient montes</a>，前端前端前端前端前端前端 </p>
                    <blockquote>
                        <p>前端前端前端前端前端前端 <strong>前端前端前端前端前端前端</strong>
                            前端前端前端前端前端前端前端前端前端前端前端</p>
                    </blockquote>
                    <p>前端前端前端前端前端 <em>前端前端前端前端</em> mollis euismod. Cras mattis consectetur purus sit amet
                        fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    <h2>Heading</h2>
                    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
                        porta ac consectetur ac, vestibulum at eros.</p>
                </div>
                <div className="interactions">
                    <div className={styles.readMoreBox}><a className={styles.readMore}>继续阅读</a></div>
                    <div className={styles.postBoxMeta}>
                        <ShareBox/>
                        <div className={styles.boxMeta}>
                        <span className={styles.readCounter}>阅读次数(0)</span><a href=""><span>1</span>条评论</a>
                            </div>

                    </div>
                </div>
                <CommentBox/>
            </div>
        )
    }
}