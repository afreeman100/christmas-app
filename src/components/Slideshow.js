import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
import { Carousel } from 'react-responsive-carousel';

export const Slideshow = (props) => {
		const images = [
			{ url: img001, css: { maxWidth: '450px', maxHeight: '600px' } },
			{ url: img002, css: { maxWidth: '450px', maxHeight: '600px' } },
			{ url: img003, css: { maxWidth: '800px', maxHeight: '600px' } },
			{ url: img004, css: { maxWidth: '800px', maxHeight: '600px' } },
			{ url: img005, css: { maxWidth: '800px', maxHeight: '600px' } },
			{ url: img006, css: { maxWidth: '800px', maxHeight: '600px' } },
			{ url: img007, css: { maxWidth: '800px', maxHeight: '600px' } },
			{ url: img008, css: { maxWidth: '450px', maxHeight: '600px' } },
			{ url: img009, css: { maxWidth: '450px', maxHeight: '600px' } },
			{ url: img010, css: { maxWidth: '450px', maxHeight: '600px' } },
			{ url: img011, css: { maxWidth: '450px', maxHeight: '600px' } },
		];

		return (
			<div>
				<Carousel
					autoPlay={props.autoPlay}
					infiniteLoop
					emulateTouch
					useKeyboardArrows
					showStatus={false}
					thumbWidth={50}
				>
					{images.map((image, index) => {
						return (
							<img key={index} src={image.url} alt={''} style={{ ...image.css }}/>
						);
					})}
				</Carousel>
			</div>
		);
	}
;