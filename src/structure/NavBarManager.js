/**
 * Created by w on 2017/3/20.
 */
import React from "react";
import MenuButton from "../components/navbarmanager/MenuButton";
import NavBar from "../components/navbarmanager/NavBar";
import Mask from "../components/navbarmanager/mask"
export default class NavBarManager extends React.Component {
    state = {SlideVisible: false};

    show = () => {
        this.setState({SlideVisible: true});
        //document.addEventListener("click", this.hide);
    };

    hide = ()=> {
        //document.removeEventListener("click", this.hide);
        //用以上方法在移动端运行时无法收回侧边菜单？？？
        this.setState({SlideVisible: false});
    };

    render() {
        return (
            <div>
                <MenuButton menuToggle={this.show}/>
                <NavBar visible={this.state.SlideVisible}/>
                <Mask active={this.state.SlideVisible} onClick={this.hide}/>
            </div>
        )
    }
};