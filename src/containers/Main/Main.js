import React, { Component } from "react"
import { Route } from "react-router"
import Movies from "../Movies/Movies"
import classes from "./Main.module.css"

class Main extends Component {
    render(){
        return(
            <div className = {classes.Main}>
                <Route path = "/top-rated" render = {() => <Movies url = {"https://api.themoviedb.org/3/movie/top_rated?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US"}/>} />
            </div>
        )
    }
}

export default Main