import React from 'react';
import Typing from '../Typing';
import { Typography } from '@mui/material';
import { animated, SpringValue } from 'react-spring';

export function HugoMainPage(styles: { x: SpringValue<number>; y: SpringValue<number>; opacity: SpringValue<number>; resizeTo: SpringValue<number>; rotate: SpringValue<number>; scale: SpringValue<number>; color: SpringValue<string>; }) {
	return <div style={{ justifyContent: 'center', textAlign: "center", alignItems: 'center', color: "white", textShadow: "black 0.1em 0.1em 0.2em" }}>
		<Typography variant="h1">HugoVG</Typography>
		<div className='Aboutme'>
			<Typography variant="h2">
				About Me:
			</Typography>
			<Typing /> <br />
			<Typography variant='h6' style={{ justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
				I am a software developer with a passion for creating small and performant applications<br />
				I mainly develop in C# and .NET Core, but I am also familiar with JavaScript and TypeScript.<br />
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
			}} />
	</div>;
}
