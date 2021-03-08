import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import classes from "./Details.module.css"
import PosterAndInfo from "./PosterAndInfo/PosterAndInfo";

class Details extends Component {
    state = {
        item : [],
        genres : [],
        episodeRunTimes : []
    }

    componentDidMount () {
        axios.get(`https://api.themoviedb.org/3/${this.props.type}/${this.props.match.params.id}?api_key=dbf1aa578a70e23a10f55559d754340e&language=en-US`)
        .then(response => this.setState({item : response.data , genres : response.data.genres , episodeRunTimes : response.data.episode_run_time}) )
        .catch(error => console.log(error))
    }
    
    
    
    render () {
        console.log(this.state.item)
        const item = this.state.item;
        return (
            <div className = {classes.Details}>
                <div style = {{backgroundImage : `url(https://image.tmdb.org/t/p/original${this.state.item.backdrop_path})`}} className = {classes.Backdrop}>
                    <div className = {classes.Gradient}>
                        <h1 className = {classes.Title}>{item.title ? item.title : item.name }</h1>
                    </div>
                </div>
                <div className = {classes.MainDetails}>
                    <PosterAndInfo imgUrl = {"https://image.tmdb.org/t/p/w500" + item.poster_path} 
                    type = {this.props.type} 
                    title ={item.title} status ={item.status} release = {item.release_date} 
                    genres = {this.state.genres.map(genre => genre.name).join(", ")}
                    runtime = {item.runtime + "mins"}
                    voteAverage = {item.vote_average}
                    name = {item.name}
                    firstAirDate = {item.first_air_date}
                    inProduction = {item.in_production ? "Yes" : "No"}
                    totalSeasons = {item.number_of_seasons}
                    totalEpisodes = {item.number_of_episodes}
                    episodeRuntime = {this.state.episodeRunTimes ? this.state.episodeRunTimes.map(time => time + "mins").join(", ") : null} />
                    <div className = {classes.Overview}>
                        <p>{item.overview}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Details);