import React from "react";
import classes from "./PosterAndInfo.module.css"

const PosterAndInfo = (props) => (
    <div className = {classes.PosterAndInfo}>
        <img src = {props.imgUrl} alt = "" className ={classes.Poster}/>
        <div className = {classes.Info}>
            {
                props.type === "movie" ? 
                <React.Fragment>
                    <p><strong>Title: </strong>{props.title}</p>
                    <p><strong>Status: </strong>{props.status}</p>
                    <p><strong>release date: </strong>{props.release}</p>
                    <p><strong>Genres: </strong>{props.genres}</p>
                    <p><strong>Runtime: </strong>{props.runtime}</p>
                    <p><strong>Vote average: </strong>{props.voteAverage}</p>
                </React.Fragment>
                : props.type === "tv" ? 
                <React.Fragment>
                    <p><strong>Name: </strong>{props.name}</p>
                    <p><strong>Genres: </strong>{props.genres}</p>
                    <p><strong>First air date: </strong>{props.firstAirDate}</p>
                    <p><strong>In production: </strong>{props.inProduction}</p>
                    <p><strong>Total Seasons: </strong>{props.totalSeasons}</p>
                    <p><strong>Total Episodes: </strong>{props.totalEpisodes}</p>
                    <p><strong>Episode runtime(s): </strong>{props.episodeRuntime}</p>
                    <p><strong>vote average: </strong>{props.voteAverage}</p>
                </React.Fragment>
                : null
            }
        </div>
    </div>
)

export default PosterAndInfo