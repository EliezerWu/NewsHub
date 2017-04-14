/**
 * Created by w on 2017/4/9.
 */
import React from "react";
import styles from "./styles/mask.css"
export default (props)=>{
    return(
        <div className={props.active?styles.maskActive:styles.mask}
        onClick={props.onClick}></div>
    )
}