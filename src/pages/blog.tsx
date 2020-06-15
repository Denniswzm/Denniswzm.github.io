import React from "react";
import { Row, Col, Card, Collapse, Tabs, Button } from "antd";
import "./blog.scss";
import QueueAnim from "rc-queue-anim";
import img2 from "../img/002.jpg";

class blog extends React.Component {
  render() {
    const { TabPane } = Tabs;

    function callback(key) {
     	 console.log(key);
    }

    return (
      	<div>
			

		<div className="wrapper">
			<div className="top"><div className="title"><h1>Material Style Blog</h1></div></div>
				<div className="content">

					<div className="card first">
					<h2><a href="#">Intro to Ionic</a></h2>
					<p className="date">1 May, 2020</p>
					<p className="text">Ionic Framework is an open source UI toolkit for building performant, 
					high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular and React.
					Ionic Framework focuses on the frontend UX and UI interaction of an app — UI controls, interactions, gestures, animations. It's easy to learn, and integrates with other libraries or frameworks, 
					such as Angular, React, or Vue. Alternatively, it can be used standalone without any frontend framework using a simple script include. 
					If you’d like to learn more about Ionic Framework before diving in, we created a video to walk you through the basics.
					</p>
					
					<Button className ="buttonstyle">Details</Button>
					</div>

					<div className="card">
					<h2><a href="#">Intro to Redux</a></h2>
					<p className="date">18 December, 2019</p>
					<p className="text">Redux is a predictable state container for JavaScript apps.
					It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. 
					On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.</p>
					<Button className ="buttonstyle">Details</Button>
					</div>

					<div className="card">
					<h2><a href="#">Intro to Reactjs</a></h2>
					<p className="date">21 October, 2019</p>
					<p className="text">React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. </p>
					<p className="text">A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.</p>
					<Button className ="buttonstyle">Details</Button>
					</div>
				</div>
			</div>
    
      	</div>
    );
  }
}

export default blog;