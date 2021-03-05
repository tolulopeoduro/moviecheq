import React from "react";
import classes from "./PageDial.module.css"

const PageDial = (props) => (
    <div className = {classes.PageDial}>
        <button onClick ={props.toPrev} className ={classes.PageButton} disabled={props.page === 1}>Prev</button>
        <span>{props.page}</span>
        <button onClick = {props.toNext} className ={classes.PageButton} disabled={props.page === props.maxPage}>Next</button>
    </div>
)

export default PageDial