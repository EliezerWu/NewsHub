/**
 * Created by w on 2017/3/14.
 */
import React from "react";
import App from "./structure/App.js";
import CatMain from "./structure/catmain"
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Route, BrowserRouter as Router,Switch} from "react-router-dom";
let catUrl=new Array("/mobile","/enterprise","/life","/digital");
let render=ReactDOM.render(
    <AppContainer>
        <Router>
            <Switch>
            <Route exact path='/' component={App}/>
                /*<Route path='/enterprise' component={CatMain}/>
                <Route path='/mobile' component={CatMain}/>
                <Route path='/life' component={CatMain}/>
                <Route path='/digital' component={CatMain}/>
                <Route path='/digital' component={CatMain}/>*/
                {catUrl.map((url,i)=><Route path={url} component={CatMain} key={i}/>)}
                </Switch>
        </Router>
    </AppContainer>
    , document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./structure/App.js', () => {
       /* ReactDOM.render(
            <AppContainer>
                <Router>
                    <Route path='/' component={App}/>
                    <Route path='/mobile' render={({match})=><App cat={match.url}/>}/>
                </Router>
            </AppContainer>
            , document.getElementById('app')
        );*/
       render();
    });
}



