/**
 * Created by w on 2017/3/24.
 */
import React from "react";
import styles from './styles/blogsidebar.css'
export default class RecentEntries extends React.Component {
    render() {
        return (
            <div className={styles.section}>
                <h4 className={styles.title}><span className={styles.description}>最新文章</span></h4>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a>前端前端前前端前端前</a></li>
                    <li className={styles.listItem}><a>前端前端前前端前端前</a></li>
                    <li className={styles.listItem}><a>前端前端前前端前端前</a></li>
                    <li className={styles.listItem}><a>前端前端前前端前端前</a></li>
                    <li className={styles.listItem}><a>前端前端前前端前端前</a></li>
                </ul>
            </div>
        )
    }
}