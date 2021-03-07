import axios from "axios"
import React, { Component } from "react" 
import { withRouter } from "react-router"
import Movie from "../../components/Movie/Movie"
import Show from "../../components/Show/Show"
import Spinner from "../../components/Spinner/Spinner"
import PageDial from "../Movies/PageDial/PageDial"
import classes from "./SearchResults.module.css"


class SearchResults extends Component {

    state ={
        results : [],
        page : parseInt(this.props.match.params.page),
        keyword : this.props.match.params.keyword,
        totalPages: 1,
        isReady : false
    }

    componentDidMount () {
        console.log(this.props.match)
        this.setState({isReady : false})
        document.title = this.props.pageTitle;
        axios.get(this.props.url + this.state.keyword + "&page=" + this.state.page)
        .then(response => {
            console.log(response.data)
            this.setState({results : response.data.results , maxPage : response.data.total_pages})
            setTimeout(() => this.setState({isReady : true}), 200)
        })
        .catch(error => console.log(error))
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        })
    }

    componentDidUpdate(_prevProps , prevState) {
        console.log(this.state.page)
        if (prevState.page !== this.state.page) {
            this.props.history.push(`${this.state.page}`)
        }
    }

    render() {
        const list = this.state.results.map(item => {
            if (item.media_type === "movie") {
                return (
                    <Movie key = {item.id} id ={item.id}
                    poster = {"https://image.tmdb.org/t/p/w300" + item.poster_path}
                    title ={item.title} rating = {item.vote_average}
                    year = {item.release_date ? item.release_date.split("-")[0] : "N/A"} />
                ) 
            } else if (item.media_type === "tv") {
                return(
                    <Show key = {item.id} id = {item.id}
                    poster = {"https://image.tmdb.org/t/p/w300" + item.poster_path}
                    name = {item.name} year = {item.first_air_date.split("-")[0]}
                    rating = {item.vote_average} />
                ) 
            }
        })



        return (
            <React.Fragment>  
                <div className = {classes.Container}>
                    {this.state.isReady ? 
                    <div>
                        <h1>{this.props.pageTitle}</h1>
                    </div> : null}
                    {this.state.isReady ? 
                    <div className = {classes.Search}>
                        {list}
                    </div>
                    : <Spinner/>
                    }
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

export default withRouter(SearchResults)