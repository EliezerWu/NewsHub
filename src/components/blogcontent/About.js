/**
 * Created by w on 2017/4/2.
 */
import React from 'react'
import styles from './styles/blogsidebar.css'
export default class About extends React.Component{
    render() {
        return(
            <div className={styles.section}>
               <h4 className={styles.title}><span className={styles.description}>关于</span></h4>
                <div className={styles.intro}>
                    <p>fdfd sfdf sdf df sdf sdfdfs </p>
                </div>
            </div>
        )
    }
}