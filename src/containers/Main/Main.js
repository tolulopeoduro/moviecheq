import React, { Component } from "react"
import { Route, Switch } from "react-router"
import NoPage from "../../components/NoPage/NoPage"
import Details from "../Details/Details"
import Home from "../Home/Home"
import Movies from "../Movies/Movies"
import Search from "../Nav/Search/Search"
import SearchResults from "../SearchResults/SearchResults"
import classes from "./Main.module.css"



class Main extends Component {
    render(){
        return(
            <div className = {classes.Main}>
                    <Route path = "/movies/top-rated/:page"  render = {() => <Movies pageTitle = "Top rated movies" url = {"https://api.themoviedb.org/3/movie/top_rated?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US"}/>} />
                    <Route path = "/movies/popular/:page" render = {() => <Movies pageTitle = "Popular Movies" url = {"https://api.themoviedb.org/3/movie/popular?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US"}/>} />
                    <Route path = "/tv/airing-today/:page" render = {() => <Movies pageTitle = "Airing Today" url = {"https://api.themoviedb.org/3/tv/airing_today?api_key=dbf1aa578a70e23a10f55559d754340e&language &language=en-US"}/>} />
                    <Route  path = "/tv/popular/:page" render = {() => <Movies pageTitle = "Popular shows" url = {"https://api.themoviedb.org/3/tv/popular?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US"}/>} />
                    <Route path = "/search/:keyword/:page" render = {()=> <SearchResults url = {"https://api.themoviedb.org/3/search/multi?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US&include_adult=false&query="}/>}/>
                    <Route path = "/" exact render = {() => <Home/>}/>
                    <Route path = "/movie/:id" exact render = {() => <Details type = "movie"/> }/>
                    <Route exact path = "/tv/:id" render = {() => <Details type = "tv"/>}/>
                    <Route render = {() => <NoPage/>}/>
            </div>
        )
    }
}

export default Main