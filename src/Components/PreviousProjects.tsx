import React from 'react';
import { Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { makkrFunc } from './makkrFunc';
import { BiOsCoopFunc } from './BiOsCoopFunc';
import { RrmraceappFunc } from './RrmraceappFunc';

export const PreviousProjects = <div style={{
	width: "100%", height: "100%", display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}}>
	<div style={{
		width: "25%", height: "100%", display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}}>
		<Typography variant="h2" style={{ color: "white", textShadow: "black 0.1em 0.1em 0.2em" }}>
			Previous Projects
		</Typography>
		<div style={{ minWidth: "300px", width: "40vw" }}>
			<Carousel showArrows={false} showThumbs={false} autoPlay={true} interval={4000} infiniteLoop={true}>
				{RrmraceappFunc()}
				{BiOsCoopFunc()}
				{makkrFunc()}
			</Carousel>
		</div>
	</div>
</div>;
