import React, {useEffect, useState} from "react";
import { Redirect, withRouter } from "react-router";
import Spinner from "../Spinner/Spinner";

const NoPage = (props)  => {

    const [display , setDisplay] = useState(true)
    return (
        <React.Fragment>
            <h1>404</h1>
            <p>Sorry...couldn't find the page you requested</p>
            <button onClick = {() => props.history.replace("/movies/top-rated/1")} clicked>Back to Home</button>
        </React.Fragment>
    )
}

export default withRouter(NoPage)