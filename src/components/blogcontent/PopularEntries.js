/**
 * Created by w on 2017/3/30.
 */
import React from "react";
import styles from './styles/blogsidebar.css'
export default class PopularEntries extends React.Component {
    render() {
        return (
            <div className={styles.section}>
                <h4 className={styles.title}><span className={styles.description}>热门文章</span></h4>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div className={(styles.entry)}>
                            <div className={styles.preview}>
                                <a href="#"/>
                            </div>
                            <div className={styles.entryMeta}>
                                <h4 className={styles.hotTitle}>Title</h4>
                                <time>September 6, 2015</time>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className="entry-item">
                            <div className="item-img">
                                <a href="#"><img src=""/></a>
                            </div>
                            <div className="item-meta">
                                <h4>Title</h4>
                                <time>September 6, 2015</time>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className="entry-item">
                            <div className="item-img">
                                <a href="#"><img src=""/></a>
                            </div>
                            <div className="item-meta">
                                <h4>Title</h4>
                                <time>September 6, 2015</time>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className="entry-item">
                            <div className="item-img">
                                <a href="#"><img src=""/></a>
                            </div>
                            <div className="item-meta">
                                <h4>Title</h4>
                                <time>September 6, 2015</time>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className="entry-item">
                            <div className="item-img">
                                <a href="#"><img src=""/></a>
                            </div>
                            <div className="item-meta">
                                <h4>Title</h4>
                                <time>September 6, 2015</time>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}