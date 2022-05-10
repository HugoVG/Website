import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import robin1 from './Images/robin.png';
import robin2 from './Images/robin-1.png';
import robin3 from './Images/robin-2.png';
import bg from './Images/Background.png';
import './App.css';
import Button from '@mui/material/Button';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import zIndex from '@mui/material/styles/zIndex';
import Typing from './Typing';
import { FormControlLabel, FormGroup, Paper, Switch } from '@mui/material';
import { animated, SpringValue, useSpring } from 'react-spring';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



function App() {
	const parallax = useRef<IParallax>(null)
	const scroll = (to: number) => {
		if (parallax.current) {
			parallax.current.scrollTo(to)
		}
	};
	var from : number = 0;
	var to : number = 2;
	const [checked, setChecked] = React.useState(true);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	//hook clock
	useEffect(() => {
		var num : number = -1;
		const interval = setInterval(() => {
			if(checked === true){
				if(num < 5) {
					num++;
				}
				else{
					num = 0;
				}
				scroll(num);
			}			
		}, 10000);
		return () => clearInterval(interval);
	}, [checked]);

	const checkedRef = useRef();
	
	const [styles, api] = useSpring(() => ({
		delay: 500,
		config: { bounce: 0.05, velocity: 0.001, friction: 5, tension: 50, mass: 25, easing: 'easeOutCubic' },
		loop: {  reset: true},
		from: { x: 20, y: -900, opacity: 0.25, resizeTo: 1, rotate: 0, scale: 1, color: '#fff' },
		to: { x: 50, y:900, opacity: 1, resizeTo: 5, rotate: 270, scale: 1, color: '#fff' },
		}
	));

	const CBToggle = <FormGroup className='NavItem' style={{ float: "right", color: "#1b76d0" }}>
		<FormControlLabel control={<Switch checked={checked} defaultChecked onChange={handleChange} />} labelPlacement="start" label="Auto Scroll" />
	</FormGroup>;
	const Images = <div style={{ display: "inline" }}>
		<img height={"200vh"}
			src="https://github-readme-stats.vercel.app/api/top-langs?username=hugovg&count_private=true&show_icons=true&locale=en&layout=compact&theme=discord_old_blurple"
			alt="hugovg" />
		<img height={"200vh"} src="https://github-readme-stats.vercel.app/api?username=hugovg&show_icons=true&locale=en&theme=discord_old_blurple" alt="hugovg" />
	</div>;
	return (
		<div className="App">
			<div className='Background' style={{height: "100vh", position: "absolute"}} />
			
			<Parallax ref={parallax} pages={5}>
				<ParallaxLayer sticky={{ start: from, end: 1.75 }} style={{zIndex:-1}} speed={10}>
					<img className='Birds' src={robin1} width={100} />
				</ParallaxLayer>
				<ParallaxLayer  style={{zIndex:-1}} sticky={{ start: 1.75, end: 2.75 }}>
					<img className='Birds' src={robin2} width={100} />
				</ParallaxLayer>
				<ParallaxLayer  style={{zIndex:-1}} sticky={{ start: 2.75, end: 4}}>
					<img className='Birds' src={robin3} />
				</ParallaxLayer>
				<ParallaxLayer sticky={{ start: 0, end: 5 }}
					style={{ display: 'flex', justifyContent: 'top', alignItems: 'top' }}>
						<div style={{width: "100%", height: "50px", backgroundColor: "#303030"}}> 
							<ul className='Navbar' >
								<li className='NavItem' >
									<Button className='NavButton' onClick={() => {scroll(0); setChecked(false);}}>Collapse</Button>
								</li>
								<li className='NavItem' >
									<Button className='NavButton' onClick={() => {scroll(0); setChecked(false);}}>About me</Button>
								</li>
								<li className='NavItem' >
									<Button className='NavButton'  onClick={() => {scroll(1); setChecked(false);}}>Languages</Button>
								</li>
								<li className='NavItem' style={{float: "right"}}>
									{CBToggle}
								</li>
							</ul>
						</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.1}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "black", background: bg }}>
					<div style={{justifyContent: 'center',textAlign: "center" , alignItems: 'center', color: "white", textShadow: "black 0.1em 0.1em 0.2em" }}  >
						<h1>HugoVG</h1>
						<div className='Aboutme'>
							<h2>
								About Me
							</h2>
							<Typing/> <br/>							 
							<label style={{justifyContent: 'center', alignItems: 'center', textAlign: "center"}}>
								I am a software developer with a passion for creating small and performant applications<br/>
								I mainly develop in C# and .NET Core, but I am also familiar with JavaScript and TypeScript.<br/>
								I like Birds and gaming. 
							</label>
						</div>
						<animated.div
							className="Chonk"
							style={{
								position: "absolute",
								width: 40,
								height: 40,
								zIndex: 19,
								backgroundColor: '#b6d4f2',
								borderRadius: 10,
								...styles,
							}}
						/>
					</div>

				</ParallaxLayer>


				<ParallaxLayer offset={1} speed={0.5} style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
						backgroundColor: '#ff00ff',
					}}>
					<div>
						<h1>Proficiancy</h1>
						<h2>Recent most used languages</h2>
						{Images}

					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={3} style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'}}>
					<div style={{width: "100%", height: "100%",display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'}}>
						<div style={{width: "25%", height: "100%",display: 'flex',
							justifyContent: 'center',
							alignItems: 'center' }}>
							<Carousel showArrows={true} autoPlay={true} interval={7000} infiniteLoop={true}>
								<Paper elevation={0} style={{width: "100%", height: "100%", display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'}}>
									<img src={robin1} width={100} />
								</Paper>
								<Paper elevation={0} style={{width: "100%", height: "100%", display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'}}>	
									<img src={robin2} width={100} />
								</Paper>
								<Paper elevation={0} style={{width: "100%", height: "100%", display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'}}>	
									<img src={robin2} width={100} />
								</Paper>
								<Paper elevation={0} style={{width: "100%", height: "100%", display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'}}>	
									<img src={robin2} width={100} />
								</Paper>
								<Paper elevation={0} style={{width: "100%", height: "100%", display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'}}>	
									<img src={robin2} width={100} />
								</Paper>
							</Carousel>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={3} speed={1} style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<div style={{backgroundColor: "purple", width: "100%", height: "100%",display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'}}>
						<p>Scroll down\?</p>
					</div>
				</ParallaxLayer>


				<ParallaxLayer offset={3} speed={0.5} style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'red',
						backgroundColor: '#ff00ff',
					}}>
					<p>Scroll up</p>
				</ParallaxLayer>
				
			</Parallax>
		</div>
	);
	}

	export default App;