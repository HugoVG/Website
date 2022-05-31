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
import { FormControlLabel, FormGroup, Paper, Switch, Typography } from '@mui/material';
import { animated, SpringValue, useSpring } from 'react-spring';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Label } from '@mui/icons-material';
import { width } from '@mui/system';
import BiOsCoop from  './Images/Bi_Os_Coop.png';
import RDMRaceApp from './Images/Phidippides.png';
import Makkr from './Images/duck.png';



function App() {
	const parallax = useRef<IParallax>(null)
	const scroll = (to: number) => {
		if (parallax.current) {
			parallax.current.scrollTo(to)
		}
	};
	var from : number = 0;
	var to : number = 2;
	const [checked, setChecked] = React.useState(false);
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

	const CBToggle = 
		<FormGroup className='NavItem' style={{ float: "right", color: "#1b76d0" }}>
			<FormControlLabel control={<Switch checked={checked} defaultChecked onChange={handleChange} />} labelPlacement="start" label="Auto Scroll" />
		</FormGroup>;
	const GHFrames = <div style={{textAlign: "center", color: "white", textShadow: "black 0.1em 0.1em 0.2em", display: 'inline' }}>
		<Typography variant="h2">
			Proficiancy +
		</Typography>
		<div>
			<h3 >
				My Proficancy lies within the .Net ecosystem.<br/>I mostly use C# and have experience with ASP.NET Core,<br/> Entity Framework, WPF, and ASP.NET MVC,<br/> Winforms and ASP.NET Web API.
			</h3>
		</div>
		<div style={{display: "flex", flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" ,  height: "100%", width: "100%"}}>
			<div style={{width: "45%",minWidth: '400px', margin: "10px"}}>
				<Typography variant="h4" height='100px'>
					Recent most used languages:
				</Typography>
				<img width={'100%'}
					src="https://github-readme-stats.vercel.app/api/top-langs?username=hugovg&count_private=true&show_icons=true&locale=en&layout=compact&theme=discord_old_blurple"
					alt="hugovg" />
			</div>
			<div style={{width: "45%", minWidth: '400px', margin: "10px"}}>
				<Typography variant="h4"  height='100px'>
					Github statistics:
				</Typography>
				<img width={'100%'} src="https://github-readme-stats.vercel.app/api?username=hugovg&show_icons=true&locale=en&theme=discord_old_blurple" alt="hugovg" />
			</div>
		</div>
	</div>;
	return (
		<div className="App">
			<div className='Background' style={{height: "100vh", position: "absolute"}} />
			
			<Parallax ref={parallax} pages={5}>
				<ParallaxLayer sticky={{ start: from, end: 2 }} style={{zIndex:-1}} speed={10}>
					<img className='Birds' src={robin1} width={100} />
				</ParallaxLayer>
				<ParallaxLayer  style={{zIndex:-1}} sticky={{ start: 2, end: 4 }}>
					<img className='Birds' src={robin2} width={100} />
				</ParallaxLayer>
				<ParallaxLayer  style={{zIndex:-1}} sticky={{ start: 4, end: 5}}>
					<img className='Birds' src={robin3} />
				</ParallaxLayer>
				<ParallaxLayer sticky={{ start: 0, end: 5 }}
					style={{ display: 'flex', justifyContent: 'top', alignItems: 'top' }}>
						<div style={{width: "100%", height: "50px", backgroundColor: "#303030"}}> 
							<ul className='Navbar' >
								
								<li className='NavItem' >
									<Button className='NavButton' onClick={() => {scroll(0); setChecked(false);}}>About me</Button>
								</li>
								<li className='NavItem' >
									<Button className='NavButton'  onClick={() => {scroll(1); setChecked(false);}}>Proficiancy</Button>
								</li>
								<li className='NavItem' >
									<Button className='NavButton' onClick={() => {scroll(2); setChecked(false);}}>Projects</Button>
								</li>
								<li className='NavItem' style={{float: "right"}}>
									{CBToggle}
								</li>
							</ul>
						</div>
				</ParallaxLayer>

				{/* #region About me */}
				<ParallaxLayer offset={0} speed={0.1}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "black", background: bg }}>
					<div style={{justifyContent: 'center',textAlign: "center" , alignItems: 'center', color: "white", textShadow: "black 0.1em 0.1em 0.2em" }}  >
						<Typography variant="h1">HugoVG</Typography>
						<div className='Aboutme'>
							<Typography variant="h2">
								About Me:
							</Typography>
							<Typing/> <br/>							 
							<Typography variant='h6' style={{justifyContent: 'center', alignItems: 'center', textAlign: "center"}}>
								I am a software developer with a passion for creating small and performant applications<br/>
								I mainly develop in C# and .NET Core, but I am also familiar with JavaScript and TypeScript.<br/>
								I like Birds and gaming. 
							</Typography>
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
						width: '100vw',						
					}}>
					<div>
						{GHFrames}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={3} style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'}}>
					<div style={{width: "100%", height: "50%",display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'}}>
						<div style={{width: "25%", height: "25%",display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center' }}>
								<Typography variant="h2" style={{color: "white", textShadow: "black 0.1em 0.1em 0.2em"}}>
									Previous Projects
								</Typography>
								<div style={{minWidth: "300px", width: "40vw"}}>
									<Carousel showArrows={false} showThumbs={false} autoPlay={true} interval={4000} infiniteLoop={true}>
										<Paper elevation={1} 
											style={{ display: 'flex',
												width: "100%", height: "100%",
												backgroundColor: '#b6d4f2',
												color: "white", textShadow: "black 0.1em 0.1em 0.2em",
												justifyContent: 'center',
												alignItems: 'center'
											}}>
												<div>
													<Typography variant="h2">RDM Race App</Typography>
													<img src={RDMRaceApp} width={100} style={{paddingLeft: "50px", paddingRight: "50px"}} />
													<Typography variant="h5">Languages:</Typography>
													<Typography variant="subtitle1">Typescript, JavaScript</Typography>
													<Typography variant="h5">Frameworks:</Typography>
													<Typography variant="subtitle1">React, Prisma, MUI</Typography>
													<Typography variant="body1">RDM Race app is a real time chat app<br/> developed for the Phidipidus race team at the RDM</Typography>
												</div>
										</Paper>
										<Paper elevation={1} style={{width: "100%", height: "100%", display: 'flex',
											justifyContent: 'center',
											backgroundColor: '#f2acce',
											color: "white", textShadow: "black 0.1em 0.1em 0.2em",
											alignItems: 'center'}}>	
											<div>
												<Typography variant="h2">Bi-Os-Coop</Typography>
												<img src={BiOsCoop} width={100} style={{paddingLeft: "50px", paddingRight: "50px"}}  />
												<Typography variant="h5">Languages:</Typography>
												<Typography variant="subtitle1">C#</Typography>
												<Typography variant="body1">Bi-Os-Coop is a console app<br/> developed for project B</Typography>
											</div>
										</Paper>
										<Paper elevation={0} style={{width: "100%", height: "100%", display: 'flex',
											justifyContent: 'center',
											backgroundColor: '#e8f0a1',
											color: "white", textShadow: "black 0.1em 0.1em 0.2em",
											alignItems: 'center'}}>	
											<div style={{margin: '50px'}}>
												<Typography variant="h2">Makkr</Typography>
												<img src={Makkr} width={100} style={{paddingLeft: "50px", paddingRight: "50px"}}  />
												<Typography variant="h5">Languages:</Typography>
												<Typography variant="subtitle1">C#</Typography>
												<Typography variant="h5">Frameworks: </Typography>
												<Typography variant="subtitle1">ASP Web Api, Entity Framework, Xamarin.Forms</Typography>
												<Typography variant="body1">Makkr is a tinder like meeting app<br/> where elderly people can find like minded individuals to hang out with,<br/> made to solve loneliness</Typography>
											</div>
										</Paper>
									</Carousel>
								</div>
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


				<ParallaxLayer offset={4} speed={0.5} style={{
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