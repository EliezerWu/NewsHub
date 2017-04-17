/**
 * Created by w on 2017/3/23.
 */
import React from "react";
import BlogPost from "./BlogPost";
import styles from './styles/blogmain.css'
export default class BlogMain extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <BlogPost/>
            </div>
        )
    }
}