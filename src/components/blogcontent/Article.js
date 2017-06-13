/**
 * Created by w on 2017/5/21.
 */
import React from "react";
import styles from "./styles/article.css"
export default class Article extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.postMeta}>
                    <h2 ><a className={styles.postTitle} href="#">Google、IBM、中科院，比一比谁先实现量子计算霸权？</a></h2>
                    <div>
                        <time className={styles.time}>2016-12-23</time>
                        <a className={styles.author} href="#">Thomas Wu</a></div>
                </div>
                <div className={styles.standardPostImage}>
                    <a className={styles.postImagePlaceholder} style={{backgroundImage:"url(assets/bcsbsjskjcbdks.jpeg)"}} href="#"/>
                </div>
                <div className={styles.excerpt}>
                    <p>前天，科技圈的“重磅”、“突破”，可能又是一条“明明每个字都认识”系列的新闻：</p>
                    <blockquote>
                        <p>中科院在5月3日宣布中国建造了世界上第一台超越早期经典计算机的光量子计算机，自主研发10比特超导量子线路样品，通过发展全局纠缠操作，成功实现了目前世界上最大数目的超导量子比特的纠缠和完整的测量。
                        </p>
                    </blockquote>
                    <p>前端前端前端前端前端 <em>前端前端前端前端</em> mollis euismod. Cras mattis consectetur purus sit amet
                        fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    <h2>Heading</h2>
                    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
                        porta ac consectetur ac, vestibulum at eros.</p>
                </div>
            </div>
        )
    }
}