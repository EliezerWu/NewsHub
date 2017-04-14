/**
 * Created by w on 2017/3/30.
 */
import React from "react";
export default class PopularEntries extends React.Component {
    render() {
        return (
            <div className="PopularEntries">
                <h3>热门文章</h3>
                <ul className="entry-list">
                    <li className="entry-feed">
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
                    <li className="entry-feed">
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
                    <li className="entry-feed">
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
                    <li className="entry-feed">
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
                    <li className="entry-feed">
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