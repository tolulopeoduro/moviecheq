import React from "react";
import classes from "./Search.module.css"

const Search  = (props) => {
    return (
        <form className = {classes.Form} onSubmit = {(e) =>props.submit(e)}>
            <input placeholder = "Search" type="text" value = {props.value} onChange = {(e) =>props.change(e)}/>
            <button type = "submit">Go</button>
        </form>
    )
}

export default Search;