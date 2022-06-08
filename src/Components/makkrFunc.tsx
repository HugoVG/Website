import React from 'react';
import { Paper, Typography } from '@mui/material';
import Makkr from '../Images/duck.png';

export function makkrFunc() {
	return <Paper elevation={0} style={{
		width: "100%", height: "100%", display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#e8f0a1',
		color: "white", textShadow: "black 0.1em 0.1em 0.2em",
		alignItems: 'center'
	}}>
		<div style={{ margin: '50px' }}>
			<Typography variant="h2">Makkr</Typography>
			<img src={Makkr} width={100} alt="makkr" style={{ paddingLeft: "50px", paddingRight: "50px" }} />
			<Typography variant="h5">Languages:</Typography>
			<Typography variant="subtitle1">C#</Typography>
			<Typography variant="h5">Frameworks: </Typography>
			<Typography variant="subtitle1">ASP Web Api, Entity Framework, Xamarin.Forms</Typography>
			<Typography variant="body1">Makkr is a tinder like meeting app<br /> where elderly people can find like minded individuals to hang out with,<br /> made to solve loneliness</Typography>
		</div>
	</Paper>;
}
