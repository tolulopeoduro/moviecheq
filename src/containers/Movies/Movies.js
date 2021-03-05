import axios from "axios"
import React, { Component } from "react"
import { withRouter } from "react-router"
import Movie from "../../components/Movie/Movie"
import classes from "./Movies.module.css"
import PageDial from "./PageDial/PageDial"

class Movies extends Component {
    state = {
        results : [],
        page : 1,
        maxPage : 1
    }
    
    componentDidMount () {
        document.title = "Top rated"
        axios.get(this.props.url + "&page=" + this.state.page)
        .then(response => {
            console.log(response.data)
            this.setState({results : response.data.results , maxPage : response.data.total_pages})
        })
        .catch(error => console.log(error))
    }
    
    componentDidUpdate (_prevProps , prevState) {
        if (prevState.page !== this.state.page) {
            axios.get(this.props.url + "&page=" + this.state.page)
            .then(response => {
                console.log(response.data)
                this.setState({results : response.data.results , maxPage : response.data.total_pages})
            })
            .catch(error => console.log(error));
            window.scrollTo({
                top: 0,
                behavior : "smooth"
            })
        }
    }

    render () {
        const movies = this.state.results.map(movie => (
            <Movie key = {movie.id} id ={movie.id}
            poster = {"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            title ={movie.title} rating = {movie.vote_average}
            year = {movie.release_date ? movie.release_date.split("-")[0] : "N/A"} />
        ))
        return (
            <React.Fragment>  
                <div className = {classes.Movies}>
                    {movies}
                </div>
                <PageDial page = {this.state.page} 
                maxPage = {this.state.maxPage}
                toPrev ={() => this.setState((prevState) => {
                    return {page:prevState.page - 1}
                })} 
                toNext = {() => this.setState((prevState) => {
                   return {page : prevState.page + 1}
                })}
                />
            </React.Fragment>
        )
    }
}

export default withRouter(Movies);