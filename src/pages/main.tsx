import React from 'react';
import './main.scss';
import QueueAnim from 'rc-queue-anim';
import { Parallax } from 'rc-scroll-anim';
import { Row, Col, Carousel, Card, Button } from 'antd';
import { FundFilled, MobileFilled, CodeSandboxCircleFilled, SafetyCertificateFilled, FileFilled, LayoutFilled, DatabaseFilled, EditFilled } from '@ant-design/icons';
import img1 from "../img/102.jpg";

class Main extends React.Component {
	words: NodeListOf<Element>;
	currentWordIndex = 0;
	maxWordIndex = 0;
	countdown: NodeJS.Timeout;

	constructor(props) {
		super(props);
	}

	componentDidMount () {
		this.words = document.querySelectorAll(".word");
		this.words.forEach(word => {
			let letters = word!.textContent!.split("");
			word.textContent = "";
			letters.forEach(letter => {
				let span = document.createElement("span");
				span.textContent = letter;
				span.className = "letter";
				word.append(span);
			});
		});
		this.maxWordIndex = this.words.length - 1;
		(this.words[this.currentWordIndex] as HTMLElement).style.opacity = "1";
		this.rotateText();
		this.countdown = setInterval(this.update.bind(this), 4000);
	}

	componentWillUnmount() {
		clearInterval(this.countdown);
	}

	update() {
		this.rotateText();
	}


	rotateText() {
		console.log(this.words);
		console.log(this.currentWordIndex);
		let currentWord = this.words![this.currentWordIndex];
		let nextWord = this.currentWordIndex === this.maxWordIndex ? this.words![0] : this.words![this.currentWordIndex + 1];
		// rotate out letters of current word
		Array.from(currentWord.children).forEach((letter, i) => {
			setTimeout(() => {
			letter.className = "letter out";
			}, i * 80);
		});
		// reveal and rotate in letters of next word
		(nextWord as HTMLElement).style.opacity = "1";
		Array.from(nextWord.children).forEach((letter, i) => {
			letter.className = "letter behind";
			setTimeout(() => {
			letter.className = "letter in";
			}, 340 + i * 80);
		});
		this.currentWordIndex = this.currentWordIndex === this.maxWordIndex ? 0 : this.currentWordIndex + 1;
	};



    render(){
        return(
            <div>
                <div className = "imgblock">
                    {/* <img className="img" src={EC1} /> */}

					<div id="main-but" className = "bottnContainer">
						<a href = "">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Start Here
						</a>
					</div>
					
                </div>

				<Card >
					<div className = "block1">
						<div className = "imgcontainer2">
							<div className = "imgBx">
								<img src={img1}/>
								<img src={img1}/>
								<img src={img1}/>
							</div>
						</div>

						<div className = "textblock1">
							<h2 className = "textline1" >Interesting Css Animation</h2>
							<h2>The behavior of these keyframe animations can be controlled by specifying
								 their timing function, duration, their number of repetitions, and other attributes.</h2>
						</div>

						<div id="main-but2">
							<a  href="https://www.creativebloq.com/inspiration/css-animation-examples"><span>More</span></a>
						</div>
					</div>
				</Card>

				<Card>
					<div className ="rotating-text">
						<p>Hack is </p>
						<p>
							<span className ="word alizarin">awesome.</span>
							<span className ="word wisteria">beautiful.</span>
							<span className ="word peter-river">creative.</span>
							<span className ="word emerald">fabulous.</span>
							<span className ="word sun-flower">interesting.</span>
						</p>
					</div>


					<QueueAnim delay={800} className="queue-simple">
					
					<div className="cardcontainer1" key="1">
							<Row justify="center" gutter={24}>
							<Col span={4}>
								<Card className = "card1" bordered={true}>
									<LayoutFilled style={{ fontSize: '32px', color: 'white' }}/>
									<br/>
									<br/>
									<span className = "textstyle1">Front End Wed Development</span>
									<br/>
									<Button ghost className ="buttonstyle1">Details</Button>
								</Card>
							</Col>
							<Col span={4}>
								<Card className = "card2" bordered={true}> 
									<MobileFilled style={{ fontSize: '32px', color: 'white' }}/>
									<br/>
									<br/>
									<span className = "textstyle1">IOS/Android Development</span>
									<br/>
									<Button ghost className ="buttonstyle1">Details</Button>
								</Card>
							</Col>
							<Col span={4}>
								<Card className = "card3" bordered={true}>
									<CodeSandboxCircleFilled style={{ fontSize: '32px', color: 'white' }}/>
									<br/>
									<br/>
									<span className = "textstyle1">Java Development</span>
									<br/>
									<Button ghost className ="buttonstyle1">Details</Button>
								</Card>
							</Col>
							<Col span={4}>
								<Card className = "card4" bordered={true}>
									<FundFilled style={{ fontSize: '32px', color: 'white' }}/>
									<br/>
									<br/>
									<span className = "textstyle1">Data Analysis</span>
									<br/>
									<Button ghost className ="buttonstyle1">Details</Button>
								</Card>
							</Col>
							</Row>
					</div>
					

					<div className="cardcontainer1" key="2">
							<Row justify="center" gutter={24}>
							<Col span={4}>
								<Card className = "card5" bordered={true}>
									<DatabaseFilled style={{ fontSize: '32px', color: 'white' }}/>
									<br/>
									<br/>
									<span className = "textstyle1">Database Management</span>
									<br/>
									<Button ghost className ="buttonstyle1">Details</Button>
								</Card>
							</Col>
							<Col span={4}>
								<Card className = "card6" bordered={true}>
									<FileFilled style={{ fontSize: '32px', color: 'white' }}/>
									<br/>
									<br/>
									<span className = "textstyle1">Python Development</span>
									<br/>
									<Button ghost className ="buttonstyle1">Details</Button>
								</Card>
							</Col>
							<Col span={4}>
								<Card className = "card7" bordered={true}>
									<SafetyCertificateFilled style={{ fontSize: '32px', color: 'white' }}/>
									<br/>
									<br/>
									<span className = "textstyle1">Web Security</span>
									<br/>
									<Button ghost className ="buttonstyle1">Details</Button>
								</Card>
							</Col>
							<Col span={4}>
								<Card className = "card8" bordered={true}>
									<EditFilled style={{ fontSize: '32px', color: 'white' }}/>
									<br/>
									<br/>
									<span className = "textstyle1">UI Design</span>
									<br/>
									<Button ghost className ="buttonstyle1">Details</Button>
								</Card>
							</Col>
							</Row>
					</div>
					</QueueAnim>

				</Card>

	
            </div>
        )
    }
}

export default Main;