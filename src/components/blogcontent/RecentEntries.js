/**
 * Created by w on 2017/3/24.
 */
import React from "react";
export default class RecentEntries extends React.Component {
    render() {
        return (
            <div className="recent-entries">
                <h4>Recent Entries</h4>
                <ul className='entry-list'>
                    <li><a>what</a></li>
                    <li><a>why</a></li>
                    <li><a>how</a></li>
                    <li><a>how</a></li>
                    <li><a>how</a></li>
                </ul>
            </div>
        )
    }
}