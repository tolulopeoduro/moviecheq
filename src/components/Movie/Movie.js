import React from "react";
import classes from "./Movie.module.css"

const Movie = (props) => {
    return (
        <div style ={{backgroundImage : `url(${props.poster})` }} id = {props.id} onClick = {props.handleClick} className ={classes.Movie}>
            <div className = {classes.Gradient}>
                <div className = {classes.Details}>
                    <span className = {classes.Title}>{props.title}</span><br/>
                    <hr/>
                    <br/>
                    <span className = {classes.Year}>{props.year}</span><br/>
                    <span className = {classes.Other}>Rating :{props.rating}</span>   
                </div>
            </div>
        </div>
    )
}

export default Movie;