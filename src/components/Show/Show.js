import React from "react";
import classes from "./Show.module.css"

const Show = (props) => {
    return (
        <div style ={{backgroundImage : `url(${props.poster})` }} id = {props.id} onClick = {props.handleClick} className ={classes.Show}>
            <div className = {classes.Gradient}>
                <div className = {classes.Details}>
                    <span className = {classes.Name}>{props.name}</span><br/>
                    <hr/>
                    <br/>
                    <span className = {classes.Year}>First Season :{props.year}</span><br/>
                    <span className = {classes.Other}>Rating :{props.rating}</span>   
                </div>
            </div>
        </div>
    )
}

export default Show;