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
                    <h2 ><a className={styles.postTitle} href="#">历史上的今天</a></h2>
                    <div>
                        <time className={styles.time}>2016-12-23</time>
                        <a className={styles.author} href="#">Thomas Wu</a></div>
                </div>
                <div className={styles.standardPostImage}>
                    <a className={styles.postImagePlaceholder} style={{backgroundImage:"url(assets/IMG_6340.jpg)"}} href="#"/>
                </div>
                <div className={styles.excerpt}>
                    <p>上个世纪九十年代，一件震惊中外的大事发生了，<a href="#">李小聪</a>，在河北唐山出生。</p>
                    <blockquote>
                        <p>从此为这个世界带来了 <strong>新的美丽。</strong>
                            </p>
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
                        <span className={styles.readCounter}>阅读次数(521)</span><a href=""><span>521</span>条评论</a>
                            </div>
                    </div>
                </div>
                <CommentBox/>
            </div>
        )
    }
}