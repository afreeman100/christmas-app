import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img001 from '../images/001.jpg';
import img002 from '../images/002.jpg';
import img003 from '../images/003.jpg';
import img004 from '../images/004.jpg';
import img005 from '../images/005.jpg';
import img006 from '../images/006.jpg';
import img007 from '../images/007.jpg';
import img008 from '../images/008.jpg';
import img009 from '../images/009.jpg';
import img010 from '../images/010.jpg';
import img011 from '../images/011.jpg';

export const Slideshow = () => {
	const images = [
		{ url: img001, css: { width: '450px', height: '600px' } },
		{ url: img002, css: { width: '450px', height: '600px' } },
		{ url: img003, css: { width: '800px', height: '600px' } },
		{ url: img004, css: { width: '800px', height: '600px' } },
		{ url: img005, css: { width: '800px', height: '600px' } },
		{ url: img006, css: { width: '800px', height: '600px' } },
		{ url: img007, css: { width: '800px', height: '600px' } },
		{ url: img008, css: { width: '450px', height: '600px' } },
		{ url: img009, css: { width: '450px', height: '600px' } },
		{ url: img010, css: { width: '450px', height: '600px' } },
		{ url: img011, css: { width: '450px', height: '600px' } },
	];

	return (
		<div className="slide-container">
			<Slide>
				{images.map((image, index) => {
					return (
						<div key={index} className="each-slide-effect">
							<div style={{
								backgroundImage: `url(${image.url})`,
								// backgroundClip: 'content-box',
								// backgroundSize: 'cover',
								...image.css,
							}}>
								Hello World
							</div>
						</div>
					);
				})}
			</Slide>
		</div>
	);
};