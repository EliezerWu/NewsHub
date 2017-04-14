/**
 * Created by w on 2017/3/31.
 */
import React from 'react'
import Social from '../components/footer/Social'
import LogoCopyright from '../components/footer/LogoCopyright'
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Social/>
                <LogoCopyright/>
            </div>
        )
    }
}