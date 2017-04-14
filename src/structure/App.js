/**
 * Created by w on 2017/3/15.
 */
import React from "react";
import NavBarManager from "./NavBarManager";
import Header from "./Header";
import BlogContent from "./BlogContent";
import Footer from "./Footer";
/*花了一天终于搞清楚了，react-router 3 与 react-router 4 截然不同，连import from的位置都不一样*/
/*并且要用BrowserRouter，用outer的话还*/
export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <NavBarManager/>
                <BlogContent/>
                <Footer/>
            </div>
        );
    }
}