import React from "react";
import { Row, Col, Card, Collapse, Tabs } from "antd";
import "./project.scss";
import QueueAnim from "rc-queue-anim";
import img1 from "../img/101.jpg";
import img2 from "../img/002.jpg";
import img3 from "../img/003.jpg";
import img4 from "../img/004.jpg";

class project extends React.Component {
  render() {
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }

    return (
		<div>
			<div className = "container1">
				<div className = "imgBx">
					<img src={img1}/>
					<img src={img1}/>
					<img src={img1}/>
				</div>
				<h2>Intro to Ionic</h2>
				<div className = "skew">
					<p>Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular and React. 
						Ionic Framework focuses on the frontend UX and UI interaction of an app — UI controls, interactions, gestures, animations. It's easy to learn, and integrates with other libraries or frameworks, such as Angular, React, or Vue. 
						Alternatively, it can be used standalone without any frontend framework using a simple script include. If you’d like to learn more about Ionic Framework before diving in, we created a video to walk you through the basics.</p>
					<a href = "#">Read More</a>
				</div>
			</div>
		
		
		</div>
    );
  }
}

export default project;