import React, { Component } from "react";
import Backdrop from "./Backdrop/Backdrop";
import MenuButton from "./MenuButton/MenuButton";
import classes from "./Nav.module.css"
import Search from "./Search/Search";

class Nav extends Component {
    state = {
        show : false
    }
    render(){
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
                            <li>Top-rated movies</li>
                            <li>Popular movie</li>
                        </ul>
                    </div>
                    <div className ={classes.LinkSection}>
                        <span>TV</span>
                        <ul>
                            <li>Airing Today</li>
                            <li>Popular Shows</li>
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