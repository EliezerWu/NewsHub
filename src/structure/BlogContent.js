/**
 * Created by w on 2017/3/23.
 */
import React from "react";
import BlogMain from "../components/blogcontent/BlogMain";
import BlogSidebar from "../components/blogcontent/BlogSidebar";
export default class BlogContent extends React.Component {
    render() {
        return (
            <div className="container">
                <BlogMain/>
                <BlogSidebar/>
            </div>
        )
    }
}