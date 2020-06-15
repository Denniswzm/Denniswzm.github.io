import React from "react";
import { Row, Col, Card, Collapse, Tabs, Button, Timeline } from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';
import "./about.scss";
import person from "../img/person.jpg";
import QueueAnim from "rc-queue-anim";

class about extends React.Component {
  	render() {
    return (
      	<div>
			<div className = "container1">
				<Row className = "container2">
					<Col flex={2} className = "personimgblock">
						<Card className = "" bordered={true}>
							<img className="personimg" src={person} alt=""/>
							<br/>
							<span className = "name">Dennis Wang</span>
							<br/>
							<span className = "location">Toronto, Canada</span>
						</Card>
					</Col>
					<Col flex={16}>
						<Card className = "introductionblock" bordered={true}>
							<div className="info">
								<h1>About Me</h1>
								<p className = "textstyle"> Front End developer and UI/UX designer </p>
								<p className = "textstyle"> From Chongqing, China, and now in Toronto, Canada.</p> 
								<p className = "textstyle"> A Computer Science (EECS) undergraduate student in LASSONDE, York University.
								<a className = "webpage" href="http://eecs.lassonde.yorku.ca/"><strong> Website</strong></a></p>
								<p className = "textstyle"> Now I have done my graduation in Computer Science.</p>
								<p className = "textstyle">I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.</p>
								<p className = "textstyle">“I’m shy, please come say hi.”</p>
							</div>
							{/* <span className = "aboutme">About Me</span>
							<br/>
							<span className ="textstyle">From Chongqing, China, and now in Toronto, Canada.</span>
							<p> I am a Computer Science (EECS) undergraduate student in LASSONDE, York University.
            					<a  className = "webpage" href="http://eecs.lassonde.yorku.ca/"><strong> Website</strong></a></p> */}
						</Card>
					</Col>
				</Row>

				<div className = "container3">
					<Timeline className = "timeline" mode="alternate">
						<br/>
						<Timeline.Item>Came to Canada - 2015</Timeline.Item>
						<Timeline.Item color="green">2016-09-01 - Start my Computer Science program in LASSONDE</Timeline.Item>
						<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}> Start to Learn HTML, CSS and Javascript - 2016</Timeline.Item>
						<Timeline.Item color="red">2018 - Learn Computer Security knwledge</Timeline.Item>
						<Timeline.Item>Develop web in ReactJs - 2019-06</Timeline.Item>
						<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
						2020-06 - Graduate from LASSONDE
						</Timeline.Item>
					</Timeline>

				</div>	

			</div>
      	</div>
    );
  }
}

export default about;