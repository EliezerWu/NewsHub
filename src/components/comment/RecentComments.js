/**
 * Created by w on 2017/3/24.
 */
import React from "react";
export default class RecentComments extends React.Component {
    render() {
        return (
            <div className="recent-comment">
                <h3>近期评论</h3>
                <ul className="entry-list">
                    <li className="entry-feed">
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <span className="recent-comment-content">Hello!</span>
                        </div>
                    </li>
                    <li className="entry-feed">
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <span className="recent-comment-content">Hello!</span>
                        </div>
                    </li>
                    <li className="entry-feed">
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <span className="recent-comment-content">Hello!</span>
                        </div>
                    </li>
                    <li className="entry-feed">
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <span className="recent-comment-content">Hello!</span>
                        </div>
                    </li>
                    <li className="entry-feed">
                        <div>
                            <span className="recent-comment-header"><a>Thomas Wu</a>发表于<a>hello world</a></span>
                            <span className="recent-comment-content">Hello!</span>
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}