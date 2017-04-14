/**
 * Created by w on 2017/3/23.
 */
import React from "react";
import RecentEntries from "./RecentEntries";
import RecentComments from "../comment/RecentComments";
import PopularEntries from "./PopularEntries";
import About from "./About"
export default class BlogSidebar extends React.Component {
    render() {
        return (
            <div className="blog-sidebar">
            <About/>
            <RecentEntries/>
            <RecentComments/>
            <PopularEntries/>
        </div>
        )
    }
}