import React, { Component } from "react"
import { withRouter } from "react-router"
import Spinner from "../../components/Spinner/Spinner"

class Home extends Component {
    componentDidMount () {
        setTimeout(() => {
            this.props.history.replace("/movies/top-rated/1")
        }, 3000);
    }

    render () {
        return (
            <div>
                <h1>Welcome</h1>
                <Spinner/>
            </div>
        )
    }
}

export default withRouter(Home);