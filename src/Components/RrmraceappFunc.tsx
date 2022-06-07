import React from 'react';
import { Paper, Typography } from '@mui/material';
import RDMRaceApp from '../Images/Phidippides.png';

export function RrmraceappFunc() {
	return <Paper elevation={1} style={{
		display: 'flex',
		width: "100%", height: "100%",
		backgroundColor: '#b6d4f2',
		color: "white", textShadow: "black 0.1em 0.1em 0.2em",
		justifyContent: 'center',
		alignItems: 'center'
	}}>
		<div>
			<Typography variant="h2">RDM Race App</Typography>
			<img src={RDMRaceApp} width={100} style={{ paddingLeft: "50px", paddingRight: "50px" }} />
			<Typography variant="h5">Languages:</Typography>
			<Typography variant="subtitle1">Typescript, JavaScript</Typography>
			<Typography variant="h5">Frameworks:</Typography>
			<Typography variant="subtitle1">React, Prisma, MUI</Typography>
			<Typography variant="body1">RDM Race app is a real time chat app<br /> developed for the Phidipidus race team at the RDM</Typography>
		</div>
	</Paper>;
}
