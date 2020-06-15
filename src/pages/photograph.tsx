import React from "react";
import { Row, Col, Card, Collapse,Carousel } from "antd";
import "./photograph.scss";
import img1 from "../img/001.jpg";
import img2 from "../img/002.jpg";
import img3 from "../img/003.jpg";
import img4 from "../img/004.jpg";
import img5 from "../img/005.jpg";
import img6 from "../img/006.jpg";
import img7 from "../img/007.jpg";
import img8 from "../img/008.jpg";
import img9 from "../img/009.jpg";
import img10 from "../img/010.jpg";
import img11 from "../img/011.jpg";
import alg7 from "../img/alg7.jpg";
import EC1 from "../img/EC1.jpg";
import EC2 from "../img/EC2.jpg";
import EC3 from "../img/EC3.jpg";
import EC4 from "../img/EC4.jpg";
import EC5 from "../img/EC5.jpg";
import QueueAnim from "rc-queue-anim";

class photograph extends React.Component {
	

  	render() {
    return (
      	<div>
			<div className="masonry-container">
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Algonquin, Ontario, Canada</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img1} alt=""/>
					</div>
				</div>
				<div className="panel">
				<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Kiyomiza, Kyoto, Japan</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img2} alt=""/>
					</div></div>
				<div className="panel">
						<div className="panel-wrapper">
							<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Toronro, Canada</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img3} alt=""/>
					</div>
				</div>
				
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Algonquin, Ontario, Canada</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img4} alt=""/>
					</div>
				</div>
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Nova Scotia, Canada</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img5} alt=""/>
					</div>	
				</div>
				
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Kiyomiza, Kyoto, Japan</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img6} alt=""/>
					</div>
				</div>
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Algonquin, Ontario, Canada</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img7} alt=""/>
					</div>
				</div>
				
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Hanamikoji, Kyoto, Japans</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img8} alt=""/>
					</div>	
				</div>
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Fuji Mountain, Japan</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img9} alt=""/>
					</div>
				</div>
				
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Algonquin, Ontario, Canada</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img10} alt=""/>
					</div>
				</div>
				<div className="panel">
					<div className="panel-wrapper">
						<div className="panel-overlay">
							<div className="panel-text">
								<div className="panel-title">Halifax, Nova Scotia, Canada</div>
								<div className="panel-tags">
									{/* <span className="tag-icon"><img className="tag-icon-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg" alt=""/></span> */}
									<span className="tags-list"></span>
								</div>
							</div>
							<img className="panel-gradient" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png" alt=""/>
							<img className="panel-vingette" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png" alt=""/>
						</div>
						<img className="panel-img" src={img11} alt=""/>
					</div>
				</div>
			</div>
        {/* <QueueAnim delay={1000} className="queue-simple">
          <Collapse
            className="Collapse_1"
            defaultActiveKey={["1"]}
            style={{ width: 1100 }}
            key="ani2"
          >
            <Collapse.Panel header="Whiskey" key="1">
                <Carousel autoplay>
                    <div>
                    <img className="img" src={alc1} />
                    </div>
                    <div>
                    <img className="img" src={alc2} />
                    </div>
                    <div>
                    <img className="img" src={alc3} />
                    </div>
                    <div>
                    <img className="img" src={alc4} />
                    </div>
                    <div>
                    <img className="img" src={alc5} />
                    </div>
                </Carousel>
            </Collapse.Panel>
            <Collapse.Panel header="Algonquin Park" key="2">
                <Carousel autoplay>
                    <div>
                    <img className="img" src={alg1} />
                    </div>
                    <div>
                    <img className="img" src={alg2} />
                    </div>
                    <div>
                    <img className="img" src={alg3} />
                    </div>
                    <div>
                    <img className="img" src={alg4} />
                    </div>
                    <div>
                    <img className="img" src={alg5} />
                    </div>
                    <div>
                    <img className="img" src={alg6} />
                    </div>
                    <div>
                    <img className="img" src={alg7} />
                    </div>
                </Carousel>
            </Collapse.Panel>
            <Collapse.Panel header="East Canada" key="3">
                <Carousel autoplay>
                    <div>
                    <img className="img" src={EC1} />
                    </div>
                    <div>
                    <img className="img" src={EC2} />
                    </div>
                    <div>
                    <img className="img" src={EC3} />
                    </div>
                    <div>
                    <img className="img" src={EC4} />
                    </div>
                    <div>
                    <img className="img" src={EC5} />
                    </div>
                </Carousel>
            </Collapse.Panel>
            <Collapse.Panel header="Can I catch 2019-nCoV from my pet?" key="4">
              <p>
                <strong>No</strong>, at present there is no evidence that
                companion animals or pets such as cats and dogs have been
                infected or have spread 2019-nCoV.
              </p>
            </Collapse.Panel>
            <Collapse.Panel header="Who can catch this virus?" key="5">
              <p>
                People living or travelling in an area where the 2019-nCoV virus
                is circulating may be at risk of infection. At present,
                2019-nCoV is circulating in China where the vast majority of
                people infected have been reported. Those infected from other
                countries are among people who have recently traveled from China
                or who have been living or working closely with those
                travellers, such as family members, co-workers or medical
                professionals caring for a patient before they knew the patient
                was infected with 2019-nCoV.
              </p>
            </Collapse.Panel>
            <Collapse.Panel
              header="How long does the virus survive on surfaces?"
              key="6"
            >
              <p>
                It is still not known how long the 2019-nCoV virus survives on
                surfaces, although preliminary information suggests the virus
                may survive a few hours or more. Simple disinfectants can kill
                the virus making it no longer possible to infect people.
              </p>
            </Collapse.Panel>
          </Collapse>

        </QueueAnim> */}
      	</div>
    );
  }
}

export default photograph;
