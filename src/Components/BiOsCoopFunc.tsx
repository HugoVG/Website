import React from 'react';
import { Paper, Typography } from '@mui/material';
import BiOsCoop from '../Images/Bi_Os_Coop.png';

export function BiOsCoopFunc() {
	return (
		<Paper elevation={1} style={{
			width: "100%", height: "100%", display: 'flex',
			justifyContent: 'center',
			backgroundColor: '#f2acce',
			color: "white", textShadow: "black 0.1em 0.1em 0.2em",
			alignItems: 'center'
		}}>
			<div>
				<Typography variant="h2">Bi-Os-Coop</Typography>
				<img src={BiOsCoop} width={100} style={{ paddingLeft: "50px", paddingRight: "50px" }} />
				<Typography variant="h5">Languages:</Typography>
				<Typography variant="subtitle1">C#</Typography>
				<Typography variant="body1">Bi-Os-Coop is a console app<br /> developed for project B</Typography>
			</div>
		</Paper>
	);
}
