import React from "react";
import './Navbar.scss'
import { Row, Col, Menu, Button } from "antd";
import { Link } from "react-router-dom";
// import { CssHolder } from "./ItemCssHolder";

class Navbar extends React.Component {
//   state = {
//     current: "Main"
//   };

//   handleClick = e => {
//     console.log("click ", e);
//     this.setState({
//       current: e.key
//     });
//   };

  render() {
    return (
      	<div>
			<nav id="navbar" className="">
  				<div className="nav-wrapper">
    
   				{/* <div className="logo">
      			<a href="#home"><i className="fas fa-chess-knight"></i> Logo</a>
    			</div> */}

    
    			<ul id="menu">
					<li><a href="/">HOME</a></li>
					<li><a href="/blog">BLOG</a></li>
					<li><a href="/photograph">PHOTOGRAPH</a></li>
					<li><a href="/project">PROJECT</a></li>
					<li><a href="/about">ABOUT</a></li>
				</ul>
				</div>
			</nav>



			<div className="menuIcon">
			<span className="icon icon-bars"></span>
			<span className="icon icon-bars overlay"></span>
			</div>


			<div className="overlay-menu">
			<ul id="menu">
				<li><a href="#home">Home</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
				</ul>
			</div>




		
		{/* <div classNameName = "nvbar">
		<div>
			<Button type="link" to="/">Home</Button>

			<Button type="link" to="/Project">Project</Button>

			<Button type="link" to="/photograph">Photograph</Button>

			<Button type="link" to="/About">About Me</Button>

		</div>
		</div> */}
		{/* <div>
			<Menu className = 'nvbar' mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]} style={{ height : 70}}>
				<div className = "buttonblock">
					<Menu.Item key="home" className = 'home'>
						<CssHolder>
						<Link className = 'text1' to="/">
						<Icon type="home" />
						HOME
						</Link>
						</CssHolder>
					</Menu.Item>
					<Menu.Item key="project" className = 'project' >
						<Link className = 'text1' to="/Project">
						<Icon type="global" />
						PROJECT
						</Link>
					</Menu.Item>
					<Menu.Item key="photograph" className = 'photograph'>
						<Link className = 'text1' to="/photograph">
						<Icon type="file-text" />
						PHOTOGRAPH
						</Link>
					</Menu.Item>
					<Menu.Item key="blog" className = 'blog'>
						<Link className = 'text1' to="/photograph">
						<Icon type="file-text" />
						BLOG
						</Link>
					</Menu.Item>
					<Menu.Item key="about" className = 'about'>
						<Link className = 'text1' to="/About">
						<Icon type="read" />
						ABOUT
						</Link>
					</Menu.Item>
				</div>
			</Menu>
		</div> */}
      </div>
    );
  }
}

export default Navbar;
