import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./main";
import photograph from "./photograph";
import project from "./project";
import blog from "./blog";
import about from "./about";


const MyRouter = withRouter(({location})=>(
    <div>
        <TransitionGroup className={'router-wrapper'}>
        <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
            <Switch location ={location}>
                <Route path="/" exact component={Main}/>
                <Route path="/project" exact component={project} />
                <Route path="/photograph" exact component={photograph} />
                <Route path="/about" exact component={about} />
                <Route path="/blog" exact component={blog} />
            </Switch>
        </CSSTransition>
        </TransitionGroup>
    </div>

))
   
  
export default MyRouter;