import React from "react";
import NavBarManager from "./NavBarManager";
import CatHeader from "./catheader";
import BlogContent from "./BlogContent";
import Footer from "./Footer";
export default class CatMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <CatHeader title={this.props.match.url}/>
                <NavBarManager/>
                <BlogContent/>
                <Footer/>
            </div>
        );
    }
}
