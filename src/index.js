/**
 * Created by w on 2017/3/14.
 */
import React from "react";
import App from "./structure/App.js";
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Route, BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <AppContainer>
        <Router>
            <Route path='/' component={App}/>
        </Router>
    </AppContainer>
    , document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./structure/App.js', () => {
        ReactDOM.render(
            <AppContainer>
                <Router>
                    <Route path='/' component={App}/>
                </Router>
            </AppContainer>
            , document.getElementById('app')
        );
    });
}



