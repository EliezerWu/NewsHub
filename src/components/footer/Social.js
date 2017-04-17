/**
 * Created by w on 2017/3/31.
 */
import React from 'react'
import styles from './styles/social.css'
export default class Social extends React.Component {
    render(){
        return(
            <div className={styles.container}>
                <ul className={styles.socials}>
                    <li><a href="#" alt="weibo">微博</a></li>
                    <li><a href="#" alt="weixin">微信</a></li>
                    <li><a href="#" alt="github">Github</a></li>
                    <li><a href="#" alt="facebook">Facebook</a></li>
                </ul>
            </div>
        )
    }
}