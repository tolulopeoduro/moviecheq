import axios from "axios"
import React, { Component } from "react"
import { withRouter } from "react-router"
import Movie from "../../components/Movie/Movie"
import Show from "../../components/Show/Show"
import Spinner from "../../components/Spinner/Spinner"
import classes from "./Movies.module.css"
import PageDial from "./PageDial/PageDial"

class Movies extends Component {
    state = {
        results : [],
        page : parseInt(this.props.match.params.page),
        maxPage : 1,
        isReady : false
    }
    
    componentDidMount () {
        console.log(this.props.match)
        this.setState({isReady : false})
        document.title = this.props.pageTitle;
        axios.get(this.props.url + "&page=" + this.state.page)
        .then(response => {
            console.log(response.data)
            this.setState({results : response.data.results , maxPage : response.data.total_pages})
            this.setState({isReady : true})
        })
        .catch(error => console.log(error))
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        })
    }

    componentDidUpdate (_prevProps , prevState) {
        if (prevState.page !== this.state.page) {
            this.props.history.replace(this.state.page)
        }
    }


    render () {
        const list = this.state.results.map(item => {
            if (item.release_date) {
                return (
                    <Movie key = {item.id} id ={item.id}
                    poster = {"https://image.tmdb.org/t/p/w300" + item.poster_path}
                    title ={item.title} rating = {item.vote_average}
                    year = {item.release_date ? item.release_date.split("-")[0] : "N/A"}
                    handleClick = {() => this.props.history.replace("/movie/" + item.id)} />
                ) 
            } else if (item.first_air_date) {
                return(
                    <Show key = {item.id} id = {item.id}
                    poster = {"https://image.tmdb.org/t/p/w300" + item.poster_path}
                    name = {item.name}
                    year = {item.first_air_date.split("-")[0]}
                    rating = {item.vote_average}
                    handleClick = {() => this.props.history.replace("/tv/" + item.id)} />
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
                    <div className = {classes.Movies}>
                        {list}
                    </div>
                    : <Spinner/>
                    }
                </div>
                <PageDial page = {this.state.page} 
                maxPage = {this.state.maxPage}
                toPrev ={() => {
                        this.setState((prevState) => {
                            return {page:prevState.page - 1}
                        })
                    }
                } 
                toNext = {() => {
                        this.setState((prevState) => {
                        return {page : prevState.page + 1}
                        })
                    }
                }
                />
            </React.Fragment>
        )
    }
}

export default withRouter(Movies);