import React, { Component } from "react"
import { Route } from "react-router"
import Movies from "../Movies/Movies"
import classes from "./Main.module.css"

class Main extends Component {
    render(){
        return(
            <div className = {classes.Main}>
                <Route path = "/movies/top-rated" render = {() => <Movies pageTitle = "Top rated movies" url = {"https://api.themoviedb.org/3/movie/top_rated?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US"}/>} />
                <Route path = "/movies/popular" render = {() => <Movies pageTitle = "Popular Movies" url = {"https://api.themoviedb.org/3/movie/popular?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US"}/>} />
                <Route path = "/tv/airing-today" render = {() => <Movies pageTitle = "Airing Today" url = {"https://api.themoviedb.org/3/tv/airing_today?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US"}/>} />
                <Route path = "/tv/popular" render = {() => <Movies pageTitle = "Popular shows" url = {"https://api.themoviedb.org/3/tv/popular?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US"}/>} />
            </div>
        )
    }
}

export default Main