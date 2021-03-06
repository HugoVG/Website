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
import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { useSpring } from 'react-spring';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Label } from '@mui/icons-material';
import { width } from '@mui/system';
import { PreviousProjects } from './Components/PreviousProjects';
import { HugoMainPage } from './Components/HugoMainPage';
import { listshield } from './listshield';



function App() {
	const { height, width } = useWindowDimensions();
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
			<h3>
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
								{newFunction(scroll, setChecked)}
								<li className='NavItem' >
									<Button className='NavButton'  onClick={() => {scroll(1); setChecked(false);}}>Proficiancy</Button>
								</li>
								<li className='NavItem' >
									<Button className='NavButton' onClick={() => {scroll(2); setChecked(false);}}>Projects</Button>
								</li>
								<li className='NavItem' >
									<Button className='NavButton' onClick={() => {scroll(3); setChecked(false);}}>Projects</Button>
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
					{HugoMainPage(styles)}
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
					{PreviousProjects}
				</ParallaxLayer>
				<ParallaxLayer offset={3} speed={1} style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<div style={{width: "100%", height: "100%",display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'}}>
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'}}>
							<div style={{
								width: "50%", height: "100%", display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center'}}>
								<Typography variant="h4" 
									style={{textAlign: "center", color: "white", textShadow: "black 0.1em 0.1em 0.2em", display: 'inline', width: "50%" }}>
									Want to hire me and have something i'm up for?</Typography>
							</div>

							<div style={{
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'wrap',
								justifyContent: 'center',
								alignItems: 'center'}}>
								{listshield()}
							</div>
						</div>
					</div>
				</ParallaxLayer>


				<ParallaxLayer offset={4} speed={0.5} style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'red',
					}}>
					<p>Scroll up</p>
				</ParallaxLayer>
				
			</Parallax>
		</div>
	);
}
function newFunction(scroll: (to: number) => void, setChecked: React.Dispatch<React.SetStateAction<boolean>>) {
	return <li className='NavItem'>
		<Button className='NavButton' onClick={() => { scroll(0); setChecked(false); } }>About me</Button>
	</li>;
}

export function ShieldMaker(url: string, alt: string, height2: number = 60) {
	const { height, width } = useWindowDimensions();

	return(<img src={url} alt={alt} height={(width < 500 ? 35 : width / 25 )} />);
}
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
export default App;



