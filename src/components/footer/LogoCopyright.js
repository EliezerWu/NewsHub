/**
 * Created by w on 2017/3/31.
 */
import React from 'react'
import styles from './styles/logocopyright.css'
export default class LogoCopyright extends React.Component {
     render() {
         return (
             <div className="logo-copyright">
                <div className="footer-logo">
                    <img src="" alt="Footer Logo"/>
                </div>
                 <div className="footer-copyright">
                     <p>@2017 By <a className={styles.link} href="github.com/Thomas994">Thomas Wu</a></p>
                     <div>Icon made from <a className={styles.link} href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
                 </div>
                 <div className="go-to-top">
                     <a href="#"/>
                 </div>
             </div>
         )
     }
}