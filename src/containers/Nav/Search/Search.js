import React from "react";
import classes from "./Search.module.css"

const Search  = (props) => {
    return (
        <form className = {classes.Form} onSubmit = {props.submit}>
            <input placeholder = "Search" type="text" value = {props.value} onChange = {props.change}/>
            <button type = "submit">Go</button>
        </form>
    )
}

export default Search;