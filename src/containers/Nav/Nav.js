import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Backdrop from "./Backdrop/Backdrop";
import MenuButton from "./MenuButton/MenuButton";
import classes from "./Nav.module.css"
import Search from "./Search/Search";

class Nav extends Component {
    state = {
        show : false
    }

    
    render(){
        const activeStyle = {
            color : "black",
            fontSize : "25px",
            backgroundColor : "rgba(300, 300, 300, 0.4)",
        }
        return(
            <div>
                <div className = {classes.LogoAndMenuButton}>
                    <h1 className = {classes.Logo}>Movicheq</h1>
                    {!this.state.show ? <MenuButton click ={() => this.setState({show : true})}/> : null}
                </div>
                { this.state.show ? <div className={classes.Nav}>
                    <Search/>
                    <div className = {classes.LinkSection}>
                        <span>Movies</span>
                        <ul>
                            <li><NavLink activeStyle = {activeStyle} to = "/movies/top-rated">Top Rated</NavLink></li>
                            <li><NavLink activeStyle = {activeStyle} to = "/movies/popular">Popular movies</NavLink></li>
                        </ul>
                    </div>
                    <div className ={classes.LinkSection}>
                        <span>TV</span>
                        <ul>
                            <li><NavLink activeStyle = {activeStyle} to = "/tv/Airing-today">Airing Today</NavLink></li>
                            <li><NavLink activeStyle = {activeStyle} to = "/tv/popular">Popular shows</NavLink></li>
                        </ul>
                    </div>
                </div>
                : null}
                {this.state.show ? <Backdrop click = {() => this.setState({show : false})}/> : null}
            </div>
        )
    }
}

export default Nav